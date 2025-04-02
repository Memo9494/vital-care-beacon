
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or want to schedule an appointment? Get in touch with us, and our team will be happy to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-medical-blue text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p>info@vitalcare.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Address</p>
                  <p>123 Medical Center Dr, Healthcare City, HC 12345</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Working Hours</p>
                  <p>Monday - Friday: 8:00 AM - 7:00 PM</p>
                  <p>Saturday: 9:00 AM - 5:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155033550494!2d-73.98652382346204!3d40.748428471388794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc75a6c891!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1695672344404!5m2!1sen!2sus" 
                style={{ border: 0 }} 
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-52 rounded-lg"
                title="Location Map"
              ></iframe>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input 
                    id="name"
                    placeholder="Your Name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <Input 
                  id="subject"
                  placeholder="Subject"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea 
                  id="message"
                  placeholder="Your Message"
                  className="w-full min-h-[150px]"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-medical-blue hover:bg-blue-700 text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
