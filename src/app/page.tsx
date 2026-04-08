import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export default function Home() {
  const { userId } = auth();
  if (userId) redirect("/dashboard");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
          FreelanceTimer
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Track your hours. Generate invoices. Get paid on time.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <a
            href="/sign-in"
            className="px-8 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            Sign In
          </a>
          <a
            href="/sign-up"
            className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
          >
            Get Started Free
          </a>
        </div>
        <p className="text-sm text-gray-400 pt-4">
          No credit card required. Free forever for solo freelancers.
        </p>
      </div>
    </main>
  );
}
