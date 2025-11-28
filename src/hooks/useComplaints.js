import { useState } from 'react';
import { denunciasIniciales } from '../utils/mockData';

export const useComplaints = () => {
  const [denuncias, setDenuncias] = useState(denunciasIniciales);

  const handleSubmit = (formData) => {
    if (!formData.tipoIncidencia || !formData.descripcion || !formData.ubicacion) {
      alert('Por favor complete todos los campos');
      return;
    }
    const nuevaDenuncia = {
      id: Date.now(), // ← Mejor ID único
      tipo: formData.tipoIncidencia,
      descripcion: formData.descripcion,
      estado: 'pendiente',
      fecha: new Date().toISOString().split('T')[0]
    };
    setDenuncias([nuevaDenuncia, ...denuncias]);
  };

  const estadisticas = {
    total: denuncias.length,
    pendientes: denuncias.filter(d => d.estado === 'pendiente').length,
    enProceso: denuncias.filter(d => d.estado === 'en_proceso').length,
    resueltas: denuncias.filter(d => d.estado === 'resuelta').length
  };

  return {
    denuncias,
    handleSubmit,
    estadisticas
  };
};