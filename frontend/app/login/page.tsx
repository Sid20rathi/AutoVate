 
"use client";

import { CheckFeature } from "@/components/CheckFeature";
import { Input } from "@/components/Input";

import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../config";


import PrimaryButton from "@/components/buttons/PrimaryButton";
import { Appbar } from "@/components/appbar";
import { useRouter } from "next/navigation";

export default function() {
    interface SignInResponse {
        token: string;
      }
      
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    return <div> 
        <Appbar />

        <div className="flex justify-center">
            <div className="flex pt-8 max-w-4xl">
                <div className="flex-1 pt-20 px-4">
                    <div className="font-semibold text-3xl pb-4">
                   Login In and start automating smarter
                    </div>
                    <div className="pb-6 pt-4">
                        <CheckFeature label={"Easy setup, no coding required"} />
                    </div>
                    <div className="pb-6">
                        <CheckFeature label={"Free forever"} />
                    </div>
                   

                </div>
                <div className="flex-1 pt-6 pb-6 mt-12 px-4 border rounded">
                    <Input onChange={e => {
                        setEmail(e.target.value)
                    }} label={"Email"} type="text" placeholder="Your Email"></Input>
                    <Input onChange={e => {
                        setPassword(e.target.value)
                    }} label={"Password"} type="password" placeholder="Password"></Input>

                    <div className="pt-4">
                    <PrimaryButton OnClick={async () => {
    try {
      const res = await axios.post<SignInResponse>(`${BACKEND_URL}/api/v1/user/signin`, {
        username: email,
        password,
      });

      if (res && res.data.token) {
        localStorage.setItem("token", res.data.token); 
     
        router.push("/dashboard");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
        console.log(error);
    }
  }}
  size="big" 
>
 Login
</PrimaryButton>

                    </div>
                </div>
            </div>
        </div>
    </div>
}
