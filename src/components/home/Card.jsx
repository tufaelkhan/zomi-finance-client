import { GiChemicalDrop } from 'react-icons/gi';
import { BsFlagFill } from 'react-icons/bs';
import { FaArrowUp, FaArrowAltCircleRight } from 'react-icons/fa';


function Card() {
    return (
        <div>
        <div className='ml-5 text-left mt-24 mb-16'>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 mt-10'>
            <div className='p-3 mb-20'>
           <div className='flex text-2xl items-center'>
            <span className='mr-4 text-sky-400'><GiChemicalDrop/> </span>
            <span>Reduce Liquidation Risks </span>
            </div> 
            <p className='text-left'>An aggregate of high-quality price feeds determine when liquidations occur. This keeps positions safe from temporary wicks.</p>
            </div>
            <div className='p-3'>
           <div className='flex text-2xl items-center'>
            <span className='mr-4 text-sky-400'><BsFlagFill/> </span>
            <span>Save on Costs</span>
            </div> 
            <p className='text-left'>Enter and exit positions with minimal spread and zero price impact. Get the optimal price without incurring additional costs.</p>
            </div>
            <div className='p-3'>
           <div className='flex text-2xl items-center'>
            <span className='mr-4 text-sky-400'><FaArrowUp/> </span>
            <span>Simple Swaps</span>
            </div> 
            <p className='text-left'>Open positions through a simple swap interface. Conveniently swap from any supported asset into the position of your choice.</p>
            </div>
            <div>
            </div>
        </div>
            <div>
        <h3 className='text-5xl font-bold text-start ml-5 mt-10 mb-8'>Two tokens create <br /> our ecosystem</h3>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 items-center'>
            <div className='p-6 border border-gray-300 mr-5 shadow-2xl rounded-2xl'>
            <div>
            <p className='flex items-center text-3xl'><span className='mr-3'><FaArrowAltCircleRight/></span><span>$ZOMI</span></p>
        </div>
        <p className='text-start'>$ZOMI is the utility and governance token. Accrues 30% of the platform's generated fees.</p>
        <p className='text-start'>Ethereum APR: 0.00%</p>
        <div className=''>
            <button className='mr-5'>Buy</button>
            <button>Read more</button>
        </div>
            </div>
            <div className='p-6 border border-gray-300 mr-3 shadow-2xl rounded-2xl'>
            <div>
            <p className='flex items-center text-3xl'><span className='mr-3'><FaArrowAltCircleRight/></span><span>$ZLP</span></p>
        </div>
        <p className='text-start'>$ZLP is the liquidity provider token. Accrues 70% of the platform's generated fees.</p>
        <p className='text-start'>Ethereum APR: 1,650,636,790.48%</p>
        <div className='text-start'>
            <button className='mr-5'>Buy</button>
            <button className=''>Read more</button>
        </div>
            </div>
        </div>
    </div>
        </div>
        </div>
    );
};

export default Card;