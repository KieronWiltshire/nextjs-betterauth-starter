import Test from "@/components/test";
import { authClient } from "@/lib/auth";
import { headers } from "next/headers";

export default async function HomePage() {
  const session = await authClient.getSession({ fetchOptions: { headers: await headers() } });

  console.log(session);
  
  return (
    <main className="min-h-screen bg-background">
      <h1>hello world</h1>
      <Test />
    </main>
  );
}
