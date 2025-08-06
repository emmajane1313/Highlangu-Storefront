import { VIDEOS } from "@/app/lib/constantes";
import { FunctionComponent } from "react";

const Transmissions: FunctionComponent<{ dict: Record<string, string> }> = ({ dict }) => {
  return (
    <div className="relative w-full h-fit grid grid-cols-1 galaxy:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {VIDEOS.map((vid, i) => (
        <div key={i} className="relative w-full h-fit flex">
          <video
            autoPlay
            muted
            loop
            draggable={false}
            poster={`/images/${vid?.poster}`}
            className="relative object-cover w-full h-44 lg:h-52 flex"
          >
            <source src={`/videos/${vid?.src}`} />
          </video>
          <div className="absolute top-0 left-0 flex flex-col font-vcr uppercase text-white">
            <div className="flex w-fit h-fit bg-black px-2 py-1 text-sm relative">{`${
              dict?.transmission
            } ${i < 10 ? `0${i}` : i}`}</div>
            <div className="flex w-fit text-xs bg-black px-2 py-1 h-fit relative">
              {i < 10 ? `0${i}` : i}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transmissions;
