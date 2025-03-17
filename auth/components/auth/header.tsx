import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { CardHeader } from "../ui/card";
 
const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
});
interface HeaderProps{
    label:string,
};

export const Header=({
    label
}:HeaderProps)=>{
    return (
        <div className="w-full flx flex-col gap-y-4 items-center justify-center">
            <h1 className={cn("text-3xl font-semibold", font.className)}>
            🔐Auth
            </h1>
            <p className="text-muted-forground text-sm">
                
                {label}
            </p>
            
        </div>
    )
}