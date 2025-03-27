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
                <ul className="w-[630px]">
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
                <ul className="w-[630px]">
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
              <NavigationMenuTrigger className={pathname.includes("/season") ? "bg-accent" : ""}>Grand Prix</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[630px] grid grid-cols-2">
                  <li>
                    <NavigationMenuLink href="/season/2025" className={pathname === "/season/2025" ? "underline" : ""}>
                      2025 season
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="/season/2024" className={pathname === "/season/2024" ? "underline" : ""}>
                      2024 season
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="/season/2023" className={pathname === "/season/2023" ? "underline" : ""}>
                      2023 season
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="/season/2022" className={pathname === "/season/2022" ? "underline" : ""}>
                      2022 season
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="/season/2021" className={pathname === "/season/2021" ? "underline" : ""}>
                      2021 season
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="/season/2020" className={pathname === "/season/2020" ? "underline" : ""}>
                      2020 season
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
