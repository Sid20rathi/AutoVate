 
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
    const router = useRouter();
 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return <div > 
        <Appbar />
        <div className="flex justify-center">
            <div className="flex pt-8 max-w-4xl">
                <div className="flex-1 pt-20 px-4">
                    <div className="font-semibold text-3xl pb-4">
                    Sign up and start automating smarter
                    </div>
                    <div className="pb-6 pt-4">
                        <CheckFeature label={"Easy setup, no coding required"} />
                    </div>
                    <div className="pb-6">
                        <CheckFeature label={"Free forever"} />
                    </div>
                   

                </div>
                <div className="flex-1 pt-6 pb-6 mt-12 px-4 border rounded">
                    <Input label={"Name"} onChange={e => {
                        setName(e.target.value)
                    }} type="text" placeholder="Your name"></Input>
                    <Input onChange={e => {
                        setEmail(e.target.value)
                    }} label={"Email"} type="text" placeholder="Your Email"></Input>
                    <Input onChange={e => {
                        setPassword(e.target.value)
                    }} label={"Password"} type="password" placeholder="Password"></Input>

                    <div className="pt-4">
                        <PrimaryButton OnClick={async () => {
                           
                            const res = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
                                username: email,
                                password,
                                name
                            })
                            alert("Account created successfully, please login")
                            router.push("/login")
                            
                            
                        }} size="big">Get started free</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
