
import { Award, BookOpen, GraduationCap, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="section-padding bg-medical-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">Formación Profesional</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trayectoria académica y profesional de la Dra. Andrea Cepeda, garantizando la más alta calidad en atención quirúrgica.
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
                      <p className="font-medium">Doctorado en Medicina</p>
                      <p className="text-gray-600">Universidad Autónoma de Nuevo León, 2005-2009</p>
                    </li>
                    <li>
                      <p className="font-medium">Especialidad en Cirugía General</p>
                      <p className="text-gray-600">Hospital Universitario Dr. José E. González, 2009-2013</p>
                    </li>
                    <li>
                      <p className="font-medium">Subespecialidad en Cirugía Mínimamente Invasiva</p>
                      <p className="text-gray-600">Centro Médico Nacional Siglo XXI, 2013-2015</p>
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
                  <h3 className="text-xl font-semibold text-medical-dark mb-2">Certificaciones</h3>
                  <ul className="space-y-4">
                    <li>
                      <p className="font-medium">Consejo Mexicano de Cirugía General</p>
                      <p className="text-gray-600">Certificación vigente desde 2014</p>
                    </li>
                    <li>
                      <p className="font-medium">American College of Surgeons (ACS)</p>
                      <p className="text-gray-600">Miembro Internacional, 2016</p>
                    </li>
                    <li>
                      <p className="font-medium">Sociedad Mexicana de Cirugía Endoscópica</p>
                      <p className="text-gray-600">Miembro activo desde 2015</p>
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
                      <p className="font-medium">Revista Mexicana de Cirugía</p>
                      <p className="text-gray-600">"Avances en técnicas laparoscópicas para cirugía de vesícula", 2018</p>
                    </li>
                    <li>
                      <p className="font-medium">International Journal of Surgery</p>
                      <p className="text-gray-600">"Comparative study of minimally invasive techniques in abdominal procedures", 2020</p>
                    </li>
                    <li>
                      <p className="font-medium">Capítulo de libro</p>
                      <p className="text-gray-600">"Manual de Cirugía Laparoscópica Moderna", Editorial Médica Panamericana, 2021</p>
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
                      <p className="font-medium">Premio a la Excelencia Médica</p>
                      <p className="text-gray-600">Colegio de Cirujanos de Nuevo León, 2019</p>
                    </li>
                    <li>
                      <p className="font-medium">Reconocimiento a la Innovación Quirúrgica</p>
                      <p className="text-gray-600">Hospital San José Tec de Monterrey, 2021</p>
                    </li>
                    <li>
                      <p className="font-medium">Medalla al Mérito Profesional</p>
                      <p className="text-gray-600">Secretaría de Salud de Nuevo León, 2022</p>
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
