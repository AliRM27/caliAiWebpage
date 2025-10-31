import "./CaliAiFix.css";
import groupIPhone from "../../assets/GroupIPhone.png";
import { useState } from "react";

function CaliAiFix() {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  const buttons = [
    { text: "Too many calories" },
    { text: "Not enough protein" },
    { text: "No consistency" },
  ];

  const toggleSelection = (index: number) => {
    setActiveIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="caliAiFix-container">
      <div className="caliAiFix-innnerContainer">
        <div className="caliAiFix-innerContainer_info">
          <h1 style={{ fontWeight: 700, textAlign: "center" }}>
            What’s Stopping You From Reaching Your Goal?
          </h1>
          <div className="caliAiFix-innerContainer_info-buttons">
            {buttons.map((b, index) => {
              const isActive = activeIndices.includes(index);
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => toggleSelection(index)}
                  className="caliAiFix-innerContainer_info-buttons_button"
                  style={
                    isActive
                      ? {
                          backgroundColor: "transparent",
                          border: "2px solid var(--color-primary)",
                          color: "var(--color-primary)",
                        }
                      : { backgroundColor: "white", color: "black" }
                  }
                >
                  {b.text}
                </button>
              );
            })}
          </div>

          <h2 id="caliAiFixh2">That’s exactly what CalioAI fixes</h2>
          <button>Download Free Trial & Fix It Today</button>
        </div>

        <img
          id="caliAiFiximg"
          src={groupIPhone}
          alt="groupIPhone"
          width={400}
        />
      </div>
    </div>
  );
}

export default CaliAiFix;
