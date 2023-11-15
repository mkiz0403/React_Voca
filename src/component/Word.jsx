import { useState } from "react";
export default function Word({word:w}){
  const[word, setWord] = useState(w);   // 순서가 중요함
  const[isShow, setIsShow] = useState(false);
    const[isDone, setIsDone] = useState(word.isDone);
    

    const toggleShow = () => {
      setIsShow(!isShow)
    }
 
    const toggleIsDone = () => {
      // setIsDone(!isDone)
      fetch(`http://localhost:3001/words/${word.id}`,{
        method : 'PUT',
        headers : {
          'Content-Type' : 'application/json',  // 보내는 리소스의 타입 (json형태로 내보낼꺼기 때문에 위와 같이 작성)
        },
        body : JSON.stringify ({
        ...word, 
        isDone : !isDone,
        }),
      }).then(res => {
        if(res.ok){
          setIsDone(!isDone);
        }
      });
    }

    function del() {
      if(window.confirm('삭제 하시겠습니까?')) {
        fetch(`http://localhost:3001/words/${word.id}`,{
          method : 'DELETE',
        }) .then(res => {
          if(res.ok){
              setWord({id:0})
          }
        })
      }
    }

    if(word.id === 0){
      return null;
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
            <button onClick={del} className='del'>삭제</button>
        </td>
      </tr>
    </>
  )
}