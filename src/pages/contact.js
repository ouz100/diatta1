import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Navbar />
      <section id="Contact" className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
          <p className="text-lg text-gray-600 text-center mb-10">
            Have any questions or want to work with us? Get in touch!
          </p>
          <form className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 border rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 border rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 mb-4 border rounded-lg"
            />
            <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
