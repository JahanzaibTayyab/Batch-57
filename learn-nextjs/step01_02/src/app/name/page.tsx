"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function NamePage() {
  console.log("This is Client2345");
  const router = useRouter();

  const handleBackClick = () => {
    console.log("I am back button click");
    router.back();
  };

  const handleLoginClick = () => {
    // api call
    if (Math.random() > 0.3) {
      router.push("/dashboard");
    } else {
      alert("Login Failed");
    }
  };

  return (
    <div>
      <button
        className="bg-blue-500 rounded-md p-3 mb-3"
        onClick={handleBackClick}
      >
        back
      </button>
      <div>
        <Link href="/dashboard">Dashboard</Link>
      </div>

      <div>Login</div>
      <input placeholder="Email"></input>
      <input placeholder="Password"></input>
      <button
        className="bg-green-500 rounded-md p-3 mb-3"
        onClick={handleLoginClick}
      >
        Login
      </button>
    </div>
  );
}

export default NamePage;
