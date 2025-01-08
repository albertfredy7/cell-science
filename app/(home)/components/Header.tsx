"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" width={200} height={200} alt="Science" />
        </Link>

        <div className="flex items-center gap-4">
          <NavigationMenu  >
            <NavigationMenuList>
              <NavigationMenuItem className="hidden lg:block">
                <Link href="/science" legacyBehavior passHref>
                  <NavigationMenuLink className="bg-transparent">
                    <span className="flex items-center gap-2 uppercase  text-black font-medium">
                      SCIENCE
                      <MoveUpRight className="h-3 w-3" />
                    </span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            variant="outline"
            className="hidden lg:block rounded-full bg-transparent  hover:bg-transparent border-black shadow-none"
          >
            Contact
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              {/* Mobile navigation content to be determined */}
              <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/science" legacyBehavior passHref>
                  <NavigationMenuLink className="bg-transparent">
                    <span className="flex items-center gap-2 uppercase  text-black font-medium">
                      SCIENCE
                      <MoveUpRight className="h-3 w-3" />
                    </span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            variant="outline"
            className="rounded-full bg-transparent  hover:bg-transparent border-black shadow-none"
          >
            Contact
          </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
