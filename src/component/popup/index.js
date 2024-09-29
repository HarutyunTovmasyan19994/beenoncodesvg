import React,{useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { POPUP_OPEN_CLOSE,DATA_INFO } from "../../redux/action";
import {getBase64} from "../convert"
import ColorPicker from 'react-pick-color';
import './style.css'

const Modal =()=>{
    const [color, setColor] = useState('');
    const [avatar,setAvatar] = useState("")
    const [name,setName] = useState("")
    const {data} = useSelector(state=>state)
    const dispatch = useDispatch()

    console.log(avatar,name);

    const imageHandle =(e)=>{
        getBase64(e.target.files[0],setAvatar)
    }

    const addHandle = () =>{
        dispatch({type:DATA_INFO,payload:{color,avatar,name,widt:"150",height:"10",cricle:{widt:"20",height:"20"}}})
        dispatch({type:POPUP_OPEN_CLOSE,payload:false})
        setName("")
        setAvatar("")
    }
    
    return(
        <div className={data.popup ? "modal active" : "modal"} onClick={()=>dispatch({type:POPUP_OPEN_CLOSE,payload:false})}>
            <div className={data.popup ? "modal__context active" : "modal__context"} onClick={e=>e.stopPropagation()}>
                <ColorPicker color={color} onChange={color => setColor(color.hex)} className="colorPicker"/>
                <input type="file" className="fileInput" onChange={(e)=>imageHandle(e)}/>
                <input type="text" className="textInput" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
                <button className="btnAdd" onClick={addHandle}>Add</button>
            </div>
        </div>
    )
}

export default Modal