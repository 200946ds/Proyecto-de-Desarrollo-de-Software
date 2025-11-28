import { MapPin } from 'lucide-react';

const Home = ({ onReportClick }) => (
  <div>
    <div className="hero-section">
      <h2 className="hero-title">Mejoremos Juntos Nuestra Ciudad</h2>
      <p className="hero-subtitle">
        Reporta problemas urbanos y ayuda a construir una comunidad más segura y ordenada
      </p>
      <button onClick={onReportClick} className="hero-button">
        Reportar Problema
      </button>
    </div>

    <div className="card">
      <h3 className="card-title">Mapa Interactivo</h3>
      <div className="map-placeholder">
        <div className="map-content">
          <MapPin className="map-icon" />
          <p className="map-text">Mapa de denuncias georeferenciadas</p>
          <p className="map-subtext">Integración con Google Maps API</p>
        </div>
      </div>
    </div>
  </div>
);

export default Home;