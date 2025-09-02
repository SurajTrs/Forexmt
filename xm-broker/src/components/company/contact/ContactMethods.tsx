"use client";

function IconChat() {
  return (
    <svg className="h-5 w-5 text-slate-700" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M18 10c0 3.314-3.582 6-8 6-.702 0-1.375-.07-2.01-.2L3.5 17.5 4.2 14C2.86 12.997 2 11.578 2 10c0-3.314 3.582-6 8-6s8 2.686 8 6z"/>
    </svg>
  );
}
function IconPhone() {
  return (
    <svg className="h-5 w-5 text-slate-700" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M2.003 5.884c.06-1.07.887-1.95 1.956-2.05l1.71-.16c.99-.092 1.9.54 2.2 1.49l.53 1.66a2 2 0 01-.45 1.93l-.91.91a10.97 10.97 0 004.1 4.1l.91-.91a2 2 0 011.93-.45l1.66.53c.95.3 1.58 1.21 1.49 2.2l-.16 1.71c-.1 1.07-.98 1.9-2.05 1.96-8.51.48-15.58-6.59-15.1-15.1z"/>
    </svg>
  );
}
function IconMail() {
  return (
    <svg className="h-5 w-5 text-slate-700" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M2.5 4A1.5 1.5 0 001 5.5v9A1.5 1.5 0 002.5 16h15a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0017.5 4h-15zm.74 2l6.26 4.175L15.76 6H3.24z"/>
    </svg>
  );
}
function IconHelp() {
  return (
    <svg className="h-5 w-5 text-slate-700" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-5.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM10 5.5A2.75 2.75 0 007.25 8.25a.75.75 0 101.5 0c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25c0 .49-.29.92-.7 1.12-.87.42-1.3 1.04-1.3 2.13v.25a.75.75 0 101.5 0v-.25c0-.43.09-.58.54-.8.9-.43 1.46-1.36 1.46-2.45A2.75 2.75 0 0010 5.5z" clipRule="evenodd"/>
    </svg>
  );
}

function MethodCard({ title, desc, lines, cta, href, Icon }: { title: string; desc: string; lines: string[]; cta: string; href: string; Icon: () => JSX.Element; }) {
  return (
    <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 ring-1 ring-slate-200">
          <Icon />
        </span>
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm text-slate-600">{desc}</p>
          <div className="mt-3 space-y-1 text-sm text-slate-700">
            {lines.map((l, i) => (<div key={i}>{l}</div>))}
          </div>
          <div className="mt-4">
            <a
              href={href}
              className="inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              {cta}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactMethods() {
  return (
    <section id="methods" className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MethodCard title="Live Chat" desc="Start chatting with us right away." lines={["Available 24/7"]} cta="Start Live Chat" href="/support/live-chat" Icon={IconChat} />
          <MethodCard title="Phone" desc="Give us a call when you need us." lines={["+501 2236695, +501 2236691", "Available 24/7"]} cta="Call Now" href="tel:+5012236695" Icon={IconPhone} />
          <MethodCard title="Email" desc="Send us an email at your convenience." lines={["support@example.com", "We reply fast"]} cta="Compose Email" href="mailto:support@example.com" Icon={IconMail} />
          <MethodCard title="Help Center" desc="Visit our Help Center to find answers." lines={["Guides and FAQs"]} cta="Visit Help Center" href="/help-center" Icon={IconHelp} />
        </div>
      </div>
    </section>
  );
}
