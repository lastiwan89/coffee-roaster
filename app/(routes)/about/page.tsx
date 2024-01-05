import { HEAD_QUARTERS } from "@/constant";
import Image from "next/image";

export default function About() {
  return (
    <main>
      <section className="mb-24 mt-4">
        <div className="about-hero flex flex-col gap-6 rounded-md px-6 py-24 md:items-start md:px-14">
          <h3 className="text-28 text-cream-light text-center font-serif font-black">
            About Us
          </h3>
          <p className="text-15 text-cream-light text-center font-sans font-normal opacity-80 md:w-[398px] md:text-start">
            Coffeeroasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup - from bean to brew - in
            every shipment.
          </p>
        </div>
      </section>
      {/* barista section */}
      <section className="mb-44 grid md:mb-64 md:grid-cols-2">
        <div className="about-barista min-h-[400px] rounded-md md:h-[470px] md:w-[281px] md:place-self-center md:justify-self-start md:pr-16 lg:h-[520px] lg:w-[445px]"></div>
        <div className="mt-10 flex flex-col gap-8 md:mt-0 md:place-self-center md:justify-self-center">
          <h3 className="text-32 text-center font-serif font-black md:text-start">
            Our commitment
          </h3>
          <p className="text-15 text-grey-dark text-center font-sans font-normal md:text-start">
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </section>
      <section className="mb-24">
        <div className="bg-grey-dark grid gap-6 rounded-md px-4 pb-16 lg:grid-cols-2 lg:px-12 lg:py-16">
          <div className="about-quality mx-auto -mt-20 w-4/5 md:-mt-36 lg:mx-0 lg:ml-auto lg:h-[374px] lg:w-[345px] lg:rounded-sm">
            <Image
              className="w-full rounded-md lg:hidden"
              src="/about/tablet/image-quality.jpg"
              width={573}
              height={320}
              alt="quality image"
            />
          </div>
          <div className="grid gap-6 lg:row-start-1 lg:place-self-center lg:justify-self-center">
            <h3 className="text-28 text-cream-light text-center font-serif font-black lg:text-start">
              Uncompromising quality
            </h3>
            <p className="text-15 text-cream-light text-center font-sans font-normal opacity-80 lg:text-start">
              Although we work with growers who pay close attention to all
              stages of harvest and processing, we employ, on our end, a
              rigorous quality control program to avoid over-roasting or baking
              the coffee dry. Every bag of coffee is tagged with a roast date
              and batch number. Our goal is to roast consistent, user-friendly
              coffee, so that brewing is easy and enjoyable.
            </p>
          </div>
        </div>
      </section>
      {/* HQ sections */}
      <section className="mb-24 lg:px-16">
        <div>
          <h3 className="text-24 text-grey-light text-center font-serif font-black md:text-start">
            Our headquarters
          </h3>
        </div>
        <div className="grid md:grid-cols-3 md:justify-stretch md:gap-1">
          {HEAD_QUARTERS.map((item) => (
            <div
              className="mt-20 grid gap-4 md:mt-14 md:w-full"
              key={item.city}
            >
              <Image
                className="h-12 w-14 place-self-center md:place-self-start"
                src={item.url}
                width={52}
                height={50}
                alt={item.city}
              />
              <h4 className="text-28 text-grey-dark text-center font-serif font-black md:text-start">
                {item.country}
              </h4>
              <div>
                <p className="text-16 text-grey-dark text-center font-sans font-normal opacity-80 md:text-start">
                  {item.street}
                </p>
                <p className="text-16 text-grey-dark text-center font-sans font-normal opacity-80 md:text-start">
                  {item.city}
                </p>
                <p className="text-16 text-grey-dark text-center font-sans font-normal opacity-80 md:text-start">
                  {item.state_zip}
                </p>
                <p className="text-16 text-grey-dark text-center font-sans font-normal opacity-80 md:text-start">
                  {item.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
