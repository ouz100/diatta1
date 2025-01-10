import Image from "next/image";

const Tutorials = () => {
  const tutorials = [
    {
      id: 1,
      image: "/images/1.png", // Chemin relatif dans le dossier public
      title: "How to work with prototype design with adobe xd featuring tools",
      comments: "22 Comments",
    },
    {
      id: 2,
      image: "/images/2.png",
      title: "Create multiple artboard by using figma prototyping development",
      comments: "15 Comments",
    },
    {
      id: 3,
      image: "/images/3.png",
      title: "Convert your web layout theming easily with sketch zeplin extension",
      comments: "12 Comments",
    },
  ];

  return (
    <>
      {/* Section 1: Tutorials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h3 className="text-purple-500 font-medium uppercase">
              Quality features
            </h3>
            <h2 className="text-3xl font-bold">
              Tutorials that people love most
            </h2>
          </div>
          {/* Tutorials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {tutorials.map((tutorial) => (
              <div
                key={tutorial.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative w-full h-48">
                  <img
                    src={tutorial.image}
                    alt={tutorial.title}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-48"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-500">{tutorial.comments}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Hire Developers */}
      <section className="py-12 bg-[#7D347A]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between rounded-lg">
          <div className="text-white">
            <h3 className="text-2xl font-bold">
              Hire the world's best developers
              <br />
              and designers around!
            </h3>
          </div>
          <div className="flex items-center mt-6 md:mt-0">
            <button className="bg-white text-purple-500 font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
              HIRE DEVELOPERS
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tutorials;
