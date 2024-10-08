import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

const Tread = () => {
  return (
    <div className="bg-white">
      <div className="pt-16 px-7 text-black space-y-4 pb-3">
        <h1 className="lg:text-4xl text-2xl font-serif ">
          Treat yourself to an award-winning meal
        </h1>
        <p className="text-base font-serif">
          2024’s Travelers’ Choice Awards Best of the Best Restaurants
        </p>
      </div>
      {/* Grid Layout for 5 Cards */}
      <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-4 p-5">
        {/* Card 1 */}
        <Card isFooterBlurred className=" h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col items-start p-4">
            <p className="text-tiny text-white/60 uppercase font-bold">New</p>
            <h4 className="text-white font-medium text-2xl">Cox`s Bazar</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="https://i.ibb.co.com/wyw7z9V/image.png"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between p-4">
            <div>
              <p className="text-white text-tiny">Available soon.</p>
              <p className="text-white text-tiny">Get notified.</p>
            </div>
            <Button
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              Notify Me
            </Button>
          </CardFooter>
        </Card>

        {/* Card 2 */}
        <Card isFooterBlurred className=" h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col items-start p-4">
            <p className="text-tiny text-white/60 uppercase font-bold">
              New Location
            </p>
            <h4 className="text-white/90 font-medium text-xl">
               Nill Ghiry, Bandorbon
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="https://i.ibb.co.com/zxHn85N/image.png"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 p-4">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="https://nextui.org/images/breathing-app-icon.jpeg"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">
                  Get a good night&apos;s sleep.
                </p>
              </div>
            </div>
            <Button radius="full" size="sm">
              Get App
            </Button>
          </CardFooter>
        </Card>

        {/* Card 3 */}
        <Card isFooterBlurred className="w-full h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col items-start p-4">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Exclusive
            </p>
            <h4 className="text-white font-medium text-2xl">E-nany, Cox`s Bazar</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Smartphone background"
            className="z-0 w-full h-full object-cover"
            src="https://i.ibb.co.com/B4mQkg4/image.png"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between p-4">
            <div>
              <p className="text-black text-tiny">Pre-order now.</p>
            </div>
            <Button
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              Pre-order
            </Button>
          </CardFooter>
        </Card>

        {/* Card 4 */}
        <Card isFooterBlurred className="w-full h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col items-start p-4">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Canada
            </p>
            <h4 className="text-white/90 font-medium text-xl">
              I-is-Co Bes, Canada
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Travel background"
            className="z-0 w-full h-full object-cover"
            src="https://i.ibb.co.com/9TdWT9F/image.png"
          />
          <CardFooter className="absolute flex justify-between bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 p-4">
            <div>
              <p className="text-tiny text-white/60">Breathing App</p>
            </div>
            <Button radius="full" size="sm">
              Learn More
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Tread;
