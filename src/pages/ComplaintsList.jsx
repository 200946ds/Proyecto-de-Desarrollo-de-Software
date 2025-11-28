import DenunciaCard from '../components/ui/DenunciaCard';

const ComplaintsList = ({ denuncias }) => {
  console.log('🔍 DENUNCIAS RECIBIDAS:', denuncias); // ← DEBUG
  
  if (!denuncias || !Array.isArray(denuncias)) {
    return <div>No hay denuncias disponibles</div>;
  }

  return (
    <div className="denuncias-list">
      <h2 className="denuncias-title">Mis Denuncias</h2>
      {denuncias.map((denuncia, index) => {
        console.log(`🔍 DENUNCIA ${index}:`, denuncia); // ← DEBUG
        if (!denuncia || !denuncia.id) {
          console.warn(`⚠️ DENUNCIA INVÁLIDA en índice ${index}:`, denuncia);
          return null;
        }
        return (
          <DenunciaCard key={denuncia.id} denuncia={denuncia} />
        );
      })}
    </div>
  );
};

export default ComplaintsList;