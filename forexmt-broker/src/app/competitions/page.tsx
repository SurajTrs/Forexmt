import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Trading Competitions | ForexMT",
  description: "Compete with traders worldwide and win amazing prizes in our trading competitions.",
};

export default function CompetitionsPage() {
  const competitions = [
    {
      id: 1,
      name: "Forex Champion",
      prize: "$50,000",
      participants: 1250,
      endDate: "2023-12-31",
      image: "/competition1.jpg",
    },
    {
      id: 2,
      name: "Crypto Trader",
      prize: "25,000 USDT",
      participants: 980,
      endDate: "2023-11-15",
      image: "/competition2.jpg",
    },
    {
      id: 3,
      name: "Stocks Master",
      prize: "$15,000",
      participants: 750,
      endDate: "2024-01-15",
      image: "/competition3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Trading Competitions
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Test your skills against traders worldwide and win amazing prizes.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {competitions.map((competition) => (
            <div key={competition.id} className="bg-white/5 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={competition.image}
                  alt={competition.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{competition.name}</h3>
                  <p className="text-blue-400 font-medium">Prize: {competition.prize}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between text-sm text-gray-400 mb-4">
                  <span>{competition.participants} Participants</span>
                  <span>Ends: {competition.endDate}</span>
                </div>
                <Link
                  href={`/competitions/${competition.id}`}
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
                >
                  Join Competition
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6">How to Participate</h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                step: 1,
                title: "Create an Account",
                description: "Sign up for a ForexMT trading account if you don't have one.",
              },
              {
                step: 2,
                title: "Fund Your Account",
                description: "Deposit the minimum required amount to enter the competition.",
              },
              {
                step: 3,
                title: "Start Trading",
                description: "Compete against other traders and climb the leaderboard.",
              },
            ].map((step) => (
              <div key={step.step} className="bg-white/5 p-6 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Compete?</h2>
          <Link
            href="/register"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Join Now
          </Link>
          <p className="mt-2 text-sm text-gray-400">
            Already have an account? <Link href="/login" className="text-blue-400 hover:text-blue-300">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
