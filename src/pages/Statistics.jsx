import StatCard from '../components/ui/StatCard';
import { BarChart3, AlertCircle, Clock, CheckCircle } from 'lucide-react';

const Statistics = ({ estadisticas, denuncias }) => {
  console.log('🔍 ESTADÍSTICAS:', estadisticas); // ← DEBUG
  console.log('🔍 DENUNCIAS EN STATS:', denuncias); // ← DEBUG

  if (!estadisticas) {
    return <div>Cargando estadísticas...</div>;
  }

  const TIPOS = ['Infraestructura Vial', 'Residuos Sólidos', 'Señalización'];

  return (
    <div className="stats-container">
      <h2 className="denuncias-title">Estadísticas</h2>
      <div className="stats-grid">
        <StatCard 
          icon={<BarChart3 className="stat-icon" />} 
          label="Total" 
          value={estadisticas.total} 
          type="total" 
        />
        <StatCard 
          icon={<AlertCircle className="stat-icon" />} 
          label="Pendientes" 
          value={estadisticas.pendientes} 
          type="pendientes" 
        />
        <StatCard 
          icon={<Clock className="stat-icon" />} 
          label="En Proceso" 
          value={estadisticas.enProceso} 
          type="en-proceso" 
        />
        <StatCard 
          icon={<CheckCircle className="stat-icon" />} 
          label="Resueltas" 
          value={estadisticas.resueltas} 
          type="resueltas" 
        />
      </div>

      {/* Resto del gráfico igual... */}
      <div className="card">
        <h3 className="card-title">Denuncias por Tipo</h3>
        <div className="chart-container">
          {TIPOS.map((tipo, idx) => {
            const count = (denuncias || []).filter(d => d?.tipo === tipo).length;
            const percentage = (denuncias && denuncias.length > 0) ? (count / denuncias.length) * 100 : 0;
            return (
              <div key={idx} className="chart-item">
                <div className="chart-header">
                  <span className="chart-label">{tipo}</span>
                  <span className="chart-value">{count} ({percentage.toFixed(0)}%)</span>
                </div>
                <div className="chart-bar-bg">
                  <div className="chart-bar" style={{ width: `${percentage}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Statistics;