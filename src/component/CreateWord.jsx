import {useRef, useState} from "react"
import useFetch from "../hooks/useFetch"
import { useNavigate } from 'react-router-dom';

export default function CreateWord (){
  const days = useFetch('http://localhost:3001/days')
  const history = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e){
    e.preventDefault();

    console.log(engRef.current.value); // current 속성을 이용하면 해당 요소에 접근할 수 있음. value는 인풋에 입력된 값을 얻을 수 있다.

  if (!isLoading){
    setIsLoading(true)  
      fetch(`http://localhost:3001/words/`,{
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json',  // 보내는 리소스의 타입 (json형태로 내보낼꺼기 때문에 위와 같이 작성)
        },
        body : JSON.stringify ({
            day : dayRef.current.value,
            eng : engRef.current.value,
            kor : korRef.current.value,
            isDone : false,
        }),
      }).then(res => {
        if(res.ok){
          alert("생성이 완료 됐습니다.")
          history(`/day/${dayRef.current.value}`); // push 함수 안써도됨.
          setIsLoading(false) 
        }
      });
    }
  }

  const engRef= useRef(null)
  const korRef= useRef(null)
  const dayRef= useRef(null)

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="input_aera">
          <label>Eng</label>
          <input type="text" placeholder="computer" ref={engRef}/>
        </div>
        <div className="input_aera">
          <label>Kor</label>
          <input type="text" placeholder="컴퓨터" ref={korRef}/>
        </div>
        <div className="input_aera">
          <label>Day</label>
          <select ref={dayRef}>
              {days.map(day => (
                <option key ={day.id} value={day.day}>{day.day}</option>
              ))}
          </select>
        </div>
        <button style={
          {opacity: isLoading ? 0.3 : 1,
        }}> 
        {isLoading ? "Saving..." : "저장"}</button>
      </form>    
    </>
  )
}