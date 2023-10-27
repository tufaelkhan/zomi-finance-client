
function Vest() {
    return (
        <div className="text-left mb-7">
      <h1 className="flex items-center font-bold mb-4">
        <span className="text-4xl">Vest </span>{" "}
        <span className="text-2xl"></span>{" "}
      </h1>
      <p className="text-gray-400">Convert esZOMI tokens to $ZOMI tokens.</p>
      <p className="text-gray-400 mb-3">Please read the <span className="underline">vesting details</span> before using the vaults.</p>
      <div className="md:flex">
        <div className="pt-3 pb-3 border border-gray-300 mr-4 shadow-2xl rounded-lg md:w-1/2">
          <h2 className="ml-3 font-semibold text-2xl mb-3">$ZOMI Vault</h2>
          <hr />
          <div className="text-gray-400 m-3">
            <p className="flex items-center justify-between">
              <span>Staked Tokens</span>
              <span>$00.0</span>
            </p>
            <p className="flex items-center justify-between">
              <span>Reserved for Vesting</span>
              <span>... $ZOMI ($...)</span>
            </p>
            <p className="flex items-center justify-between">
              <span>Vesting Status</span>
              <span>... $ZOMI ($...)</span>
            </p>
            <p className="flex items-center justify-between">
              <span>Claimable</span>
              <span>... $ZOMI ($...)</span>
            </p>
            <hr className="w-full mt-4 mb-4" />
            <button className="text-start bg-green-700 p-2 rounded-lg text-1xl hover:bg-green-800 mr-5">Connect Wallet</button>
          </div>
        </div>
        <div className="pt-3 pb-3 border border-gray-300 mr-4 shadow-2xl rounded-lg md:w-1/2">
          <h2 className="ml-3 font-semibold text-2xl mb-3">$ZOMI Vault</h2>
          <hr />
          <div className="text-gray-400 m-3">
            <p className="flex items-center justify-between">
              <span>Staked Tokens</span>
              <span>$00.0</span>
            </p>
            <p className="flex items-center justify-between">
              <span>Reserved for Vesting</span>
              <span>... $ZOMI ($...)</span>
            </p>
            <p className="flex items-center justify-between">
              <span>Vesting Status</span>
              <span>... $ZOMI ($...)</span>
            </p>
            <p className="flex items-center justify-between">
              <span>Claimable</span>
              <span>... $ZOMI ($...)</span>
            </p>
            <hr className="w-full mt-4 mb-4" />
            <button className="text-start bg-green-700 p-2 rounded-lg text-1xl hover:bg-green-800 mr-5">Connect Wallet</button>
          </div>
        </div>
        
      </div>
    </div>
    );
};

export default Vest;