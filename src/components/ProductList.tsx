import { useEffect, useState } from 'react';
import { type Product } from '../types';
import ProductListItem from './ProductListItem';

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(json => setProducts(json.products));
  }, []);

  const renderProducts = () => {
    return products.map(product => <ProductListItem {...{ product }} />);
  };

  return <div className="row">{renderProducts()}</div>;
}
