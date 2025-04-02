
import { Card, CardContent } from "@/components/ui/card";

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    experience: "15+ years",
    patients: "10,000+",
  },
  {
    name: "Dr. Michael Rodriguez",
    specialty: "Neurologist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    experience: "12+ years",
    patients: "8,000+",
  },
  {
    name: "Dr. Emily Chen",
    specialty: "Pediatrician",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    experience: "10+ years",
    patients: "12,000+",
  },
  {
    name: "Dr. James Wilson",
    specialty: "General Practitioner",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    experience: "8+ years",
    patients: "5,000+",
  },
];

const DoctorsSection = () => {
  return (
    <section id="doctors" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Specialists</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of highly qualified doctors are here to provide you with the best medical care and treatment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">{doctor.name}</h3>
                <p className="text-medical-blue mb-4">{doctor.specialty}</p>
                <div className="flex justify-center gap-6 text-sm text-gray-600">
                  <div>
                    <p className="font-semibold">{doctor.experience}</p>
                    <p>Experience</p>
                  </div>
                  <div className="h-10 border-r border-gray-300"></div>
                  <div>
                    <p className="font-semibold">{doctor.patients}</p>
                    <p>Patients</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
