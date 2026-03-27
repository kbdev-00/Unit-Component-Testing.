import './Button.css';

function Button({ label, onClick, variant = 'primary', disabled = false, type = 'button' }) {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
      data-testid="custom-button"
    >
      {label}
    </button>
  );
}

export default Button;
