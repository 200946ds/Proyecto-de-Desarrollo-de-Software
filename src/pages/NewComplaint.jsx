import ComplaintForm from '../components/forms/ComplaintForm';

const NewComplaint = ({ onSuccess, handleSubmit }) => (
  <div className="form-container">
    <div className="card">
      <h2 className="card-title">Nueva Denuncia</h2>
      <ComplaintForm onSuccess={onSuccess} handleSubmit={handleSubmit} />
    </div>
  </div>
);

export default NewComplaint;