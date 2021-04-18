import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
text-decoration : none;
color:#444;
&:focus{
    color: #01bfbd;
    font-weight:700;
&:hover{
    color: #01bfbd;
    font-weight:700;
}
}`;

export const HeaderDiv = styled.div`
background-image : url('https://www.ketto.org/new/browse-banner.9d14784ddc352882b9bd.png');
background-repeat: no-repeat;
background-size: auto;
height:60vh;
margin-bottom:20px;`
export const HeaderTitle = styled.div`
font-weight: 700;
font-size: 72px;
text-align: center;
color: #fff;
margin:auto;
padding-top:80px;`
export const HeaderSubTitle = styled.div`
line-height: 45px;
font-size: 36px;
text-align: center;
color: #fff;`
export const HeaderBanner = styled.div`
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