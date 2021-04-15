import React from "react";
import styled from 'styled-components';
import { ProgressBar } from './ProgressBar';
const StyledLi = styled.li`
text-decoration: none;
color : #212529;
font-size:16px;
font-family : apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
"Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", 
"Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
list-style-type: none;
padding : 5%;
&:hover {
      cursor:pointer;
    }`

const SideBarHeading = styled.p`
color : #444444;
padding : 5%;
font-weight:700;
font-size : 17px;
border-bottom: 1px solid #ccc;
padding-bottom:8px;`
export const SideBar = ({ heading = 'CATEGORIES',children, width ='20vw', 
background = "#f5f5f5", padding = "20px", borderRadius = '8px'}) => {
    return(
    <div style = {{width: width, backgroundColor:background, padding:padding, borderRadius:borderRadius}}>
        <SideBarHeading>{heading}</SideBarHeading>
        {children}
    </div>)
}

export const SideBarItem = ({children}) => {
    return(<ul>{children.map((item) => (
        <StyledLi>{item}</StyledLi>
    ))}</ul>)
}

const CardContainer = styled.div`
float:left;
height:452px;
width: 21.8vw;
border-radius:20px;
margin:10px;
&:hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor:pointer;};`

const CardTitle = styled.h3`
color : #444444;
margin-left:5px;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;`

const CodeNameBlock = styled.div`
width:20px;
height:20px;
border-radius:50%;
color:#01bfbd;
background-color:gainsboro;
text-align:center;
justify-content:center;
margin-left:10px;
padding:0px;
font-size:14px;`

export const DisplayCard = ({
    title = "Help Jasper Paul Rescue People Abandoned, Dying On The Streets. Support ‘The Second Chance’",
    imageURL = "https://kettocdn.gumlet.io/media/campaign/342000/342482/image/wid323b78c9f7e9daa2179f02aa6cfffc4dbfbafc29.jpg?w=300",
    achievedPercent = 50, 
    AuthorName = "Jasper Paul", 
    raisedValue= 123356,
    lastDonation = 7,
    daysLeft = 21,
 supportersCount = 13997} 
    )=> {
    return (
        <CardContainer>
            <img src = {imageURL} width = "100%" height = "170px" alt = {title}
            style = {{ borderRadius: "20px" }}/>
            <CardTitle>{title}</CardTitle>
            <div>
                <span style = {{float:"left"}}>
                <CodeNameBlock><p>AB</p></CodeNameBlock>
                </span>
                <p style = {{float:"left", fontSize:"14px", color : "#212529"}}>&emsp;by {AuthorName}</p>
            </div>
               
                <div style = {{clear:"both",float:"left", marginLeft : "10px"}}>
                    <p style = {{fontSize: "20px", fontWeight:"bold", color:"#444444"}}>&euro;{raisedValue}
                    <span style = {{fontSize: "18px", fontWeight:"normal", color:"#999999"}}>&ensp;raised</span></p>
                </div>
            <div style = {{float:"left", clear:"left", width:"100%"}}>
            <ProgressBar sliderColor = "#01bfbd" completed ={achievedPercent}/>
            </div>
            <div style = {{fontSize: "17px", 
            fontWeight:"normal", 
            color:"#999999",
            float: "left", 
            clear:"both"}}>Last donation {lastDonation} hours ago</div>
            <div style = {{float:"left", clear:"both",width:"100%", color:"#444444"}}>
                <div style = {{float:"left", fontSize:"15px", textAlign:"left"}}><p><span>{daysLeft}</span>Days Left</p></div>
                <div style = {{float:"right", fontSize:"15px", textAlign:"right"}}><p>{supportersCount} Supporters</p></div>
            </div>
        </CardContainer>
    )
}