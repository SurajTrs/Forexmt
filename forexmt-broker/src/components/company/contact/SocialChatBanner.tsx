"use client";

export default function SocialChatBanner() {
  return (
    <section className="py-6 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-2xl bg-slate-900 text-white ring-1 ring-slate-800 p-6 sm:p-8 shadow-sm">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold">Let’s Chat on Social Media</h3>
            <p className="mt-1 text-slate-300">Chat with us through your preferred channel</p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/profile.php?id=61579959541051"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
                </svg>
              </a>
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/forex__mt/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm7-1a1 1 0 100 2 1 1 0 000-2zM7 4a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 4a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
              </a>
              <a
                aria-label="WhatsApp"
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M20.5 3.5A11 11 0 003.5 20.5L2 22l1.6-.5A11 11 0 1020.5 3.5zM12 5a7 7 0 00-6.05 10.5l-.38 1.26 1.3-.41A7 7 0 1012 5zm3.86 9.2c-.21-.1-1.23-.61-1.42-.68-.19-.07-.33-.1-.47.1-.14.2-.54.68-.66.82-.12.14-.24.16-.45.06-.21-.1-.88-.32-1.68-1.01-.62-.55-1.03-1.22-1.15-1.43-.12-.21-.01-.33.09-.43.09-.09.21-.24.32-.36.11-.12.14-.2.21-.34.07-.14.03-.26-.02-.36-.06-.1-.47-1.14-.64-1.56-.17-.4-.34-.34-.47-.35h-.4c-.14 0-.36.05-.55.26-.19.2-.73.71-.73 1.73 0 1.02.75 2 0.86 2.14.1.14 1.47 2.25 3.56 3.08 0 0 1.38.6 2.09.74.22.04.42.03.58.02.18-.01.57-.23.65-.46.08-.23.08-.43.06-.47-.02-.04-.08-.06-.29-.16z" />
                </svg>
              </a>
              <a
                aria-label="Telegram"
                href="https://t.me/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M9.04 15.47l-.37 3.99c.53 0 .77-.23 1.05-.51l2.52-2.4 5.22 3.81c.96.53 1.64.25 1.89-.89l3.43-16.1h.01c.3-1.4-.5-1.95-1.43-1.61L1.5 9.86c-1.37.53-1.35 1.3-.23 1.64l4.65 1.45 10.78-6.8c.51-.33.98-.15.6.18l-8.26 7.14z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
