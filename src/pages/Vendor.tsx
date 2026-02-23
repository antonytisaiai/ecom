import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, ShieldCheck, Mail, Globe, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Vendor() {
  const { addToCart } = useCart();

  const vendorProducts = [
    { id: 'v1', name: 'Professional Camera Lens 50mm', price: 450.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx-_NL3ytO1j31kDcfM7caZJPMtF66_bFnjHHt6yRe8xllME3DuW9Os6VtFzm8Qk9H69mynLTGzPZRiijGayRKk_xgaGS7LMSG5NAb7IKaOxral4dQn22RiUbM93z1m3e-vBOWChiqPmywxyD3fcBEqd3kb4cdGyqSYNPzpc5w5769tFqW1FedQafk-9T1VjCQMl79HimdYeB0v3z2id8LsrBa8M2IQi1SNRqsh10r4APuW9jkc5bLJVzHro__8a0dVsqJVCfxlg' },
    { id: 'v2', name: '4K Action Camera Waterproof', price: 199.99, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvk5F_f8mwrLHEpxUpHv-gWmQjKK2u6N00odwinxFLOLsDfNTo4xK0sv3v33j1orvhHIPcFFhWBp5Kxk4ge_QatZVajZmpQGzGRhDG3Cb2YKn4hRWBucH5fOLdBjA66PJlKqPLP439zlm4JARML7x5RfqIOTiv7JiHEtA1z_Xyp5mee_8OuuMuuQYEeUnoFH6Ap1xsla37OZxItYsz4EgOxUp0xsP1AVyLmRzUXtlqbzZvWuLIO5_X6zKYW-DH7GeLO0cmjHkvfQ', badge: 'Best Seller', badgeColor: 'bg-yellow-500' },
    { id: 'v3', name: 'Drone with 4K Camera & GPS', price: 599.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZo_6PeRs02OhzkhCLD1TxYo3p_sluXTk_OLl0Kn4HDAHJ35qcXPSpC0FS1JOYGqFUU_ykCP7E2t7j8A9Zs5q3XBvHXRi-7mB1RQsVhWYLaP_uU61k_yafCLclIgisZBttFlkNzHMPidkf8gDyEN0hHf37X4TJkB9VZ8IIOGTG0jlg5UCpcJYRLOIuzviThELfDMeQGMzjFE3kj5uopx9avXl4ksvLP0OR1Naw66TqAl07IT6uN72eqnjkbe2_meXEo_YvrStycw' },
    { id: 'v4', name: 'Smart Home Security Camera', price: 89.50, oldPrice: 120.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCrFfU_dPVUIMDxVUuTqRj-uaCtqP5oAUyLUIDvK_E8E4Ff1DCY-R3uuAZFQhT4zvheN6ytZkh-ytZkHiRwm3_0y26UcV-gb7O_qD6SNCK1gaMdKZUzap6JMU2OaQFpvLUh9golRNJW9e1VM_15Ry1NrfMsNvqFPb_KVahar83JrF0XG5SZKbMbkQ2J4RmVVPfiZHLWuMGBSxrrCZdC3xneVmHBZDvA4j_9MYiSOtwQhwm1khFlMqRUs_joiJrRcawmGqQ-hL7yQ', badge: 'Sale', badgeColor: 'bg-red-500' },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen pb-12">
      {/* Vendor Header Banner */}
      <div className="relative h-64 md:h-80 w-full bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA7tYv02zQ9b1Y_K5_1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        {/* Vendor Profile Card */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
              <div className="size-32 rounded-2xl border-4 border-white dark:border-slate-800 shadow-lg overflow-hidden bg-white shrink-0">
                <img alt="TechZone Official Logo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXVsyJTyXVD190Bov6RzrJKDKUA77IbWfBgXn3Qw5mArJkyVbbM3bt2cS1GOShXjaCyLFVJR8_FI13Jj9j2y-vI4VLAzUXA1vYAMIdlOty3Ts2dVKXRy5815p1hignfJAArY8d_4rNtAKfzWqm6UWdHlzZgk2IDU0_xQ8SUa2WXH-FTUjT8VoC9qfSViLSg-FGBrYAI6WdqGtdgdBLBkijX5BiVkeXm849ygzjNOT_HIfQjZtwqFAVxG_XdDpn0bkdn6YMl0Ehdw" />
              </div>
              <div className="pt-2">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center justify-center md:justify-start gap-2 mb-2">
                  TechZone Official
                  <ShieldCheck className="size-6 text-blue-500" />
                </h1>
                <p className="text-slate-500 dark:text-slate-400 max-w-lg mb-4">
                  Premium electronics and gadgets for the modern tech enthusiast. Authorized dealer for top brands.
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="size-4 fill-current" />
                    <span className="font-bold text-slate-900 dark:text-white">4.9</span>
                    <span className="text-slate-500">(1.2k reviews)</span>
                  </div>
                  <span className="hidden sm:inline text-slate-300 dark:text-slate-600">•</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="size-4 text-slate-400" />
                    San Francisco, CA
                  </div>
                  <span className="hidden sm:inline text-slate-300 dark:text-slate-600">•</span>
                  <div className="flex items-center gap-1">
                    Joined 2021
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
                Follow Store
              </button>
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-6 py-3 rounded-xl font-bold hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                <Mail className="size-4" />
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* Vendor Navigation */}
        <div className="flex overflow-x-auto hide-scrollbar border-b border-slate-200 dark:border-slate-800 mb-8">
          <button className="px-6 py-4 text-sm font-bold text-primary border-b-2 border-primary whitespace-nowrap">
            Products (124)
          </button>
          <button className="px-6 py-4 text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white whitespace-nowrap transition-colors">
            Reviews
          </button>
          <button className="px-6 py-4 text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white whitespace-nowrap transition-colors">
            About
          </button>
          <button className="px-6 py-4 text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white whitespace-nowrap transition-colors">
            Policies
          </button>
        </div>

        {/* Vendor Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vendorProducts.map((product, i) => (
            <Link key={i} to="/product" className="group relative flex flex-col bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              {product.badge && (
                <div className="absolute top-3 left-3 z-10">
                  <span className={`${product.badgeColor} text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide shadow-sm`}>{product.badge}</span>
                </div>
              )}
              <div className="relative aspect-square bg-slate-100 dark:bg-slate-900 overflow-hidden p-4">
                <img className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500 mix-blend-multiply dark:mix-blend-normal" src={product.image} alt={product.name} />
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart({ ...product, vendor: 'TechZone Official', quantity: 1 });
                  }}
                  className="absolute bottom-4 right-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white dark:hover:bg-primary"
                >
                  <ShoppingCart className="size-5" />
                </button>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-slate-900 dark:text-white font-medium text-base leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-colors">{product.name}</h3>
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
  );
}
