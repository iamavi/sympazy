import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </header>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Payment information</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Process your transactions</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about products, services, and events</li>
            </ul>
          </section>

          <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
            <p className="text-gray-600 mb-4">
              We do not sell or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Service providers who assist in our operations</li>
              <li>Professional advisers</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </section>

          <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
            <p className="text-gray-600 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 flex items-center text-blue-600">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:9540737273" className="hover:text-blue-800">9540737273</a>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
} 