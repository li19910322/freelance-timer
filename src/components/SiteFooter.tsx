export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">FreelanceTimer</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Smart time tracking and invoicing for professional freelancers worldwide.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-medium mb-3">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="/dashboard" className="hover:text-white transition-colors">Dashboard</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-medium mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} FreelanceTimer. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Payments secured by Lemon Squeezy
          </p>
        </div>
      </div>
    </footer>
  );
}
