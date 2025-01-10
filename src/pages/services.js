import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
  const services = [
    { title: 'Web Development', description: 'Custom websites built for your business.' },
    { title: 'Mobile App Development', description: 'Beautiful and functional mobile applications.' },
    { title: 'Digital Marketing', description: 'Grow your audience with innovative strategies.' },
    { title: 'UI/UX Design', description: 'User-centered designs for optimal experiences.' },
  ];

  return (
    <>
      <Navbar />
      <section id="Services" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-gray-600 mb-10">
            Discover the wide range of services we offer to help your business thrive in the digital age.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
