import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { Store, Search, Heart, ShoppingCart, LogOut } from 'lucide-react';

export default function Layout() {
  const { isAuthenticated, login, logout } = useAuth();
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="bg-background-light text-slate-900 font-display dark:bg-background-dark dark:text-slate-100 antialiased overflow-x-hidden min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-slate-200 bg-white px-4 md:px-10 py-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center gap-8 w-full max-w-[1400px] mx-auto">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Store className="size-5" />
            </div>
            <h2 className="text-slate-900 text-xl font-black tracking-tight dark:text-white">Marketplace</h2>
          </Link>
          
          <div className="hidden md:flex flex-1 items-center justify-center px-8">
            <label className="flex flex-col w-full max-w-2xl h-12">
              <div className="flex w-full flex-1 items-center rounded-xl bg-slate-100 shadow-inner focus-within:ring-2 focus-within:ring-primary/20 dark:bg-slate-800">
                <div className="flex h-full items-center justify-center pl-4 text-slate-500">
                  <Search className="size-5" />
                </div>
                <input 
                  className="h-full w-full bg-transparent px-4 text-sm font-normal text-slate-900 placeholder-slate-500 focus:outline-none dark:text-white" 
                  placeholder="Search for products, brands and more..." 
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      navigate('/search');
                    }
                  }}
                />
                <button 
                  onClick={() => navigate('/search')}
                  className="mr-1 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary/90"
                >
                  Search
                </button>
              </div>
            </label>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden items-center gap-6 lg:flex">
              <Link to="/search" className="text-sm font-medium text-slate-700 hover:text-primary dark:text-slate-300">Categories</Link>
              <Link to="/search" className="text-sm font-medium text-slate-700 hover:text-primary dark:text-slate-300">Deals</Link>
              <Link to="/vendor" className="text-sm font-medium text-slate-700 hover:text-primary dark:text-slate-300">Sell</Link>
            </div>
            <div className="hidden lg:block h-6 w-px bg-slate-200 dark:bg-slate-700"></div>
            
            <div className="flex gap-3 items-center relative">
              {isAuthenticated ? (
                <div className="relative">
                  <button 
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex items-center gap-2 pl-2 text-slate-700 dark:text-slate-200 hover:text-primary transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                      <img alt="User avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_wTM92uUwxgQNcdopLIEjwF6rJ3H-tvdGOx8PoDB7B6_WBsGY1upph8ckpqoYhTcB0sdDdNnbgpq0Hu3LMGHu3m2T3Ra8yaj_dESd89D1pkXlx4QSLpFljPeUhfek1SmKp7c-aij84y8ULJR2NZHygCqewQWMUdUs7zsVdPpxL-165c8YMLsYYFkRbpN3iuglzahWYj3zEh-YVslNpcQqBZPlMuiRxnQUSik2et3k-msyw0eQveoyWuHIsV_Y5adzalMKG4ChOQ"/>
                    </div>
                  </button>
                  {showDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-1 z-50">
                      <button 
                        onClick={() => {
                          logout();
                          setShowDropdown(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center gap-2"
                      >
                        <LogOut className="size-4" /> Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button 
                  onClick={login}
                  className="flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-blue-600 transition-colors"
                >
                  Sign In
                </button>
              )}
              
              <button className="group hidden sm:flex size-10 items-center justify-center rounded-full bg-slate-100 transition hover:bg-primary/10 hover:text-primary dark:bg-slate-800 dark:text-slate-100">
                <Heart className="size-5" />
              </button>
              
              <Link to="/checkout" className="group relative flex size-10 items-center justify-center rounded-full bg-slate-100 transition hover:bg-primary/10 hover:text-primary dark:bg-slate-800 dark:text-slate-100">
                <ShoppingCart className="size-5" />
                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white pt-16 pb-8 dark:border-slate-800 dark:bg-slate-900 mt-auto">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="mb-4 flex items-center gap-2 text-primary">
                <Store className="size-8" />
                <span className="text-xl font-black text-slate-900 dark:text-white">Marketplace</span>
              </div>
              <p className="mb-6 max-w-sm text-slate-500 dark:text-slate-400">
                The best place to discover unique products from independent sellers around the world. Shop small, dream big.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-slate-900 dark:text-white">Shop</h4>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li><Link className="hover:text-primary" to="/search">New Arrivals</Link></li>
                <li><Link className="hover:text-primary" to="/search">Best Sellers</Link></li>
                <li><Link className="hover:text-primary" to="/search">Categories</Link></li>
                <li><Link className="hover:text-primary" to="/search">Deals</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-slate-900 dark:text-white">Sell</h4>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li><Link className="hover:text-primary" to="/vendor">Become a Vendor</Link></li>
                <li><Link className="hover:text-primary" to="/vendor">Seller Dashboard</Link></li>
                <li><Link className="hover:text-primary" to="/vendor">Success Stories</Link></li>
                <li><Link className="hover:text-primary" to="/vendor">Seller Policies</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-slate-900 dark:text-white">Support</h4>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li><a className="hover:text-primary" href="#">Help Center</a></li>
                <li><a className="hover:text-primary" href="#">Safety Center</a></li>
                <li><a className="hover:text-primary" href="#">Community Guidelines</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 border-t border-slate-200 pt-8 text-center text-sm text-slate-400 dark:border-slate-800">
            <p>© 2024 Marketplace Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
