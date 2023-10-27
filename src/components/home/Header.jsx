import { PiCirclesThreePlusLight} from 'react-icons/pi';
import { MdOutlineFormatIndentIncrease} from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';


function Header() {
    return (
        <div>
        <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse justify-between">
    <img src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGV0aGVyZXVtfGVufDB8fDB8fHww" className="max-w-sm rounded-lg shadow-2xl" />
    <div className="text-left">
      <h1 className="text-5xl font-bold text-start text-white">Decentralized
Perpetual Exchange</h1>
      <p className="py-6 text-start text-gray-300">Trade BTC, ETH, AVAX and other top cryptocurrencies with up to 30x leverage directly from your wallet</p>
      <button className="text-start btn btn-primary">Lunch Exchange</button>
    </div>
  </div>
</div>
<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 p-4'>
    <div className='flex items-center p-5 border border-gray-300 mr-3 shadow-2xl rounded-2xl'>
        <div className='text-4xl mr-4'>
<PiCirclesThreePlusLight className='text-blue-600'/>
        </div>
        <div className="text-start">
        <p className='text-2xl text-gray-300'>Total Trading Volume</p>
        <p className='text-2xl font-bold'>$0</p>
        </div>
    </div>
    <div className='flex items-center p-5 border border-gray-300 mr-3 shadow-2xl rounded-2xl'>
        <div className='text-4xl mr-4'>
<MdOutlineFormatIndentIncrease className='text-blue-600'/>
        </div>
        <div className="text-start">
        <p className='text-2xl text-gray-300'>Total Trading Volume</p>
        <p className='text-2xl font-bold'>$0</p>
        </div>
    </div>
    <div className='flex items-center p-5 border border-gray-300 mr-3 shadow-2xl rounded-2xl'>
        <div className='text-4xl mr-4'>
<FaUserAlt className='text-blue-600'/>
        </div>
        <div className="text-start">
        <p className='text-2xl text-gray-300'>Total Trading Volume</p>
        <p className='text-2xl font-bold'>$0</p>
        </div>
    </div>
</div>

        </div>
    );
};

export default Header;