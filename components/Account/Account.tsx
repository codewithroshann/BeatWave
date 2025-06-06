"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { setAlert, clearAlert } from "@/redux/slices/AlertReducer";

const Account = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state: any) => state.auth.user);
  let name: string | null = null;
  let phone: number | null = null;
  let gender: string | null = null;

  if (userDetails) {
    name = userDetails.fullName;
    gender = userDetails.gender;
    phone = userDetails.phone;
  }

  const [isOpen, setIsOpen] = useState(false);
  const [nameState, setName] = useState(name);
  const [phoneState, setPhone] = useState(phone);
  const [genderState, setGender] = useState(gender);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  if (!userDetails)
    return (
      <h1 className="text-4xl text-center text-white/30 mt-16 font-bold ">
        No User Found
      </h1>
    );
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL+"/update-profile", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameState,
          phone: phoneState,
          gender: genderState,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        if (data.message) {
          dispatch(setAlert({ message: data.message, type: data.type }));
          setName(data.user.fullName);
          setPhone(data.user.phone);
          setGender(data.user.gender);
        }
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
      if (!response.ok) {
        const errorMsg = await response.json();
        dispatch(setAlert({ message: errorMsg.message, type: errorMsg.type }));
      }

      setTimeout(() => {
        dispatch(clearAlert());
      }, 2500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="max-w-xl mx-auto mt-8 ">
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="mb-5 ">
            <label
              htmlFor="website-admin"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              UserId
            </label>
            <div className="flex h-[50px]">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-zinc-800 dark:text-white dark:border-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
                  />
                </svg>
              </span>
              <input
                type="text"
                id="website-admin"
                defaultValue={userDetails.id}
                className="rounded-none rounded-e-lg bg-gray-50 border cursor-not-allowed dark:focus:outline-none border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-zinc-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Bonnie Green"
                disabled
              />
            </div>
          </div>

          <div className="mb-5 ">
            <label
              htmlFor="website-admin"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <div className="flex h-[50px]">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-zinc-800 dark:text-white  dark:border-gray-600">
                <svg
                  className="w-4 h-4 dark:text-white text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </span>
              <input
                type="text"
                id="website-admin"
                defaultValue={userDetails.fullName}
                className="rounded-none rounded-e-lg bg-gray-50 border cursor-not-allowed dark:focus:outline-none border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-zinc-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Bonnie Green"
                disabled
              />
            </div>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="email-address-icon"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email Account
          </label>
          <div className="flex h-[50px]">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-zinc-800 dark:text-white  dark:border-gray-600">
              <svg
                className="w-4 h-4 dark:text-white text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </span>
            <input
              type="text"
              id="email-address-icon"
              defaultValue={userDetails.email}
              className="rounded-none rounded-e-lg bg-gray-50 border cursor-not-allowed dark:focus:outline-none border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-zinc-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              disabled
            />
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="phone-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone Number
          </label>
          <div className="flex h-[50px]">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-zinc-800 dark:text-white  dark:border-gray-600">
              <svg
                className="w-4 h-4 dark:text-white text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 19 18"
              >
                <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
              </svg>
            </span>
            <input
              type="number"
              id="phone-input"
              defaultValue={userDetails.phone}
              aria-describedby="helper-text-explanation"
              className="rounded-none rounded-e-lg bg-gray-50 border cursor-not-allowed dark:focus:outline-none border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-zinc-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="123-456-7890"
              disabled
            />
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="phone-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Gender
          </label>
          <div className="flex h-[50px]">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-zinc-800 dark:text-white  dark:border-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="24"
                height="24"
                strokeWidth="2"
              >
                <path d="M10 14m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"></path>
                <path d="M19 5l-5.4 5.4"></path>
                <path d="M19 5h-5"></path>
                <path d="M19 5v5"></path>
              </svg>
            </span>
            <input
              type="text"
              id="gender"
              defaultValue={userDetails.gender}
              aria-describedby="helper-text-explanation"
              className="rounded-none rounded-e-lg bg-gray-50 border cursor-not-allowed dark:focus:outline-none border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-zinc-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Gender"
              disabled
            />
          </div>
        </div>

        <Button
          onClick={openModal}
          className="block w-full bg-white hover:bg-white/80 duration-100  text-black"
          type="button"
        >
          Edit Profile
        </Button>

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
            <div className="relative  p-4 w-full max-w-md max-h-full">
              {/* <!-- Modal content --> */}
              <div className="relative bg-white rounded-lg shadow-sm dark:bg-zinc-800 border border-gray-50/30">
                {/* <!-- Modal header --> */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Edit Profile
                  </h3>
                  <button
                    onClick={closeModal}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {/* <!-- Modal body --> */}
                <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                  <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        UserId
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        defaultValue={userDetails.id}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg dark:text-gray-400 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-zinc-800 dark:border-gray-500 dark:placeholder-gray-400 cursor-not-allowed dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Name"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        defaultValue={nameState ?? ""}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-zinc-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Name"
                        required
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        defaultValue={userDetails.email}
                        className="bg-gray-50 cursor-not-allowed  border border-gray-300 dark:text-gray-400 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-zinc-800 dark:border-gray-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="email"
                        disabled
                      />
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="number"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="number"
                        id="number"
                        defaultValue={phoneState || ""}
                        className="bg-gray-50 border border-gray-300 dark:text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-zinc-800 dark:border-gray-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="123-456-7890"
                        required
                        minLength={10}
                        onChange={(e) => {
                          setPhone(parseInt(e.target.value));
                        }}
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="category"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Gender
                      </label>
                      <select
                        id="category"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-zinc-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option defaultValue={genderState || ""}>
                          {gender}
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 sm:gap-6">
                    <Button
                      onClick={closeModal}
                      className="text-black inline-flex items-center bg-white hover:bg-white/80 duration-100 mt-4"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="text-white inline-flex items-center bg-primary hover:bg-primary/80 duration-100 mt-4"
                    >
                      Save
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Account;
