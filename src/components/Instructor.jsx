import { RiStarFill } from "react-icons/ri";
const Instructor = ({ id, name, specialty, pic, rating }) => {
  return (
    <div
      className="group flex flex-col gap-y-4 p-4 rounded-4xl border border-solid border-transparent hover:border-gray-10 transition-colors duration-300"
      data-id={id}
    >
      <div className="w-full h-[300px] rounded-3xl border border-solid border-transparent overflow-hidden group-hover:border-gray-10 transition-colors duration-300">
        <img src={pic} alt={name} />
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <p className="mb-1.5 text-lg text-gray-10">{name}</p>
            <div className="flex items-center gap-x-1.5">
              <RiStarFill className="text-primary-50" size={20} />
              <p className="text-base text-gray-10">{rating}</p>
            </div>
          </div>
          <p className="text-base text-gray-60">{specialty}</p>
        </div>
        <a
          href="#"
          className="group/view-btn btn btn-outline flex items-center justify-center gap-x-2 !w-full"
        >
          View Profile
        </a>
      </div>
    </div>
  );
};

export default Instructor;
