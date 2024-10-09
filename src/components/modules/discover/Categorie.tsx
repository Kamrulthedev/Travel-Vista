import { Card, CardFooter, Image } from "@nextui-org/react";



const Categorie = () => {
    
      return (
        <div className="bg-white pb-10">
          <div className="pt-16 px-7 text-black space-y-4 pb-3">
            <h1 className="lg:text-4xl text-2xl font-serif">
              Top destinations for your next vacation
            </h1>
          </div>
    
          {/* Scroll Buttons */}
          <div className="relative flex items-center justify-center">
            {/* Scrollable Flex Layout for Cards */}
            <div
              id="scroll-container"
              className="flex space-x-4 p-5 overflow-x-auto scrollbar-hide scroll-smooth font-serif"
            >
              {/* Card 1 */}
              <Card isFooterBlurred className="min-w-[300px] h-[300px]">
                <Image
                  removeWrapper
                  alt="Card example background"
                  className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                  src="https://i.ibb.co.com/vDJQSNb/image.png"
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between p-4">
                  <h1 className="text-4xl font-bold text-white">
                  Destinations, Overviwe
                  </h1>
                </CardFooter>
              </Card>
    
              {/* Card 2 */}
              <Card isFooterBlurred className="min-w-[300px] h-[300px]">
                <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0 w-full h-full object-cover"
                  src="https://i.ibb.co.com/DV9L3r2/image.png"
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 p-4">
                  <h1 className="text-4xl font-bold">Beaches, Overviwe</h1>
                </CardFooter>
              </Card>
              {/* Card 3 */}
              <Card isFooterBlurred className="min-w-[300px] h-[300px]">
                <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0 w-full h-full object-cover"
                  src="https://i.ibb.co.com/wc0WyRy/image.png"
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 p-4">
                  <h1 className="text-4xl font-bold">Hotel`s, Overviwe</h1>
                </CardFooter>
              </Card>
              {/* Card 2 */}
              <Card isFooterBlurred className="min-w-[300px] h-[300px]">
                <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0 w-full h-full object-cover"
                  src="https://i.ibb.co.com/gv966yV/image.png"
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 p-4">
                  <h1 className="text-4xl font-bold">Things To Do, Overviwe</h1>
                </CardFooter>
              </Card>
              {/* Card 2 */}
              <Card isFooterBlurred className="min-w-[300px] h-[300px]">
                <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0 w-full h-full object-cover"
                  src="https://i.ibb.co.com/ngYYYdK/image.png"
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 p-4">
                  <h1 className="text-4xl font-bold">Resturents, Overviwe</h1>
                </CardFooter>
              </Card>

            </div>
          </div>
        </div>
    );
};

export default Categorie;