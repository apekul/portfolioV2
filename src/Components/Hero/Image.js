import React from "react";

const Image = () => {
  return (
    <div className="w-60 h-60 md:w-96 md:h-96 blob p-[3px] bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-indigo-400 select-none shrink-0">
      <div className="w-full h-full blob overflow-hidden">
        <img
          src="/pic.jpg"
          alt="Adam Pękul"
          className="w-full h-full object-cover object-[70%_center] scale-110"
        />
      </div>
    </div>
  );
};

export default Image;
