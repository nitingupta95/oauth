"use client"

import { Card } from "../ui/card";
import { CardFooter, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
        <Card>

        </Card>
    )
}