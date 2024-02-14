import React from "react";

const Gallery = () => {
  // Play music when component mounts
  React.useEffect(() => {
    const audio = new Audio("/love.mp3");
    audio.play();
    return () => {
      audio.pause(); // Pause music when component unmounts
    };
  }, []);

  return (
    <>
      <h1 className="text-pink-500 italic font-bold text-center text-4xl mt-6  p-1">
        Happy Valentine's Day!
        <br />
        <span className="block">My Boss</span>
      </h1>

      <div className="flex flex-wrap justify-center">
        <img
          src="/hugging1.gif"
          alt="Image 2"
          className="m-2 object-cover w-80 h-100"
        />
        <img
          src="/hugging.gif"
          alt="Image 1"
          className="m-2 object-cover w-80 h-100"
        />
        <img
          src="/hugging2.gif"
          alt="Image 3"
          className="m-2 object-cover w-80 h-100"
        />
      </div>
    </>
  );
};

export default Gallery;
