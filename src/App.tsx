import { useState } from 'react';
import Dropdown from './components/Dropdown';
import ProductList from './components/ProductList';
import { SortOption } from './types';

const options: SortOption[] = [
  { id: 1, title: 'most expensive', type: 'price', ascending: false },
  { id: 2, title: 'least expensive', type: 'price', ascending: true },
  { id: 3, title: 'most stared', type: 'rating', ascending: true },
  { id: 4, title: 'least stared', type: 'rating', ascending: false },
];

function App() {
  const [selectedSort, setSelectedSort] = useState<SortOption>();

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
          <div className="d-flex align-items-center mb-2">
            <Dropdown<SortOption>
              onChange={option => setSelectedSort(option)}
              value={selectedSort}
              options={options}
              label="sort by"
            />
          </div>
          <ProductList sort={selectedSort} />
        </div>
      </div>
    </>
  );
}

export default App;
