import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateDay (){
  const days = useFetch('http://localhost:3001/days')
  const history = useNavigate();
  
    function addDay(){
      
      fetch(`http://localhost:3001/days/`,{
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json',  // 보내는 리소스의 타입 (json형태로 내보낼꺼기 때문에 위와 같이 작성)
        },
        body : JSON.stringify ({
            day : days.length + 1
        }),
      }).then(res => {
        if(res.ok){
          alert("생성이 완료 됐습니다.")
          history(`/`)
        }
      });
    }
  return(
    <>
      <div>
        <h3>현재 일수 : {days.length}일</h3>
        <button onClick={addDay}>Day 추가</button>
      </div>
    </>
  )
}