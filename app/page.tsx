import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white pt-40 pb-32">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <svg className="w-16 h-16 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <h1 className="text-6xl font-bold font-sans">Sympazy</h1>
          </div>
          <p className="text-2xl mb-12 max-w-3xl mx-auto text-center leading-relaxed">
            Your family's AI assistant for a more organized life. 
            Organize your whole family in one WhatsApp chat, no additional apps needed!
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Try Sympazy Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all transform hover:scale-105 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Demo
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-24">
        {/* Features Section */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-16 text-center font-sans">How Sympazy Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="bg-indigo-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-center font-sans">1. Forward Emails or Send a WhatsApp</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Send long, detailed school emails directly to Sympazy or quickly send over a WhatsApp. No more sifting through information or figuring out what's important—we'll do it for you.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="bg-indigo-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-center font-sans">2. Organise Automatically</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Sympazy extracts key details like event dates, times, and deadlines, and organises them into your family's calendar. It also integrates extracurriculars and personal commitments seamlessly.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="bg-indigo-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-center font-sans">3. Share & Sync</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Sympazy updates your partner's and caregivers' calendars with the relevant schedules. Everyone stays informed, reducing the burden on you.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-32 bg-gradient-to-br from-indigo-50 to-blue-50 py-24 rounded-3xl">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center font-sans">Why Parents Love Sympazy</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-indigo-600 p-4 rounded-xl mr-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 font-sans">Save Time & Reduce Stress</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Sympazy takes over the mental juggling act, turning chaos into clarity. Get back hours of your day with automated organization.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-indigo-600 p-4 rounded-xl mr-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 font-sans">Seamless Calendar Integration</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Manage multiple kids' schedules while syncing with your partner's calendar for a fully coordinated family plan. Never miss an important event again.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-indigo-600 p-4 rounded-xl mr-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 font-sans">Tailored Suggestions & Homework Help</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Sympazy understands your child's learning needs and provides personalised recommendations—including homework help via WhatsApp, so support is always just a message away.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-indigo-600 p-4 rounded-xl mr-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 font-sans">Custom Alerts</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Stay ahead of deadlines and events with timely reminders designed to keep your family on track. Get notifications for homework, activities, and important dates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-16 text-center font-sans">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="bg-indigo-100 p-4 rounded-xl mr-6">
                  <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold font-sans">Sympazy for Homework</h3>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Need homework inspiration to help your child learn? Simply forward their homework PDF or a picture of it to Sympazy and we will do the rest. Tailored activities based on your child's learning style delivered to your WhatsApp chat!
              </p>
              <button className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center group">
                Try Sympazy Now
                <svg className="w-6 h-6 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="bg-indigo-100 p-4 rounded-xl mr-6">
                  <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold font-sans">Task Management</h3>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Need to organise your child's schedule and your own? Simply type in reminders or send a voice note and Sympazy will do the rest - automatically syncing to your calendar so you are always up to date!
              </p>
              <button className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center group">
                Try Sympazy Now
                <svg className="w-6 h-6 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-32">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-16 text-white">
            <h2 className="text-4xl font-bold mb-8 text-center font-sans">Ready to Simplify Your Family Life?</h2>
            <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
              Start your journey to a more organized family life today!
            </p>
            <div className="flex justify-center">
              <a href="tel:9540737273" className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                9540737273
              </a>
            </div>
          </div>
        </section>

        {/* Legal Links */}
        <section className="mb-16">
          <div className="bg-gray-50 p-12 rounded-2xl max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center font-sans">Legal Information</h2>
            <div className="flex justify-center space-x-12">
              <Link href="/privacy-policy" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Terms of Service
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
} 