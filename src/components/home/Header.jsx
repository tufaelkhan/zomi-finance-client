import { PiCirclesThreePlusLight} from 'react-icons/pi';
import { MdOutlineFormatIndentIncrease} from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';


function Header() {
    return (
        <div>
        <div className="">
  <div className="ml-7 mt-10">
    <div className="text-left">
      <h1 className="text-6xl font-bold text-start text-white">Decentralized <br />
Perpetual Exchange</h1>
      <p className="py-6 text-start text-gray-300">Trade BTC, ETH, AVAX and other <br /> top cryptocurrencies with up to 30x <br /> leverage directly from your wallet</p>
      <button className="text-start bg-green-500 p-2 rounded-lg text-1xl hover:bg-green-800">Lunch Exchange</button>
    </div>
  </div>
</div>
<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 p-4 mt-20'>
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