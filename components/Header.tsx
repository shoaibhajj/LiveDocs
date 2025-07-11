
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";


function Header({ children,className }: HeaderProps) {
  return (
    <div className={cn("header",className)}>
      <Link href={"/"} className="md:flex-1">
        <Image
          src="/assets/icons/logo.svg"
          alt="logo with name"
          width={120}
          height={32}
          className="hidden md:block"
        />
        <Image
          src="/assets/icons/logo-icon.svg"
          alt="logo"
          width={32}
          height={32}
          className=" md:hidden mr-2"
        />
      </Link>
      {children}
    
    </div>
  );
}

export default Header;
