import { useState } from 'react';
import { Upload, MapPin } from 'lucide-react';
import { TIPOS_INCIDENCIA } from '../../utils/constants';
import { useComplaints } from '../../hooks/useComplaints';

const ComplaintForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    descripcion: '',
    tipoIncidencia: '',
    ubicacion: ''
  });

  const { handleSubmit } = useComplaints();

  const onSubmit = () => {
    handleSubmit(formData);
    setFormData({ descripcion: '', tipoIncidencia: '', ubicacion: '' });
    if (onSuccess) onSuccess('mis-denuncias'); // Cambiar tab
  };

  return (
    <div className="complaint-form">
      {/* Tipo de Incidencia */}
      <div className="form-group">
        <label className="form-label">Tipo de Incidencia</label>
        <select
          value={formData.tipoIncidencia}
          onChange={(e) => setFormData({ ...formData, tipoIncidencia: e.target.value })}
          className="form-select"
        >
          <option value="">Seleccione una opción</option>
          {TIPOS_INCIDENCIA.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
      </div>

      {/* Descripción */}
      <div className="form-group">
        <label className="form-label">Descripción del Problema</label>
        <textarea
          value={formData.descripcion}
          onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
          rows="4"
          className="form-textarea"
          placeholder="Describe el problema con el mayor detalle posible..."
        />
      </div>

      {/* Fotografía */}
      <div className="form-group">
        <label className="form-label">Fotografía (opcional)</label>
        <div className="upload-area">
          <Upload className="upload-icon" />
          <p className="upload-text">Haz clic o arrastra una imagen</p>
          <p className="upload-subtext">PNG, JPG hasta 5MB</p>
        </div>
      </div>

      {/* Ubicación */}
      <div className="form-group">
        <label className="form-label">Ubicación</label>
        <div className="location-group">
          <input
            type="text"
            value={formData.ubicacion}
            onChange={(e) => setFormData({ ...formData, ubicacion: e.target.value })}
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

      {/* Botón de Envío */}
      <button onClick={onSubmit} className="submit-button">
        Enviar Denuncia
      </button>
    </div>
  );
};

export default ComplaintForm;
