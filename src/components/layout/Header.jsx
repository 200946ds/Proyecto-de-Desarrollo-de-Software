import { useState } from 'react';
import { MapPin, Upload, User, BarChart3, Menu, X } from 'lucide-react';

const Header = ({ activeTab, onTabChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = [
    { id: 'inicio', label: 'Inicio', icon: MapPin },
    { id: 'denunciar', label: 'Denunciar', icon: Upload },
    { id: 'mis-denuncias', label: 'Mis Denuncias', icon: User },
    { id: 'estadisticas', label: 'Estadísticas', icon: BarChart3 }
  ];

  return (
    <>
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
                  onClick={() => onTabChange(tab.id)}
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
                  onClick={() => { onTabChange(tab.id); setMenuOpen(false); }}
                  className={`mobile-nav-button ${activeTab === tab.id ? 'active' : ''}`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;