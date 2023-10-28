import { Helmet } from "react-helmet-async";
import Vest from "./Vest";
import Zlp from "./Zlp";
import Zomi from "./Zomi";

function Earn() {
    return (
        <div className="mb-8 ml-4 mr-4">
            <Helmet>
                <title>Earn || Romi Finance</title>
            </Helmet>
            <Zomi/>
            <Zlp/>
            <Vest/>
        </div>
    );
};

export default Earn;