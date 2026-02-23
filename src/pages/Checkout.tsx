import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Trash2, Minus, Plus, CreditCard, Lock, ArrowRight, CheckCircle2, ShoppingCart, ShieldCheck } from 'lucide-react';

export default function Checkout() {
  const { items, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const shipping = items.length > 0 ? 15.00 : 0;
  const tax = cartTotal * 0.08;
  const finalTotal = cartTotal + shipping + tax;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAuthenticated) {
      alert("Please sign in to complete your purchase.");
      return;
    }
    
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="size-10 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 text-center">Payment Successful!</h1>
        <p className="text-slate-500 dark:text-slate-400 text-center max-w-md mb-8">
          Thank you for your purchase. Your order #ORD-{Math.floor(Math.random() * 100000)} has been confirmed and will be shipped shortly.
        </p>
        <Link to="/" className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors">
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
        <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
          <ShoppingCart className="size-10 text-slate-400" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Your cart is empty</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/search" className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Cart Items & Forms */}
        <div className="lg:col-span-7 space-y-8">
          {/* Cart Items */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Order Summary</h2>
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 py-4 border-b border-slate-100 dark:border-slate-700 last:border-0 last:pb-0">
                  <div className="w-24 h-24 rounded-xl bg-slate-100 dark:bg-slate-900 overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-medium text-slate-900 dark:text-white line-clamp-2 pr-4">{item.name}</h3>
                      <span className="font-bold text-slate-900 dark:text-white whitespace-nowrap">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{item.vendor}</p>
                    
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1.5 text-slate-500 hover:text-primary dark:text-slate-300">
                          <Minus className="size-4" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-slate-900 dark:text-white">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1.5 text-slate-500 hover:text-primary dark:text-slate-300">
                          <Plus className="size-4" />
                        </button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-sm font-medium text-red-500 hover:text-red-600 flex items-center gap-1">
                        <Trash2 className="size-4" /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Shipping & Payment Form (Dummy) */}
          <form id="checkout-form" onSubmit={handleCheckout} className="space-y-8">
            <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Shipping Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                  <input required type="text" defaultValue="John Doe" className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-2.5 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow" />
                </div>
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Address</label>
                  <input required type="text" defaultValue="123 Main St, Apt 4B" className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-2.5 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">City</label>
                  <input required type="text" defaultValue="San Francisco" className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-2.5 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">ZIP Code</label>
                  <input required type="text" defaultValue="94105" className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-2.5 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow" />
                </div>
              </div>
            </section>

            <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <CreditCard className="size-5 text-primary" /> Payment Method
              </h2>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Card Number</label>
                  <input required type="text" placeholder="•••• •••• •••• ••••" defaultValue="4242 4242 4242 4242" className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-2.5 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow font-mono" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Expiry Date</label>
                    <input required type="text" placeholder="MM/YY" defaultValue="12/25" className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-2.5 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow font-mono" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">CVC</label>
                    <input required type="text" placeholder="•••" defaultValue="123" className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-2.5 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow font-mono" />
                  </div>
                </div>
              </div>
            </section>
          </form>
        </div>

        {/* Right Column: Order Summary & Pay Button */}
        <div className="lg:col-span-5">
          <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 sticky top-24">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Order Totals</h2>
            
            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between text-slate-600 dark:text-slate-300">
                <span>Subtotal ({items.length} items)</span>
                <span className="font-medium text-slate-900 dark:text-white">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-300">
                <span>Shipping</span>
                <span className="font-medium text-slate-900 dark:text-white">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-300">
                <span>Estimated Tax</span>
                <span className="font-medium text-slate-900 dark:text-white">${tax.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mb-8">
              <div className="flex justify-between items-end">
                <span className="text-base font-bold text-slate-900 dark:text-white">Total</span>
                <span className="text-2xl font-black text-slate-900 dark:text-white">${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <button 
              type="submit" 
              form="checkout-form"
              disabled={isProcessing}
              className="w-full flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  <Lock className="size-5" /> Pay ${finalTotal.toFixed(2)}
                </>
              )}
            </button>
            
            {!isAuthenticated && (
              <p className="text-center text-sm text-red-500 mt-4 font-medium">
                You must be signed in to complete your purchase.
              </p>
            )}
            
            <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-6 flex items-center justify-center gap-1">
              <ShieldCheck className="size-4" /> Secure encrypted checkout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
