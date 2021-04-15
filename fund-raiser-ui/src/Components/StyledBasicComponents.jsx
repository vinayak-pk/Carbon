import React from "react";
import styled from 'styled-components';
import { ProgressBar } from 'team-carbon-ui';
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
height:60vh;
width :320px;
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

export const DisplayCard = ({title,imageURL, achievedPercent, 
    AuthorName = "Jasper Paul", 
    raisedValue= 123356,
    lastDonation = 7} 
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
                <br/>
                <div style = {{clear:"both",float:"left", marginLeft : "10px"}}>
                    <p style = {{fontSize: "25px", fontWeight:"bold", color:"#444444"}}>&euro;{raisedValue}
                    <span style = {{fontSize: "20px", fontWeight:"normal", color:"#999999"}}>&ensp;raised</span></p>
                    </div>
            <div style = {{float:"left", clear:"left"}}>
            <ProgressBar sliderColor = "#01bfbd" completed ={achievedPercent}/>
            </div>
            <div style = {{float: "left", clear:"both"}}>Last donation {lastDonation} hours ago</div>
        </CardContainer>
    )
}