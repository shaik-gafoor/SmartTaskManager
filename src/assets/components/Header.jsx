function Header({ title, onFilter }) {
  return (
    <div className="d-flex justify-content-between align-items-center my-3">
      <h1>{title}</h1>
      <div>
        <button
          className="btn btn-outline-secondary mx-1"
          onClick={() => onFilter("all")}
        >
          All
        </button>

        <button
          className="btn btn-outline-success mx-1"
          onClick={() => onFilter("done")}
        >
          Done
        </button>
        <button
          className="btn btn-outline-warning mx-1"
          onClick={() => onFilter("pending")}
        >
          Pending
        </button>
      </div>
    </div>
  );
}
export default Header;
