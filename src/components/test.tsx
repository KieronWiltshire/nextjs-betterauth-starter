"use client";

import { authClient } from "@/lib/auth";
import { Button } from "./ui/button";
import { useEffect } from "react";

export default function Test() {

  useEffect(() => { 
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`).then(res => res.json()).catch(console.error)
  }, []);

  return (
    <Button onClick={async () => {
        await authClient.signIn.social({
          provider: "discord",
          callbackURL: process.env.NEXT_PUBLIC_APP_URL
        })
    }}>
      Sign in
    </Button>
  )
}