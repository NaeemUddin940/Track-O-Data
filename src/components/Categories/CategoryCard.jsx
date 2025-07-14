import camera from "../../assets/images/Cameras.png";
import computer from "../../assets/images/Computer.png";
import gaming from "../../assets/images/Gaming.png";
import headphone from "../../assets/images/Headphones.png";
import phones from "../../assets/images/smartphone.png";
import smartwatch from "../../assets/images/SmartWatch.png";

export const CategoryCard = () => {
  const category = [
    { icon: camera, title: "Camera" },
    { icon: gaming, title: "Gaming" },
    { icon: computer, title: "Computer" },
    { icon: phones, title: "Phone" },
    { icon: smartwatch, title: "Smart Watch" },
    { icon: headphone, title: "Head Phone" },
  ];

  return (
    <div className="dark:bg-[#0E1317] bg-gray-300te py-5 px-3 flex flex-col items-center">
      <h3 className="pb-5 text-4xl text-black font-bold dark:text-white">
        Browse By Category
      </h3>
      <div className="dark:text-[#37ff00] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-5 text-black rounded-2xl">
        {category.map((c) => (
          <div
            key={c.id}
            className="dark:bg-gray-800 rounded-2xl bg-gray-300 w-[163px] h-[128px] flex flex-col justify-center items-center shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] cursor-pointer dark:shadow-[10px_10px_20px_#313c4a,-10px_-10px_20px_#1e252e]">
            <img
              key={c.id}
              className="size-20"
              src={c.icon}
              alt={c.title}
            />
            <h5>{c.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
