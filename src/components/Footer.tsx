
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-medical-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-medical-blue mr-2" />
              <span className="text-xl font-bold">VitalCare</span>
            </div>
            <p className="text-gray-300 mb-4">
              Providing quality healthcare services with a patient-centered approach since 2008.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-medical-blue">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12.07c0-5.52-4.48-10-10-10S2 6.55 2 12.07c0 4.95 3.66 9.04 8.44 9.8v-6.95H7.9v-2.85h2.54V9.43c0-2.5 1.5-3.9 3.77-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.85h-2.33v6.95c4.78-.76 8.44-4.85 8.44-9.8z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-medical-blue">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-medical-blue">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-6.65a1.35 1.35 0 110-2.7 1.35 1.35 0 010 2.7zM16 17h-2v-3.96c0-.68-.45-1.24-1-1.24s-1 .56-1 1.24V17h-2v-6h2v1.12c.37-.72 1.33-1.12 2-1.12 1.55 0 2 1.12 2 2.5V17z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-medical-blue">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.24.35-2.39.95-3.38L9 13.5V16h2v-3h2v3h2v-3h1.5l1.53 1.53C17.65 15.61 18 14.46 18 13c0-4.41-3.59-8-8-8z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-medical-blue transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-medical-blue transition-colors">Services</a>
              </li>
              <li>
                <a href="#doctors" className="text-gray-300 hover:text-medical-blue transition-colors">Doctors</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-medical-blue transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-medical-blue transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-medical-blue transition-colors">General Check-up</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-medical-blue transition-colors">Cardiology</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-medical-blue transition-colors">Pediatrics</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-medical-blue transition-colors">Neurology</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-medical-blue transition-colors">Emergency Care</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter to receive updates on medical services, health tips, and more.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-700 text-white rounded-l px-4 py-2 w-full focus:outline-none"
              />
              <button 
                type="submit" 
                className="bg-medical-blue hover:bg-blue-700 text-white rounded-r px-4 py-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="text-center text-gray-400">
          <p>&copy; {currentYear} VitalCare Medical Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
