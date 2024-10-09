/* eslint-disable @next/next/no-img-element */

const Choice = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 text-black font-serif">
      {/* Header */}
      <div className="p-4">
        <h1 className="text-7xl mb-4">
          Travelers&apos; Choice Awards Best <br /> of the Best 2024
        </h1>
        <p className="text-xl">
          Every year, we award travelers&apos; favorite destinations, hotels,
          restaurants, and things to do around the world, based on reviews and
          ratings collected over 12 months. So our Travelers&apos; Choice Awards
          Best of the Best winners are decided by you: real travelers from all
          over, sharing real opinions and stories.
        </p>
        <p className="text-lg mt-4">
          The 2024 winners are a celebration of everything we did last year—all
          the places we discovered and all the times we just said “yes” to new
          adventures. We’ll reveal the winners by category throughout the year,
          so keep checking back for the latest.
        </p>
        <p className="mt-6">
          To learn more about how winners are chosen,{" "}
          <a href="/awards-policy" className="text-blue-500 underline">
            visit our awards policy page
          </a>
          .
        </p>
      </div>

      {/* Categories Section */}
      <div className=" gap-8 mt-12 space-y-8 font-serif">
        <div className="relative w-full h-[400px]">
          {/* Background Image */}
          <img
            src="https://i.ibb.co.com/Lk12q4y/image.png"
            alt="Destinations"
            className="w-full h-full object-cover"
          />
          {/* Overlay for Text */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-start pl-8">
            <h2 className="text-white text-6xl font-bold">Destinations</h2>
          </div>
          {/* Year Badge */}
          <span className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-2 text-lg font-bold rounded-lg">
            2024
          </span>
        </div>

        <div className="relative w-full h-[400px]">
          {/* Background Image */}
          <img
          src="https://i.ibb.co.com/bLF6s60/image.png"
            alt="Beaches"
            className="w-full h-full object-cover"
          />
          {/* Overlay for Text */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-start pl-8">
            <h2 className="text-white text-6xl font-bold">Beaches</h2>
          </div>
          {/* Year Badge */}
          <span className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-2 text-lg font-bold rounded-lg">
            2024
          </span>
        </div>

        <div className="relative w-full h-[400px]">
          {/* Background Image */}
          <img
           src="https://i.ibb.co.com/ZmjgVYr/image.png"
            alt="Hotel`s"
            className="w-full h-full object-cover"
          />
          {/* Overlay for Text */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-start pl-8">
            <h2 className="text-white text-6xl font-bold">Hotel`s</h2>
          </div>
          {/* Year Badge */}
          <span className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-2 text-lg font-bold rounded-lg">
            2024
          </span>
        </div>

        <div className="relative w-full h-[400px]">
          {/* Background Image */}
          <img
             src="https://i.ibb.co.com/L09XGg2/image.png"
            alt="Things"
            className="w-full h-full object-cover"
          />
          {/* Overlay for Text */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-start pl-8">
            <h2 className="text-white text-6xl font-bold">Things To Do</h2>
          </div>
          {/* Year Badge */}
          <span className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-2 text-lg font-bold rounded-lg">
            2024
          </span>
        </div>


        <div className="relative w-full h-[400px]">
          {/* Background Image */}
          <img
            src="https://i.ibb.co.com/Cb779xQ/image.png"
            alt="Restaurants"
            className="w-full h-full object-cover"
          />
          {/* Overlay for Text */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-start pl-8">
            <h2 className="text-white text-6xl font-bold">Restaurants</h2>
          </div>
          {/* Year Badge */}
          <span className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-2 text-lg font-bold rounded-lg">
            2024
          </span>
        </div>
      </div>
    </div>
  );
};

export default Choice;
