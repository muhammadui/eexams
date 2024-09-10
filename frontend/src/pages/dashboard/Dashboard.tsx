import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  BookOpenCheck,
  CircleUserRound,
  Hotel,
  LayoutDashboard,
  WalletMinimal,
} from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

function DashboardNavigationMenu() {
  const menuItems = [
    { icon: LayoutDashboard, text: "Dashboard", to: "/dashboard" },
    { icon: WalletMinimal, text: "Fees", to: "/dashboard/fees" },
    { icon: WalletMinimal, text: "Courses", to: "/dashboard/courses" },
    { icon: Hotel, text: "Accommodation", to: "/dashboard/accommodation" },
    { icon: BookOpenCheck, text: "Exams", to: "/dashboard/exams" },
    { icon: CircleUserRound, text: "Result", to: "/dashboard/result" },
    { icon: CircleUserRound, text: "Profile", to: "/dashboard/profile" },
  ];

  return (
    <nav className="sticky top-0 flex h-screen w-64 flex-col space-y-12 bg-[#f2f4f6] p-6">
      <header className="flex">
        <img
          src="/baze-logo.png"
          alt="baze-university logo"
          className="flex h-24"
        />
      </header>
      <aside className="flex flex-1 flex-col space-y-4 text-slate-950">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            className={({ isActive }) =>
              `flex items-center gap-3 hover:text-[#1546a3] ${isActive ? "font-bold text-[#1546a3]" : ""}`
            }
            to={item.to}
          >
            <item.icon strokeWidth={1} />
            {item.text}
          </NavLink>
        ))}
      </aside>
    </nav>
  );
}

const Dashboard = () => {
  return (
    <div className="flex">
      <DashboardNavigationMenu />

      {/* Content will be rendered here */}
      <div className="dashboard__content__wrapper flex-1 overflow-hidden">
        <main className="h-full overflow-y-auto px-20 py-6">
          <div className="top__profile__bar mb-10 flex items-center justify-end gap-4 p-4">
            <div className="">
              <p className="">Muhammad Ibrahim Umar</p>
              <p className="text-right text-xs">BAZE/SWE/24/9969</p>
            </div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
