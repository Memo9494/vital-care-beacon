
import { Heart, Stethoscope, Calendar, Clock, BriefcaseMedical, User } from "lucide-react";

const serviceItems = [
  {
    icon: <Stethoscope className="h-8 w-8 text-white" />,
    title: "General Health Check",
    description: "Comprehensive health assessments to ensure overall wellbeing and early detection of potential issues."
  },
  {
    icon: <Heart className="h-8 w-8 text-white" />,
    title: "Cardiology Services",
    description: "Expert heart care from routine check-ups to advanced treatments for various cardiovascular conditions."
  },
  {
    icon: <BriefcaseMedical className="h-8 w-8 text-white" />,
    title: "Emergency Care",
    description: "24/7 emergency medical services with quick response times and experienced medical professionals."
  },
  {
    icon: <Calendar className="h-8 w-8 text-white" />,
    title: "Specialist Consultations",
    description: "Access to a wide range of medical specialists for focused and specialized care tailored to your needs."
  },
  {
    icon: <User className="h-8 w-8 text-white" />,
    title: "Pediatric Care",
    description: "Compassionate and comprehensive healthcare services designed specifically for children and adolescents."
  },
  {
    icon: <Clock className="h-8 w-8 text-white" />,
    title: "Telemedicine",
    description: "Virtual consultations with our medical professionals from the comfort of your home."
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-medical-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Medical Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide a wide range of medical services to meet all your healthcare needs with the highest standard of care and professionalism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300"
            >
              <div className="bg-gradient-to-r from-medical-blue to-medical-teal p-4 flex justify-center">
                <div className="bg-white/20 p-4 rounded-full">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
