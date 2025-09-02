'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

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
                  <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm-7 9a7 7 0 0114 0H5z" />
                  </svg>
                  <span>Create your account</span>
                </div>
                <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  Sign up for free
                </h1>
                <p className="mt-1 text-sm text-gray-300">
                  Already have an account?{' '}
                  <Link href="/login" className="text-sky-400 hover:text-sky-300">
                    Sign in
                  </Link>
                </p>

                <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                        First name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-400 px-4 py-3 text-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                        Last name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-400 px-4 py-3 text-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-400 px-4 py-3 text-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        className="w-full rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-400 px-4 py-3 text-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition pr-12"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? (
                          <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          </svg>
                        ) : (
                          <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                      Confirm password
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        name="confirmPassword"
                        className="w-full rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-400 px-4 py-3 text-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition pr-12"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                        aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                      >
                        {showConfirmPassword ? (
                          <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          </svg>
                        ) : (
                          <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        checked={acceptedTerms}
                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                        className="h-4 w-4 rounded border-white/20 bg-white/10 text-sky-500 focus:ring-sky-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="text-gray-300">
                        I agree to the{' '}
                        <Link href="/terms" className="text-sky-400 hover:text-sky-300">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link href="/privacy" className="text-sky-400 hover:text-sky-300">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!acceptedTerms}
                    className={`w-full rounded-2xl ${
                      acceptedTerms
                        ? 'bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/25'
                        : 'bg-gray-600 cursor-not-allowed'
                    } text-white font-semibold px-4 py-3 transition-colors`}
                  >
                    Create account
                  </button>

                  <div className="flex items-center gap-3">
                    <div className="h-px w-full bg-white/10" />
                    <span className="text-xs uppercase tracking-wider text-gray-400">or</span>
                    <div className="h-px w-full bg-white/10" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 text-white px-3 py-2 hover:bg-white/10 transition-colors"
                    >
                      <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                      </svg>
                      Google
                    </button>
                    <button
                      type="button"
                      className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 text-white px-3 py-2 hover:bg-white/10 transition-colors"
                    >
                      <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.012 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.56-1.701z" />
                      </svg>
                      Apple
                    </button>
                  </div>
                </form>
              </div>

              {/* Right: welcome panel */}
              <div className="relative overflow-hidden p-6 sm:p-8 bg-gradient-to-br from-slate-900/60 to-slate-900/20">
                <div className="absolute -inset-10 opacity-40 blur-2xl" aria-hidden>
                  <div className="size-96 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-500 to-sky-500 animate-pulse" />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-center">
                  <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">Start trading today.</h2>
                  <p className="mt-3 text-gray-300 max-w-md">
                    Join thousands of traders who trust our platform for seamless trading, advanced tools, and 24/7 support.
                  </p>
                  <ul className="mt-6 space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <svg className="size-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Real-time market data
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="size-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Advanced trading tools
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="size-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      24/7 customer support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right side panel */}
          <div className="hidden lg:block relative rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-xl p-8">
            <div className="absolute -top-10 -right-10 size-56 rounded-full bg-emerald-500/30 blur-2xl" />
            <div className="absolute -bottom-12 -left-10 size-56 rounded-full bg-sky-500/20 blur-2xl" />
            <div className="relative">
              <h3 className="text-white font-semibold text-xl">Why choose us?</h3>
              <ul className="mt-4 space-y-2 text-gray-300 text-sm list-disc list-inside">
                <li>Secure and regulated platform</li>
                <li>Low trading fees and tight spreads</li>
                <li>Fast deposits and withdrawals</li>
                <li>Educational resources and analysis</li>
                <li>Mobile trading on the go</li>
              </ul>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs text-gray-400">Already have an account?</p>
                <Link
                  href="/login"
                  className="mt-2 inline-flex items-center text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors"
                >
                  Sign in to your account
                  <svg className="ml-1 size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
