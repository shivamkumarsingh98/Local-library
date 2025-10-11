'use client';

import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { CheckCircle, Users, Clock, Mail, Phone, MessageCircle, Sparkles, PartyPopper } from 'lucide-react';

function Page() {
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger party animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleContactClick = () => {
    setShowContactInfo(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Continuous Party Confetti Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Continuous falling confetti - Layer 1 */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-confetti-fall" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
          <div className="absolute top-0 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-confetti-fall" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-green-400 rounded-full animate-confetti-fall" style={{animationDelay: '1s', animationDuration: '2.8s'}}></div>
          <div className="absolute top-0 left-2/3 w-3 h-3 bg-purple-400 rounded-full animate-confetti-fall" style={{animationDelay: '1.5s', animationDuration: '3.2s'}}></div>
          <div className="absolute top-0 left-3/4 w-2 h-2 bg-blue-400 rounded-full animate-confetti-fall" style={{animationDelay: '2s', animationDuration: '2.5s'}}></div>
          <div className="absolute top-0 left-4/5 w-2 h-2 bg-red-400 rounded-full animate-confetti-fall" style={{animationDelay: '2.5s', animationDuration: '3.8s'}}></div>
        </div>

        {/* Continuous falling confetti - Layer 2 */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-1/6 w-2 h-2 bg-orange-400 rounded-full animate-confetti-fall" style={{animationDelay: '0.3s', animationDuration: '2.7s'}}></div>
          <div className="absolute top-0 left-1/5 w-3 h-3 bg-cyan-400 rounded-full animate-confetti-fall" style={{animationDelay: '0.8s', animationDuration: '3.3s'}}></div>
          <div className="absolute top-0 left-2/5 w-2 h-2 bg-lime-400 rounded-full animate-confetti-fall" style={{animationDelay: '1.3s', animationDuration: '2.9s'}}></div>
          <div className="absolute top-0 left-3/5 w-2 h-2 bg-indigo-400 rounded-full animate-confetti-fall" style={{animationDelay: '1.8s', animationDuration: '3.1s'}}></div>
          <div className="absolute top-0 left-4/5 w-3 h-3 bg-rose-400 rounded-full animate-confetti-fall" style={{animationDelay: '2.3s', animationDuration: '2.6s'}}></div>
        </div>

        {/* Continuous falling confetti - Layer 3 */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-1/8 w-2 h-2 bg-emerald-400 rounded-full animate-confetti-fall" style={{animationDelay: '0.2s', animationDuration: '3.4s'}}></div>
          <div className="absolute top-0 left-1/4 w-3 h-3 bg-violet-400 rounded-full animate-confetti-fall" style={{animationDelay: '0.7s', animationDuration: '2.4s'}}></div>
          <div className="absolute top-0 left-3/8 w-2 h-2 bg-amber-400 rounded-full animate-confetti-fall" style={{animationDelay: '1.2s', animationDuration: '3.6s'}}></div>
          <div className="absolute top-0 left-5/8 w-2 h-2 bg-teal-400 rounded-full animate-confetti-fall" style={{animationDelay: '1.7s', animationDuration: '2.8s'}}></div>
          <div className="absolute top-0 left-7/8 w-3 h-3 bg-fuchsia-400 rounded-full animate-confetti-fall" style={{animationDelay: '2.2s', animationDuration: '3.0s'}}></div>
        </div>

        {/* Floating sparkles */}
        <div className={`absolute top-10 left-10 ${isLoaded ? 'animate-spin' : ''}`} style={{animationDuration: '3s'}}>
          <Sparkles className="w-6 h-6 text-yellow-400" />
        </div>
        <div className={`absolute top-20 right-20 ${isLoaded ? 'animate-spin' : ''}`} style={{animationDuration: '4s', animationDelay: '1s'}}>
          <Sparkles className="w-4 h-4 text-pink-400" />
        </div>
        <div className={`absolute top-32 left-1/3 ${isLoaded ? 'animate-spin' : ''}`} style={{animationDuration: '2.5s', animationDelay: '2s'}}>
          <Sparkles className="w-5 h-5 text-green-400" />
        </div>
        <div className={`absolute top-40 right-1/3 ${isLoaded ? 'animate-spin' : ''}`} style={{animationDuration: '3.5s', animationDelay: '0.5s'}}>
          <Sparkles className="w-4 h-4 text-purple-400" />
        </div>
        <div className={`absolute top-60 left-1/6 ${isLoaded ? 'animate-spin' : ''}`} style={{animationDuration: '2.8s', animationDelay: '1.5s'}}>
          <Sparkles className="w-4 h-4 text-blue-400" />
        </div>
        <div className={`absolute top-80 right-1/6 ${isLoaded ? 'animate-spin' : ''}`} style={{animationDuration: '3.2s', animationDelay: '2.5s'}}>
          <Sparkles className="w-5 h-5 text-orange-400" />
        </div>
      </div>

      <div className="max-w-4xl w-full relative z-10">
        {/* Main Congratulations Card */}
        <div className={`bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center relative overflow-hidden transition-all duration-1000 ${isLoaded ? 'transform translate-y-0 opacity-100' : 'transform translate-y-8 opacity-0'}`}>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-100 to-emerald-100 rounded-full translate-y-12 -translate-x-12"></div>
          
          {/* Success Icon */}
          <div className="relative z-10 mb-8">
            <div className={`inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6 transition-all duration-1000 ${isLoaded ? 'transform scale-100 animate-pulse' : 'transform scale-0'}`} style={{transitionDelay: '0.3s'}}>
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            {/* Party popper icon */}
            <div className={`absolute -top-2 -right-2 ${isLoaded ? 'animate-bounce' : ''}`} style={{animationDelay: '0.8s'}}>
              <PartyPopper className="w-8 h-8 text-yellow-500" />
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10">
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${isLoaded ? 'transform translate-y-0 opacity-100 animate-rainbow-glow' : 'transform translate-y-4 opacity-0'}`} style={{transitionDelay: '0.5s'}}>
              🎉 Congratulations!
            </h1>
            <h2 className={`text-xl md:text-2xl lg:text-3xl font-semibold text-blue-600 mb-6 transition-all duration-1000 ${isLoaded ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-0'}`} style={{transitionDelay: '0.7s'}}>
              You've Joined the Libraries Onboarding Waiting List
            </h2>
            
            <p className={`text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ${isLoaded ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-0'}`} style={{transitionDelay: '0.9s'}}>
              Thank you for your interest in joining our libraries platform! We're excited to have you on board and look forward to helping you get started.
            </p>

            {/* Features List */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 transition-all duration-1000 ${isLoaded ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-0'}`} style={{transitionDelay: '1.1s'}}>
              <div className="flex flex-col items-center p-4 bg-blue-50 rounded-xl hover:scale-105 transition-transform duration-300">
                <Users className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Expert Support</h3>
                <p className="text-sm text-gray-600 text-center">Our team will guide you through the onboarding process</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-green-50 rounded-xl hover:scale-105 transition-transform duration-300">
                <Clock className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Quick Setup</h3>
                <p className="text-sm text-gray-600 text-center">Get your library up and running in no time</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-purple-50 rounded-xl hover:scale-105 transition-transform duration-300">
                <MessageCircle className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-600 text-center">We're here to help whenever you need us</p>
              </div>
            </div>

            {/* Contact Button */}
            {!showContactInfo ? (
              <div className={`transition-all duration-1000 ${isLoaded ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-0'}`} style={{transitionDelay: '1.3s'}}>
                <Button 
                  onClick={handleContactClick}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse"
                >
                  Contact Our Onboarding Team
                </Button>
              </div>
            ) : (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 md:p-8 max-w-2xl mx-auto animate-fadeIn">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Our Team Will Contact You Soon!</h3>
                </div>
                
                <p className="text-gray-600 mb-6 text-center">
                  Thank you for your interest! Our onboarding team will reach out to you within 24-48 hours to schedule your setup session and answer any questions you may have.
                </p>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center justify-center p-3 bg-white rounded-lg border">
                    <Mail className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-gray-700">contact@locallibraries.in</span>
                  </div>
                  <div className="flex items-center justify-center p-3 bg-white rounded-lg border">
                    <Phone className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-gray-700">+91 (9591) 907-942</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-blue-800 text-center font-medium">
                    💡 <strong>Pro Tip:</strong> Check your email regularly for our welcome message and next steps!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Questions? Feel free to reach out to our support team anytime.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;