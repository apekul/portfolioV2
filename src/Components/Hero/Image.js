import React from "react";

const Image = () => {
  return (
    <div className="h-60 w-60 md:w-96 md:h-96 relative select-none">
      <div className="w-full h-full flex gap-[4px] relative">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-full" id={"heroContainer" + i}>
            <img
              src="/pic.jpg"
              alt="hero-img"
              className={`h-full cursor-pointer shadow-md object-cover opacity-70 hover:opacity-100 hover:scale-105 ease-in-out duration-300 grayscale hover:grayscale-0
            ${i === 1 && "grayscale-0 opacity-100"}`}
              id={"heroImg" + i}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Image;
