"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="px-6 py-10">
      <div className="flex items-center justify-between gap-6">
        <Link href="/">f1data</Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={pathname.includes("/drivers") ? "bg-accent" : ""}>Drivers</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[430px]">
                  <li>
                    <NavigationMenuLink href="/drivers-standings" className={pathname === "/drivers-standings" ? "underline" : ""}>
                      Drivers Standings
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="/all-drivers" className={pathname === "/all-drivers" ? "underline" : ""}>
                      All Drivers
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={pathname.includes("/constructors") ? "bg-accent" : ""}>Constructors</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[430px]">
                  <li>
                    <NavigationMenuLink href="/constructors-standings" className={pathname === "/constructors-standings" ? "underline" : ""}>
                      Constructors Standings
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="/all-constructors" className={pathname === "/all-constructors" ? "underline" : ""}>
                      All Constructors
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/circuits" className={cn("text-xl px-4 h-9 flex justify-center", pathname === "/circuits" ? "bg-accent" : "")}>Circuits</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Header;
