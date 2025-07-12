import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Footer from './Footer'; // Make sure Footer.jsx exists

export default function Header() {
  return (
    <>
      {/* Navbar */}
      <header className="shadow sticky z-50 top-0 bg-white">
        <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="mr-3 h-12"
                alt="Logo"
              />
            </Link>
            <Link to="/home" className="flex items-center">
              Home
            </Link>
            <Link to="/about" className="flex items-center">
              About
            </Link>
            <Link to="/contact" className="flex items-center">
              Contact
            </Link>
            <Link to="/github" className="flex items-center">
            Github
            </Link>
            <Link to="/user" className="flex items-center">
            User
            </Link>

            <div className="flex items-center lg:order-2">
              <Link
                to="#"
                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 mr-2"
              >
                Log in
              </Link>
              <Link
                to="#"
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                Get started
              </Link>
            </div>

            <div className="hidden lg:flex lg:w-auto lg:order-1 w-full">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/home"
                    className={({ isActive }) =>
                      `block py-2 px-3 duration-200 ${
                        isActive ? 'text-orange-700' : 'text-gray-700'
                      } hover:text-orange-700`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block py-2 px-3 duration-200 ${
                        isActive ? 'text-orange-700' : 'text-gray-700'
                      } hover:text-orange-700`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `block py-2 px-3 duration-200 ${
                        isActive ? 'text-orange-700' : 'text-gray-700'
                      } hover:text-orange-700`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/github"
                    className={({ isActive }) =>
                      `block py-2 px-3 duration-200 ${
                        isActive ? 'text-orange-700' : 'text-gray-700'
                      } hover:text-orange-700`
                    }
                  >
                    Github
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/user"
                    className={({ isActive }) =>
                      `block py-2 px-3 duration-200 ${
                        isActive ? 'text-orange-700' : 'text-gray-700'
                      } hover:text-orange-700`
                    }
                  >
                    User
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Page content renders here */}
      <main className="max-w-screen-xl mx-auto px-4 py-6">
        <Outlet />
      </main>
        {/* Footer */}
    </>
  );
}
