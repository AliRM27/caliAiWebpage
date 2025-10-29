import "./ChangeYourBody.css";
import { StatCard } from "../../components/StatCard/StatCard";
import { useState } from "react";

function ChangeYourBody() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleCardClick = (index: number) => {
    if (activeIndex === index) return;
    setActiveIndex(index);
  };

  const cards = [
    {
      icon: "🔥",
      title: "Burn Fat Easily",
      desc: "AI sets your calorie deficit.",
    },
    {
      icon: "💪",
      title: "Build Muscle Faster",
      desc: "AI ensures protein targets.",
    },
    { icon: "⚡", title: "1-Snap Tracking", desc: "Just snap a meal." },
    { icon: "📊", title: "Progress That Excites You", desc: "Smart charts." },
    { icon: "🏆", title: "Premium Only", desc: "No ads, no clutter." },
    { icon: "🗒", title: "Personalized Plans", desc: "Plan That Fit." },
  ];

  return (
    <div className="container">
      <h1
        style={{
          fontSize: 35,
          maxWidth: 600,
          textAlign: "center",
          paddingLeft: 50,
          paddingRight: 50,
        }}
      >
        Built to Change Your Body, Not Waste Your Time
      </h1>
      <div className="cardsContainer">
        {cards.map((card, index) => (
          <StatCard
            key={index}
            emoji={card.icon}
            title={card.title}
            value={card.desc}
            isFocused={activeIndex === index}
            onClick={() => handleCardClick(index)}
            style={{}}
          />
        ))}
      </div>
      <button type="button">Start Free — Get My Plan Now</button>
    </div>
  );
}

export default ChangeYourBody;
