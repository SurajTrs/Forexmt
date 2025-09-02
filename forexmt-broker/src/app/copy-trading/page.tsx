import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Copy Trading | ForexMT",
  description: "Copy trades from successful traders automatically and earn money with our copy trading platform.",
};

export default function CopyTradingPage() {
  const topTraders = [
    {
      id: 1,
      name: "Alex Johnson",
      profit: 42.5,
      copiers: 1250,
      winRate: 78,
      image: "/trader1.jpg",
    },
    {
      id: 2,
      name: "Sarah Williams",
      profit: 38.2,
      copiers: 980,
      winRate: 82,
      image: "/trader2.jpg",
    },
    {
      id: 3,
      name: "Michael Chen",
      profit: 35.7,
      copiers: 875,
      winRate: 75,
      image: "/trader3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Copy Trading
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-2xl">
                Automatically copy the trades of successful traders and earn money while you learn.
              </p>
              <div className="mt-8">
                <Link
                  href="/register"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Start Copy Trading
                </Link>
                <p className="mt-2 text-sm text-gray-400">
                  No trading experience required. Start with as little as $100.
                </p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative h-80 sm:h-96">
                <Image
                  src="/copy-trading-hero.png"
                  alt="Copy Trading"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12">How Copy Trading Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Choose a Trader",
                description: "Browse and select from our top-performing traders based on their performance, risk level, and trading style.",
                icon: "👥",
              },
              {
                title: "Allocate Funds",
                description: "Decide how much of your capital you want to allocate to copy the selected trader's positions.",
                icon: "💰",
              },
              {
                title: "Copy Trades Automatically",
                description: "Once connected, all trades made by the trader will be automatically copied to your account in real-time.",
                icon: "🔄",
              },
            ].map((step, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-xl">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Traders */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12">Top Traders to Copy</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {topTraders.map((trader) => (
              <div key={trader.id} className="bg-white/5 rounded-xl overflow-hidden shadow-lg">
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 h-16 w-16 rounded-full overflow-hidden bg-gray-700">
                      <Image
                        src={trader.image}
                        alt={trader.name}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{trader.name}</h3>
                      <p className="text-green-400 font-medium">+{trader.profit}% Profit</p>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Win Rate</p>
                      <p className="font-medium">{trader.winRate}%</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Copiers</p>
                      <p className="font-medium">{trader.copiers.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link
                      href={`/copy-trading/trader/${trader.id}`}
                      className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
                    >
                      Copy This Trader
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/copy-trading/traders"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
            >
              View All Traders <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-6">Ready to Start Copy Trading?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join thousands of traders who are already earning by copying the best traders in the market.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/register"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-blue-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Get Started for Free
            </Link>
            <Link
              href="/copy-trading/how-it-works"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-800/50 hover:bg-blue-800/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
