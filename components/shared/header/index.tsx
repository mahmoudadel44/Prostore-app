import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ModeToggle from "./mode-toggle";
import Menu from "./menu";
import Logo from "../../../public/images/logo.svg";
export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href={"/"} className="flex-start">
            <Image
              src={Logo}
              height={48}
              width={48}
              alt={`${APP_NAME} logo`}
              priority={true}
            />
            <span className="hidden lg:block text-2xl ml-3">{APP_NAME}</span>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
}
