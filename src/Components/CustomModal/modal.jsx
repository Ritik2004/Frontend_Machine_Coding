import { useState } from "react"
import ModalTest from "./modal-test";
export default function Modal(){
    const[showPopup, setshowPopup]= useState(false);

    function modalOpenfunction(){
        setshowPopup(!showPopup);
    }
    function onClose(){
        setshowPopup(false)
    }
    return(
        <div>
           <button onClick={modalOpenfunction}>Open</button>
           {
            showPopup && <ModalTest onClose={onClose}
                body={<div>This is a customized body.</div>}
            />
           }
        </div>
    )
}