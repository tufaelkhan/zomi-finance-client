function Zomi() {
  return (
    <div className="text-left mb-7">
      <h1 className="flex items-center font-bold mb-4">
        <span className="text-4xl">Earn</span>{" "}
        <span className="text-2xl"></span>{" "}
      </h1>
      <p className="text-gray-400 mb-4">Stake $ZOMI and $ZLP to earn rewards.</p>
      <div className="md:flex">
        <div className="pt-3 pb-3 border border-gray-300 mr-4 shadow-2xl rounded-lg md:w-1/2">
          <h2 className="ml-3 font-semibold text-2xl mb-3">$ZOMI</h2>
          <hr />
          <div className="text-gray-400 m-3">
            <p className="flex items-center justify-between">
              <span>Price</span>
              <span>$00.0</span>
            </p>
            <p className="flex items-center justify-between">
              <span>Wallet</span>
              <span>... $ZOMI ($...)</span>
            </p>
            <p className="flex items-center justify-between">
              <span>Staked</span>
              <span>... $ZOMI ($...)</span>
            </p>
            <hr className="w-full mt-4 mb-4" />
            <p className="flex items-center justify-between">
              <span>APR</span>
              <span>...$00.0</span>
            </p>
            <p className="flex items-center justify-between">
              <span>Rewards</span>
              <span>... $00</span>
            </p>
            <p className="flex items-center justify-between">
              <span>Multiplier Points APR</span>
              <span>$100.00</span>
            </p>
            <p className="flex items-center justify-between">
              <span>Boost Percentage</span>
              <span>$100.00</span>
            </p>
            <hr className="w-full mt-4 mb-4" />
            <p className="flex items-center justify-between">
              <span>Total Staked</span>
              <span>0 $ZOMI ($...)</span>
            </p>
            <p className="flex items-center justify-between">
              <span>Total Supply</span>
              <span>10,000 $ZOMI ($10)</span>
            </p>
            <hr className="w-full mt-4 mb-4" />
            <button className="text-start bg-green-700 p-2 rounded-lg text-1xl hover:bg-green-800 mr-5">Buy $ZOMI</button>
          </div>
        </div>
        <div className="pt-3 pb-3 border border-gray-300 shadow-2xl rounded-lg md:w-1/2">
          <h2 className="ml-3 font-semibold text-2xl mb-3">Total Rewards</h2>
          <hr />
          <div className="text-gray-400 m-3">
            <p className="flex items-center justify-between">
              <span>ETH (WETH)</span>
              <span>$0</span>
            </p>
            <p className="flex items-center justify-between">
              <span>$ZOMI</span>
              <span>$617,860</span>
            </p>
            <p className="flex items-center justify-between">
              <span>Escrowed $ZOMI</span>
              <span>$0</span>
            </p>
            <p className="flex items-center justify-between">
              <span>Multiplier Points</span>
              <span>$0</span>
            </p>
            <p className="flex items-center justify-between">
              <span>Staked Multiplier Points</span>
              <span>$0</span>
            </p>
            <p className="flex items-center justify-between">
              <span>Total</span>
              <span>$0</span>
            </p>
            <hr className="w-full mt-40 mb-4" />
            <button className="text-start bg-green-700 p-2 rounded-lg text-1xl hover:bg-green-800 mr-5">Connect Wallet</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Zomi;
