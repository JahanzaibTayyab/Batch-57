import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";

async function AdminRoute() {
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
      Admin Role User
      <div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
      ;
    </div>
  );
}

export default AdminRoute;
