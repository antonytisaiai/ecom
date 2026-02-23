import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, ArrowRight, Star, ShoppingCart, Store } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Home() {
  const { addToCart } = useCart();

  const products = [
    { id: '1', name: 'Minimalist Analog Watch White', price: 129.00, oldPrice: 160.00, vendor: 'Urban Threads', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlj2ZsrpuzryMVW1FnLtZEdJNcmu7j6DqfpA7gS9wH9Hoa97Rb3LC3T2bKo_yxrYjICbjKaV-AId8e_f7BtOyhKNUOsisISZlyNOmyJy8mWI_50EF_FeDayLVzVwoneAW0XeoZ2TgBMZDw3TTvBEVm2jWETwDcJB0Y21k5B3O8gfXhIDsv3CWqX2wtLk1NY08e6j1-9UbymFUARoMdFvjHRG8AIDPcc7BR65RB5msFbX6s1PLSK4hpdZ4dv8uF1a_rglIyz-23YQ', badge: '-20%', badgeColor: 'bg-red-500' },
    { id: '2', name: 'Professional Camera Lens 50mm', price: 450.00, vendor: 'TechZone', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx-_NL3ytO1j31kDcfM7caZJPMtF66_bFnjHHt6yRe8xllME3DuW9Os6VtFzm8Qk9H69mynLTGzPZRiijGayRKk_xgaGS7LMSG5NAb7IKaOxral4dQn22RiUbM93z1m3e-vBOWChiqPmywxyD3fcBEqd3kb4cdGyqSYNPzpc5w5769tFqW1FedQafk-9T1VjCQMl79HimdYeB0v3z2id8LsrBa8M2IQi1SNRqsh10r4APuW9jkc5bLJVzHro__8a0dVsqJVCfxlg' },
    { id: '3', name: 'Leather Shoulder Bag Brown', price: 89.99, vendor: 'Bag & Co', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDL3WBO2EJC4CdkZhU3XcBPD11xZXHQDJVmTYF4jgtZMZbqrBQLq9BLJaYL5gyhX2ZGIu-MXt_rAIZ5QhCLSHuSCKXMIfBMzGHcP3JbUTeVq2TrgVilu74xMYchWJrnJSvyUAqrHrEwYVhMdTxcdsg-1pnfq7-QqanR1zGCv4ilF1NIcUBmldJy460rsU_zQ-pCGphEf0fVIVNa732EoJA_jvGg9UzT3cB3AE6Fa1iq8A69gdV7xEf4tFgmPd4n9OjL-EGuRVfJtA', badge: 'New', badgeColor: 'bg-green-500' },
    { id: '4', name: 'Modern Ceramic Plant Pot', price: 24.50, vendor: 'Green Living', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARW-eeiO-ZxwSWtGzFupcWkGepvF46OKG-64e9FmkvpxIC_oeZ9j_zND97q1wC_7RNFu79D_s5LVXWdk6XiMNmcmgHdpi9eAikYN54cdnpYRiF5fbvf3kPErrziqRT-AkuwwUHTtfghkEYIl93ot3-ZWcvvDY8ZqzxwDr3d7sGckN5m2BywMRBRfMe_f1qpVvvaKHfBktj4BGLzb74jrW_3AK966Gthdliwn-jjIYVPhg-mZdfYXHPpOsMGaOVdqd-hNYjZVRDjA' },
  ];

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-8 w-full">
      {/* Hero Section */}
      <div className="@container mb-12">
        <div className="relative overflow-hidden rounded-2xl bg-slate-900 text-white shadow-xl">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuADUDd7q1r73nRyuBkke4AW1pOQukq8IfnVtm1Kw753FWzK9FHYFS_HLWttv5-s4P4cq9UNMmmXxJVxY9kHi8OVXyjySO2Z0ph5bgyoYllRxroTokOcRO5HIIiKPoagsR1IyHw6MNaKPxSb-6g6u5peoLG2SVJSJg38He6vWF5qoJ1MCDj6yiVPrr8N8tlmk_Jnvsow0FnaY3WVkeOwMSfHkm2w84KP3Z-MGpd7gcwKDL0dUkzcGs5eggU3UldRgqP5zSMLJWySrw')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
          <div className="relative z-10 flex min-h-[480px] flex-col justify-center gap-6 px-10 py-12 md:px-16 lg:w-1/2">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              <Flame className="size-4" />
              Summer Sale
            </div>
            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-6xl">
              Summer Collection <span className="text-primary">2024</span>
            </h1>
            <p className="text-lg text-slate-200 md:text-xl font-light">
              Discover the latest trends from top independent sellers. Up to 50% off on selected items this week.
            </p>
            <div className="flex gap-4 pt-4">
              <Link to="/search" className="flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/30 transition hover:bg-primary/90 hover:-translate-y-0.5">
                Shop Now
              </Link>
              <Link to="/search" className="flex h-12 items-center justify-center rounded-lg bg-white px-8 text-base font-bold text-slate-900 transition hover:bg-slate-100 hover:-translate-y-0.5">
                View Lookbook
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Categories */}
      <section className="mb-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Trending Categories</h2>
          <Link to="/search" className="group flex items-center text-sm font-semibold text-primary hover:underline">
            View All 
            <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {[
            { name: 'Sneakers', count: '1.2k', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlA68Jfhosicoj6o4Ax6sizEvLBbjRjxtDdkE8krwBKPZr1F3cAvgJ6HPB0ObwbUUp3PVC6YapPtwl5-hB4wu8-P04OmcYTRDkS-D24pzj9w8QjpxaLWt8YrKAq0kMaqY_8Pq4CTy29FHh8GZqd6Xkn-6EdBc5E1ae7LLvr0Tdwi7Yo5QnLmwhMX00-xU846f3-yfCzshhRgmdRmYEoa1xCqkmpPyKoAscT1VQkxXGTYpZRPZwYmo-E-OiRehJnBKvj9mnFm171g' },
            { name: 'Electronics', count: '850', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjo7-rkppfjoB8436LE74eUyjIpDWbIoH0D9-h4uWdHV4IJ5rMNQ-zvSpEYZZjNi-nYw2PD8Macjw46uv8GF6LlzPQxggNwLAkA42TG6BxGChmT4CUDfrjCt5vqBgFrUNb5JX1cf2nkDQvG-m02tyc9C0hmSyY1v2mRBSX8yWDGQXpGjtySASyJX-L_fepqWGMqJ72vbOfZHL_4C7j-62fvsAhV44GqHLZY4YBZjTbdZjdAHZ_UlRbqKI91wg8mu_w0Xo4Rg1LzQ' },
            { name: 'Sports', count: '2.4k', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaF3Ai6m-6hKvtd6s_wMCxUeKdgCH4ubToO3JhTgqeKvN21Eud2lI8LoItkuLI8m2FOzilXhGg2KCq50kHR9XhY5ZtPnNTvP4ZZKscqzSXthUTp6Mm4_i91oaCSvWHW5fWt4iUe4mhOYkJA01w1M45je4objx2JQZwK4i308WpGrgd5q1kXkOsqkaSmVvqax46UhUXZHSuJbDxzLHFr7FRejksMgdNHdt-LlST8YzZ7a108X67TVQp0py-jUbSv2O0A-UZ307Qpw' },
            { name: 'Beauty', count: '540', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0aogsae2_AGK_8Fv2eA5P9agK09l3ogqq6EPe1RHVdb3V9QUBdMZ-hGa7WzbFEK47HFj3raiJZoj-7rw9eg1tQAigCEqFtBCTNCVgLTycsW2NzJkZD83p790dfNc9GQjd-W5Nt9MNW5RnULcbml9tkT3bKIOIDStiGy3_4kZQFcwy76JZv69tBZgU4WGYUf7gXVUo2kgnL5lAb4-2C1f_5z-vdyV_FMK_YxG38L81a1UvJebDLfJ_miZvf-gm4CLA7p98JrR5QA' },
            { name: 'Home', count: '3.1k', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGpn7P6S8xgcJUSeX_-TzNZbR0i8502OPD95bXEriO9oywi_5O4XJER5SUK_W85Z9Irz4ygGnGXglays9mkb2n29rp8IwTysBGa4dnrR6CIrINee5TKEzSHrrdaDC5v-axwIwVIWeMS88ouQwkNVxm0TuU1zIt8sw2mYnDfVcSjZqaZ_sM69bcXDQm8jBXbx-StCy7hQsvShlDKU0sfx1dT4ccfwg0FlcMBhC_MN0BC8NOyJBw5DO2iDpkPFzw5YaibJLZIDUtCg' },
            { name: 'Toys', count: '900', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAuw2667ZLlv4SVg16qVwFqJzxOAgytF9f4C_LfmWysiYeCS5uyjx-zT_w1knvfQt-aQJRoVyc6wBDIQry_67q4AHHFx2rQdlDQxkuCTy8BzGVES9ubF9FOm596xIjIWcujVANN_Wth133rBxfTMAwtm8NObnXSPwdRbLaaWEK6ztwDsaWjS758dTIk70dEFSytsx18zfu_7Gic3BlkmoOVJN_2IEpiWsyZNE21WExx7-zvb6WKeaV0ra9ljNs1fQj8EqMmFF0aQ' },
          ].map((cat, i) => (
            <Link key={i} to="/search" className="group flex flex-col gap-3 rounded-xl bg-white p-4 text-center shadow-sm transition hover:shadow-md hover:-translate-y-1 dark:bg-slate-800">
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-700">
                <img alt={cat.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-110" src={cat.img} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">{cat.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{cat.count} Products</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Vendors */}
      <section className="mb-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Featured Vendors</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: 'TechZone Official', rating: '4.9', reviews: '1.2k', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXVsyJTyXVD190Bov6RzrJKDKUA77IbWfBgXn3Qw5mArJkyVbbM3bt2cS1GOShXjaCyLFVJR8_FI13Jj9j2y-vI4VLAzUXA1vYAMIdlOty3Ts2dVKXRy5815p1hignfJAArY8d_4rNtAKfzWqm6UWdHlzZgk2IDU0_xQ8SUa2WXH-FTUjT8VoC9qfSViLSg-FGBrYAI6WdqGtdgdBLBkijX5BiVkeXm849ygzjNOT_HIfQjZtwqFAVxG_XdDpn0bkdn6YMl0Ehdw', imgs: ['https://lh3.googleusercontent.com/aida-public/AB6AXuDvk5F_f8mwrLHEpxUpHv-gWmQjKK2u6N00odwinxFLOLsDfNTo4xK0sv3v33j1orvhHIPcFFhWBp5Kxk4ge_QatZVajZmpQGzGRhDG3Cb2YKn4hRWBucH5fOLdBjA66PJlKqPLP439zlm4JARML7x5RfqIOTiv7JiHEtA1z_Xyp5mee_8OuuMuuQYEeUnoFH6Ap1xsla37OZxItYsz4EgOxUp0xsP1AVyLmRzUXtlqbzZvWuLIO5_X6zKYW-DH7GeLO0cmjHkvfQ', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZo_6PeRs02OhzkhCLD1TxYo3p_sluXTk_OLl0Kn4HDAHJ35qcXPSpC0FS1JOYGqFUU_ykCP7E2t7j8A9Zs5q3XBvHXRi-7mB1RQsVhWYLaP_uU61k_yafCLclIgisZBttFlkNzHMPidkf8gDyEN0hHf37X4TJkB9VZ8IIOGTG0jlg5UCpcJYRLOIuzviThELfDMeQGMzjFE3kj5uopx9avXl4ksvLP0OR1Naw66TqAl07IT6uN72eqnjkbe2_meXEo_YvrStycw', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCrFfU_dPVUIMDxVUuTqRj-uaCtqP5oAUyLUIDvK_E8E4Ff1DCY-R3uuAZFQhT4zvheN6ytZkh-ytZkHiRwm3_0y26UcV-gb7O_qD6SNCK1gaMdKZUzap6JMU2OaQFpvLUh9golRNJW9e1VM_15Ry1NrfMsNvqFPb_KVahar83JrF0XG5SZKbMbkQ2J4RmVVPfiZHLWuMGBSxrrCZdC3xneVmHBZDvA4j_9MYiSOtwQhwm1khFlMqRUs_joiJrRcawmGqQ-hL7yQ'], plus: '+24' },
            { name: 'Urban Threads', rating: '4.7', reviews: '856', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAd-qvS2J2jX-xWOcd_pzNtqasdT3Ln36VPvPfFZOExF6b8wiJgk7eqtNAqNeCiYycluw83NGjoIvrvOlygx8adc0F8kC8ULf7aJreHlNSO5rwuiT0c_nHf89powfCpZQieznFL_C5b7MytesLInn4kbVBrNhRc6E0j9Tqzl7KR7KCEbNzj9Mg6A-0Gt6023HxVSZ3-3XImhZf1u8krVDuaCexP7OYYc6gDy-_p1HVhT2RAv-lLOqbadsrt3Hk9YFBHdGl1yai6gw', imgs: ['https://lh3.googleusercontent.com/aida-public/AB6AXuCd3cfARlDq0vRYxFrNnU3OMKT_x6CCpG-rVgaJOImsax428R70TbY6skFxqCKVhHrVEkLTqJEFNjnnw_ZaHd-fB59xUDlF_nJssFOFfdCV52xmYEbtFS4uwX75T9B1KZ3tQHsAGez1XVkGXVQBHzC8LeP7edRrggMBUzbUc4cBmaBJO7CiOlJjOaHVuwCkK8mvzm1s8UDV4w6HgV5UyOEPqyHd3Or7HvnCaJAsnUqoO26nkVovw-4PoDFt_mhvGPtjSwC7I5KUlw', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmQEsaIzguDS1hxBP9wJ1wQ3DoTEQmJ4i6GNQ2V5SNSSD-UZsMF8ZrfpA7JTXXLQLuCN7zQHEOYOTAvzHCzpQivovuj-cv40WE-jWHqUCmTF4yAGnTiTCbaFCfrdgqOOCW_kjKbDK86UR2lutTJ8jbWgpWhn1tWoNZfrE1IsCjbmCF3YGdu8RnDZ_xSxI8sTW-NTlbR9SWnOKS_IZS4GtfmgMI--OZUixsrTHKgD9GBgru8GJQz43utl6dBu_y8fOGfJG0khdP9A', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFxVQWKIF23C6I15g4Tf6wGIreYZ-kD_N34guvm4gT-_1pviXSzKJ41ETmUdeIMTEAtprgTfS1EkDvhiqTME8EU3vuyucwgmhaRFTu8tw5s9CrVMQ1fp0DaaL_fLjgw60PMMl5SsEEmJ5GEYAICmXdTdA6kuvsp2u43SBp4CEP4uQT9UVnnOvjwffG48qHRuatTGftruhsu21OXgQhRPQAA658G4adJKulvqeqK-qzGG6pVQIe1ZTM0QKopajwGmlnwgW7rgU-aA'], plus: '+18' },
            { name: 'Green Living', rating: '4.8', reviews: '2.1k', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZekHLYycpbxRSQ5xinSK0ziqF793i9QylE2hfYauHe6NfaFMFs5KvTyGPX5LelFicqiifeQ9nWfWsCXP5UqXprLIwPHxW_Gmbje-xgZY_l5-XRMAUOl2d3kLX8WeWSAJ_Jg6A2Crc34lb4xs5wMfEpJ3CSnkW5v9CZfl3zbXA7MWRcrNo3UatJ6gGUO6maBx1JtU62HOnWj9rKIP4cm-ucpk6knWCKeH2Jxqq5Zp0ysJMEfBsi8d_4N_eE8GDgDUeEZcB5lRVWw', imgs: ['https://lh3.googleusercontent.com/aida-public/AB6AXuBPiRhbGNp59IUmEVoSFtMh5UQ-KHPwB6GIVlzh80CiurSh0I8igYBrNOQCyVXKfsJUqQts6tsG8Ryq6SGxo8RnUfUlhvdcJodg5jhUqAG-Ur7-2HIhZyx393R2yiu5fUfaQgXV_wUblyCKB65jxDMrKNPqzfKqBHf6YFCox5I7TKvDcxakzzQYsc3AEYmxq_XW00ULXqIAWLsBNrCSdWLK-dT5PUpwyAqLCg7G3Wn9QFnLNcVoxVzLeHn34fZedwwVJyABFo4PrQ', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhNkR_zfagCRWa_cGLNUdy-14NsNmmfNbpF2hl-mCSV2Z3gO9Eq216DiPhnkEWvZ9zXvltinDgSnXMRi07adCHHoVhL0uKJvQI2Dwf6EvYkBZ5gAD2tJKm9QCowSysCZYG17oE6kNAPNn9cwAXyt5K7euy17yqy6tm5ZmE2FbKb_qa6_dKvVkGErFog1DkrTKQqtBZEqwBjfJqMncYtWOdW-5Vwf3Z-yZhh5Xmd5Iz_jY_VZf7VUuJxgU3FvIQTWZ5Fs4oZ1MM_A', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBySVEsKbjFqwNNvPWpuCoCnBsPJPsBzU1b-8GERjsv_6qWhgmX-9xE_VSmCNgKx8gOAJWHZGA-GOqHbgnjvCVsN6ftKObfglBWm3wpFj7FbRxjkN1dcoAjO1Wf6qPnz_YGOzhqBWTTZpnMvJON9NJYxtPKVIuZkHHMTsJpmLjiNgHUuYVNTou5hzd2Kre_RoE4pdEeWJ4n-zX--9yMW2aVosTyo5g4UmUAd-MMxbzJTNssoZZUE0auo8HBBwiXoFrZOGdYx5LN9Q'], plus: '+42' },
          ].map((vendor, i) => (
            <div key={i} className="flex flex-col gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-4">
                <Link to="/vendor" className="size-14 overflow-hidden rounded-full border border-slate-100 dark:border-slate-700">
                  <img alt={vendor.name} className="h-full w-full object-cover" src={vendor.logo} />
                </Link>
                <div>
                  <Link to="/vendor" className="text-lg font-bold text-slate-900 dark:text-white hover:text-primary">{vendor.name}</Link>
                  <div className="flex items-center gap-1">
                    <Star className="size-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{vendor.rating}</span>
                    <span className="text-sm text-slate-500">({vendor.reviews} reviews)</span>
                  </div>
                </div>
                <button className="ml-auto rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-bold text-primary hover:bg-primary/20">Follow</button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <img alt="Product" className="aspect-square rounded-lg object-cover" src={vendor.imgs[0]} />
                <img alt="Product" className="aspect-square rounded-lg object-cover" src={vendor.imgs[1]} />
                <div className="relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                  <img alt="Product" className="h-full w-full object-cover opacity-50" src={vendor.imgs[2]} />
                  <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-slate-900 dark:text-white">{vendor.plus}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended For You */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Recommended for You</h2>
          <div className="hidden sm:flex gap-4">
            <button className="text-sm font-semibold text-primary underline decoration-2 underline-offset-4">New Arrivals</button>
            <button className="text-sm font-medium text-slate-500 hover:text-primary dark:text-slate-400">Best Sellers</button>
            <button className="text-sm font-medium text-slate-500 hover:text-primary dark:text-slate-400">Top Rated</button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, i) => (
            <Link key={i} to={`/product`} className="group relative flex flex-col rounded-xl bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:bg-slate-900">
              <div className="relative mb-3 aspect-[4/5] overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                {product.badge && (
                  <span className={`absolute left-2 top-2 z-10 rounded ${product.badgeColor} px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white`}>{product.badge}</span>
                )}
                <img alt={product.name} className="h-full w-full object-cover object-center" src={product.image} />
              </div>
              <div className="flex flex-1 flex-col">
                <div className="mb-1 flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                  <Store className="size-3" />
                  {product.vendor}
                </div>
                <h3 className="mb-1 text-base font-semibold leading-tight text-slate-900 line-clamp-2 dark:text-white">{product.name}</h3>
                <div className="mt-auto flex items-center justify-between pt-2">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-slate-900 dark:text-white">${product.price.toFixed(2)}</span>
                    {product.oldPrice && <span className="text-xs text-slate-400 line-through">${product.oldPrice.toFixed(2)}</span>}
                  </div>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart({ ...product, quantity: 1 });
                    }}
                    className="flex size-9 items-center justify-center rounded-lg bg-primary text-white transition hover:bg-primary/90"
                  >
                    <ShoppingCart className="size-5" />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      <div className="mt-12 flex justify-center">
        <Link to="/search" className="flex h-12 w-full max-w-[200px] items-center justify-center rounded-lg border border-slate-200 bg-white text-sm font-bold text-slate-900 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
          Load More Products
        </Link>
      </div>
    </div>
  );
}
