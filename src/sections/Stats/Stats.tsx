import "./Stats.css";
import MaskGroup from "../../assets/svgs/MaskGroup.svg";
import meal from "../../assets/svgs/meal.svg";
import earth from "../../assets/svgs/earth.svg";

import { useState } from "react";
import { StatCard } from "../../components/StatCard/StatCard";

function Stats() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleCardClick = (index: number) => {
    if (activeIndex === index) return;
    setActiveIndex(index);
  };

  const statData = [
    {
      icon: MaskGroup,
      desc: "Active Users",
      title: "50,000+",
    },
    { icon: meal, desc: "Meals Tracked", title: "5,000,000+" },
    { icon: earth, desc: "Countries Wolrdwide", title: "38+" },
    { icon: earth, desc: "Goals Achived", title: "50,000+" },
  ];

  return (
    <div className="stats-container">
      <h1 style={{ marginBottom: 50, textAlign: "center", fontSize: 35 }}>
        Join the Fastest-Growing Fitness Community
      </h1>

      <div className="cards">
        {statData.map((i, index) => (
          <StatCard
            key={index}
            title={i.title}
            value={i.desc}
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
