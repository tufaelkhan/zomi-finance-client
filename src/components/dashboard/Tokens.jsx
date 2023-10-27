import { FaEthereum } from "react-icons/fa";
import { GiRaiseZombie} from "react-icons/gi";

function Tokens() {
    return (
        <div className="text-left mb-7">
        <h1 className="flex items-center font-bold mb-4"><span className="text-4xl">Tokens</span> <span className="text-2xl"><FaEthereum/> </span> </h1>
        <p className="text-gray-400 mb-5">Platform and $ZLP index tokens.</p>
        <div className="lg:flex">
        <div className="pt-3 pb-3 border border-gray-300 mr-4 shadow-2xl rounded-lg md:w-1/2 h-52">
            <div className="md:flex">
     <div className="w-[60%]">
     <div className="flex ml-4 mb-3">
            <div>
                <p><GiRaiseZombie className="text-3xl"/></p>
            </div>
            <div className="ml-2">
                <p className="font-bold"><span>$ZOMI</span><span><div className="dropdown dropdown-hover">
  <label tabIndex={0} className="m-1">»</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 text-gray-300">
    <li><a><span><FaEthereum/> </span><span>Open in Coingecko</span></a></li>
    <li><a><span><FaEthereum/> </span><span>Open in Explorer</span></a></li>
  </ul>
</div></span></p>
                <p className="text-gray-400">$ZOMI</p>
            </div>
            </div>
            <hr />
    <div className="text-gray-400 m-3">
    <p className="flex items-center justify-between"><span>Price</span><span>$0.00</span></p>
    <p className="flex items-center justify-between"><span>Supply</span><span>10,000 $ZOMI</span></p>
    <p className="flex items-center justify-between"><span>Total Staked</span><span>$0</span></p>
    <p className="flex items-center justify-between"><span>Market Cap</span><span>$10</span></p>
    </div>
    <div>

    </div>
     </div>
<div className="mx-auto mt-auto mb-auto">
<div className="radial-progress text-primary" style={{ "--value": "70", "--size": "10rem", "--thickness": "1rem" }}>Distribution</div>
</div>
            </div>
        </div>
        {/* zlp section */}
        <div className="pt-3 pb-3 border border-gray-300 mr-4 shadow-2xl rounded-lg md:w-1/2 h-52">
            <div className="md:flex">
     <div className="w-[60%]">
     <div className="flex ml-4 mb-3">
            <div>
                <p><GiRaiseZombie className="text-3xl"/></p>
            </div>
            <div className="ml-2">
                <p className="font-bold"><span>$ZLP</span><span><div className="dropdown dropdown-hover">
  <label tabIndex={0} className="m-1">»</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 text-gray-300">
    <li><a><span><FaEthereum/> </span><span>Open in Explorer</span></a></li>
  </ul>
</div></span></p>
                <p className="text-gray-400">$ZLP</p>
            </div>
            </div>
            <hr />
    <div className="text-gray-400 m-3">
    <p className="flex items-center justify-between"><span>Price</span><span>$1.131</span></p>
    <p className="flex items-center justify-between"><span>Supply</span><span>29 $ZLP</span></p>
    <p className="flex items-center justify-between"><span>Total Staked</span><span>$33</span></p>
    <p className="flex items-center justify-between"><span>Market Cap</span><span>
$33</span></p>
    <p className="flex items-center justify-between"><span>Stablecoin Percentage</span><span>49.50%</span></p>
    </div>
    <div>

    </div>
     </div>
<div className="mx-auto mt-auto mb-auto">
<div className="radial-progress text-primary" style={{ "--value": "70", "--size": "10rem", "--thickness": "1rem" }}>$ZLP Pool</div>
</div>
            </div>
        </div>
        </div>
    </div>
    );
};

export default Tokens;