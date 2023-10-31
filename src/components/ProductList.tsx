import { useEffect, useState } from 'react';
import { SortOption, type Product } from '../types';
import ProductListItem from './ProductListItem';

export default function ProductList({
  sort,
}: {
  sort: SortOption | undefined;
}) {
  const [products, setProducts] = useState<Product[]>([]);

  // You may wanna use react query since it supports caching but
  // for sake of this task im using useEffect here.
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(json => setProducts(json.products));
  }, []);

  const sortProduct = (a: Product, b: Product) => {
    if (sort) {
      const item1 = a[sort.type] as number;
      const item2 = b[sort.type] as number;
      return sort.ascending ? item1 - item2 : item2 - item1;
    }
    return 0;
  };

  const renderProducts = () => {
    return products
      .sort(sortProduct)
      .map(product => <ProductListItem key={product.id} {...{ product }} />);
  };

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
      {renderProducts()}
    </div>
  );
}
