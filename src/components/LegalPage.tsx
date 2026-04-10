interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <a
            href="/"
            className="text-sm text-gray-500 hover:text-blue-600 transition-colors mb-6 inline-block"
          >
            ← Back to FreelanceTimer
          </a>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">{title}</h1>
          <p className="text-gray-500 mt-3 text-sm">Last updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 prose prose-gray max-w-none">
          {children}
        </div>

        {/* Bottom notice */}
        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-6">
          <p className="text-sm text-blue-800 leading-relaxed">
            <strong>Questions?</strong> If you have any questions about these policies, please contact us at{" "}
            <a href="mailto:support@freelancetimer.com" className="underline hover:text-blue-900">
              support@freelancetimer.com
            </a>
            . We typically respond within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
