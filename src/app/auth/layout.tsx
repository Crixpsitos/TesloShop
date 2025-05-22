import { Footer } from "@/components";
import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="flex justify-center">
      <div className="w-full sm:w-[350px] px-10">
        {children}

        <Footer />
      </div>
    </main>
  );
}
