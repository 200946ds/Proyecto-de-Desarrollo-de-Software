import StatusBadge from './StatusBadge';

const DenunciaCard = ({ denuncia }) => {
  console.log('🔍 DENUNCIA EN CARD:', denuncia); // ← DEBUG
  
  // ✅ GUARD CLAUSULA
  if (!denuncia || !denuncia.id) {
    console.error('❌ DENUNCIA INVÁLIDA:', denuncia);
    return <div>Denuncia inválida</div>;
  }

  return (
    <div className="denuncia-card">
      <div className="denuncia-content">
        <div className="denuncia-info">
          <div className="denuncia-header">
            <StatusBadge estado={denuncia.estado} />
            <span className="denuncia-fecha">{denuncia.fecha}</span>
          </div>
          <h3 className="denuncia-tipo">{denuncia.tipo}</h3>
          <p className="denuncia-descripcion">{denuncia.descripcion}</p>
        </div>
        <button className="details-button">Ver detalles →</button>
      </div>
    </div>
  );
};

export default DenunciaCard;