import State from "./State";
import Tokens from "./Tokens";

function Dashboard() {
    return (
        <div className="mb-8 ml-4 mr-4">
            <State/>
            <Tokens/>
        </div>
    );
};

export default Dashboard;