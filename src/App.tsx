import ProductList from './components/ProductList';

function App() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <span className="navbar-brand mb-0 h1">ScalesOps Task</span>
        </div>
      </nav>
      <div className="container">
        <div className='my-5'>
          <h2>Products</h2>
          <ProductList />
        </div>
      </div>
    </>
  );
}

export default App;
