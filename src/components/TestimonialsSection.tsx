
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Jennifer Smith",
    role: "Patient",
    content: "The care I received at VitalCare was exceptional. The doctors took the time to explain my condition and treatment options thoroughly, and the staff was always friendly and helpful.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Robert Johnson",
    role: "Patient",
    content: "I've been a patient at VitalCare for over 5 years, and I've always received top-notch care. The facility is clean and modern, and the medical team is knowledgeable and compassionate.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Maria Garcia",
    role: "Patient",
    content: "The doctors at VitalCare truly listen to your concerns and work with you to develop a personalized treatment plan. I appreciate their patient-centered approach to healthcare.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-medical-gray to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Patients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We take pride in providing exceptional care to our patients. Here's what they have to say about their experiences with us.
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
                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.08.239-.63.148-1.16.287-1.59.416L4 10.994c.9-.3 1.69-.592 2.37-.877.61-.257 1.17-.568 1.66-.93.44-.326.79-.722 1.05-1.188.21-.387.32-.883.32-1.492 0-.74-.15-1.423-.48-2.05C8.5 3.8 7.64 3.1 6.26 3.1c-.81 0-1.48.214-2 .643-.52.43-.78.94-.78 1.54 0 .254.07.498.2.73.13.23.29.413.47.55a1.99 1.99 0 00.98.366c.42.07.84.08 1.26.014.51-.08.9-.223 1.17-.428l.28-.16c.1 1.06-.18 1.86-.83 2.39-.5.4-1.17.6-2.02.6H4v5.5h1.5c.25 0 .5.02.74.06.7.12 1.27.46 1.7 1.01.55.71.83 1.6.83 2.67v1.62c0 .29.1.56.28.8.18.24.42.42.72.55.3.12.63.18.98.18.52 0 .99-.15 1.37-.44.39-.29.65-.7.78-1.23.05-.16.08-.32.08-.48v-.01z"></path>
                    <path d="M22 10.992c-.9-.3-1.69-.592-2.37-.877a7.188 7.188 0 01-1.66-.93c-.44-.326-.79-.722-1.05-1.188-.21-.387-.32-.883-.32-1.492 0-.74.15-1.423.48-2.05.32-.627 1.19-1.327 2.57-1.327.81 0 1.48.214 2 .643.52.43.78.94.78 1.54 0 .254-.07.498-.2.73-.13.23-.29.413-.47.55a1.99 1.99 0 01-.98.366c-.42.07-.84.08-1.26.014-.51-.08-.9-.223-1.17-.428l-.28-.16c-.1 1.06.18 1.86.83 2.39.5.4 1.17.6 2.02.6h.58v5.5H20c-.25 0-.5.02-.74.06-.7.12-1.27.46-1.7 1.01-.55.71-.83 1.6-.83 2.67v1.62c0 .29-.1.56-.28.8-.18.24-.42.42-.72.55-.3.12-.63.18-.98.18-.52 0-.99-.15-1.37-.44-.39-.29-.65-.7-.78-1.23-.05-.16-.08-.32-.08-.48v-1.62c0-1.07.27-1.95.83-2.67.42-.54 1-.88 1.7-1.01.25-.04.5-.06.75-.06h.58v-5.5h-.58c-.13 0-.26.01-.39.01z"></path>
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
