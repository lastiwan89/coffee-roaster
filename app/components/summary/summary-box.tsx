import Summary from "@/app/components/summary/summary";

export default function SummaryBox() {
  return (
    <div>
      <div className="my-20 grid rounded-sm bg-grey-dark px-6 py-8">
        <div>
          <h3 className="font-sans uppercase text-grey-light">order summary</h3>
        </div>
        <Summary />
      </div>
    </div>
  );
}
