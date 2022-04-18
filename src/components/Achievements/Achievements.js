import { Link } from "react-router-dom";

const achievements = [
  {
    image: "https://withnahidul.github.io/service-icon/offer-4.jpg",
  },
  {
    image: "https://withnahidul.github.io/service-icon/offer-2.jpg",
  },
  {
    image: "https://withnahidul.github.io/service-icon/offer-3.jpg",
  },
];
const Achievements = () => {
  return (
    <div className="md:container my-10 md:mx-auto">
      <h2 className="text-5xl text-center font-bold">Demo Photography</h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 my-8">
        {achievements.map((achievement) => (
          <div className="grid px-4 mt-6">
            <div className="grid p-6 justify-center items-center rounded-lg shadow-xl">
              <div className="flex justify-center items-center">
                <img src={achievement.image} alt="Image Here" className="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
