import { Award, BookOpen, GraduationCap, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="section-padding bg-medical-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">Formación Profesional</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La Dra. Andrea Cepeda ha forjado una sólida trayectoria académica y médica, consolidándose como una profesional comprometida con la salud quirúrgica de sus pacientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Card className="bg-white shadow-lg fade-in">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-medical-blue/10 rounded-lg">
                  <GraduationCap className="text-medical-blue w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-medical-dark mb-2">Educación</h3>
                  <ul className="space-y-4">
                    <li>
                      <p className="font-medium">Licenciatura en Médico Cirujano y Partero</p>
                      <p className="text-gray-600">Universidad de Monterrey (UDEM), 2017 - 2023</p>
                    </li>
                    <li>
                      <p className="font-medium">Residente de Cirugía General</p>
                      <p className="text-gray-600">IMSS Clínica 4, Guadalupe, N.L. — Desde 2025</p>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg fade-in">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-medical-blue/10 rounded-lg">
                  <Award className="text-medical-blue w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-medical-dark mb-2">Experiencia Clínica</h3>
                  <ul className="space-y-4">
                    <li>
                      <p className="font-medium">Hospital Clínica Nova</p>
                      <p className="text-gray-600">Médico pasante, atención integral a pacientes</p>
                    </li>
                    <li>
                      <p className="font-medium">IMSS Clínica 4</p>
                      <p className="text-gray-600">Residente de cirugía general con experiencia diaria en procedimientos quirúrgicos</p>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-lg fade-in">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-medical-blue/10 rounded-lg">
                  <BookOpen className="text-medical-blue w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-medical-dark mb-2">Publicaciones</h3>
                  <ul className="space-y-4">
                    <li>
                      <p className="font-medium">Frontiers in Immunology</p>
                      <p className="text-gray-600">Efectividad de combinaciones de refuerzo contra SARS-CoV-2, 2024</p>
                    </li>
                    <li>
                      <p className="font-medium">Journal of Diabetes & Metabolic Disorders</p>
                      <p className="text-gray-600">Reclasificación del riesgo cardiovascular con Sudoscan®, 2025</p>
                    </li>
                    <li>
                      <p className="font-medium">Archives of Public Health</p>
                      <p className="text-gray-600">Impacto de sistemas integrales en longevidad de adultos mayores, 2024</p>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg fade-in">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-medical-blue/10 rounded-lg">
                  <Heart className="text-medical-blue w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-medical-dark mb-2">Reconocimientos</h3>
                  <ul className="space-y-4">
                    <li>
                      <p className="font-medium">Cita en múltiples revistas científicas</p>
                      <p className="text-gray-600">Contribuciones en investigación sobre diabetes y COVID-19</p>
                    </li>
                    <li>
                      <p className="font-medium">Reconocida por su participación en estudios multicéntricos</p>
                      <p className="text-gray-600">Incluida en ResearchGate con publicaciones activas</p>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
