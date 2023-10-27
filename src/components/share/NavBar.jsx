
function NavBar() {
    const item = <>
    <li><a>Home</a></li>
    <li><a>Dashboard</a></li>
    <li><a>Earn</a></li>
    </>
    return (
        <div className="navbar -mt-10 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {item}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {item}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://randomuser.me/api/portraits/men/1.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Network</a></li>
        <li>
          <a className="justify-start">
            <img src="https://images.unsplash.com/photo-1621501103258-3e135c8c1fda?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZXRoZXJldW18ZW58MHx8MHx8fDA%3D" alt="" className="rounded-full" style={{height:20}} />
            <span className="">Ethereum</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
</div>
    );
};

export default NavBar;