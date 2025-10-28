import "./StatCard.css";

export function StatCard({ icon, title, value, isFocused, onClick }: any) {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: isFocused ? "var(--color-primary)" : "#fff",
        color: isFocused ? "white" : "var(--color-text)",
      }}
      className="stat-card"
    >
      <div
        style={{
          padding: 10,
          borderRadius: 15,
          height: 50,
          width: 50,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          backgroundColor: isFocused ? "#fff" : "var(--color-primary)",
        }}
      >
        <img
          src={icon}
          alt="icon"
          style={{
            width: 20,
            height: 20,
            filter: isFocused
              ? "invert(29%) sepia(37%) saturate(6014%) hue-rotate(197deg) brightness(94%) contrast(104%)"
              : "invert(100%) sepia(29%) saturate(2%) hue-rotate(295deg) brightness(111%) contrast(101%)",
          }}
        />
      </div>
      <p style={{ fontWeight: 600, fontSize: 22 }}>{value}</p>
      <p style={{ color: isFocused ? "white" : "#293B50" }}>{title}</p>
    </div>
  );
}
