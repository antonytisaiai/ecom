import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ChevronRight, Star, ShoppingCart, Heart, Store, ShieldCheck, Undo2, Truck, Minus, Plus } from 'lucide-react';

export default function Product() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('Midnight Black');
  const [style, setStyle] = useState('Wireless (XM5)');

  const product = {
    id: 'sony-wh-1000xm5',
    name: 'Sony WH-1000XM5 Wireless Noise Canceling Headphones',
    price: 348.00,
    vendor: 'TechGiant Official',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtIY_weR0NU6R_-xIDNYqLEmh7OZetnX-I5sl5Dz8p7naRFqCvphaqalHrRSRPoXp7BHIxwFNnZnbUosVqEOT7hVxejQn2t5iKoKdqWzlbwtMJWXY_YjzrPRW1ZSgyTn9pm61XILK_zQ2JZMnJB8VJLODVCA6fXvFz5V2gEnTVUfdGNBxNToc0O0zm_t9wzqR1ND7giwGZjxlg9cSPw45bb1sSxxF_5-14preEdjo4gDBup_pw8qO6NcSKTzCB9ZppbgoyOFPmag'
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
      color,
      size: style
    });
    navigate('/checkout');
  };

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 py-8 w-full">
      <nav className="flex mb-6 text-sm font-medium text-slate-500 dark:text-slate-400">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link className="hover:text-primary hover:underline" to="/">Home</Link></li>
          <li><ChevronRight className="size-4" /></li>
          <li><Link className="hover:text-primary hover:underline" to="/search">Electronics</Link></li>
          <li><ChevronRight className="size-4" /></li>
          <li><Link className="hover:text-primary hover:underline" to="/search">Audio</Link></li>
          <li><ChevronRight className="size-4" /></li>
          <li aria-current="page" className="text-slate-900 dark:text-white">Headphones</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Gallery */}
        <div className="flex flex-col gap-6">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white p-8 shadow-sm dark:bg-slate-800 group">
            <img alt="Sony Headphones Hero Shot" className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-110 cursor-zoom-in" src={product.image} />
          </div>
          <div className="grid grid-cols-5 gap-4">
            <button className="aspect-square rounded-lg border-2 border-primary bg-white p-2 shadow-sm dark:bg-slate-800 dark:border-primary">
              <img alt="Front view" className="h-full w-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIOAcEukt0yhopU9naVg_FLVvAafGs7CJaNb7_bRHEBsWm3GCJZSESByWfopMYhcx5ckt1YQZ7TGPsKdD1styTic6xpeYVnvv6b5PIEgTYx2mXaE0r43TG8h9tVclpELyNInnol15OczfmGJzrfWjr18p0FXVH3LQSjvsmWpe-4Sij-RujJdkmk-szynqwaN1RKJFhAFIldnbYQ1gJB414QK609mbWCRigciFE10zXYbSm1-R1NGU7Sux8UcKPx23kSshDvQFS9w"/>
            </button>
            <button className="aspect-square rounded-lg border-2 border-transparent bg-white p-2 shadow-sm hover:border-slate-300 dark:bg-slate-800 dark:hover:border-slate-600 transition-colors">
              <img alt="Side view" className="h-full w-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyiTycc3dQCU6GDpeJH2T_zXti8lhC-BOX24tOoBxVuq72mo6SCjDNLq97i2BRQPGWsYQGUMTcwhSKhSyINGSzwaG4g67azeYmNhn4cq2X16XZ0YAeQpc8zxTPepIO_lPEULyM_fgAMlOpsMEmEuyBrwys72KVivAKNUvy18KBf4F-k7sToybXIZcFEDKCmgMs5U5F4ALuJ6W1MiH2gVBAa8NHVjAiqDBv10-yORU8oS757R7d8aodqzb2QPqASr5-ENauT1rnFw"/>
            </button>
            <button className="aspect-square rounded-lg border-2 border-transparent bg-white p-2 shadow-sm hover:border-slate-300 dark:bg-slate-800 dark:hover:border-slate-600 transition-colors">
              <img alt="Folded view" className="h-full w-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVo-ngKkkkw8rVkJhvVvXKv8LTBMgaobiO4dDTsZ6Oi0h9hPCAYaw321YfYdeHXbc6J5fiYIP-xgpGeZFvmznH-Fj_S6KuxU8BZNHsQ1SSkBee7j5BZCUvdNZU1ATkyaaGXnnPiMNYsLiQ7KqVHGYgkz_dHLqPUPSUiFKbHVQmyZiIH1rtnYDIkQcQH3DjpNG4Zz4rUH6iQ8jcP9Ud9Rdp4ACoQUeieHPSYtToLmNMErwoA0pSNgksMrRkovfzWZBbX6xR08Yeag"/>
            </button>
            <button className="aspect-square rounded-lg border-2 border-transparent bg-white p-2 shadow-sm hover:border-slate-300 dark:bg-slate-800 dark:hover:border-slate-600 transition-colors">
              <img alt="Lifestyle view" className="h-full w-full object-cover rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8I3CLrcONLjT8faE_UirsioIhBOGpXL7jvQDxDjYcL03cTIKgiBcuMJeJtEJNX8vywbyi5cOA28uUzp9PCMNM3j0-bmAHXTNuLQd8UPRUFxEYm_NgNf4E1vMT74Zjnb9r2VZxojn9uauhFUXxlwg93mujLfJTYZ99sZbtHkvoGGqFW8KKt4abhNsZO18BsIaYIWNqMVuXYifQcian-bhe61CF4SfnuVXyhdiHM96RcTqbKn_t5z8gFvWyZIG50dUrU6IOl_gw0g"/>
            </button>
            <button className="relative aspect-square flex items-center justify-center rounded-lg border-2 border-transparent bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 transition-colors">
              <span className="text-xs font-semibold">+3</span>
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-2 flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
              <ShieldCheck className="mr-1 size-3.5" /> 
              Authorised Dealer
            </span>
            <span className="text-sm text-slate-500 dark:text-slate-400">Sold by <Link to="/vendor" className="font-medium text-primary hover:underline">TechGiant Official</Link></span>
          </div>
          <h1 className="mb-2 text-3xl font-bold leading-tight text-slate-900 dark:text-white md:text-4xl">{product.name}</h1>
          
          <div className="mb-6 flex items-center gap-4">
            <div className="flex items-center gap-1 text-yellow-400">
              <Star className="size-5 fill-current" />
              <Star className="size-5 fill-current" />
              <Star className="size-5 fill-current" />
              <Star className="size-5 fill-current" />
              <Star className="size-5 fill-current opacity-50" />
            </div>
            <span className="text-sm font-medium text-slate-900 dark:text-white">4.8</span>
            <span className="text-sm text-slate-500 dark:text-slate-400 border-l border-slate-300 pl-4 dark:border-slate-700 hover:text-primary cursor-pointer underline-offset-4 hover:underline">2,453 reviews</span>
          </div>

          <div className="mb-8 flex items-end gap-3">
            <span className="text-4xl font-bold text-slate-900 dark:text-white">${product.price.toFixed(2)}</span>
            <span className="mb-1 text-lg text-slate-400 line-through dark:text-slate-500">$399.00</span>
            <span className="mb-2 rounded bg-red-100 px-2 py-0.5 text-xs font-bold uppercase text-red-600 dark:bg-red-900/30 dark:text-red-400">13% OFF</span>
          </div>

          <hr className="mb-8 border-slate-200 dark:border-slate-800"/>

          <div className="flex flex-col gap-6">
            <div>
              <h3 className="mb-3 text-sm font-medium text-slate-900 dark:text-white">Color: <span className="font-normal text-slate-500">{color}</span></h3>
              <div className="flex gap-3">
                <button onClick={() => setColor('Midnight Black')} className={`relative size-10 rounded-full bg-slate-900 shadow-sm ${color === 'Midnight Black' ? 'ring-2 ring-primary ring-offset-2 ring-offset-white dark:ring-offset-slate-900' : ''}`}></button>
                <button onClick={() => setColor('Silver')} className={`relative size-10 rounded-full bg-slate-200 shadow-sm dark:bg-slate-400 ${color === 'Silver' ? 'ring-2 ring-primary ring-offset-2 ring-offset-white dark:ring-offset-slate-900' : 'hover:ring-2 hover:ring-slate-300 hover:ring-offset-2 hover:ring-offset-white dark:hover:ring-slate-600'}`}></button>
                <button onClick={() => setColor('Navy')} className={`relative size-10 rounded-full bg-blue-900 shadow-sm dark:bg-blue-800 ${color === 'Navy' ? 'ring-2 ring-primary ring-offset-2 ring-offset-white dark:ring-offset-slate-900' : 'hover:ring-2 hover:ring-blue-300 hover:ring-offset-2 hover:ring-offset-white dark:hover:ring-blue-600'}`}></button>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-slate-900 dark:text-white">Style</h3>
                <button className="text-sm font-medium text-primary hover:underline">Compare models</button>
              </div>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => setStyle('Wireless (XM5)')} className={`rounded-lg px-4 py-2 text-sm font-medium shadow-sm ${style === 'Wireless (XM5)' ? 'border-2 border-primary bg-primary/5 text-primary dark:bg-primary/20' : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'}`}>
                  Wireless (XM5)
                </button>
                <button onClick={() => setStyle('Wired')} className={`rounded-lg px-4 py-2 text-sm font-medium shadow-sm ${style === 'Wired' ? 'border-2 border-primary bg-primary/5 text-primary dark:bg-primary/20' : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'}`}>
                  Wired
                </button>
                <button className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-400 shadow-sm cursor-not-allowed dark:border-slate-800 dark:bg-slate-900 dark:text-slate-600 relative overflow-hidden">
                  Earbuds
                  <div className="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-black/50 backdrop-blur-[1px]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900 dark:text-white">Sold Out</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <div className="flex items-center rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 text-slate-500 hover:text-primary dark:text-slate-400">
                <Minus className="size-5" />
              </button>
              <input className="w-12 border-none bg-transparent p-0 text-center font-bold text-slate-900 focus:ring-0 dark:text-white appearance-none" min="1" type="number" value={quantity} readOnly />
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 text-slate-500 hover:text-primary dark:text-slate-400">
                <Plus className="size-5" />
              </button>
            </div>
            <button onClick={handleAddToCart} className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-base font-bold text-white shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5 hover:shadow-primary/40 focus:ring-4 focus:ring-primary/30">
              <ShoppingCart className="size-5" />
              Add to Cart
            </button>
            <button className="flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm hover:bg-slate-50 hover:text-red-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
              <Heart className="size-5" />
            </button>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2 text-center text-xs text-slate-500 dark:text-slate-400">
            <div className="flex flex-col items-center gap-1 rounded bg-slate-50 p-2 dark:bg-slate-800/50">
              <Truck className="size-5 text-primary" />
              Free 2-Day Shipping
            </div>
            <div className="flex flex-col items-center gap-1 rounded bg-slate-50 p-2 dark:bg-slate-800/50">
              <Undo2 className="size-5 text-primary" />
              30-Day Free Returns
            </div>
            <div className="flex flex-col items-center gap-1 rounded bg-slate-50 p-2 dark:bg-slate-800/50">
              <ShieldCheck className="size-5 text-primary" />
              2-Year Warranty
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Left: Description & Specs */}
        <div className="lg:col-span-8">
          <div className="mb-10">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">Product Overview</h2>
            <div className="prose prose-slate max-w-none dark:prose-invert">
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                The Sony WH-1000XM5 headphones rewrite the rules for distraction-free listening. With two processors controlling 8 microphones, Auto NC Optimizer for automatically optimizing noise canceling based on your wearing conditions and environment, and a specially designed driver unit, these headphones deliver industry-leading noise canceling and exceptional sound quality.
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-slate-600 dark:text-slate-300">
                <li>Industry-leading noise cancellation optimized to you</li>
                <li>Magnificent Sound, engineered to perfection</li>
                <li>Crystal clear hands-free calling</li>
                <li>Up to 30-hour battery life with quick charging (3 min charge for 3 hours of playback)</li>
                <li>Ultra-comfortable, lightweight design with soft fit leather</li>
              </ul>
            </div>
          </div>
          <div className="mb-10 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
            <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">Technical Specifications</h3>
            <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <div className="flex justify-between border-b border-slate-100 py-2 dark:border-slate-700">
                <span className="text-slate-500 dark:text-slate-400">Battery Life</span>
                <span className="font-medium text-slate-900 dark:text-white">30 Hours</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 py-2 dark:border-slate-700">
                <span className="text-slate-500 dark:text-slate-400">Weight</span>
                <span className="font-medium text-slate-900 dark:text-white">250g</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 py-2 dark:border-slate-700">
                <span className="text-slate-500 dark:text-slate-400">Bluetooth</span>
                <span className="font-medium text-slate-900 dark:text-white">Version 5.2</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 py-2 dark:border-slate-700">
                <span className="text-slate-500 dark:text-slate-400">Charging</span>
                <span className="font-medium text-slate-900 dark:text-white">USB-C</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 py-2 dark:border-slate-700">
                <span className="text-slate-500 dark:text-slate-400">Driver Unit</span>
                <span className="font-medium text-slate-900 dark:text-white">30mm</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 py-2 dark:border-slate-700">
                <span className="text-slate-500 dark:text-slate-400">Voice Assistant</span>
                <span className="font-medium text-slate-900 dark:text-white">Alexa / Google</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Vendor Card */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <div className="h-24 w-full bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              <div className="relative px-6 pb-6 pt-0">
                <div className="-mt-10 mb-4 flex justify-between items-end">
                  <div className="flex h-20 w-20 items-center justify-center rounded-xl border-4 border-white bg-white shadow-md dark:border-slate-800 dark:bg-slate-900">
                    <Store className="size-10 text-primary" />
                  </div>
                  <button className="rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary hover:bg-primary/20 transition-colors">
                    Follow
                  </button>
                </div>
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-1">
                    TechGiant Official 
                    <ShieldCheck className="size-5 text-blue-500" />
                  </h3>
                  <div className="mt-1 flex items-center gap-2 text-sm">
                    <div className="flex items-center text-yellow-400">
                      <Star className="size-4 fill-current" />
                      <span className="font-bold text-slate-700 dark:text-slate-200 ml-1">4.9</span>
                    </div>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500 dark:text-slate-400">98% Positive Feedback</span>
                  </div>
                </div>
                <Link to="/vendor" className="block w-full text-center rounded-lg border border-slate-200 bg-white py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-primary dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 transition-colors">
                  Visit Storefront
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
