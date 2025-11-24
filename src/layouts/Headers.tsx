export default function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-white shadow-sm sticky-top"
      style={{ height: "60px" }}>
      <div className="container-fluid">
        <div className="d-flex align-items-center gap-2">
          {/* <img
            src="https://cdn-icons-png.flaticon.com/512/3046/3046120.png"
            alt="logo"
            width="35"
            height="35"
          /> */}
          <span className="fw-bold fs-5">TikTok Shop</span>
        </div>
      </div>
    </nav>
  );
}
