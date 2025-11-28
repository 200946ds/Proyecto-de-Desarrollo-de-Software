const StatCard = ({ icon, label, value, type }) => {
  // ✅ NO usar denuncia aquí - solo props específicas
  return (
    <div className={`stat-card ${type}`}>
      {icon}
      <p className="stat-label">{label}</p>
      <p className="stat-value">{value}</p>
    </div>
  );
};

export default StatCard;