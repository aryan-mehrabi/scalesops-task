import { Product } from '../types';

interface PropTypes {
  product: Product;
}
export default function ProductListItem({ product }: PropTypes) {
  const { title, description, price, images } = product;
  return (
    <div className="col">
      <div className="card h-100">
        <img
          className="card-img-top h-16"
          src={images[0]}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Price: ${price}</small>
        </div>
      </div>
    </div>
  );
}
