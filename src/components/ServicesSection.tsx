import { Heart, Stethoscope, Calendar, Clock, BriefcaseMedical, User } from "lucide-react";

const serviceItems = [
  {
    icon: <Stethoscope className="h-8 w-8 text-white" />,
    title: "Valoración General",
    description: "Evaluaciones médicas integrales para diagnosticar y orientar sobre el tratamiento quirúrgico adecuado."
  },
  {
    icon: <Heart className="h-8 w-8 text-white" />,
    title: "Cirugía de Urgencias",
    description: "Atención inmediata y profesional ante situaciones quirúrgicas urgentes, con enfoque humano y resolutivo."
  },
  {
    icon: <BriefcaseMedical className="h-8 w-8 text-white" />,
    title: "Cirugías Ambulatorias",
    description: "Procedimientos quirúrgicos seguros que no requieren hospitalización prolongada, realizados con precisión."
  },
  {
    icon: <Calendar className="h-8 w-8 text-white" />,
    title: "Consulta Especializada",
    description: "Atención personalizada para pacientes que requieren valoración quirúrgica por cirujana general egresada de la UDEM."
  },
  {
    icon: <User className="h-8 w-8 text-white" />,
    title: "Atención en Clínica 4",
    description: "Servicios quirúrgicos diarios en la Clínica 4 de Guadalupe, con experiencia en casos diversos y complejos."
  },
  {
    icon: <Clock className="h-8 w-8 text-white" />,
    title: "Consultas Virtuales",
    description: "Valoraciones pre y postoperatorias desde casa, con la misma calidad y dedicación que una consulta presencial."
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding bg-medical-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Servicios Médicos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Atención quirúrgica de calidad, profesionalismo y vocación, respaldada por años de experiencia en cirugía general y una sólida formación académica.
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
