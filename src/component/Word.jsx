import { useState } from "react";
import "./Word.css"
export default function Word({ word }){
    const[isShow, setIsShow] = useState(false);
    const[isDone, setIsDone] = useState(word.isDone);
    

    const toggleShow = () => {
      setIsShow(!isShow)
    }

    const toggleIsDone = () => {
      setIsDone(!isDone)
    }
    
  return (
    <>
      <tr className={isDone ? "off" : ""} >
        <td>
            <input type="checkbox" checked={isDone} onChange={toggleIsDone}/>
        </td>
        <td>{word.eng}</td>
        <td>{isShow && word.kor}</td>
        <td> 
            <button onClick={toggleShow} className='view'>
              뜻 {isShow ? "숨기기" : "보기"}</button>
            <button className='del'>삭제</button>
        </td>
      </tr>
    </>
  )
}