import { Product } from '../types';

interface PropTypes {
  product: Product;
}
export default function ProductListItem({ product }: PropTypes) {
  const { title, price, images } = product;
  return (
    <div className="col-md-4 col-lg-3">
      <div className="card">
        <img className="card-img-top img-thumbnail" src={images[0]} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">{price}</small>
        </div>
      </div>
    </div>
  );
}
