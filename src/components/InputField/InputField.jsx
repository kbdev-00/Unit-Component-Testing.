import './InputField.css';

function InputField({ label, value, onChange, placeholder, type = 'text', error, id }) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="input-group" data-testid="input-group">
      {label && (
        <label className="input-label" htmlFor={inputId} data-testid="input-label">
          {label}
        </label>
      )}
      <input
        className={`input-field ${error ? 'input-error' : ''}`}
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        data-testid="input-field"
      />
      {error && (
        <span className="input-error-msg" data-testid="input-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

export default InputField;
