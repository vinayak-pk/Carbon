import React from "react";
import styled, {keyframes} from 'styled-components';
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
    achievedPercent = 110, 
    AuthorName = "Jasper Paul", 
    raisedValue= 123356,
    lastDonation = 7,
    daysLeft = 21,
 supportersCount = 13997,
    id,
})=> {
        const extractFirstLetter = (AuthorName) =>{
            let splitNames = AuthorName.split(" ");
            return splitNames[0][0] + splitNames[1][0];
        }
        if(achievedPercent > 100){
            achievedPercent = 100;
        }
    return (
        <CardContainer>
            <img src = {imageURL} width = "100%" height = "170px" alt = {title}
            style = {{ borderRadius: "20px" }}/>
            <CardTitle>{title}</CardTitle>
            <div>
                <span style = {{float:"left"}}>
                <CodeNameBlock><p>{extractFirstLetter(AuthorName)}</p></CodeNameBlock>
                </span>
                <p style = {{float:"left", fontSize:"14px", color : "#212529"}}>&emsp;by {AuthorName}</p>
            </div>
               
                <div style = {{clear:"both",float:"left", marginLeft : "10px"}}>
                    <p style = {{fontSize: "20px", fontWeight:"bold", color:"#444444"}}>&#8377;{raisedValue}
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
const BannerDiv = styled.div`
border-right : 1px solid white;
width : 33%;
height: 80%;
margin: auto;`;
const TextDiv = styled.div`
color:white;
float:left;
font-size:14px;
font-weight:bold;`
export const BannerItem = (
    {imgUrl = "https://ketto.gumlet.io/assets/images/browse-campaign/lives-impacted.png",
    summaryHeader = " 2 Lakh+",
    summarySubHeader = " LIVES IMPACTED"}

    ) => {
        return(
        <BannerDiv>
            <div style ={{marginLeft:"8vw"}}>
            <TextDiv>
                <img src = {imgUrl} height = "64px" width = "64px" margin-right="20px" alt = {summarySubHeader}/>
            </TextDiv>
            <TextDiv>
               <span style = {{fontSize:"30px"}}>{summaryHeader}</span>
               <br/>
               {summarySubHeader}
            </TextDiv>
            </div>
        </BannerDiv>
        );
}

export const ModalBox = styled.div`
display: block; 
position: fixed; 
z-index: 1; 
left: 0;
top: 0;
width: 100%; 
height: 100%;
overflow: auto;
background-color:rgba(0,0,0,.7);`

export const ModalBodyDiv = styled.div`
position: relative;
background-color: white;
margin:auto;
margin-top: 10vh;
padding: 0;
border: 1px solid #888;
width: 43vw;
height:80vh;
transition: 1s;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
border-radius:20px;`

export const CloseSpan = styled.span`
padding: 2px 16px;
float: right;
cursor:pointer;
background-color: #5cb85c;
color: white;
font-size : 30px;`

export const ModalHeader = styled.div`  
background-color: #f7f8f8;
width:97.5%;
padding: 8px;
border-radius:10px;
color: #01bfbd;
font-weight:bold;
font-size:30px;
text-align:center;`

export const ModalTextDiv = styled.div`
padding: 2px 16px;`

export const ModalFooter = styled.div`
padding: 2px 16px;
background-color: #5cb85c;
color: white;`

export const ModalButton = styled.button`
height:40px;
width:150px;
border-radius:20px;
border: none;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
margin:auto;
margin:20px;
cursor:pointer;
font-size:15px;
transition:1s;
color : #444444;
&:focus{
    background-color :#01bfbd;
    color:white;
    outline: none;
}`
export const StyledLabel = styled.label`
font-size:10px;
color : #444444;
margin-left:25%;`

export const StyledInput = styled.input`
height:30px;
width:250px;
border: none;
color:#444444;
outline:none;
transition:1s;
border-bottom:1px solid #444444;
margin-left:25%;
&:focus{
    border-bottom : 1px solid #01bfbd;
}`

export const ProceedToPayButton = styled.button`
background-color:#01bfbd;
color:white;
width:22%;
height:50px;
cursor:pointer;
width:270px;
margin-left:25%;
border:none;
outline:none;
border-radius:25px;
font-size:17px;
padding:10px;
&:hover{
    background-color:#039695;
}`

export const PayButton = styled.button`
background-color:#01bfbd;
color:white;
width:30%;
height:40px;
cursor:pointer;
width:240px;
margin-left:27%;
border:none;
outline:none;
border-radius:25px;
font-size:17px;
padding:10px;
&:hover{
    background-color:#039695;
}`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 2px solid #b2eceb;
  border-right: 2px solid #b2eceb;
  border-bottom: 2px solid #b2eceb;
  border-left: 4px solid #01bfbd;
  background: transparent;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin:auto;
  margin-top:20px;
`;