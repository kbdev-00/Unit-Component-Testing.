import './Card.css';

function Card({ title, description, imageUrl, footer }) {
  return (
    <div className="card" data-testid="card">
      {imageUrl && (
        <img
          className="card-image"
          src={imageUrl}
          alt={title}
          data-testid="card-image"
        />
      )}
      <div className="card-body">
        <h3 className="card-title" data-testid="card-title">{title}</h3>
        {description && (
          <p className="card-description" data-testid="card-description">
            {description}
          </p>
        )}
      </div>
      {footer && (
        <div className="card-footer" data-testid="card-footer">
          {footer}
        </div>
      )}
    </div>
  );
}

export default Card;
