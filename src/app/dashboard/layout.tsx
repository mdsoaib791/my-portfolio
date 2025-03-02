'use client'

import Sidenav from "@/components/common/side-nav";
import { useAppSelector } from "@/redux/hooks";


export default function DashboardLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isOpen = useAppSelector((state) => state.nav.isOpen);
  return (
    <div className="min-h-screen bg-third">
      <div className={`transition-all duration-300 ease-in-out bg-primary min-h-screen fixed  z-50 top-0 left-0 ${!isOpen ? 'w-[250px]' : 'w-[80px]'}`}
      >
        {/* <Sidenav /> */}
      </div>
      <div className={`transition-all relative duration-300 ease-in-out ${!isOpen ? 'ms-[250px]' : 'ms-[80px]'}`}>
        <main className="p-3 pt-0">
          {children}
        </main>
      </div>
    </div>
  );
}
