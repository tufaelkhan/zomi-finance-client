import State from "./State";
import Tokens from "./Tokens";
import Zlp from "./Zlp";

function Dashboard() {
    return (
        <div className="mb-8 ml-4 mr-4">
            <State/>
            <Tokens/>
            <Zlp/>
        </div>
    );
};

export default Dashboard;