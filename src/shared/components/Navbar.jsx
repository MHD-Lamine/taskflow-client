import { LogOut } from "lucide-react";

import { useAuth } from "../../features/auth/context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="h-16 bg-white border-b px-6 flex items-center justify-between">
      <h2 className="text-xl font-semibold">
        Dashboard
      </h2>

      <div className="flex items-center gap-4">
        <span className="font-medium">
          {user?.name}
        </span>

        <button
          onClick={logout}
          className="text-red-500"
        >
          <LogOut size={20} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;