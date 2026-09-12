import Logo from "../assets/logo-text.png";

const Nav = () => {
  const links = (
    <>
      <li className="m-2">
        <a className="text-red-500">Home</a>
      </li>
      <li className="m-2">
        <a>Technologies</a>
      </li>
      <li className="m-2">
        <a>Projects</a>
      </li>
      <li className="m-2">
        <a>About</a>
      </li>
      <li className="m-2">
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="navbar max-w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img src={Logo} alt="Logo" className="h-8 w-auto" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="flex gap-4 navbar-end">
          <button className="border-0">Sign in</button>
          <button className="btn btn-secondary rounded-3xl">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
