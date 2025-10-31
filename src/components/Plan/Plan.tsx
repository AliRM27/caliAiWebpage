import premium from "../../assets/svgs/premium.svg";
import mark from "../../assets/svgs/mark.svg";
import "./Plan.css";

function Plan({
  plan,
  index,
}: {
  plan: { period: string; price: string };
  index: number;
}) {
  const benefits = [
    "Unlimited scans",
    "Personalized plan",
    "Premium only — No ads",
    "AI Personalized Fasting",
    "500M+ Foods Database",
    "Journey Tracking Analytics",
  ];

  return (
    <div className="plan-card">
      {index === 1 && (
        <div
          className="plan-card_discount"
          style={{ backgroundColor: "white" }}
        >
          <p style={{ color: "var(--color-primary)" }}>SAVE 60%</p>
        </div>
      )}
      <p id="plan-card_period">
        {plan.period}
        <span style={index === 0 ? { display: "none" } : {}}>
          Free 3-Day Trial
        </span>
      </p>
      <div className="plan-card_price">
        <h2>{plan.price} / Month</h2>
        <p
          style={{ textAlign: "center", display: "flex", alignItems: "center" }}
        >
          <img
            src={premium}
            alt="premium"
            style={{
              filter:
                index === 1
                  ? "invert(29%) sepia(37%) saturate(6014%) hue-rotate(197deg) brightness(94%) contrast(104%)"
                  : "invert(100%) sepia(11%) saturate(2%) hue-rotate(12deg) brightness(110%) contrast(101%)",
            }}
          />{" "}
          Premium
        </p>
      </div>
      <div className="plan-card_info">
        <ul>
          {benefits.map((b, index) => (
            <li key={index}>
              <img src={mark} alt="mark" style={{}} />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Plan;
