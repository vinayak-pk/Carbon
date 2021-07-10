import React from "react";
import {useParams} from "react-router-dom";
import {DisplayCard,  Spinner, SideBar, SideBarItem} from "team-carbon-ui";
import { BannerItem, HeaderBanner, HeaderTitle, HeaderDiv, HeaderSubTitle, 
    StyledLink} from './StyledBasicComponents';
import '../index.css';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getFundRaisers} from '../Redux/FundRaiserUI/action';
import styles from "./EssentialAlignment.module.css"
import {useHistory} from "react-router-dom"
import Navbar from "./Navbar/Navbar";
import styled from "styled-components"
const SideBarItemsList = [
    {name:'All Categories',value:""},
     {name:'Medical',value:"medical"}, 
     {name:'Women & Girls',value:"women"}, 
     {name:'Animals',value:"animals"}, 
     {name:'Creative',value:"creative"}, 
     {name:'Food & Hunger',value:"food"}, 
{name:'Environment',value:"environment"},
 {name:'Children',value:'children'},
  {name:'Memorial',value:"memorial"}, 
  {name:'Community Development',value:"community"},
   {name:"Others",value:'others'}];

   let Loaddiv = styled.div`
   margin-top:15%;
   `

const LinkedSideBarItems = SideBarItemsList.map((item,i) => (
<StyledLink key={i} to ={`/fundraisers/category/${item.value}`}>{item.name}</StyledLink>))

export const BrowseFundraiser = () => {
    let history = useHistory();
    const { isLoading, fundRaiser} = useSelector(state => state.fundRaiser, shallowEqual);
    const dispatch = useDispatch();

    // const toggleOpenPaymentModal = () => {
    //     dispatch(setOpenPaymentModal());
    // } 

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
        const getData = () => {
            dispatch(getFundRaisers());
        }
        getData();
    }, [dispatch]);

    let {val} = useParams();
    let filtered = [];
    if(val){
        filtered = fundRaiser?.filter((el)=> el.category===val);
    }else{
        filtered = fundRaiser;
    }
    let redirectPage=(id)=>{
        history.push(`/fundraiser/${id}`)
    }
    return (
    <>
    <Navbar/>
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
    <div className= {styles.alignment2}> 
       {isLoading ?<Loaddiv><Spinner/></Loaddiv>:(filtered?.map((item, i) => (
           <div key={i} onClick={()=>redirectPage(i)}>
            <DisplayCard title = {item.title}
            imageURL = {item.profile_image}
            AuthorName = {item.first_name + " " + item.last_name}
            raisedValue = {item.curr_donation}
            achievedPercent = {Math.floor((item.curr_donation/item.donation_goal) * 100)}
            lastDonation = {Math.floor(Math.random() * 23)}
            daysLeft = {getDaysLeft(item.due_date)}
            supportersCount = {item.supporters} 
            id = {i} 
            key = {item.id} 
            onclick={redirectPage}
           /></div>)
           ))}
    </div>
    </div>
   </>)
}