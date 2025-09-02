"use client";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="relative min-h-[calc(100vh-5rem)] bg-slate-950 pt-20">
      {/* Background video */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <video
          className="h-full w-full object-cover pointer-events-none"
          poster="/Bonus.png"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/loginbg.mp4" type="video/mp4" />
        </video>
        {/* Theme gradient overlay (green/blue) */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/35 via-teal-500/25 to-sky-500/25 mix-blend-overlay" />
        {/* Darken for readability */}
        <div className="absolute inset-0 bg-slate-950/30" />
      </div>

      <section className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-10 mt-10 sm:mt-16 lg:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: form */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 text-sky-400 text-sm font-medium">
                  <svg className="size-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zm-7 9a7 7 0 0114 0H5z"/></svg>
                  <span>Welcome back</span>
                </div>
                <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-white">Sign in to your account</h1>
                <p className="mt-1 text-sm text-gray-300">New here? <Link href="/register" className="text-sky-400 hover:text-sky-300">Create an account</Link></p>

                <form className="mt-6 space-y-4" onSubmit={(e)=>e.preventDefault()}>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-300">Email</label>
                    <div className="mt-1 relative">
                      <input id="email" name="email" type="email" required placeholder="you@example.com" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500/60" />
                      <span className="pointer-events-none absolute inset-y-0 right-3 my-auto text-gray-400">
                        <svg className="size-5" viewBox="0 0 24 24" fill="currentColor"><path d="M2.25 6.75l9 6 9-6"/><path d="M2.25 6.75v10.5a1.5 1.5 0 001.5 1.5h16.5a1.5 1.5 0 001.5-1.5V6.75" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
                      </span>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-wider text-gray-300">Password</label>
                    <div className="mt-1 relative">
                      <input id="password" name="password" type={showPassword?"text":"password"} required placeholder="••••••••" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500/60" />
                      <button type="button" onClick={()=>setShowPassword(v=>!v)} className="absolute inset-y-0 right-3 my-auto text-gray-300 hover:text-white" aria-label="Toggle password visibility">
                        {showPassword ? (
                          <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3l18 18"/><path d="M10.58 10.58a3 3 0 104.24 4.24"/><path d="M9.88 5.52A9.4 9.4 0 0112 5c5.52 0 9 4.5 9 6-1.02 1.7-3.69 4.82-7.5 5.76"/></svg>
                        ) : (
                          <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 text-sm text-gray-300">
                      <input type="checkbox" className="size-4 rounded border-white/20 bg-white/10" />
                      Remember me
                    </label>
                    <Link href="#" className="text-sm text-sky-400 hover:text-sky-300">Forgot password?</Link>
                  </div>

                  <button type="submit" className="w-full rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-4 py-3 shadow-lg shadow-emerald-600/25">Login</button>

                  <div className="flex items-center gap-3">
                    <div className="h-px w-full bg-white/10" />
                    <span className="text-xs uppercase tracking-wider text-gray-400">or</span>
                    <div className="h-px w-full bg-white/10" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button type="button" className="rounded-xl border border-white/10 bg-white/5 text-white px-3 py-2 hover:bg-white/10">Google</button>
                    <button type="button" className="rounded-xl border border-white/10 bg-white/5 text-white px-3 py-2 hover:bg-white/10">Apple</button>
                  </div>
                </form>
              </div>

              {/* Right: welcome panel */}
              <div className="relative overflow-hidden p-6 sm:p-8 bg-gradient-to-br from-slate-900/60 to-slate-900/20">
                <div className="absolute -inset-10 opacity-40 blur-2xl" aria-hidden>
                  <div className="size-96 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-500 to-sky-500 animate-pulse" />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-center">
                  <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">Welcome.</h2>
                  <p className="mt-3 text-gray-300 max-w-md">Trade Forex, Crypto, Indices and more with tight spreads and deep liquidity. Sign in to access your dashboard, manage accounts and continue where you left off.</p>
                  <p className="mt-6 text-sm text-gray-400">Not a member? <Link href="/register" className="text-sky-400 hover:text-sky-300">Sign up now</Link></p>
                </div>
              </div>
            </div>
          </div>

          {/* On large screens add a subtle side spotlight card for balance */}
          <div className="hidden lg:block relative rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-xl p-8">
            <div className="absolute -top-10 -right-10 size-56 rounded-full bg-emerald-500/30 blur-2xl" />
            <div className="absolute -bottom-12 -left-10 size-56 rounded-full bg-sky-500/20 blur-2xl" />
            <div className="relative">
              <h3 className="text-white font-semibold text-xl">Why sign in?</h3>
              <ul className="mt-4 space-y-2 text-gray-300 text-sm list-disc list-inside">
                <li>Track positions and manage your portfolio</li>
                <li>Access exclusive analytics & education</li>
                <li>Faster deposits and withdrawals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
