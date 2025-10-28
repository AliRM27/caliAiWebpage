import "./Stats.css";
import MaskGroup from "../../assets/svgs/MaskGroup.svg";
import meal from "../../assets/svgs/meal.svg";
import earth from "../../assets/svgs/earth.svg";

import { useState } from "react";
import { StatCard } from "../../components/StatCard/StatCard";

function Stats() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    if (activeIndex === index) return;
    setActiveIndex(index);
  };

  const statData = [
    {
      icon: MaskGroup,
      title: "Active Users",
      value: "50,000+",
    },
    { icon: meal, title: "Meals Tracked", value: "5,000,000+" },
    { icon: earth, title: "Countries Wolrdwide", value: "38+" },
    { icon: earth, title: "Goals Achived", value: "50,000+" },
  ];

  return (
    <div className="stats-container">
      <h1 style={{ marginBottom: 50, textAlign: "center" }}>
        Join the Fastest-Growing Fitness Community
      </h1>

      <div className="cards">
        {statData.map((i, index) => (
          <StatCard
            key={index}
            title={i.title}
            value={i.value}
            icon={i.icon}
            isFocused={activeIndex === index}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>

      <button type="button">Start Free — Transform With Us Today</button>
    </div>
  );
}

export default Stats;
