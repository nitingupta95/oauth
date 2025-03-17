
"use client"
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import {LoginButton} from "@/components/auth/login-button"
import {Button} from "@/components/ui/button"
const font= Poppins({
  subsets:["latin"],
  weight:["600"]
})
export default function Home() {
  return (
      <main className="flex h-full flex-col items-center jsutify-center  bg-gradient-to-br from-sky-400 to-blue-800">
        <div className="spcae-y-6">
          <h1 className={cn("text-6xl font-semibold text-white drop-shadew-md", font.className)}>
            🔐Auth
          </h1>
          <p className="text-white text-lg">
            A simple authentication page
          </p>
          <LoginButton>
            <Button variant={"secondary"} size={"lg"}>Sign in</Button>
          </LoginButton>
        </div>

      </main>
  );
}
