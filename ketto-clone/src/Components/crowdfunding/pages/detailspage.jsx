import react, { useEffect, useRef } from "react"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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

let Formbody = styled.div`
width:30%;
margin:auto;
min-height:150px;
padding:2%;
border:1px solid lightgray;
`

let Input = styled.input`
width:100%;
border:0px;
border-bottom:1px solid black;
`
let Select = styled.select`
width:100%;
border:0px;
border-bottom:1px solid black;
`
export function InitForm(){
    let [query,setQuery] = react.useState(initVal);
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
        <Formbody>
            <div>
                <h3>Tell us more about your Fundraiser</h3 >
            </div>
            <div>
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
            </div>
            <div>
                <Link onClick={onSubmit} to="/new/fundraiser">Save and continue</Link>
            </div>
        </Formbody>
       
    )
}