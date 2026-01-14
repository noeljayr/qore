import { IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import UsersTable from "@/components/UsersTable";

export default function Home() {
  return (
    <main className="flex flex-col space-y-8">
      <Link className="font-semibold w-fit mx-auto space-x-2 flex items-center " href={"/"}>
        <Image
          src={logo}
          alt="Qore AI logo"
          className="h-5 w-5 object-contain"
        />
        <span className="font-semibold">Qore AI Labs</span>
      </Link>

      <UsersTable />
    </main>
  );
}
