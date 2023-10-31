export default function Spinner() {
  return (
    <div className="container">
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: '100dvh' }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}
