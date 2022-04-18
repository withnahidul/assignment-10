import { Link } from "react-router-dom";

const services = [
  {
    title: "Service-1",
    price: 1500,
    image: "https://withnahidul.github.io/service-icon/service-icon-1.png",
    description: `you will typically receive approximately 50 to 60 images an hour. If you are adding a second photographer, that will increases the covarage and the total number of images an hour.The oveall number of images very and may be affected by the 
      events of the day.`,
  },
  {
    title: "Service-2",
    price: 2000,
    image: "https://withnahidul.github.io/service-icon/service-icon-2.png",
    description: `you will typically receive approximately 90 to 100 images an hour. If you are adding a second photographer, that will increases the covarage and the total number of images an hour.The oveall number of images very and may be affected by the 
      events of the day.`,
  },
  {
    title: "Service-3",
    price: 3000,
    image: "https://withnahidul.github.io/service-icon/service-icon-4.png",
    description: `you will typically receive approximately 150 to 260 images an hour. If you are adding a second photographer, that will increases the covarage and the total number of images an hour.The oveall number of images very and may be affected by the 
      events of the day.`,
  },
];

const Services = () => {
  return (
    <div className="md:container my-10 md:mx-auto">
      <h2 className="text-5xl text-center font-bold">Services</h2>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 my-8">
        {services.map((service) => (
          <div className="px-4 mt-6">
            <div className="bg-indigo-200 p-6 rounded-lg shadow-xl">
              <div className="flex justify-center">
                <img src={service.image} alt="Image Here" className="w-50" />
              </div>
              <h4 className="my-2 text-gray-600 text-2xl font-semibold uppercase text-center leading-tight truncate">
                {service.title}
              </h4>

              <div className="mt-4">
                <span className="text-green-600 text-3xl font-semibold">
                  Price: ${service.price}
                </span>
              </div>
              <div>
                <span className="text-gray-800 my-2 text-sm text-justify p-2 inline-block rounded-lg tracking-wide">
                  {service.description}
                </span>
              </div>
              <div className="flex justify-center">
                <Link to="/checkout">
                  <button className="px-5 py-2 bg-slate-700 rounded font-semibold text-white hover:bg-slate-100  hover:text-gray-800 transition-colors">
                    Confirm Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
