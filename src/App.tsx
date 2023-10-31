import { useState, useEffect } from 'react';
import Dropdown from './components/Dropdown';
import ProductList from './components/ProductList';
import { Category, SortOption } from './types';

const options: SortOption[] = [
  { id: 1, title: 'Most expensive', type: 'price', ascending: false },
  { id: 2, title: 'Least expensive', type: 'price', ascending: true },
  { id: 3, title: 'Most starred', type: 'rating', ascending: false },
  { id: 4, title: 'Least starred', type: 'rating', ascending: true },
];

function App() {
  const [selectedSort, setSelectedSort] = useState<SortOption>();
  const [selectedFilter, setSelectedFilter] = useState<Category>();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(res =>
        setCategories(
          res
            .slice(10)
            .map((category: string, i: number) => ({ id: i, title: category }))
        )
      );
  }, []);

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <span className="navbar-brand mb-0 h1">ScalesOps Task</span>
        </div>
      </nav>
      <div className="container">
        <div className="my-5">
          <h2>Products</h2>
          <div className="d-flex align-items-center my-3">
            <div className="d-flex align-items-center me-2">
              <span className="me-1">Sort: </span>
              <Dropdown<SortOption>
                onChange={option => setSelectedSort(option)}
                value={selectedSort}
                options={options}
                label="Sort by"
              />
            </div>
            <div>
              <div className='d-flex align-items-center'>
                <span className="me-1">Filter: </span>
                <Dropdown<Category>
                  onChange={option => setSelectedFilter(option)}
                  value={selectedFilter}
                  options={categories}
                  label="Filter by Category"
                />
              </div>
            </div>
          </div>
          <ProductList sort={selectedSort} filter={selectedFilter} />
        </div>
      </div>
    </>
  );
}

export default App;
