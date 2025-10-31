import "./PremiumPlan.css";
import Plan from "../../components/Plan/Plan";

function PremiumPlan() {
  const plans = [
    { period: "Monthly", price: "$9.99" },
    { period: "Yearly", price: "$4.16" },
  ];

  return (
    <div className="premiumPlan-container">
      <div className="plans">
        {plans.map((plan, index) => (
          <Plan key={index} plan={plan} index={index} />
        ))}
      </div>
      <button style={{ alignItems: "center" }} type="button">
        Unlock Premium — Start Free Today
      </button>
    </div>
  );
}

export default PremiumPlan;
