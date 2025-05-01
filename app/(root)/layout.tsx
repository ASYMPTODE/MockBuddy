import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/actions/auth.action";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/ai-avatar.webp"
            alt="MockMate Logo"
            width={48}
            height={42}
          />
          <h3 className="text-primary">MockGorilla</h3>
        </Link>
      </nav>

      {children}
    </div>
  );
};

export default Layout;
