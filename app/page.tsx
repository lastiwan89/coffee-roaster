import Button from "./components/button";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="home-hero flex flex-col items-center gap-6 rounded-md px-6 py-28 md:items-start md:px-14">
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
    </main>
  );
}
