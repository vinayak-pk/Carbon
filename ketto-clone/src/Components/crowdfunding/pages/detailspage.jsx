import react, { useEffect, useRef } from "react"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addData } from '../../../Redux/crowdfunding_register/cf_action';
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
export function InitForm(){
    let [query,setQuery] = react.useState(initVal);
    let [image,setImage] = react.useState("");
    let dispatch = useDispatch();
    let imagerRef = useRef();
    let handleChange = (e)=>{
    let {name,value} = e.target;
    setQuery({...query,[name]:value});
    }
     let onSubmit = (e)=>{
        e.preventDefault();
        handleImage().then(()=> {console.log(image); setQuery({...query,img:image})});
    
        // dispatch(addData(query));
    }
    console.log(image)
    // console.log(query,image)
    let handleImage = async()=>{
        let imageVal = imagerRef.current.files[0];
        if(imageVal===undefined ){
            return
        }
        let base = await convertBase64(imageVal);
        setImage(base);
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
        <div>
            <div>
                <h1>Tell us more about your Fundraiser</h1>
            </div>
            <div>
            <form onSubmit={onSubmit}>
                <input name="name" onChange={handleChange} placeholder="How much do you want to raise?" type="text"/>
               <select name="acc" onChange={handleChange} id="">
                  {fund_for.map((el,i)=>{
                      return <option key={i} value={el.value}>{el.name}</option>
                  })}
               </select>
              <select name="ref" onChange={handleChange} id="">
                  {reference.map((el,i)=>{
                      return <option key={i} value={el.name}>{el.value}</option>
                  })}
             </select>
                <input ref={imagerRef} type="file"/>
            </form>
            </div>
            <div>
                <Link onClick={onSubmit} to="/new/fundraiser">Save and continue</Link>
            </div>
        </div>
       
    )
}