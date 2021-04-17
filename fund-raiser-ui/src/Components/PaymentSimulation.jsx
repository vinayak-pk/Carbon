import React from "react";
import { 
    ModalBox,
     ModalBodyDiv, 
     ModalHeader, 
     CloseSpan,
    ModalTextDiv, 
    ModalFooter,
    ModalButton, 
    StyledLabel,
    StyledInput,
    ProceedToPayButton,
    PayButton, 
Spinner} from './StyledBasicComponents';
import axios from "axios"

export const PaymentSimulation = ({openPaymentModal, setOpenPaymentModal}) => {
    const [paymentProcess, setPaymentProcess] = React.useState(false);
    const [paymentAmount, setPaymentAmount] = React.useState(0);
    const [changeToNext, setChangeToNext] = React.useState(false);
    const [formData, setFormData] = React.useState({name:'', email:'',phoneNum:''});
    const [paymentData, setPaymentData] = React.useState({cardNum:'', exp:'', cvv:''});
    const evaluateEntries =() => {
        if(formData.name !==''&& formData.email!=='' && formData.phoneNum !==''){
            setChangeToNext(!changeToNext);
        }
        else {
            alert('Form filled improperly');
        }
    }
    if(paymentProcess){
        setInterval(()=>{
            setOpenPaymentModal(false);
            setPaymentProcess(false);
        },5000)
    }
    const handleChange = (e) => {
        //console.log(e.target.value)
        setFormData({
            ...FormData,
            [e.target.name]: e.target.value
        })
    }
    const handleChangePayDetails = (e) => {
        setPaymentData({
            ...paymentData,
            [e.target.name]:e.target.value
        })
    }
     return (changeToNext?
        (paymentProcess?(<ModalBox>
            <ModalBodyDiv>
                <br /><br/>
                <h1 style = {{color:"#01bfbd", transition:"1s", textAlign:"center"}}>Processing Payment...</h1>
                <br/><br/>
                <Spinner></Spinner>
            </ModalBodyDiv>
        </ModalBox>):
        <ModalBox><ModalBodyDiv>
                <ModalHeader>
                    <span style = {{float:"left", 
                    textAlign:"center", 
                    fontSize:"30px", 
                    padding:"2px",
                    margin:"0px",
                    marginBottom:"5px",
                    paddingBottom:"20px",
                    cursor:"pointer"}}
                    onClick = {() => {evaluateEntries()}}>
                    &times;
                    </span>Please enter your payment details
                    </ModalHeader>
                    <br/>
            <div style = {{marginLeft:"20px"}}>
                            <StyledLabel>
                                Card Number
                                <br/>
                                <StyledInput type = "text" onChange = {(e)=>{handleChangePayDetails(e)}} placeholder = "1234-XXXX-XXXX-XXXX" value = {paymentData.cardNum} name ="cardNum"/>
                            </StyledLabel>
            </div>
            <div style = {{marginLeft:"20px"}}>
                            <StyledLabel>
                                Exp Date
                                <br/>
                                <StyledInput type = "text" placeholder = "MM/YYYY" onChange = {(e)=>{handleChangePayDetails(e)}} value = {paymentData.exp} name ="exp"/>
                            </StyledLabel>
            </div>
            <div style = {{marginLeft:"20px"}}>
                            <StyledLabel>
                                CVV
                                <br/>
                                <StyledInput type = "text" placeholder = "CVV/CVC "onChange = {(e)=>{handleChangePayDetails(e)}} value = {paymentData.cvv} name ="cvv"/>
                            </StyledLabel>
            </div>
            <div style = {{marginLeft:"20px"}}>
                            <StyledLabel>
                                Name on Card
                                <br/>
                                <StyledInput type = "text" placeholder = "Name on Card"onChange = {(e)=>{handleChangePayDetails(e)}} value = {paymentData.nameOnCard} name ="nameOnCard"/>
                            </StyledLabel>
            </div>
            <br/><br/>
        <PayButton onClick = {() => {setPaymentProcess(!paymentProcess)}}>Pay &#8377; {paymentAmount}</PayButton>
        <br/><br/>
        <div style = {{marginLeft : "30%"}}>
        <img src = 'https://mup.manipal.edu/wp-content/uploads/2019/12/payment-method-png-2463x512_e315f6c1.png'
         width = '50%' 
         height = '10%'
         alt = 'payment modes'/>
         </div>
        </ModalBodyDiv>
        </ModalBox>
        ):
        (<>
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
                    cursor:"pointer"}}
                    onClick = {() => {setOpenPaymentModal(!openPaymentModal)}}>
                    &times;
                    </span>Choose a donation amount
                    </ModalHeader>
                    <br/>
                    <div>
                        <ModalButton onClick = {()=> {setPaymentAmount(250)}}>&#8377;250</ModalButton>
                        <ModalButton onClick = {()=> {setPaymentAmount(500)}}>&#8377;500</ModalButton>
                        <ModalButton onClick = {()=> {setPaymentAmount(1000)}}>&#8377;1000</ModalButton>
                        <br/>
                        <span style = {{marginLeft:"36%"}}>
                        <input type = "number"
                        value = {paymentAmount}
                        onChange = {(e) => {setPaymentAmount(e.target.value)}} 
                        style = {{
                            height:"40px", 
                            width:"150px",
                            borderRadius:"20px",
                            border:"0",
                            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)",
                            outline: "none",
                            textAlign:"center",
                            color : "#444444",
                            fontSize:"15px"
                        }}/>
                        </span>
                        <br /> <br />
                        <div style = {{marginLeft:"20px"}}>
                            <StyledLabel>
                                Name
                                <br/>
                                <StyledInput type = "text" onChange = {(e)=>{handleChange(e)}} value = {formData.name} name ="name"/>
                            </StyledLabel></div>
                            <div style = {{marginLeft:"20px"}}>
                            <StyledLabel>
                                Email ID
                                <br/>
                                <StyledInput type = "text" onChange = {(e)=>{handleChange(e)}} value = {formData.email} name ="email"/>
                            </StyledLabel></div>
                            <div style = {{marginLeft:"20px"}}>
                            <StyledLabel>
                               Your Mobile Number
                                <br/>
                                <StyledInput type = "text" onChange = {(e)=>{handleChange(e)}} value = {formData.phoneNum} name ="phoneNum"/>
                            </StyledLabel></div>
                            <br/>
                            <ProceedToPayButton onClick ={evaluateEntries}>Proceed to Pay &#8377;{paymentAmount}</ProceedToPayButton>
                    </div>
            </ModalBodyDiv>
        </ModalBox>
        </>
    ))
}