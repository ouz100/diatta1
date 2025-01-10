import Navbar from '../components/Navbar';
export default function Testimonials() {
  const testimonials = [
    {
      name: "Pierre Hackett",
      role: "VP of Engineering",
      image: "/vii.png"
    },
    {
      name: "Natalia Sanz", 
      role: "Head of Technology",
      image: "/vi.png"
    },
    {
      name: "Ece Akman",
      role: "Senior Marketer", 
      image: "/e.png"
    }
  ];

  return (
    <section id="Testimonials" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <p className="text-purple-600 font-medium">Customer Comments</p>
          <h2 className="text-4xl font-bold text-gray-900">Why customers love us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="flex items-center space-x-4" // Changed to horizontal layout
            >
              <img
                src={testimonial.image}
                alt=""
                className="w-16 h-16 rounded-full flex-shrink-0" // Added flex-shrink-0 to prevent image from shrinking
              />
              <div>
                <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="" />
      </div>
    </section>
  );
}

