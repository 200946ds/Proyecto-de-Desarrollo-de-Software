import { AlertCircle, Clock, CheckCircle } from 'lucide-react';

const EstadoIcon = ({ estado }) => {
  switch(estado) {
    case 'pendiente': return <AlertCircle className="w-4 h-4" />;
    case 'en_proceso': return <Clock className="w-4 h-4" />;
    case 'resuelta': return <CheckCircle className="w-4 h-4" />;
    default: return null;
  }
};

export default EstadoIcon;