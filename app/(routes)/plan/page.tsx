import React from "react";
import { PICK_PLAN } from "@/constant";

export default function Plan() {
  return (
    <main>
      <section className="plan-hero mb-28 flex rounded-md">
        <div className="grid gap-6 px-6 py-28">
          <h3 className="text-cream-light lg:text-72 text-40 md:text-48 text-center font-serif font-black md:text-start">
            Create a plan
          </h3>
          <p className="text-cream-light lg:text-16 text-15 text-center font-sans font-normal opacity-80 md:w-[498px] md:text-start">
            Build a subscription plan that best fits your needs. We offer an
            assortment of the best artisan coffees from around the globe
            delivered fresh to your door.
          </p>
        </div>
      </section>
      {/* pick coffee section */}
      <section>
        <div className="bg-grey-dark grid grid-rows-3 rounded-md px-6 md:grid-cols-3 md:grid-rows-1 md:gap-4">
          {PICK_PLAN.map((plan, index) => (
            <div
              className="relative mt-14 flex flex-col gap-6"
              key={plan.label}
            >
              {/* circle and rectangle */}
              {index !== 2 && (
                <div className="bg-pale-orange absolute left-[31px] top-[14px] hidden md:block md:h-[2px] md:min-w-[200px] lg:w-[286px] xl:w-[440px]"></div>
              )}
              <div className="border-cyan-dark hidden h-[31px] w-[31px] rounded-full border-2 md:block"></div>
              <h3 className="text-pale-orange text-72 mt-6 text-center font-serif font-black md:text-start">
                {plan.label}
              </h3>
              <h4 className="text-cream-light text-28 text-center font-serif font-black md:w-[200px] md:text-start">
                {plan.title}
              </h4>
              <p className="text-cream-light text-15 text-center font-sans font-normal opacity-80 md:text-start">
                {plan.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
