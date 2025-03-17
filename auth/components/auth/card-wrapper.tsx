"use client"

import { Card } from "../ui/card";
import { CardFooter, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "./header";
import { Social } from "./social";
interface CardWraperprops{
    children : React.ReactNode;
    headerLabel:string;
    backButtonLabel:string,
    backButtonref:string,
    showSocial?:boolean
};

export const CardWrapper=({
    children,
    headerLabel,
    backButtonLabel,
    backButtonref,
    showSocial
}:CardWraperprops)=>{
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={headerLabel}/>
            </CardHeader>
            <CardContent>
            {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social/>
                </CardFooter>
            )}
        </Card>
    )
}