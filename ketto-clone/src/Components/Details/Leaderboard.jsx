import React from "react"
import styled from "styled-components"
import { useSelector } from 'react-redux';
import { Namcont } from './layout';
export const Topdonors=({state})=>{
    console.log(state)
    let donations;
    let data = useSelector(state=>state.layout.data);
     function Sort() {
         donations = data.donations.sort((a,b)=>Number(b.donation)-Number(a.donation));
        return donations.slice(0,5);
    }
    let top = state&&Sort();
    let nameApp = (val)=>{
        let f = val.first_name.slice(0,1);
        let l = val.last_name.slice(0,1);
        return f + l;
    }
    return (
        <div style={{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",paddingRight:"5px"}}>
            <h3 style={{textAlign:"center"}}>Top Donors</h3>
            <div style={{borderTop:"1px solid lightgrey"}}>
                {state?top.map((el,i)=>{
                    return <div key={i} style={{display:"flex",justifyContent:"space-between",color:"rgba(73,72,73,255)"}}><span style={{fontSize:"18px",fontWeight:"500",borderRadius:"50px",background:"rgba(243,242,243,255)",color:"rgba(0,190,189,255)",padding:"3%"}}>{nameApp(el)}</span><span style={{marginTop:"10px"}}>{el.first_name} {el.last_name}</span><span style={{marginTop:"10px"}}>{el.donation}</span></div>
                }):"...loading"}
            </div>
        </div>
    )
}