import { FaEthereum } from 'react-icons/fa';
import { AiOutlineSetting} from 'react-icons/ai';
import { GrLanguage} from 'react-icons/gr';
import { Link } from 'react-router-dom';

function NavBar() {
    const item = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/dashboard'>Dashboard</Link></li>
    <li><Link to='/earn'>Earn</Link></li>
    </>
    return (
        <div className="navbar -mt-10">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-2 shadow rounded-box w-52">
        {item}
      </ul>
    </div>
    <div>
        <img src="" alt="" />
    <a className="btn btn-ghost normal-case text-xl">Zomi Finance</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {item}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
  <div className="dropdown dropdown-end text-gray-200 bg-slate-900">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://randomuser.me/api/portraits/men/1.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 text-3xl bg-gray-900">
      <li><a>Network</a></li>
        <li>
          <a className="justify-start">
            <span className=""><FaEthereum/></span>
            <span className="">Ethereum</span>
          </a>
        </li>
        <li><a className="justify-start">
            <span className=""><AiOutlineSetting/></span>
            <span className="">Setting</span>
          </a></li>
        <li><a className="justify-start">
            <span className=""><GrLanguage/></span>
            <span className="">Language</span>
          </a></li>
      </ul>
    </div>
</div>
    );
};

export default NavBar;