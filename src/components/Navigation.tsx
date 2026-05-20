import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Activity, BarChart3, Home, Image, Layers, User } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export function Navigation() {
  return (
    <nav className="fixed w-full top-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="flex items-center gap-4">
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="bg-gradient-to-r from-foreground/5 via-foreground/10 to-foreground/5 backdrop-blur-md px-6 py-2 rounded-full border border-foreground/10">
              <NavigationMenuItem className="px-4">
                <NavigationMenuLink
                  href="#top"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <Home className="w-4 h-4" /> <span>顶部</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-4">
                <NavigationMenuLink
                  href="#status"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <Activity className="w-4 h-4" /> <span>今日状态</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-4">
                <NavigationMenuLink
                  href="#benefits"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <User className="w-4 h-4" /> <span>产品优势</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-4">
                <NavigationMenuLink
                  href="#investors"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <Layers className="w-4 h-4" /> <span>技术栈</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-4">
                <NavigationMenuLink
                  href="#testimonials"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <BarChart3 className="w-4 h-4" /> <span>数据统计</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-4">
                <NavigationMenuLink
                  href="#faq"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <Image className="w-4 h-4" /> <span>Q&A</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu className="md:hidden flex items-center justify-center bg-gradient-to-r from-foreground/5 via-foreground/10 to-foreground/5 backdrop-blur-md px-6 py-2 rounded-full border border-foreground/10">
            <NavigationMenuList className="flex items-center gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#top"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <Home className="w-6 h-6" />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#status"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <Activity className="w-6 h-6" />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#benefits"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <User className="w-6 h-6" />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#investors"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <Layers className="w-6 h-6" />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#testimonials"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <BarChart3 className="w-6 h-6" />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#faq"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <Image className="w-6 h-6" />
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
