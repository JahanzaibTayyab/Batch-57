import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";

async function SuperAdmin() {
  const user = await auth();
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button>Logout</Button>
      </form>
      Dashboard Role User
      <div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
      <img src={user?.user?.image}></img>;
    </div>
  );
}

export default SuperAdmin;
