"use client";
import React, { useState } from "react";
import Gallery from "./Gallery";
import { useRouter } from "next/navigation";
import "./globals.css";

function App() {
  const [showGallery, setShowGallery] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const router = useRouter();

  const handleClick = () => {
    setShowGallery(true);
    setCurrentPage("gallery");
  };

  const handleGoBack = () => {
    setShowGallery(false);
    setCurrentPage("home");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-100">
      <header className="text-center">
        {currentPage !== "gallery" && (
          <>
            <h1 className="text-4xl font-bold text-red-600 mb-4">
              Our Love❤️ Story
            </h1>
            <div className="space-y-5">
              {/* Placeholder for love story */}
              <div className="max-w-lg mx-auto bg-white rounded-md shadow-md p-4 animate-slideLeft">
                <h2 className="text-xl font-semibold mb-2">
                  Chapter 1: The Beginning
                </h2>
                <p className="text-gray-800">
                  Once upon a time, in a land far away, their love story began,
                  like a fairytale come true...
                </p>
              </div>
              <div className="max-w-lg mx-auto bg-white rounded-md shadow-md p-4 animate-slideRight">
                <h2 className="text-xl font-semibold mb-2">
                  Chapter 2: First Encounter
                </h2>
                <p className="text-gray-800">
                  Beneath the starlit sky, their paths intertwined, igniting a
                  spark that would never die...
                </p>
              </div>
              <div className="max-w-lg mx-auto bg-white rounded-md shadow-md p-4 animate-slideLeft">
                <h2 className="text-xl font-semibold mb-2">
                  Chapter 3: Falling in Love
                </h2>
                <p className="text-gray-800">
                  With each passing moment, their hearts danced in sync,
                  painting a love story that words could never truly depict...
                </p>
              </div>
              <div className="max-w-lg mx-auto bg-white rounded-md shadow-md p-4 animate-slideRight">
                <h2 className="text-xl font-semibold mb-2">
                  Chapter 4: Forever Together
                </h2>
                <p className="text-gray-800">
                  As the final chapter unfolded, they embraced a love that would
                  withstand any storm, vowing to be together, forever and
                  always, hand in hand... 💕
                </p>
              </div>
            </div>
          </>
        )}

        {currentPage === "gallery" ? (
          <>
            <button
              onClick={handleGoBack}
              className="absolute left-4 top-4 bg-red-600 px-3 py-2 text-white rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-red-700"
            >
              &larr; Back
            </button>
            <Gallery />
          </>
        ) : (
          <button
            onClick={handleClick}
            className="mt-8 inline-block px-6 py-3 bg-red-600 text-white rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-red-700"
          >
            Open Valentine's Surprise
          </button>
        )}
      </header>
    </div>
  );
}

export default App;
