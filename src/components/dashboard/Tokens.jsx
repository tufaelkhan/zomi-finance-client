import { FaEthereum } from "react-icons/fa";

function Tokens() {
    return (
        <div className="text-left mb-7">
        <h1 className="flex items-center font-bold mb-4"><span className="text-4xl">Tokens</span> <span className="text-2xl"><FaEthereum/> </span> </h1>
        <p className="text-gray-400">Platform and $ZLP index tokens.</p>
        <div className="md:flex">
        <div className="pt-3 pb-3 border border-gray-300 mr-4 shadow-2xl rounded-lg md:w-1/2 h-52">
            <h2 className="ml-3 font-semibold text-2xl mb-3">Overview</h2>
            <hr />
    <div className="text-gray-400 m-3">
    <p className="flex items-center justify-between"><span>AUM</span><span>$33</span></p>
    <p className="flex items-center justify-between"><span>$ZLP Pool</span><span>$33</span></p>
    <p className="flex items-center justify-between"><span>24h Volume</span><span>$0</span></p>
    <p className="flex items-center justify-between"><span>Long Positions</span><span>$0</span></p>
    <p className="flex items-center justify-between"><span>Short Positions</span><span>$0</span></p>
    </div>
        </div>
        </div>
    </div>
    );
};

export default Tokens;