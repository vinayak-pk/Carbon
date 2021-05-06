import React from "react"
import { useSelector } from 'react-redux';
import styled from "styled-components"

let Aboutbox = styled.div`
width:85%;

`

export function About() {
    let data = useSelector(state=>state.layout.data)
  return  <Aboutbox style={{width:"100%",padding:"1"}}>
      <h2 style={{textAlign:"center"}}>About the Fundraiser</h2>
       <p style={{marginLeft:"10px",lineHeight:"2"}}>{data.description}</p>
    </Aboutbox>
}