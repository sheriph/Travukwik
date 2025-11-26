import { Phone, MapPin, CheckCircle } from 'lucide-react'

export const About: React.FC = () => {
  return (
    <section id="about-us" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <div className="inline-block mb-4 px-4 py-1 bg-blue-50 rounded-full border border-blue-100">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Who We Are</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Your Trusted Partner in <span className="text-secondary">Travel</span>
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Travukwik is a modern travel agency dedicated to making your journey seamless and memorable. 
              Based in the heart of Lagos, we specialize in crafting personalized travel experiences, 
              handling everything from complex visa applications to finding the perfect holiday retreat.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Expert Visa Consultation",
                "24/7 Customer Support",
                "Tailored Holiday Packages",
                "Best Flight Rates Guaranteed"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-secondary w-5 h-5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:09095121909"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-blue-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-blue-900/20"
              >
                <Phone className="w-5 h-5" />
                Call 0909 512 1909
              </a>
              <div className="flex items-center gap-2 text-slate-500 px-4 py-2">
                <MapPin className="w-5 h-5 text-secondary" />
                <span>Surulere, Lagos</span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:w-1/2 w-full h-[400px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            <iframe 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0} 
              src="https://maps.google.com/maps?q=9%20Bode%20Thomas%20St%2C%20Surulere%2C%20Lagos%2C%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
              title="Travukwik Office Location"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};