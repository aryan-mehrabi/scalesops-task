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
    return products.map(product => <ProductListItem {...{ product }} />);
  };

  return <div className="row">{renderProducts()}</div>;
}
