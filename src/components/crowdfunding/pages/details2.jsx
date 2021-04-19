import react, {  useRef } from "react"
import { useDispatch } from "react-redux";
import { Link ,useHistory} from "react-router-dom";
import { addData } from '../../../Redux/crowdfunding_register/cf_action';
import styled from "./pages.module.css"
import { Formbody,Input,Select,Mainbody,Button,Body } from './detailspage';
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
    title:"",
    age:"",
    ailment:"",
    hosptilized:false
}

export function PatientInfo(){
    let [query,setQuery] = react.useState(initVal);
    console.log(query)
    let history = useHistory();
    let {name,title,age,ailment,hosptilized} = query
    let dispatch = useDispatch();
    let handleChange = (e)=>{
    let {name,value,checked,type} = e.target;
    console.log(checked)
    let val =type==="checkbox"?checked:value
    setQuery({...query,[name]:val});
    }
     let onSubmit = async(e)=>{
        e.preventDefault();
         dispatch(addData(query));
     setQuery(initVal);
     history.push('/new/medical/desc')
    }

    return (
        <Body>
            <Mainbody>
            <div>
                <h3>Tell us more about your Fundraiser</h3 >
            </div>
            <Formbody>
                <form onSubmit={onSubmit}>
                    <Input value={name} name="name" onChange={handleChange} placeholder="Patient's name" type="text"/>
                    <Input value={title} name="title" onChange={handleChange} placeholder="Title"/>
                    <Select value={age} name="age" onChange={handleChange} id="">
                        <option value="" disabled defaultValue hidden>Patient's age</option>
                        {fund_for.map((el,i)=>{
                            return <option key={i} value={el.value}>{el.name}</option>
                        })}
                    </Select>
                    <Select value={ailment} name="ailment" onChange={handleChange} placeholder="How did You Hear About Us" id="">
                        <option value="" disabled defaultValue hidden>How did You Hear About Us</option>
                        {reference.map((el,i)=>{                 
                            return <option key={i} value={el.name}>{el.value}</option>
                        })}
                    </Select><br/>
                    Is the patient admitted to the Hospital?
                    <label className={styled.switch}>
                        Yes
                        <input placeholder="Yes" checked={hosptilized} name="hosptilized" onChange={handleChange} type="checkbox"/>
                        <span className={styled.slider}>No</span>
                    </label>
                </form>
            </Formbody>
            <div>
                <Button onClick={onSubmit} to="/new/fundraiser">Save and continue</Button>
            </div>
        </Mainbody>
        </Body>
       
    )
}