import React, { useState } from 'react';
import { useComplaints } from './hooks/useComplaints';  // ← IMPORTAR AQUÍ
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import NewComplaint from './pages/NewComplaint';
import ComplaintsList from './pages/ComplaintsList';
import Statistics from './pages/Statistics';
import './styles.css';

export default function DenunciaCiudadana() {
  const [activeTab, setActiveTab] = useState('inicio');
  const { denuncias, handleSubmit, estadisticas } = useComplaints();  // ← USAR AQUÍ

  const renderPage = () => {
    switch (activeTab) {
      case 'inicio':
        return <Home onReportClick={() => setActiveTab('denunciar')} />;
      case 'denunciar':
        return (
          <NewComplaint 
            onSuccess={() => setActiveTab('mis-denuncias')}
            handleSubmit={(formData) => {
              handleSubmit(formData);  // ← PASAR FUNCIÓN
            }}
          />
        );
      case 'mis-denuncias':
        return <ComplaintsList denuncias={denuncias} />;  // ← PASAR COMO PROP
      case 'estadisticas':
        return <Statistics estadisticas={estadisticas} denuncias={denuncias} />;  // ← PASAR DATOS
      default:
        return <Home onReportClick={() => setActiveTab('denunciar')} />;
    }
  };

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderPage()}
    </Layout>
  );
}