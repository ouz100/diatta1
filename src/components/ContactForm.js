const SupportSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left px-6">
          <h2 className="text-3xl font-bold mb-4">
            Free Customer Support to ensure what you like to expect
          </h2>
          <p className="text-gray-600 mb-4">
            We offer a risk-free trial period of up to two weeks. You will only
            have to pay if you are happy with the developer and wish to
            continue. If you are unsatisfied, we’ll refund payment or fix issues
            on our dime period customers.
          </p>
          <p className="text-gray-600 mb-6">
            If you are happy with the developer and wish to continue. If you are
            unsatisfied, we’ll refund payment or fix issues.
          </p>
          <a
            href="#"
            className="text-blue-500 font-semibold hover:underline"
          >
            Learn more &rarr;
          </a>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 px-6">
          <img
            src="/oo.png"
            alt="Customer Support Illustration"
            className="w-full max-w-md mx-auto md:mx-0"
          />
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
