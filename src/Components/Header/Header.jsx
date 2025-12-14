import React, { useState } from "react";
import {
  Users,
  Menu,
  X,
  Settings,
  Group,
  Lock,
  ChevronDown,
  Search,
  Sun,
  Moon
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Header = ({ handleData }) => {
  const [activeWindow, setActiveWindow] = useState("All Users");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { theme, mode, toggleTheme } = useTheme();

  const handleActiveWindow = (data) => {
    setActiveWindow(data);
    setMobileMenuOpen(false);
  };

  const MenuItems = [
    { icon: Group, menuText: "Groups" },
    { icon: Users, menuText: "All Users" },
    { icon: Lock, menuText: "Admins" },
  ];

  return (
    <div
      className="mt-2 px-3 sm:px-4 py-2 w-full"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      <nav
        className="px-4 py-3 sm:py-4 rounded-3xl shadow-md w-full"
        style={{
          backgroundColor: theme.card,
          color: theme.text,
        }}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center shrink-0">
           <h4 className="text-md font-bold md:text-3xl">Admin Dashboard</h4>
          </div>

          <div className="hidden xl:flex flex-1 justify-center">
            <ul className="flex gap-3">
              {MenuItems.map(({ icon: Icon, menuText }) => {
                const isActive = activeWindow === menuText;
                return (
                  <li
                    key={menuText}
                    onClick={() => handleActiveWindow(menuText)}
                    className="flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-all"
                    style={{
                      backgroundColor: isActive ? theme.primary : "transparent",
                      color: theme.text,
                    }}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{menuText}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Search + Sort */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="relative">
              <div
                className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                style={{ color: theme.text }}
              >
                <Search className="h-4 w-4" />
              </div>

              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => handleData(e.target.value)}
                className="w-40 pl-10 pr-3 py-2 rounded-xl text-sm transition-all"
                style={{
                  backgroundColor: theme.background,
                  color: theme.text,
                  border: `1px solid ${theme.text}40`,
                }}
              />
            </div>
            <div className="relative">
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
                style={{ color: theme.text }}
              >
                <ChevronDown className="h-4 w-4" />
              </div>

              <select
                onChange={(e) => handleData(e.target.value)}
                className="appearance-none rounded-xl pl-3 pr-9 py-2 text-sm font-medium cursor-pointer"
                style={{
                  backgroundColor: theme.background,
                  color: theme.text,
                  border: `1px solid ${theme.text}40`,
                }}
              >
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </div>

        
          <div className="flex items-center gap-2 sm:gap-3">
           
            <div className="hidden md:flex items-center gap-2">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop"
                alt="superAdminImage"
                className="w-9 h-9 rounded-full object-cover"
              />

              <div className="hidden lg:block text-sm leading-tight">
                <h4 style={{ color: theme.text }}>Jose Simmons</h4>
                <p style={{ color: theme.text + "99" }} className="text-xs">
                  SuperAdmin
                </p>
              </div>
            </div>

            <button
              onClick={toggleTheme}
              className="px-3 py-2 rounded-lg cursor-pointer"
              style={{
                backgroundColor: theme.background,
                color: theme.text,
                border: `1px solid ${theme.text}40`,
              }}
            >
              {mode === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <div
              className="hidden md:block w-px h-6"
              style={{ backgroundColor: theme.text + "30" }}
            ></div>

            <button
              className="p-2 rounded-lg hidden sm:block"
              style={{
                backgroundColor: theme.background,
                color: theme.text,
              }}
            >
              <Settings className="w-5 h-5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="xl:hidden p-2 rounded-lg"
              style={{ backgroundColor: theme.background, color: theme.text }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="flex sm:hidden gap-3 mt-3">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 rounded-xl flex-1 text-sm"
            onChange={(e) => handleData(e.target.value)}
            style={{
              backgroundColor: theme.background,
              color: theme.text,
              border: `1px solid ${theme.text}40`,
            }}
          />
          <select
            className="px-3 py-2 rounded-xl text-sm"
            onChange={(e) => handleData(e.target.value)}
            style={{
              backgroundColor: theme.background,
              color: theme.text,
              border: `1px solid ${theme.text}40`,
            }}
          >
            <option value="ascending">Asc</option>
            <option value="descending">Desc</option>
          </select>
        </div>

        {mobileMenuOpen && (
          <div className="xl:hidden mt-4 border-t pt-4"
            style={{ borderColor: theme.text + "40" }}
          >
            <ul className="flex flex-col gap-2">
              {MenuItems.map(({ icon: Icon, menuText }) => {
                const isActive = activeWindow === menuText;
                return (
                  <li
                    key={menuText}
                    onClick={() => handleActiveWindow(menuText)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all"
                    style={{
                      backgroundColor: isActive ? theme.primary : theme.background,
                      color: theme.text,
                    }}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{menuText}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
