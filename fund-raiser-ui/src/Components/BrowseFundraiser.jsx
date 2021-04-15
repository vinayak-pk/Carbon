import React from "react";
import { Link } from "react-router-dom";
import {DisplayCard, SideBar, SideBarItem} from "./StyledBasicComponents";
import '../index.css';
import styled from "styled-components";
import axios from 'axios';

const StyledLink = styled(Link)`
text-decoration : none;
color:#444;
&:focus{
    color: #01bfbd;
    font-weight:700;
}`;
const SideBarItemsList = ['All Categories', 'Medical', 'Women & Girls', 'Animals', 'Creative', 'Food & Hunger', 
'Environment', 'Children', 'Memorial', 'Community Development', 'Others'];
const LinkedSideBarItems = SideBarItemsList.map((item) => (<StyledLink to = {item}>{item}</StyledLink>))

export const BrowseFundraiser = () => {
    const [fundRaisers, setFundRaisers] = React.useState([]);
    const getData = () => {
        axios.get("https://carbon-c9c2b-default-rtdb.firebaseio.com/fund_data.json")
        .then((res) => {
            setFundRaisers(res.data);
        })
    }
    const getDaysLeft = (addDate) => {
        let addDateComponents = addDate.split('/').map(Number);
        console.log(addDateComponents);
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
        console.log('Here');
        getData();
    }, []);
    console.log('Fund raiser',fundRaisers);
    return (
    <div>
    <div>BROWSE FUNDRAISER HEADING</div>
    <div style = {{float:"left"}}>
        <SideBar>
            <SideBarItem children = {LinkedSideBarItems}/>
            </SideBar>
    </div>
    <div style = {{width : "70vw", height:"100vh", float:"left", margin:"auto"}}> 
        <DisplayCard />
        {fundRaisers?.map((item) => (
            <DisplayCard title = {item.title}
            imageURL = {item.profile_image}
            AuthorName = {item.first_name + " " + item.last_name}
            raisedValue = {item.curr_donation}
            achievedPercent = {Math.floor((item.donation_goal - item.curr_donation)/(item.donation_goal) * 100)}
            daysLeft = {getDaysLeft(item.due_date)}/>))}
    </div>
    </div>)
}