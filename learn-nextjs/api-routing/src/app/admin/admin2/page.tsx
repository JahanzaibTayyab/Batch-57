"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

function Admin2() {
  const user = useSession();
  console.log(user);
  return (
    <div>
      Admin/Admin2
      <form>
        <Button>Logout</Button>
      </form>
      Admin/Admin2 Role User
      <div>
        <pre>{JSON.stringify(user.data, null, 2)}</pre>
      </div>
    </div>
  );
}

export default Admin2;
