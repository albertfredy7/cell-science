'use client';

import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full py-2">
            <div className="container mx-auto   flex h-16 items-center justify-between ">
                <Link href="/" className="flex items-center px-6">
                    <Image src="/CellScienceLogo.png" width={200} height={200} alt="Science" />
                </Link>

                <div className="flex items-center gap-4">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem className="hidden lg:block">
                                <Link href="/science" legacyBehavior passHref>
                                    <NavigationMenuLink className="bg-transparent">
                                        <span className="flex items-center gap-2 font-medium text-sm uppercase text-black">
                                            SCIENCE
                                            <MoveUpRight className="h-3 w-3" />
                                        </span>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <Button variant="outline" className="hidden  text-black rounded-full border-black bg-transparent text-sm px-2 shadow-none hover:bg-transparent lg:block">
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
                                                <span className="flex items-center gap-2 font-medium uppercase text-black">
                                                    SCIENCE
                                                    <MoveUpRight className="h-3 w-3" />
                                                </span>
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>

                            <Button variant="outline" className="rounded-full border-black bg-transparent shadow-none hover:bg-transparent">
                                Contact
                            </Button>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
