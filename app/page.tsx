import { BENEFIT, COFFEE_COL, PICK_PLAN } from "@/constant";
import Button from "./components/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="home-hero mb-2 flex flex-col items-center gap-6 rounded-md px-6 py-28 md:items-start md:px-14">
        <div className="flex flex-col gap-6 md:w-[398px] lg:w-[493px]">
          <h3 className="text-cream-light lg:text-72 text-40 md:text-48 text-center font-serif font-black md:text-start">
            Great coffee <br className="lg:hidden" />
            made simple.
          </h3>
          <p className="text-cream-light text-15 lg:text-16 text-center font-sans font-normal opacity-80  md:text-start">
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
        </div>
        <div className="mt-2">
          <Button />
        </div>
      </section>
      {/* coffe collection */}
      <section className="px-6 py-28">
        <div className="">
          <h3 className="text-40 colmask text-grey-dark md:text-96 text-center font-serif font-bold">
            our collection
          </h3>
        </div>
        <div className="grid md:-mt-20 md:px-20 lg:-mt-16 lg:grid-cols-4 lg:gap-6 lg:px-12">
          {COFFEE_COL.map((coffee) => (
            <div
              className="mt-12 flex flex-col gap-4 md:flex-row lg:flex-col"
              key={coffee.label}
            >
              <div className="flex items-center justify-center">
                <Image
                  src={coffee.url}
                  width={200}
                  height={151}
                  alt={coffee.label}
                />
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-24 text-center font-serif font-black md:text-start lg:text-center">
                  {coffee.label}
                </h4>
                <p className="text-15 text-center font-sans font-normal md:text-start lg:text-center">
                  {coffee.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* why choose us section */}
      <section>
        <div className="bg-grey-dark benefit-box flex flex-col gap-6 rounded-md px-4 pt-16">
          <h3 className="text-cream-light text-28 text-center font-serif font-black">
            Why choose us?
          </h3>
          <p className="text-cream-light text-15 text-center font-sans font-normal opacity-80">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
        <div className="grid grid-rows-3 gap-6 px-6 lg:grid-cols-3 lg:grid-rows-1">
          {BENEFIT.map((item) => (
            <div
              key={item.label}
              className="bg-cyan-dark flex flex-col items-center justify-center gap-16 rounded-sm px-8 py-24 md:flex-row md:px-16 md:py-10 lg:flex-col lg:py-20"
            >
              <div>
                <Image src={item.url} width={72} height={72} alt={item.label} />
              </div>
              <div className="flex flex-col gap-6">
                <h4 className="text-24 text-cream-light text-center font-serif font-black md:text-start lg:text-center">
                  {item.label}
                </h4>
                <p className="text-16 text-cream-light text-center font-sans font-normal md:text-start lg:text-center">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* how it works section */}
      <section className="flex flex-col gap-6 py-32">
        <div>
          <h3 className="text-24 text-grey-light text-center font-serif font-black md:text-start">
            How it works
          </h3>
        </div>

        {/* grid items */}
        <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 md:gap-6">
          {PICK_PLAN.map((plan, index) => (
            <div className="relative mt-6 flex flex-col gap-6" key={plan.label}>
              {/* circle and rectangle */}
              {index !== 2 && (
                <div className="bg-pale-orange absolute left-[31px] top-[14px] hidden md:block md:h-[2px] md:min-w-[219px] lg:w-[301px] xl:w-[440px]"></div>
              )}
              <div className="border-cyan-dark hidden h-[31px] w-[31px] rounded-full border-2 md:block"></div>
              <h3 className="text-pale-orange text-72 mt-6 text-center font-serif font-black md:text-start">
                {plan.label}
              </h3>
              <h4 className="text-grey-dark text-28 text-center font-serif font-black md:w-[200px] md:text-start">
                {plan.title}
              </h4>
              <p className="text-grey-dark text-15 text-center font-sans font-normal md:text-start">
                {plan.text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center md:mt-6 md:justify-start">
          <Button />
        </div>
      </section>
    </main>
  );
}
