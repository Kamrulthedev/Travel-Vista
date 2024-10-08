/* eslint-disable @next/next/no-img-element */

const ContactSimpleCard = () => {
    return (
        <div className="flex flex-col gap-6 p-6 bg-white  font-serif text-black pt-16">
        {/* First section */}
        <div className="flex justify-center">
          <div className="flex items-center justify-between bg-purple-50 p-6 rounded-lg w-[90%] ">
            <div className="flex items-center gap-4">
              {/* Image */}
              <img
                src="https://i.ibb.co.com/9bzBhx7/image.png"
                alt="Traveler's Choice"
                className="w-28 h-28 rounded-lg object-cover"
              />
              <div>
                <h2 className="text-2xl font-bold">
                 Contact Our Teams & Join Our Clube
                </h2>
                <p className="text-gray-600">
                While famed landmarks and popular tourist attractions are part of every good travel itinerary, <br /> hidden gems serve up the adventure and variety you crave in a long-awaited trip.
                </p>
              </div>
            </div>
            <button className="bg-white border border-black rounded-full py-2 px-6 hover:bg-gray-100">
            Let&apos;s Go
            </button>
          </div>
        </div>
        </div>
    );
};

export default ContactSimpleCard;