import React from "react";
import { Link } from "react-router-dom";
import {DisplayCard, SideBar, SideBarItem} from "./StyledBasicComponents";
import '../index.css';
import styled from "styled-components";

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
    return (
    <div>
    <div style = {{float:"left"}}>
        <SideBar>
            <SideBarItem children = {LinkedSideBarItems}/>
            </SideBar>
    </div>
    <div style = {{border:"1px solid black", width : "70vw", height:"100vh", float:"left", margin:"auto"}}>
        <DisplayCard title = "Help Jasper Paul Rescue People Abandoned, Dying On The Streets. Support ‘The Second Chance’"
        imageURL = "https://kettocdn.gumlet.io/media/campaign/342000/342482/image/wid323b78c9f7e9daa2179f02aa6cfffc4dbfbafc29.jpg?w=300"
        achievedPercent = {45} />
    </div>
    </div>)
}