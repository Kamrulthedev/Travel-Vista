import { Card, CardFooter, Image } from "@nextui-org/react";

const ContactCard = () => {
  return (
    <div className="bg-white pb-10">
      <div className="pt-16 px-7 text-black space-y-4 pb-3 text-center">
        <h1 className="lg:text-4xl text-2xl font-serif ">
        Contact for better service
        </h1>
        <p className="text-base font-serif text-gray-500">
          2024’s Travelers’ Choice Awards Best of the Best Restaurants
        </p>
      </div>
      {/* Grid Layout for 5 Cards */}
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 p-5">
        {/* Card 1 */}
        <Card isFooterBlurred className=" h-[300px] font-serif">
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="https://i.ibb.co.com/bv5CrF2/image.png"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between p-4">
            <h1 className="text-5xl font-bold text-black">Fine Dining</h1>
          </CardFooter>
        </Card>
        {/* Card 2 */}
        <Card isFooterBlurred className=" h-[300px] font-serif">
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="https://i.ibb.co.com/ydN0kbC/image.png"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between p-4">
            <h1 className="text-5xl font-bold text-black">Date Night</h1>
          </CardFooter>
        </Card>
        {/* Card 3 */}
        <Card isFooterBlurred className=" h-[300px] font-serif">
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="https://i.ibb.co.com/B3XjW7N/image.png"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between p-4">
            <h1 className="text-5xl font-bold text-black">Hidden Games</h1>
          </CardFooter>
        </Card>

      </div>
    </div>
  );
};

export default ContactCard;
