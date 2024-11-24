"use client";
import { useRouter } from "next/navigation"
import { LinkButton } from "./buttons/LinkButton"
import PrimaryButton from "./buttons/PrimaryButton";


export const Appbar = () => {
    const router = useRouter();
    return <div className="flex border-b justify-between p-4 shadow-lg">
        <div className="flex flex-col justify-center text-2xl font-extrabold cursor-pointer" onClick={()=>{router.push("/")}}>
            AutoVate
        </div>
        <div className="flex">
        
            <div className="pr-4">
                <LinkButton onClick={() => {
                    router.push("/login")
                }}>Login</LinkButton>
            </div>
            <PrimaryButton OnClick={()=>{
                router.push("/signup")
            }}>
                Signup
            </PrimaryButton>            
        </div>
    </div>
}