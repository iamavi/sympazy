import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function UserDataDeletionPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">User Data Deletion Instructions</h1>
          <p className="text-lg md:text-xl">
            How to request the deletion of your personal data from Sympazy.
          </p>
        </div>
      </header>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12 md:py-20">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-lg">
          
          <p className="text-gray-700 mb-8 text-lg">
            At Sympazy, we respect your right to control your personal information. If you wish to delete your account and the personal data associated with it, please follow the instructions below.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">How to Request Data Deletion</h2>
            <p className="text-gray-700 mb-4">
              To request the deletion of your user data, please send an email to our privacy support team with the subject line "User Data Deletion Request".
            </p>
            <div className="mb-4">
              <strong className="text-gray-700">Email Address:</strong>
              <a href="mailto:privacy@sympazy.com" className="ml-2 text-indigo-600 hover:text-indigo-800 break-all">
                privacy@sympazy.com
              </a>
            </div>
            <p className="text-gray-700 mb-4">
              In your email, please include the following information to help us identify your account:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4 mb-4">
              <li>Your Full Name (as registered with Sympazy)</li>
              <li>Your Email Address (as registered with Sympazy)</li>
              <li>Your Phone Number (if provided during registration)</li>
            </ul>
            <p className="text-gray-700">
              Providing this information will help us to promptly locate and process your deletion request.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">What Happens When You Request Deletion?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4 mb-4">
              <li>
                <strong>Verification:</strong> We will first verify your identity to ensure the request is legitimate and to protect your data from unauthorized deletion. We may contact you using the email or phone number associated with your account for this purpose.
              </li>
              <li>
                <strong>Data to be Deleted:</strong> Upon successful verification, we will permanently delete the following personal information associated with your account:
                <ul className="list-circle list-inside text-gray-700 space-y-1 pl-6 mt-2">
                  <li>Your Full Name</li>
                  <li>Your Email Address</li>
                  <li>Your Phone Number</li>
                  <li>Any to-do task data, reminders, or schedules you have created or stored within Sympazy.</li>
                </ul>
              </li>
              <li>
                <strong>Anonymized Data:</strong> Please note that we may retain anonymized or aggregated data that does not personally identify you for analytical purposes and to improve our services.
              </li>
              <li>
                <strong>Legal Obligations:</strong> In certain limited circumstances, we may be required by law to retain some information for a specified period. If this applies to your data, we will inform you.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Timeframe for Deletion</h2>
            <p className="text-gray-700 mb-4">
              We aim to process all data deletion requests within 30 days of verifying your identity. We will notify you once the deletion process is complete.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Confirmation of Deletion</h2>
            <p className="text-gray-700 mb-4">
              Once your data has been successfully deleted, we will send a confirmation email to the address associated with your account. After deletion, you will no longer be able to access your Sympazy account, and your data will not be recoverable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about the data deletion process or our privacy practices, please do not hesitate to contact us at:
            </p>
            <div className="flex items-center text-indigo-600">
              <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              <a href="mailto:privacy@sympazy.com" className="hover:text-indigo-800">privacy@sympazy.com</a>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
} 