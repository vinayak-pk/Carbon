import react, {  useRef } from "react"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addData } from '../../../Redux/crowdfunding_register/cf_action';
import styled from "styled-components"

export const reference = [

        {
            name:"Influencers/Content Creators",
            value:"Influencers/Content Creators"
        },{
            name:"Facebook Ads/Post",
            value:"Facebook Ads/Post"
        },{
            name:"youtube",
            value:"Youtube Ads  "
        },{
            name:"search",
            value:"Search Engine (Google,Yahoo etc)"
        },{
            name:"officials",
            value:"Ketto Representatives/Officials"
        },{
            name:"media",
            value:"Newspaper/TV"
        },{
            name:"recommend",
            value:"Recommended By Friend / Family members"
        },{
            name:"others",
            value:"others"
        }
]

export const fund_for = [

    {
        value:"myself",
        name:"Myself"
    },
    {
        value:"family",
        name:"Family Member"
    },
    {
        value:"friend",
        name:"Friend"
    },  {
        value:"animal",
        name:"Pet or Animal"
    },
]

let initVal = {
    name:"",
    acc:"",
    ref:"",
    img:""
}
export let Body = styled.div`
width:100%;
height:100vh;
background:#1d1d1d;
`

export let Mainbody = styled.div`
background:white;
width:35%;
margin:auto;
min-height:450px;
border:1px solid lightgray;
border-radius:10px;
`
export let Formbody = styled.div`
width:96%;
margin:auto;
min-height:350px;
padding:2%;
border:1px solid lightgray;
`

export let Input = styled.input`
width:85%;
border:0px;
border-bottom:1px solid black;
margin:30px 0px;
height:35px;
outline:0px;
&&:focus{
    border-bottom:2px solid rgba(1,190,188,255)
}
`
export let Select = styled.select`
width:85%;
border:0px;
border-bottom:1px solid black;
margin:10px 0px;
background:white;
height:35px;
outline:0px;
&&:focus{
    border-bottom:2px solid rgba(1,190,188,255);
}
`
export let Button = styled.button`
width:100.5%;
height:45px;
font-size:20px;
border:0px;
color:white;
outline:0px;
background:rgba(1,190,188,255);
border-bottom-left-radius:10px;
border-bottom-right-radius:10px;
`
export function InitForm(){
    let [query,setQuery] = react.useState(initVal);
    let history = useHistory();
    let {name,acc,ref} = query
    let dispatch = useDispatch();
    let imagerRef = useRef();
    let handleChange = (e)=>{
    let {name,value} = e.target;
    setQuery({...query,[name]:value});
    }
     let onSubmit = async(e)=>{
        e.preventDefault();
         dispatch(addData(query));
     setQuery(initVal)
     history.push('/new/medical/advance')
    }

    let handleImage = async()=>{
        console.log('here');
        let imageVal = imagerRef.current.files[0];
        if(imageVal===undefined ){
            return
        }
        let base = await convertBase64(imageVal);
        setQuery({...query,img:base});
    }
    let convertBase64 = (file)=> {
        return new Promise((resolve,reject)=>{
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            
            fileReader.onload=()=>{
                resolve(fileReader.result);
            };
            fileReader.onerror=(err)=>{
                reject(err)
            };
        });    
    };
    return (
        <Body>
              <Mainbody>
            <div>
                <h3>Tell us more about your Fundraiser</h3 >
            </div>
            <Formbody>
                <form onSubmit={onSubmit}>
                    <Input value={name} name="name" onChange={handleChange} placeholder="How much do you want to raise?" type="number"/>
                    <Select value={acc} name="acc" onChange={handleChange} placeholder="The Patient is my..." id="">
                        <option value="" disabled defaultValue hidden>The Patient is my...</option>
                        {fund_for.map((el,i)=>{
                            return <option key={i} value={el.value}>{el.name}</option>
                        })}
                    </Select>
                    <Select value={ref} name="ref" onChange={handleChange} placeholder="How did You Hear About Us" id="">
                        <option value="" disabled defaultValue hidden>How did You Hear About Us</option>
                        {reference.map((el,i)=>{                 
                            return <option key={i} value={el.name}>{el.value}</option>
                        })}
                    </Select>
                    <input onChange={handleImage} ref={imagerRef} type="file"/>
                </form>
            </Formbody>
            <div>
                <Button onClick={onSubmit}>Save and continue</Button>
            </div>
            </Mainbody>

        </Body>
       
    )
}