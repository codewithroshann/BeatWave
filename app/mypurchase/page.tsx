"use client";
import { useState, useEffect } from "react";
import {
  Download,
  Calendar,
  CreditCard,
  Music,
  Search,
  ExternalLink,
  IndianRupee,
} from "lucide-react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { setAlert, clearAlert } from "@/redux/slices/AlertReducer";
import { Button } from "@/components/ui/button";

const page = () => {
  const [purchaseInfo, setPurchaseInfo] = useState([]);
  const [purchaseBeats, setPurchaseBeats] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [licenseFilter, setLicenseFilter] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);
  const [beatId, setBeatId] = useState("");
  const AvailableDownloads = purchaseInfo.filter(
    (beats: any) => beats.status === "PAID"
  );
  const dispatch = useDispatch();
  const router = useRouter();
  //fetching data
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/purchases`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (!response.ok) {
          const data = await response.json();
          dispatch(setAlert({ message: data.message, type: data.type })); // Dispatch alert with error message
          router.push(data.redirectUrl); // Redirect if needed
        }
        const data = await response.json();
        // Assuming the API returns an array of purchases
        setPurchaseInfo(data.purchases);
        setPurchaseBeats(data.beats);
      } catch (error) {
        console.error("Error fetching purchases:", error);
      }
    };
    getData();
  }, []);

  const handleDownload = async (id: any) => {
    setIsDownloading(true);
    setBeatId(id);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/download/${id}`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (!res.ok) {
        const errText = await res.text(); // Read error message
        console.error("Download failed:", errText);
        dispatch(setAlert({ message: "Download failed!", type: "error" }));
        setIsDownloading(false);
        return;
      }

      // Download as a blob
      const blob = await res.blob();
      // Create temporary download link
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;

      // Set the filename (you can improve this using headers from backend)
      a.download = `BeatWave.zip`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
      dispatch(setAlert({ message: "Download started!", type: "success" }));
      setIsDownloading(false);
      setTimeout(() => {
        dispatch(clearAlert());
      }, 2500);
    } catch (error) {
      console.error("Download error:", error);
      dispatch(setAlert({ message: "Something went wrong!", type: "error" }));
    }
  };

  // Filter and sort purchases
  const filteredPurchases = purchaseBeats.filter((purchase: any) => {
    if (searchTerm === "" && licenseFilter === "" && statusFilter === "") {
      return true;
    }
    //filter using search bar
    const matchesSearch =
      purchase.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      purchase.producer.toLowerCase().includes(searchTerm.toLowerCase());

    //filter using status
    let matchesStatus = []; // Declare matchesStatus outside the block
    let isInStatus = false; // Declare isInStatus outside the block
    if (statusFilter !== "") {
      const findStatusBeats = purchaseInfo.find(
        (p: any) => p.status === statusFilter
      ) as any;
      if (!findStatusBeats && statusFilter !== "") {
        return false; // If no beats found for the status, skip filtering
      }
      matchesStatus = purchaseBeats.filter((beat: any) =>
        findStatusBeats.beats.map((b: any) => b).includes(beat._id)
      );
      isInStatus = matchesStatus.some((beat: any) => beat._id === purchase._id);
    }

    //filter using license
    let matchesLicense = [] as any; // Declare matchesStatus outside the block
    let isInLicense = false; // Declare isInStatus outside the block
    if (licenseFilter !== "") {
      matchesLicense = purchaseBeats.filter(
        (beat: any) => beat.licenseType === licenseFilter
      );
      console.log(matchesLicense);
      isInLicense = matchesLicense.some(
        (beat: any) => beat._id === purchase._id
      );
      console.log(matchesLicense, isInLicense, licenseFilter, "License");
    }
    return (
      matchesSearch &&
      (statusFilter === "" || isInStatus) &&
      (licenseFilter === "" || isInLicense)
    );
    // Return true if all conditions are met
  });

  const getLicenseColor = (license: any) => {
    switch (license) {
      case "Basic":
        return "text-blue-400 bg-blue-400/10";
      case "premium":
        return "text-purple-400 bg-purple-400/10";
      case "Exclusive":
        return "text-orange-400 bg-orange-400/10";
      default:
        return "text-gray-400 bg-gray-400/10";
    }
  };

  const getPaymentMethodIcon = (method: any) => {
    switch (method) {
      case "card":
        return <CreditCard className="h-4 w-4" />;
      case "paypal":
        return (
          <div className="h-4 w-4 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
            P
          </div>
        );
      case "crypto":
        return (
          <div className="h-4 w-4 bg-orange-500 rounded text-white text-xs flex items-center justify-center font-bold">
            ₿
          </div>
        );
      default:
        return <CreditCard className="h-4 w-4" />;
    }
  };
  const getStatusColor = (statuses: any[]) => {
    const status = statuses[0];
    switch (status) {
      case "PAID":
        return "text-green-400 bg-green-400/10";
      case "PENDING":
        return "text-yellow-400 bg-yellow-400/10";
      case "FAILED":
        return "text-red-400 bg-red-400/10";
      default:
        return "text-gray-400 bg-gray-400/10";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const purchaseDates = (beatId: string): string[] => {
    return purchaseInfo
      .filter((purchase: any) => purchase.beats.includes(beatId))
      .map((purchase: any) => purchase.purchaseDate);
  };

  const getOrderId = (beatId: string): string[] => {
    return purchaseInfo
      .filter((purchase: any) => purchase.beats.includes(beatId))
      .map((purchase: any) => purchase.orderId);
  };
  const getPurchaseStatus = (beatId: string): string[] => {
    return purchaseInfo
      .filter((purchase: any) => purchase.beats.includes(beatId))
      .map((purchase: any) => purchase.status);
  };

  const totalSpent = purchaseInfo.reduce(
    (total: number, purchase: any) =>
      total + parseFloat(purchase.purchaseAmmount),
    0
  );

  return (
    <div className="w-full mx-auto p-6 bg-zinc-950 text-white min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Purchase History</h1>
        <p className="text-gray-400">Track your beat purchases and downloads</p>
      </div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-zinc-900 rounded-lg p-6">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 bg-green-500/10 rounded-lg flex items-center justify-center">
              <Music className="h-6 w-6 text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">{purchaseBeats.length}</p>
              <p className="text-gray-400 text-sm">Beats Purchased</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-lg p-6">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <CreditCard className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <p className="text-2xl flex items-center font-bold">
                <IndianRupee className="text-sm font-bold" />
                {totalSpent.toFixed(2)}
              </p>
              <p className="text-gray-400 text-sm">Total Spent</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-lg p-6">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
              <Download className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">
                {AvailableDownloads.reduce(
                  (acc, beat: any) => acc + beat.beats.length,
                  0
                )}
              </p>
              <p className="text-gray-400 text-sm">Available Downloads</p>
            </div>
          </div>
        </div>
      </div>
      {/* Filters and Search */}
      <div className="bg-zinc-900 rounded-lg p-4 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search beats, artists..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
          >
            <option value="">All Status</option>
            <option value="PAID">Paid</option>
            <option value="PENDING">Pending</option>
            <option value="FAILED">Failed</option>
          </select>

          {/* License Filter */}
          <select
            value={licenseFilter}
            onChange={(e) => setLicenseFilter(e.target.value as any)}
            className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
          >
            <option value="">All Licenses</option>
            <option value="Basic">Basic</option>
            <option value="Non-Exclusive">Premium</option>
            <option value="Exclusive">Exclusive</option>
          </select>
        </div>
      </div>

      {/* Purchase List */}
      <div className="space-y-4">
        {filteredPurchases.length > 0 ? (
          filteredPurchases.reverse().map((purchase: any) => (
            <div
              key={purchase._id}
              className="bg-zinc-900 rounded-lg p-6 hover:bg-zinc-800 transition-colors"
            >
              <div className="flex items-start gap-4">
                {/* Beat Cover */}
                <div className="relative h-32 w-32 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={purchase.thumbnail || "/placeholder.svg"}
                    alt={purchase.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Purchase Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap gap-3 items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-lg truncate">
                        {purchase.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        by {purchase.producer}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold flex items-center text-lg">
                        <IndianRupee className="h-5 w-5 font-bold"/>{purchase.price.toFixed(2)}
                      </p>
                      {/* <div className="flex items-center gap-2 mt-1">
                        {getPaymentMethodIcon(purchase.paymentMethod)}....3261
                        {purchase.lastFourDigits && (
                          <span className="text-xs text-gray-400">
                            •••• {purchase.lastFourDigits}
                          </span>
                        )}
                      </div> */}
                    </div>
                  </div>

                  <div className="flex items-center flex-wrap gap-4 mb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-400">
                        {purchaseDates(purchase._id)
                          .map((date) => formatDate(date))
                          .join(", ")}
                      </span>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        getPurchaseStatus(purchase._id)
                      )}`}
                    >
                      {getPurchaseStatus(purchase._id)}{" "}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-center text-xs font-medium ${getLicenseColor(
                        purchase.licenseType
                      )}`}
                    >
                      {purchase.licenseType
                        ? purchase.licenseType.charAt(0).toUpperCase() +
                          purchase.licenseType.slice(1)
                        : ""}{" "}
                      License
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-3 items-center justify-between">
                    <div className="text-xs text-gray-400">
                      Order ID: {getOrderId(purchase._id)}
                    </div>
                    <div className="flex items-center flex-wrap gap-3">
                      {getPurchaseStatus(purchase._id).includes("PAID") ? (
                        <Button
                          onClick={() => {
                            handleDownload(purchase._id);
                          }}
                          disabled={isDownloading && beatId === purchase._id}
                          size={"sm"}
                          className={`flex w-full sm:w-[150px]   items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors`}
                        >
                          <Download className="h-4 w-4" />
                          {isDownloading && beatId === purchase._id
                            ? "Downloading"
                            : "Download"}
                        </Button>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <Music className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No purchases found</h3>
            <p className="text-gray-400 mb-4">
              {searchTerm || statusFilter !== "all" || licenseFilter !== "all"
                ? "Try adjusting your filters or search terms"
                : "You haven't made any purchases yet"}
            </p>
            {(searchTerm ||
              statusFilter !== "all" ||
              licenseFilter !== "all") && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setStatusFilter("");
                  setLicenseFilter("");
                }}
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
