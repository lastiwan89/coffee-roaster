import Summary from "./summary";

export default function PlanSummary() {
  return (
    <div className="grid">
      <div>
        <h1>Order Summary</h1>
      </div>
      <Summary />
      <div>
        <button>Checkout</button>
      </div>
    </div>
  );
}
