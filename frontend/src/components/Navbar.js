import React from 'react'

const Navbar = () => {
  return (
    <>
  <div className="container-fluid">
  <nav className="navbar navbar-expand-lg">
    
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <div className="container-fluid"> {/* Added container-fluid */}
        <div className="row"> {/* Added row */}
          <ul className="navbar-nav">
            <li className="nav-item col">
              <a className="nav-link active" aria-current="page" href="#">
                Technology
              </a>
            </li>
            <li className="nav-item col">
              <a className="nav-link active" aria-current="page" href="#">
                Design
              </a>
            </li>
            <li className="nav-item col">
              <a className="nav-link active" aria-current="page" href="#">
                Culture
              </a>
            </li>
            <li className="nav-item col">
              <a className="nav-link active" aria-current="page" href="#">
                Bussiness
              </a>
            </li>
            <li className="nav-item col">
              <a className="nav-link active" aria-current="page" href="#">
                Politics
              </a>
            </li>
            <li className="nav-item col">
              <a className="nav-link active" aria-current="page" href="#">
                Opinion
              </a>
            </li>
            <li className="nav-item col">
              <a className="nav-link active" aria-current="page" href="#">
                Science
              </a>
            </li>
            <li className="nav-item col">
              <a className="nav-link active" aria-current="page" href="#">
                Health
              </a>
            </li>
            <li className="nav-item col">
              <a className="nav-link active" aria-current="page" href="#">
                Style
              </a>
            </li>
            <li className="nav-item col">
              <a className="nav-link active" aria-current="page" href="#">
                Travel
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</div>


    </>

  )
}

export default Navbar