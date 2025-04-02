
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-medical-dark mb-4 leading-tight">
              Your Health Is Our <span className="text-medical-blue">Top Priority</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Providing exceptional healthcare services with a focus on patient comfort, advanced medical technology, and personalized treatment plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-medical-blue hover:bg-blue-700 text-white text-lg py-6 px-8">
                Book an Appointment
              </Button>
              <Button variant="outline" className="border-medical-blue text-medical-blue hover:bg-medical-blue/10 text-lg py-6 px-8">
                Learn More
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div>
                <p className="text-3xl font-bold text-medical-blue">98%</p>
                <p className="text-sm text-gray-600">Patient Satisfaction</p>
              </div>
              <div className="h-12 border-r border-gray-300"></div>
              <div>
                <p className="text-3xl font-bold text-medical-blue">15+</p>
                <p className="text-sm text-gray-600">Years of Experience</p>
              </div>
              <div className="h-12 border-r border-gray-300"></div>
              <div>
                <p className="text-3xl font-bold text-medical-blue">50+</p>
                <p className="text-sm text-gray-600">Medical Specialists</p>
              </div>
            </div>
          </div>
          <div className="relative fade-in">
            <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-medical-teal/20 -z-10"></div>
            <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-medical-blue/20 -z-10"></div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                alt="Medical Team" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
