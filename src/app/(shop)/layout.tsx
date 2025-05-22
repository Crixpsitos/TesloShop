import { Footer, Sidebar, TopMenu } from "@/components";
import { NotificationProvider } from "@/components/providers/NotificationProvider";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen @container mx-auto container">
      <NotificationProvider>
        <TopMenu />
        <Sidebar />
        {children}
        <Footer />
      </NotificationProvider>
    </main>
  );
}
