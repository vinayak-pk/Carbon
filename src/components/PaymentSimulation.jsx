import React from "react";
import { 
    ProceedToPayButton,
    PayButton,
    ModalBox,
    ModalBodyDiv, 
    ModalHeader, 
    ModalButton, 
    Spinner} from "team-carbon-ui";

import { 
    StyledLabel,
    StyledInput} from './StyledBasicComponents';

import { updateFundRaisers, updateFunds } from '../Redux/FundRaiserUI/action';
import { useDispatch ,useSelector} from 'react-redux';
import styles from './EssentialAlignment.module.css';
let initVal={first_name:'', last_name:''}
export const PaymentSimulation = ({togglepaymentModal, toggleOpenPaymentModal,id}) => {
    const [paymentProcess, setPaymentProcess] = React.useState(false);
    const [paymentAmount, setPaymentAmount] = React.useState(0);
    const [changeToNext, setChangeToNext] = React.useState(false);
    const [formData, setFormData] = React.useState(initVal);
    const [paymentData, setPaymentData] = React.useState({cardNum:'', exp:'', cvv:''});
    // let user = useSelector(state=>state.auth.User)
    let data = useSelector(state=>state.layout.data)
    let fundraiser = useSelector(state=>state.fundRaiser.fundRaiser)
    const evaluateEntries =() => {
        if(formData.name !==''&& formData.email!=='' && formData.phoneNum !==''){
            setChangeToNext(!changeToNext);
        }
        else {
            alert('Form filled improperly');
        }
    }
    console.log(fundraiser)
    if(paymentProcess){
        setInterval(()=>{
            toggleOpenPaymentModal(false);
            setPaymentProcess(false);
        },5000)
    }
    const handleChange = (e) => {
        let {name,value} = e.target

        setFormData({...formData,[name]:value})
    }
    const handleChangePayDetails = (e) => {
        setPaymentData({
            ...paymentData,
            [e.target.name]:e.target.value
        })
    }
    const dispatch = useDispatch();
    const handlePayment = (paymentAmount) => {
        console.log('Patching server value');
        dispatch(updateFundRaisers(data.curr_donation,id,{paidAmount:paymentAmount}));
        dispatch(updateFunds(id,{...formData,donation:Number(paymentAmount),id:fundraiser.length+1},data)).then(()=>togglepaymentModal())
    }
     return (changeToNext?
        (paymentProcess?(<ModalBox>
            <ModalBodyDiv>
                <br /><br/>
                <h1 className = {styles.alignment3}>Processing Payment...</h1>
                <br/><br/>
                <Spinner></Spinner>
            </ModalBodyDiv>
        </ModalBox>):
        <ModalBox><ModalBodyDiv>
                <ModalHeader>
                    <span className = {styles.alignment4}
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
        <PayButton onClick = {() => {handlePayment(paymentAmount)}}>Pay &#8377; {paymentAmount}</PayButton>
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
                    <span className = {styles.alignment4}
                    onClick = {() => {
                        togglepaymentModal()}}>
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
                        className = {styles.alignment5}/>
                        </span>
                        <br /> <br />
                        <div style = {{marginLeft:"20px"}}>
                            <StyledLabel>
                               First Name
                                <br/>
                                <StyledInput type = "text" onChange = {(e)=>{handleChange(e)}} value = {formData.first_name} name ="first_name"/>
                            </StyledLabel></div>
                            <div style = {{marginLeft:"20px"}}>
                            <StyledLabel>
                                Last Name
                                <br/>
                                <StyledInput type = "text" onChange = {(e)=>{handleChange(e)}} value = {formData.last_name} name ="last_name"/>
                            </StyledLabel></div>
                            <div style = {{marginLeft:"20px"}}>
                            <StyledLabel>
                               Your Mobile Number
                                <br/>
                                <StyledInput type = "text" value = {formData.phoneNum} name ="phoneNum"/>
                            </StyledLabel></div>
                            <br/>
                            <ProceedToPayButton onClick ={evaluateEntries}>Proceed to Pay &#8377;{paymentAmount}</ProceedToPayButton>
                    </div>
            </ModalBodyDiv>
        </ModalBox>
        </>
    ))
}
