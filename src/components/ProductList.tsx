import { useEffect, useState } from 'react';
import { type Product } from '../types';

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(json => setProducts(json.products));
  }, []);

  const renderProducts = () => {
    return products.map(product => <div key={product.id}>{product.title}</div>);
  };

  return <div>{renderProducts()}</div>;
}
