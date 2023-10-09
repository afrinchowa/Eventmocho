import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import EventCard from "./EventCard";
import Footer from "../Footer/Footer";


const Home = () => {
    const event = useLoaderData();
    // console.log(event);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            
           
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                {/**news container */}
                <div className="md:col-span-2 ">
                 { event.map(aEvent => <EventCard key={aEvent.id}
                    event ={aEvent }>
                    
                    </EventCard>)}
                </div>
                <div>
                    <RightSideNav></RightSideNav>

                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;