import React from "react";
import { BeatUploadForm } from "@/components/controlPanel/BeatUploadForm";
import { BeatsTable } from "@/components/controlPanel/BeatsTable";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";

async function getBeats() {
  try {
    const response = await fetch("http://localhost:8000/relese/beats", {
      method: "GET",
      cache: "no-store",
    });
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.log(error);
  }
}
const page = async () => {
  const data = await getBeats();

  return (
    <>
      <div className="min-h-screen flex flex-col bg-background relative">
        <div className="container px-4 py-12 mx-auto mt-5">
          <h1 className="text-4xl font-bold text-center mb-10">
            Admin Control Panel
          </h1>
          <div className="flex justify-center items-center">
            <BeatUploadForm />
          </div>
        </div>
        <div className="container px-4 py-12 mx-auto mt-5">
          <BeatsTable beats={data.beats} />
        </div>
      </div>
    </>
  );
};

export default page;
