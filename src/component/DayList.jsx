import "./DayList.css"
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function Daylist () {
    const days = useFetch('http://localhost:3001/days')
    // const [days, setDays] = useState([])
    
    // useEffect(()=>{
    //     fetch('http://localhost:3001/days')
    //     .then(res=> {  // respose(응답)
    //         return res.json() // json을 받아서 promise를 반환
    //     })
    //     .then(data => {
    //         setDays(data);
    //     })
    // },[])

    if(days.length === 0){
        return <spen>Loading....</spen>
    }

    return (
        <>
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </ul>

        </>
    );
}