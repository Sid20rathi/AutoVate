"use client"
import { useRouter } from "next/navigation"
import { Feature } from "./Feature";
import PrimaryButton from "./buttons/PrimaryButton";
import { SecondaryButton } from "./buttons/SecondaryButton";



export const Hero = () => {
    const router = useRouter();
    return <div>
        <div className="flex justify-center">
            <div className="text-6xl font-bold font-semibold text-center pt-8 max-w-xl">
                
            Seamlessly Connect and Automate with Powerful Webhooks
            </div>
        </div>
        <div className="flex justify-center pt-2">
            <div className="text-xl font-bold font-normal text-center pt-8 max-w-2xl">
                AI gives you automation superpowers, and AutoVate puts them to work. Pairing AI and AutoVate helps you turn ideas into workflows and bots that work for you.
            </div>
        </div>

        <div className="flex justify-center pt-4">
            <div className="flex">
                <PrimaryButton OnClick={() => {
                    router.push("/signup")
                }} size="big">Get Started free</PrimaryButton>
                
            </div>
        </div>

        <div className="flex justify-center pt-4 pr-16">
            <Feature title={"Free Forever"} subtitle={"for core features"} />
            <Feature title={"Cutting Edge"} subtitle={"AI Features"} />
        </div>
    </div>
}