import { SignIn } from "@clerk/nextjs";
import React from "react";

function SingInPage() {
  return (
    <main className="auth-page">
      <SignIn />
    </main>
  );
}

export default SingInPage;
