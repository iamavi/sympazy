import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Terms of Service</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </header>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and using Sympazy's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
            </p>
          </section>

          <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
            <p className="text-gray-600 mb-4">
              Permission is granted to temporarily use Sympazy's services for personal, non-commercial purposes. This license does not include:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Modifying or copying our materials</li>
              <li>Using our materials for commercial purposes</li>
              <li>Attempting to reverse engineer our software</li>
              <li>Removing any copyright or proprietary notations</li>
            </ul>
          </section>

          <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
            <p className="text-gray-600 mb-4">
              As a user of Sympazy, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account</li>
              <li>Use the service in compliance with all applicable laws</li>
              <li>Not engage in any unauthorized access or use</li>
            </ul>
          </section>

          <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">4. Service Modifications</h2>
            <p className="text-gray-600">
              Sympazy reserves the right to modify or discontinue, temporarily or permanently, the service with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
            </p>
          </section>

          <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-600">
              In no event shall Sympazy be liable for any damages arising out of the use or inability to use our services, even if we have been notified of the possibility of such damages.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">6. Contact Information</h2>
            <p className="text-gray-600">
              If you have any questions about these Terms of Service, please contact us at:
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