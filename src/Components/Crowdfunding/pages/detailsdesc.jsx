import react from "react"
import { useDispatch } from "react-redux";
import { useHistory} from "react-router-dom";
import { addData } from '../../../Redux/crowdfunding_register/cf_action';
import { Formbody,Mainbody,Button ,Body} from './detailspage';
import {Editor} from "react-draft-wysiwyg"
let initVal = {
    name:"",
    age:"",
    ailment:"",
    hosptilized:false
}

export function PatientDesc(){
    let [query,setQuery] = react.useState(initVal);
    console.log(query)
    let history = useHistory();
    let {name,age,ailment,hosptilized} = query
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
                        <Editor
                        toolbar={{
                            options:['inline', 'textAlign','list'],
                            inline:{
                                options: ['bold', 'italic'],
                            },
                            textAlign:{
                                inDropdown: true
                            },
                            list:{
                                options: ['unordered', 'ordered']
                            }
                        }}
                        />
                        </form>
                    </Formbody>
                <div>
                    <Button onClick={onSubmit} to="/new/fundraiser">Save and continue</Button>
                </div>
                </Mainbody>
        </Body> 
    )
}