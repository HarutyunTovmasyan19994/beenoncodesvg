import React,{useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { POPUP_OPEN_CLOSE } from "../../redux/action";
import Modal from "../popup"
import "./style.css"




const AddSvgComponent = ()=>{
    const [avatar,setAvatar] = useState("")
    const [color,setColor] = useState('')
    const {data} = useSelector(state => state)
    const dispatch = useDispatch()
   
    console.log(data);
    
    return(
        <div className="svgapp">
            <div className="appSvg">      
               {
                data?.data?.map(item=>(
                    <div className="app">
                        <div className="imgDiv">
                            <img src={item.avatar}/>
                        </div>
                        <div className="cricleW">   
                            <div style={{width:item.cricle.widt + "px",height:item.cricle.height + "px",borderRadius:"50%",background:item.color}}></div>
                            <div style={{width:item.widt + "px",height:item.height + "px",borderRadius:10,background:item.color}}></div>
                        </div>
                        <div>
                            <p>{item.name}</p>
                        </div>
                    </div>
                ))
               }
              <Modal/>
               <button className="btn" onClick={()=>dispatch({type:POPUP_OPEN_CLOSE,payload:true})}>+</button>
            </div>
        </div>
    )
}


export default AddSvgComponent