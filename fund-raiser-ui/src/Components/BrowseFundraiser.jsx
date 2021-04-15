import React from "react";
import { Link } from "react-router-dom";
import {DisplayCard, SideBar, SideBarItem, BannerItem} from "./StyledBasicComponents";
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
const HeaderDiv = styled.div`
background-image : url('https://www.ketto.org/new/browse-banner.9d14784ddc352882b9bd.png');
background-repeat: no-repeat;
background-size: auto;
height:60vh;
margin-bottom:20px;`
const HeaderTitle = styled.div`
font-weight: 700;
font-size: 72px;
text-align: center;
color: #fff;
margin:auto;
padding-top:80px;`
const HeaderSubTitle = styled.div`
line-height: 45px;
font-size: 36px;
text-align: center;
color: #fff;`

const HeaderBanner = styled.div`
background: rgba(0,0,0,.7);
height: 88px;
width: 100%;
position: absolute;
bottom: 0;
margin:0;
display: -ms-flexbox;
display: flex;
-ms-flex-align: center;
align-items: center;
margin-bottom:40vh;`

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
    <HeaderDiv>
        <HeaderTitle>Browse Fundraisers</HeaderTitle>
        <HeaderSubTitle>
            Choose from <span style = {{fontWeight: "600"}}>1,50,256</span> fundraisers to support
        </HeaderSubTitle>
        <HeaderBanner>
            <BannerItem />
            <BannerItem 
            imgUrl = "https://ketto.gumlet.io/assets/images/browse-campaign/raised.png"
            summaryHeader = "₹1100 Crs+"
            summarySubHeader = "SUCCESSFULLY RAISED"/>
            <BannerItem 
            imgUrl = "https://ketto.gumlet.io/assets/images/browse-campaign/donors.png"
            summaryHeader = "55 Lakh+"
            summarySubHeader = 'DONORS FROM AROUND THE WORLD'/>
        </HeaderBanner>
    </HeaderDiv>

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
            lastDonation = {Math.floor(Math.random() * 23)}
            daysLeft = {getDaysLeft(item.due_date)}
            supportersCount = {item.supporters}/>))}
    </div>
    </div>)
}