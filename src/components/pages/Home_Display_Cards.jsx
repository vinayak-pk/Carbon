import React from "react";
import axios from 'axios';
import { DisplayCard } from "team-carbon-ui";

function Home_Display_Cards(){
    const [fundRaisers, setFundRaisers] = React.useState([]);
    const getDaysLeft = (addDate) => {
        let addDateComponents = addDate.split('/').map(Number);
        let today = new Date();
        let date = today.getDate();
        let month = today.getMonth();
        let year = today.getFullYear();
        let daysRemaining = (year * 365 + 
        month * 30) + 
        date -(addDateComponents[0] * 30 + addDateComponents[1] + addDateComponents[2]*365);
        daysRemaining = daysRemaining < 0 ?(daysRemaining*-1) : daysRemaining;
        return daysRemaining;
    }
    React.useEffect(() => {
      const  getData = () => {
            axios.get("https://carbon-c9c2b-default-rtdb.firebaseio.com/fund_data.json")
            .then((res) => {
                setFundRaisers(res.data.slice(0,4));
            })
        }
        getData();
    }, []);

    return(
        <div>
            {fundRaisers.map((item)=>(
                <DisplayCard title = {item.title}
                imageURL = {item.profile_image}
                AuthorName = {item.first_name + " " + item.last_name}
                raisedValue = {item.curr_donation}
                achievedPercent = {Math.floor((item.donation_goal - item.curr_donation)/(item.donation_goal) * 100)}
                lastDonation = {Math.floor(Math.random() * 23)}
                daysLeft = {getDaysLeft(item.due_date)}
                supportersCount = {item.supporters} 
                key = {item.id} 
                 />
                 
            ))}
            
        </div>
    )
}

export default Home_Display_Cards