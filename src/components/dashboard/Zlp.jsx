import { FaEthereum, FaBitcoin } from "react-icons/fa";
import { BiShapeCircle} from "react-icons/bi";
import { IoLogoUsd} from "react-icons/io";

function Zlp() {
    return (
        <div>
            <div className="pt-3 pb-3 border border-gray-300 mr-4 shadow-2xl rounded-lg">
                <h2 className="ml-3 font-semibold text-1xl mb-3 flex items-center"><span>$ZLP Index Composition</span> <span><FaEthereum/></span></h2>
                <hr />
        <div className="text-gray-400 m-3">
        <p className="flex items-center justify-between text-gray-500 mb-4 mt-4"><span>TOKEN</span><span>PRICE</span><span>POOL</span><span>WEIGHT</span><span>UTILIZATION</span></p>

        <p className="flex items-center justify-between text-gray-500 mb-4 mt-4"><span><div className="flex mb-3">
            <div>
                <p><FaEthereum className="text-3xl"/></p>
            </div>
            <div className="ml-2">
                <p className="font-bold text-white"><span>$Ethereum</span><span><div className="dropdown dropdown-hover">
  <label tabIndex={0} className="m-1">»</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu shadow rounded-box w-52 text-gray-300">
    <li><a><span><FaEthereum/> </span><span>Open in Coingecko</span></a></li>
    <li><a><span><FaEthereum/> </span><span>Open in Explorer</span></a></li>
  </ul>
</div></span></p>
                <p className="text-gray-400">$Eth</p>
            </div>
            </div></span><span className="-ml-24 text-white">$1,766.07</span><span className="text-white">	$19</span><span className="text-white">50.49% / 25.00%</span><span className="text-white">0.00%</span></p>
            
        <p className="flex items-center justify-between text-gray-500 mb-4 mt-4"><span><div className="flex mb-3">
            <div>
                <p><FaBitcoin className="text-3xl"/></p>
            </div>
            <div className="ml-2">
                <p className="font-bold text-white"><span>$Bitcoin</span><span><div className="dropdown dropdown-hover">
  <label tabIndex={0} className="m-1">»</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu shadow rounded-box w-52 text-gray-300">
    <li><a><span><FaBitcoin/> </span><span>Open in Coingecko</span></a></li>
    <li><a><span><FaBitcoin/> </span><span>Open in Explorer</span></a></li>
  </ul>
</div></span></p>
                <p className="text-gray-400">$Bit</p>
            </div>
            </div></span><span className="-ml-24 text-white">$1,766.07</span><span className="text-white">	$19</span><span className="text-white">50.49% / 25.00%</span><span className="text-white">0.00%</span></p>


        <p className="flex items-center justify-between text-gray-500 mb-4 mt-4"><span><div className="flex mb-3">
            <div>
                <p><BiShapeCircle className="text-3xl"/></p>
            </div>
            <div className="ml-2">
                <p className="font-bold text-white"><span>$ApeCoin</span><span><div className="dropdown dropdown-hover">
  <label tabIndex={0} className="m-1">»</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu shadow rounded-box w-52 text-gray-300">
    <li><a><span><BiShapeCircle/> </span><span>Open in Coingecko</span></a></li>
    <li><a><span><BiShapeCircle/> </span><span>Open in Explorer</span></a></li>
  </ul>
</div></span></p>
                <p className="text-gray-400">$APE</p>
            </div>
            </div></span><span className="-ml-24 text-white">$1,766.07</span><span className="text-white">	$19</span><span className="text-white">50.49% / 25.00%</span><span className="text-white">0.00%</span></p>

        <p className="flex items-center justify-between text-gray-500 mb-4 mt-4"><span><div className="flex mb-3">
            <div>
                <p><IoLogoUsd className="text-3xl"/></p>
            </div>
            <div className="ml-2">
                <p className="font-bold text-white"><span>$ApeCoin</span><span><div className="dropdown dropdown-hover">
  <label tabIndex={0} className="m-1">»</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu shadow rounded-box w-52 text-gray-300">
    <li><a><span><IoLogoUsd/> </span><span>Open in Coingecko</span></a></li>
    <li><a><span><IoLogoUsd/> </span><span>Open in Explorer</span></a></li>
  </ul>
</div></span></p>
                <p className="text-gray-400">$APE</p>
            </div>
            </div></span><span className="-ml-24 text-white">$1,766.07</span><span className="text-white">	$19</span><span className="text-white">50.49% / 25.00%</span><span className="text-white">0.00%</span></p>

        </div>
            </div>
        </div>
    );
};

export default Zlp;