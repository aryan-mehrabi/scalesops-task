import { useEffect, useState } from 'react';
import { type Product } from '../types';
import ProductListItem from './ProductListItem';

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  // You may wanna use react query since it supports caching but
  // for sake of this task im using useEffect here.
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(json => setProducts(json.products));
  }, []);

  const renderProducts = () => {
    return products.map(product => (
      <ProductListItem key={product.id} {...{ product }} />
    ));
  };

  return <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">{renderProducts()}</div>;
}
