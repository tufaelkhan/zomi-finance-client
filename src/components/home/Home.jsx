import { Helmet } from "react-helmet-async";
import Card from "./Card";
import Header from "./Header";

function Home() {
    return (
        <div>
            <Helmet>
                <title>Home || Romi Finance</title>
            </Helmet>
            <Header/>
            <Card/>
        </div>
    );
};

export default Home;