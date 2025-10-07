import React, { useState } from 'react';
import { MapPin, Upload, AlertCircle, CheckCircle, Clock, Menu, X, User, BarChart3 } from 'lucide-react';
import './styles.css';

export default function DenunciaCiudadana() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('inicio');
  const [formData, setFormData] = useState({
    descripcion: '',
    tipoIncidencia: '',
    ubicacion: ''
  });
  const [denuncias, setDenuncias] = useState([
    { id: 1, tipo: 'Infraestructura Vial', descripcion: 'Bache grande en Av. Sol', estado: 'pendiente', fecha: '2025-10-05' },
    { id: 2, tipo: 'Residuos Sólidos', descripcion: 'Basura acumulada', estado: 'en_proceso', fecha: '2025-10-04' },
    { id: 3, tipo: 'Señalización', descripcion: 'Semáforo dañado', estado: 'resuelta', fecha: '2025-10-03' }
  ]);

  const handleSubmit = () => {
    if (!formData.tipoIncidencia || !formData.descripcion || !formData.ubicacion) {
      alert('Por favor complete todos los campos');
      return;
    }
    const nuevaDenuncia = {
      id: denuncias.length + 1,
      tipo: formData.tipoIncidencia,
      descripcion: formData.descripcion,
      estado: 'pendiente',
      fecha: new Date().toISOString().split('T')[0]
    };
    setDenuncias([nuevaDenuncia, ...denuncias]);
    setFormData({ descripcion: '', tipoIncidencia: '', ubicacion: '' });
    setActiveTab('mis-denuncias');
  };

  const getEstadoIcon = (estado) => {
    switch(estado) {
      case 'pendiente': return <AlertCircle className="w-4 h-4" />;
      case 'en_proceso': return <Clock className="w-4 h-4" />;
      case 'resuelta': return <CheckCircle className="w-4 h-4" />;
      default: return null;
    }
  };

  const estadisticas = {
    total: denuncias.length,
    pendientes: denuncias.filter(d => d.estado === 'pendiente').length,
    enProceso: denuncias.filter(d => d.estado === 'en_proceso').length,
    resueltas: denuncias.filter(d => d.estado === 'resuelta').length
  };

  const tabs = [
    { id: 'inicio', label: 'Inicio', icon: MapPin },
    { id: 'denunciar', label: 'Denunciar', icon: Upload },
    { id: 'mis-denuncias', label: 'Mis Denuncias', icon: User },
    { id: 'estadisticas', label: 'Estadísticas', icon: BarChart3 }
  ];

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-content">
          <div className="header-flex">
            <div className="logo-container">
              <div className="logo-icon">
                <MapPin style={{ width: '2rem', height: '2rem', color: 'white' }} />
              </div>
              <div className="logo-text">
                <h1>DenunciaPE</h1>
                <p>Plataforma Ciudadana</p>
              </div>
            </div>
            
            <nav className="nav-desktop">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`nav-button ${activeTab === tab.id ? 'active' : ''}`}
                >
                  <tab.icon style={{ width: '1rem', height: '1rem' }} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="menu-toggle"
            >
              {menuOpen ? 
                <X style={{ width: '1.5rem', height: '1.5rem' }} /> : 
                <Menu style={{ width: '1.5rem', height: '1.5rem' }} />
              }
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <nav className="mobile-nav">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setMenuOpen(false); }}
                  className={`mobile-nav-button ${activeTab === tab.id ? 'active' : ''}`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="main-content">
        {activeTab === 'inicio' && (
          <div>
            <div className="hero-section">
              <h2 className="hero-title">
                Mejoremos Juntos Nuestra Ciudad
              </h2>
              <p className="hero-subtitle">
                Reporta problemas urbanos y ayuda a construir una comunidad más segura y ordenada
              </p>
              <button
                onClick={() => setActiveTab('denunciar')}
                className="hero-button"
              >
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
        )}

        {activeTab === 'denunciar' && (
          <div className="form-container">
            <div className="card">
              <h2 className="card-title">Nueva Denuncia</h2>
              <div>
                <div className="form-group">
                  <label className="form-label">
                    Tipo de Incidencia
                  </label>
                  <select
                    value={formData.tipoIncidencia}
                    onChange={(e) => setFormData({...formData, tipoIncidencia: e.target.value})}
                    className="form-select"
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="Infraestructura Vial">Infraestructura Vial</option>
                    <option value="Residuos Sólidos">Residuos Sólidos</option>
                    <option value="Señalización">Señalización</option>
                    <option value="Alumbrado Público">Alumbrado Público</option>
                    <option value="Espacios Públicos">Espacios Públicos</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Descripción del Problema
                  </label>
                  <textarea
                    value={formData.descripcion}
                    onChange={(e) => setFormData({...formData, descripcion: e.target.value})}
                    rows="4"
                    className="form-textarea"
                    placeholder="Describe el problema con el mayor detalle posible..."
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Fotografía (opcional)
                  </label>
                  <div className="upload-area">
                    <Upload className="upload-icon" />
                    <p className="upload-text">Haz clic o arrastra una imagen</p>
                    <p className="upload-subtext">PNG, JPG hasta 5MB</p>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Ubicación
                  </label>
                  <div className="location-group">
                    <input
                      type="text"
                      value={formData.ubicacion}
                      onChange={(e) => setFormData({...formData, ubicacion: e.target.value})}
                      className="form-input location-input"
                      placeholder="Ej: Av. Sol 123, Cusco"
                    />
                    <button
                      onClick={() => alert('Función de geolocalización')}
                      className="location-button"
                    >
                      <MapPin style={{ width: '1.25rem', height: '1.25rem' }} />
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="submit-button"
                >
                  Enviar Denuncia
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'mis-denuncias' && (
          <div className="denuncias-list">
            <h2 className="denuncias-title">Mis Denuncias</h2>
            {denuncias.map(denuncia => (
              <div key={denuncia.id} className="denuncia-card">
                <div className="denuncia-content">
                  <div className="denuncia-info">
                    <div className="denuncia-header">
                      <span className={`status-badge ${denuncia.estado}`}>
                        {getEstadoIcon(denuncia.estado)}
                        <span>{denuncia.estado.replace('_', ' ').toUpperCase()}</span>
                      </span>
                      <span className="denuncia-fecha">{denuncia.fecha}</span>
                    </div>
                    <h3 className="denuncia-tipo">{denuncia.tipo}</h3>
                    <p className="denuncia-descripcion">{denuncia.descripcion}</p>
                  </div>
                  <button className="details-button">
                    Ver detalles →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'estadisticas' && (
          <div className="stats-container">
            <h2 className="denuncias-title">Estadísticas</h2>
            <div className="stats-grid">
              <div className="stat-card total">
                <BarChart3 className="stat-icon" />
                <p className="stat-label">Total</p>
                <p className="stat-value">{estadisticas.total}</p>
              </div>
              <div className="stat-card pendientes">
                <AlertCircle className="stat-icon" />
                <p className="stat-label">Pendientes</p>
                <p className="stat-value">{estadisticas.pendientes}</p>
              </div>
              <div className="stat-card en-proceso">
                <Clock className="stat-icon" />
                <p className="stat-label">En Proceso</p>
                <p className="stat-value">{estadisticas.enProceso}</p>
              </div>
              <div className="stat-card resueltas">
                <CheckCircle className="stat-icon" />
                <p className="stat-label">Resueltas</p>
                <p className="stat-value">{estadisticas.resueltas}</p>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">Denuncias por Tipo</h3>
              <div className="chart-container">
                {['Infraestructura Vial', 'Residuos Sólidos', 'Señalización'].map((tipo, idx) => {
                  const count = denuncias.filter(d => d.tipo === tipo).length;
                  const percentage = (count / denuncias.length) * 100;
                  return (
                    <div key={idx} className="chart-item">
                      <div className="chart-header">
                        <span className="chart-label">{tipo}</span>
                        <span className="chart-value">{count} ({percentage.toFixed(0)}%)</span>
                      </div>
                      <div className="chart-bar-bg">
                        <div
                          className="chart-bar"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">© 2025 DenunciaPE - Plataforma de Denuncia Ciudadana</p>
          <p className="footer-subtext">Alineado con ODS 11 y ODS 16</p>
        </div>
      </footer>
    </div>
  );
}