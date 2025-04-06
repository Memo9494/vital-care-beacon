import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Heberto Santos",
    role: "Paciente",
    content: "La atención fue excelente desde el primer momento. Me explicaron todo con claridad y me sentí acompañado durante todo mi tratamiento.",
    image: "images/hebertosantos.jpeg",
  },
  {
    name: "Jorge Cortés",
    role: "Paciente",
    content: "La doctora Andrea es sumamente profesional, es claro que se mantiene al tanto de los ultimos avances en medicina y que muestra dediacion a su trabajo.",
    image: "images/jorgecortes.jpeg",
  },
  {
    name: "Patricio Martínez",
    role: "Paciente",
    content: "Lo que más valoro es que me escucharon y personalizaron mi tratamiento. Me sentí en buenas manos todo el tiempo.",
    image: "images/patriciomartinez.jpeg",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="section-padding bg-gradient-to-b from-medical-gray to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros pacientes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nos enorgullece brindar una atención excepcional. Esto es lo que algunos de nuestros pacientes opinan sobre su experiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-medical-blue"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <svg className="h-6 w-6 text-medical-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217..."></path>
                    <path d="M22 10.992c-.9-.3-1.69-.592..."></path>
                  </svg>
                </div>
                <p className="text-gray-700 italic">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
