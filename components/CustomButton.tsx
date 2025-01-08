import * as React from "react";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function CustomButton({ children, onClick, className }: CustomButtonProps) {
  return (
    <div className={`flex items-center ${className}  `}>
      <Button className="bg-black font-bold lg:py-4 lg:px-6 rounded-full hover:bg-black" onClick={onClick}>{children}</Button>
      <div className="h-2 w-2 bg-black"></div>
      <div className="bg-black h-9 w-9 rounded-full flex items-center justify-center">
        <MoveUpRight className=" h-4 font-bold text-white" />
      </div>
      
    </div>
  );
}
