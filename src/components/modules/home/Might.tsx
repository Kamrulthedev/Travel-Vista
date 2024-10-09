/* eslint-disable @next/next/no-img-element */
import { BiSolidLike } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";

const Might = () => {
  const cards = [
    {
      id: 1,
      image: "https://i.ibb.co.com/kqmcpG5/image.png",
      title: "Budapest Danube River Candlelit Dinner Cruise with Live Music",
      label: "LIKELY TO SELL OUT",
      reviews: 1272,
      rating: 4.5,
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/c14pNKJ/image.png",
      title: "Budapest Evening Sightseeing Cruise and Unlimited Proseccos",
      label: "BEST SELLER",
      reviews: 2280,
      rating: 4.7,
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/NxqY6Qt/image.png",
      title: "Budapest Danube River Sightseeing Night Cruise",
      label: "BEST SELLER",
      reviews: 2590,
      rating: 4.8,
    },
    {
      id: 4,
      image: "https://i.ibb.co.com/NxqY6Qt/image.png",
      title:
        "Night-Time Dark History and Vampire Walking Tour in Buda Castle District",
      label: "BEST SELLER",
      reviews: 811,
      rating: 4.6,
    },
  ];

  return (
    <div className="px-6 bg-white text-black font-serif pb-10">
      <div className="space-y-3 pb-4">
        <h2 className="lg:text-4xl text-2xl">You might like these</h2>
        <p className="text-gray-700 mb-8">More things to do in Budapest</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="bg-white rounded-lg overflow-hidden">
            <div className="relative">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              {card.label && (
                <div className="absolute top-2 left-2 bg-white text-black text-sm font-semibold px-2 py-1 rounded">
                  {card.label}
                </div>
              )}
              <div className="absolute top-2 right-2">
                <button className="rounded-full text-2xl p-2 bg-white">
                  <BiSolidLike />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{card.title}</h3>
              <div className="flex items-center mt-2">
                <div className="text-green-500 flex items-center text-lg">
                <AiOutlineLike />
                <AiOutlineLike />
                <AiOutlineLike />
                </div>
                <span className="ml-2">{card.reviews}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Might;
