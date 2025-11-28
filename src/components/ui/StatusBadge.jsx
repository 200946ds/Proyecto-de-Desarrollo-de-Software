import EstadoIcon from './EstadoIcon';

const StatusBadge = ({ estado }) => (
  <span className={`status-badge ${estado}`}>
    <EstadoIcon estado={estado} />
    <span>{estado.replace('_', ' ').toUpperCase()}</span>
  </span>
);

export default StatusBadge;