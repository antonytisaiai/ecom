import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, ChevronRight, Filter } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Search() {
  const { addToCart } = useCart();

  const products = [
    { id: '1', name: 'Premium Noise Cancelling Wireless Headphones Pro', price: 299.00, vendor: 'AudioWorld', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeQjp3X_lF4C8dJE_bijcJ-Kstpy7AZwbsiyzkWMn1fjEmCV_te5skqrOOQ54CezHUmuY-m-rOixTmv5IroUysxy60GcVngOqZnF8GtP7mKIuEyeQMIbDDNkX-bgi1OvGXyqFeFjcXtoE2B4NKMh68cMtGaqY8etOnrIgT6hmiP5AnoxKBaicb2FhWk39OITkiz-aeS4Q0NCCey6RFtRwPLZwaE8vIYEcALcG-t38VpaymYgINzYjQpmTDkIaWoAbwrfY20YjGhw', badge: 'New', badgeColor: 'bg-primary' },
    { id: '2', name: 'True Wireless Earbuds with Charging Case - White', price: 89.00, oldPrice: 129.00, vendor: 'TechGiant', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYPnnBDw45D43ovmptmp9IqCMV5MBSF5uixeZhHCfk2T4iDS0jB5WOckEIj0qGp3pULuIytKeSHNLgEi4ZdrRN84RszFdLPPTPgr5X8xLRkI_8-LEgoEyJTa9FXRmddnEN9QPdfMnvEOyruPRImbF2Gaf9R3-je5QbfjAzezK5-xUk5-dln5XtEFx8IRAPo58lf7PCUbv4FH7-XvfP8iK7MxQ1_f9a4BFeS2oxuShGHON-xzXxCRlRMswJ5eitCNkfsPRdR9xCNw', badge: 'Sale', badgeColor: 'bg-red-500' },
    { id: '3', name: 'X-Pro Gaming Headset with Surround Sound', price: 79.99, vendor: 'GameZone', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoBWLRT_1HPlu7ub-9oqLZ3BDebEDqZhr35oWxzqkj2tgJiDeVFUHKnp1nX97peIuxie8ILCXNzs9I4g7ZR1p8LpkCEIZMWhsdvh5n7kFkKK23LImLAhYcl0pvO8RTpg6CE3LGLwFxmNxBmMBew2sWxOSReBuClQ3MoIDH9HT2wKi-NxokRrQf8c7tBC9PXFuMMk6jqOU4wnH2e8njpETe4Ny-UkA2gJyq8z1v0RtXcPKb94TCigwB1MgRXx30H5lvkmKVsX16qw' },
    { id: '4', name: 'Portable Bluetooth Speaker Waterproof IPX7', price: 45.00, vendor: 'SoundWave', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuuu6dAVfjFAJ1MsgCuI2b79gj0dZC7KD1ROU3BFyaXmQVxzNO10t6OLT3WnmmHoqufS-R-isEDqvjstP-bd3S01gvi28r0nH0lWIQQQNQ4VWxfSBhfMbEgYUjzfjtKNzOuoWORIBCe5C8UhRz7E65VI5qAC3iBbmlseKYgvV-t02OHtXAq8coBxoOAG2hJ-xRqUixcKcPxaFlbU3sFXShoroZ5TULgbjAsI8mDKXSJcs8SOwMee441xtiBR2Sd6fLDX56KpCHdQ' },
  ];

  return (
    <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs & Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-2">
            <Link className="hover:text-primary transition-colors" to="/">Home</Link>
            <ChevronRight className="size-4" />
            <span className="hover:text-primary transition-colors cursor-pointer">Electronics</span>
            <ChevronRight className="size-4" />
            <span className="text-slate-900 dark:text-white font-medium">Audio</span>
          </nav>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Wireless Headphones</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Showing 124 results for premium audio gear</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-500 dark:text-slate-400 hidden sm:inline">Sort by:</span>
          <div className="relative inline-block text-left">
            <select className="block w-full pl-3 pr-10 py-2 text-base border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-lg bg-white dark:bg-[#1a2632] dark:text-white cursor-pointer shadow-sm">
              <option>Relevance</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
              <option>Best Selling</option>
            </select>
          </div>
          <button className="md:hidden p-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-[#1a2632] text-slate-700 dark:text-slate-200">
            <Filter className="size-5" />
          </button>
        </div>
      </div>

      <div className="flex gap-8 items-start">
        {/* Sidebar Filters */}
        <aside className="hidden md:block w-64 flex-shrink-0 space-y-8 sticky top-24">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Categories</h3>
            <ul className="space-y-2.5">
              {['All Audio', 'Over-Ear', 'In-Ear', 'True Wireless', 'Gaming Headsets'].map((cat, i) => (
                <li key={i}>
                  <a className="flex items-center justify-between group" href="#">
                    <span className={i === 1 ? "text-primary font-medium text-sm" : "text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors text-sm font-medium"}>{cat}</span>
                    <span className={i === 1 ? "text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full" : "text-xs bg-slate-100 dark:bg-slate-800 text-slate-500 px-2 py-0.5 rounded-full"}>{Math.floor(Math.random() * 100) + 10}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <hr className="border-slate-200 dark:border-slate-800"/>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Brands</h3>
            <div className="space-y-3">
              {['Sony', 'Bose', 'Sennheiser', 'JBL'].map((brand, i) => (
                <label key={i} className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input type="checkbox" defaultChecked={i === 0} className="peer h-4 w-4 border-slate-300 rounded text-primary focus:ring-primary dark:bg-slate-800 dark:border-slate-600" />
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{brand}</span>
                </label>
              ))}
              <button className="text-sm text-primary hover:underline font-medium mt-1">+ Show more</button>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <Link key={i} to="/product" className="group relative flex flex-col bg-white dark:bg-[#1a2632] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {product.badge && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className={`${product.badgeColor} text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide`}>{product.badge}</span>
                  </div>
                )}
                <div className="relative aspect-[4/5] bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src={product.image} />
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart({ ...product, quantity: 1 });
                    }}
                    className="absolute bottom-3 right-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white dark:hover:bg-primary"
                  >
                    <ShoppingCart className="size-5" />
                  </button>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium truncate">{product.vendor}</span>
                  </div>
                  <h3 className="text-slate-900 dark:text-white font-medium text-base leading-snug mb-1 line-clamp-2 group-hover:text-primary transition-colors">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex text-yellow-400 text-[14px]">
                      <Star className="size-3.5 fill-current" />
                      <Star className="size-3.5 fill-current" />
                      <Star className="size-3.5 fill-current" />
                      <Star className="size-3.5 fill-current" />
                      <Star className="size-3.5 fill-current" />
                    </div>
                    <span className="text-xs text-slate-400">(248)</span>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex flex-col">
                      {product.oldPrice && <span className="text-xs text-slate-400 line-through">${product.oldPrice.toFixed(2)}</span>}
                      <span className={`text-lg font-bold ${product.oldPrice ? 'text-red-500' : 'text-slate-900 dark:text-white'}`}>${product.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
