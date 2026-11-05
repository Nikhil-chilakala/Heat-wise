import React, { useState } from 'react';
import { Flame, Menu, X, LogOut, User as UserIcon, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  onOpenLogin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLogin }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          
          {/* Zone 1: Brand Wordmark */}
          <a href="#" className="flex items-center gap-2.5 text-stone-900 group shrink-0">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-sm shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <Flame className="w-5 h-5 fill-white/20" />
            </span>
            <span className="text-xl font-bold tracking-tight font-display text-stone-900">
              HeatWise
            </span>
          </a>

          {/* Zone 2: 4-5 single-line clean navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <a href="#what-is-it" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
              Overview
            </a>
            <a href="#risks" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
              Health & Science
            </a>
            <a href="#warning-signs" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
              Warning Signs
            </a>
            <a href="#food-guide" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
              Food Guide
            </a>
            <a href="#safe-practices" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
              Safe Practices
            </a>
            <a href="#simulator" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 text-amber-700">
              Heat Simulator
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action (Auth / Sign In) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0 relative">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 p-1.5 pl-2 rounded-xl bg-white hover:bg-stone-50 border border-stone-200/90 shadow-2xs transition-all text-left"
                >
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName || 'Profile'}
                      className="w-7 h-7 rounded-lg object-cover border border-stone-200"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-7 h-7 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-xs">
                      {user.displayName ? user.displayName.charAt(0) : 'U'}
                    </div>
                  )}
                  <span className="text-xs font-semibold text-stone-800 max-w-[110px] truncate">
                    {user.displayName?.split(' ')[0] || 'Account'}
                  </span>
                </button>

                {/* Dropdown menu */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white border border-stone-200 shadow-lg py-2 z-50 text-xs">
                    <div className="px-4 py-2 border-b border-stone-100">
                      <p className="font-bold text-stone-900 truncate">
                        {user.displayName || 'Home Cook'}
                      </p>
                      <p className="text-[11px] text-stone-500 truncate">
                        {user.email}
                      </p>
                    </div>

                    <a
                      href="#quiz"
                      onClick={() => setUserDropdownOpen(false)}
                      className="block px-4 py-2 text-stone-700 hover:bg-stone-50 transition-colors"
                    >
                      My Quiz & Achievements
                    </a>

                    <a
                      href="#checklist"
                      onClick={() => setUserDropdownOpen(false)}
                      className="block px-4 py-2 text-stone-700 hover:bg-stone-50 transition-colors"
                    >
                      Kitchen Safety Checklist
                    </a>

                    <div className="pt-1 mt-1 border-t border-stone-100">
                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          signOut();
                        }}
                        className="w-full text-left px-4 py-2 text-rose-600 hover:bg-rose-50 flex items-center gap-2 transition-colors font-medium"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={onOpenLogin}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-orange-600 active:bg-orange-700 rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
              >
                {/* Small Google G icon */}
                <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Sign in with Google</span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            {user && (
              <button
                onClick={onOpenLogin}
                className="w-8 h-8 rounded-lg overflow-hidden border border-stone-200"
              >
                {user.photoURL ? (
                  <img src={user.photoURL} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold">
                    {user.displayName?.charAt(0) || 'U'}
                  </div>
                )}
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone-200 bg-[#FAF8F5] space-y-2">
            <a
              href="#what-is-it"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100 rounded-md"
            >
              Overview
            </a>
            <a
              href="#risks"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100 rounded-md"
            >
              Health & Science
            </a>
            <a
              href="#warning-signs"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100 rounded-md"
            >
              Warning Signs
            </a>
            <a
              href="#food-guide"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100 rounded-md"
            >
              Food Guide
            </a>
            <a
              href="#simulator"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-amber-800 hover:bg-amber-50 rounded-md"
            >
              Heat Simulator
            </a>
            <a
              href="#safe-practices"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100 rounded-md"
            >
              Safe Practices
            </a>
            <a
              href="#checklist"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100 rounded-md"
            >
              Kitchen Checklist
            </a>
            
            <div className="pt-2">
              {user ? (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    signOut();
                  }}
                  className="w-full text-center px-4 py-2.5 text-sm font-semibold text-rose-600 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors"
                >
                  Sign Out ({user.displayName?.split(' ')[0]})
                </button>
              ) : (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLogin();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-stone-900 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Sign in with Google</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
