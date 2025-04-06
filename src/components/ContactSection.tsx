import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctanos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ¿Tienes dudas o deseas agendar una cita? Ponte en contacto con nosotros y con gusto te atenderemos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-medical-blue text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Ponte en contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Teléfono</p>
                  <p>+52 81 1511 7704</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Correo</p>
                  <p>andreabelindacm@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Dirección</p>
                  <p>C. Mariano Matamoros 300, Centro de Guadalupe, 67100 Guadalupe, N.L.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Horario</p>
                  <p>Lunes a Viernes: 8:00 AM - 7:00 PM</p>
                  <p>Sábado: 9:00 AM - 5:00 PM</p>
                  <p>Domingo: Cerrado</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.527181090701!2d-100.25000000000001!3d25.679000000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866295e0174960d1%3A0x4cf3f28f6a8f2b80!2sC.%20Mariano%20Matamoros%20300%2C%20Centro%20de%20Guadalupe%2C%2067100%20Guadalupe%2C%20N.L.!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
                style={{ border: 0 }} 
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-52 rounded-lg"
                title="Mapa de ubicación"
              ></iframe>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <Input 
                    id="name"
                    placeholder="Tu nombre"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="Tu correo"
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
                <Input 
                  id="subject"
                  placeholder="Asunto"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <Textarea 
                  id="message"
                  placeholder="Escribe tu mensaje..."
                  className="w-full min-h-[150px]"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-medical-blue hover:bg-blue-700 text-white"
              >
                Enviar mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
