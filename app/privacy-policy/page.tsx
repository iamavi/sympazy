import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg md:text-xl">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </header>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12 md:py-20">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-lg">
          
          <p className="text-gray-700 mb-8 text-lg">
            Welcome to Sympazy! We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services. By using Sympazy, you agree to the collection and use of information in accordance with this policy.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect a limited amount of personal information that you provide directly to us when you register for and use our service. The types of personal information we collect are:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
              <li><strong>Full Name:</strong> To personalize your experience.</li>
              <li><strong>Email Address:</strong> To send you to-do task reminders, service updates, and support communications.</li>
              <li><strong>Phone Number:</strong> To send you to-do task reminders via SMS or WhatsApp (based on your preferences and our service capabilities).</li>
            </ul>
            <p className="text-gray-700 mt-4">
              We do not collect any sensitive personal information, payment information (as our current service is described), or any other information beyond what is listed above.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect solely for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
              <li><strong>To Provide and Manage Our Service:</strong> Primarily to send you to-do task reminders as configured by you.</li>
              <li><strong>To Communicate With You:</strong> To respond to your inquiries, send important service-related notices (e.g., changes to our terms or policies, security alerts), and provide customer support.</li>
              <li><strong>To Improve Our Service:</strong> We may use anonymized and aggregated data to understand how our service is used and to make improvements. This data does not personally identify you.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              We will not use your personal information for marketing purposes unless we obtain your explicit consent.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">3. Information Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">
              We value your privacy and do not sell or rent your personal information to third parties. We may disclose your information in the following limited circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
              <li><strong>Service Providers:</strong> We may share your information with third-party vendors and service providers who perform services on our behalf, such as SMS or email delivery services for reminders. These providers are contractually obligated to protect your information and use it only for the services they provide to us.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend our rights or property, prevent fraud, or protect the personal safety of users or the public.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred as part of that transaction. We will notify you via email and/or a prominent notice on our website of any change in ownership or uses of your personal information.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">4. Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We will retain your personal information (Name, Email, Phone Number) for as long as your account is active or as needed to provide you with our services. We will also retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements. You can request the deletion of your account and associated data at any time by contacting us.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">5. Data Security</h2>
            <p className="text-gray-700">
              We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, use, alteration, and disclosure. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">6. Your Rights and Choices</h2>
            <p className="text-gray-700 mb-4">
              You have certain rights regarding your personal information, subject to local data protection laws. These may include the right to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete personal information.</li>
              <li><strong>Erasure:</strong> Request deletion of your personal information, subject to certain exceptions.</li>
              <li><strong>Restrict Processing:</strong> Request that we restrict the processing of your personal information in certain circumstances.</li>
              <li><strong>Data Portability:</strong> Request to receive your personal information in a structured, commonly used, and machine-readable format.</li>
              <li><strong>Object:</strong> Object to our processing of your personal information in certain circumstances.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              To exercise any of these rights, please contact us using the contact information provided below. We will respond to your request within a reasonable timeframe.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">7. Children's Privacy</h2>
            <p className="text-gray-700">
              Our service is not directed to individuals under the age of 13 (or a higher age threshold depending on the jurisdiction). We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected personal information from a child without verification of parental consent, we will take steps to delete such information from our servers.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">8. Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">9. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="flex items-center text-indigo-600">
              <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              <a href="mailto:privacy@sympazy.com" className="hover:text-indigo-800">privacy@sympazy.com</a>
            </div>
            <div className="mt-3 flex items-center text-indigo-600">
              <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              <a href="tel:9540737273" className="hover:text-indigo-800">9540737273</a>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
} 