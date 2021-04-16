import React from "react";
import { ModalBox,
     ModalBodyDiv, 
     ModalHeader, 
     CloseSpan,
    ModalTextDiv, 
    ModalFooter,
    ModalButton } from './StyledBasicComponents';
export const PaymentSimulation = () => {

    return (
        <>
        <h1>Hello world</h1>
        <ModalBox>
            <ModalBodyDiv>
                <ModalHeader>
                    <span style = {{float:"left", 
                    textAlign:"center", 
                    fontSize:"30px", 
                    padding:"2px",
                    margin:"0px",
                    marginBottom:"5px",
                    paddingBottom:"20px",
                    cursor:"pointer"}}>
                    &times;
                    </span>Choose a donation amount
                    </ModalHeader>
                    <br/>
                    <div>
                        <ModalButton>&#8377;250</ModalButton>
                        <ModalButton>&#8377;500</ModalButton>
                        <ModalButton>&#8377;1000</ModalButton>
                        <br/>
                        <span style = {{marginLeft:"33%"}}>
                            <ModalButton>Other Amount</ModalButton>
                        </span>
                    </div>
            </ModalBodyDiv>
        </ModalBox>
        </>
    )
}