import { HeaderProps } from "@/components/Header/types.ts";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC<HeaderProps> = ({ isLoggedIn, username }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* 로고 */}
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold">
            logologo
          </Link>
        </div>

        {/* 데스크톱 메뉴 */}
        <nav className="desktop:flex hidden items-center space-x-4">
          {isLoggedIn ? (
            <>
              <Link to="/link1" className="hover:text-primary text-gray-700">
                Nav Link
              </Link>
              <Link to="/link2" className="hover:text-primary text-gray-700">
                Nav Link
              </Link>
              <Link to="/link3" className="hover:text-primary text-gray-700">
                Nav Link
              </Link>
              <div className="relative">
                <button className="flex items-center space-x-2">
                  <span>{username}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.707a1 1 0 011.414 0L10 11.586l3.293-3.879a1 1 0 011.414 1.415l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-primary rounded px-4 py-2 text-white"
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="bg-secondary rounded px-4 py-2 text-gray-800"
              >
                Register
              </Link>
            </>
          )}
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="desktop:hidden flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="desktop:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-2 p-4">
            {isLoggedIn ? (
              <>
                <Link to="/link1" className="hover:text-primary text-gray-700">
                  Nav Link
                </Link>
                <Link to="/link2" className="hover:text-primary text-gray-700">
                  Nav Link
                </Link>
                <Link to="/link3" className="hover:text-primary text-gray-700">
                  Nav Link
                </Link>
                <div className="border-t pt-4">
                  <button className="flex items-center space-x-2">
                    <span>{username}</span>
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-primary rounded px-4 py-2 text-white"
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="bg-secondary rounded px-4 py-2 text-gray-800"
                >
                  Register
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
