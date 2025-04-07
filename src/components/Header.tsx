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
        <Link legacyBehavior href="/">f1data</Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={pathname.includes("/drivers") ? "bg-accent" : ""}
              >
                Drivers
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[630px]">
                  <li>
                    <Link legacyBehavior href="/drivers-standings" passHref>
                      <NavigationMenuLink
                        className={
                          pathname === "/drivers-standings" ? "underline" : ""
                        }
                      >
                        Drivers Standings
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/all-drivers" passHref>
                      <NavigationMenuLink
                        className={
                          pathname === "/all-drivers" ? "underline" : ""
                        }
                      >
                        All Drivers
                      </NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={
                  pathname.includes("/constructors") ? "bg-accent" : ""
                }
              >
                Constructors
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[630px]">
                  <li>
                    <Link legacyBehavior href="/constructors-standings" passHref>
                      <NavigationMenuLink
                        className={
                          pathname === "/constructors-standings"
                            ? "underline"
                            : ""
                        }
                      >
                        Constructors Standings
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/all-constructors" passHref>
                      <NavigationMenuLink
                        className={
                          pathname === "/all-constructors" ? "underline" : ""
                        }
                      >
                        All Constructors
                      </NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={pathname.includes("/season") ? "bg-accent" : ""}
              >
                Grand Prix
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[630px] grid grid-cols-2">
                  {[2025, 2024, 2023, 2022, 2021, 2020].map((year) => (
                    <li key={year}>
                      <Link legacyBehavior href={`/season/${year}`} passHref>
                        <NavigationMenuLink
                          className={
                            pathname === `/season/${year}` ? "underline" : ""
                          }
                        >
                          {year} season
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link legacyBehavior href="/circuits" passHref>
                <NavigationMenuLink
                  className={cn(
                    "text-xl px-4 h-9 flex justify-center",
                    pathname === "/circuits" ? "bg-accent" : ""
                  )}
                >
                  Circuits
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Header;
