import { useParams } from "react-router-dom";
import "./Day.css"
import Word from "./Word";
// import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function Day () {
    // dummy.words

    const {day} = useParams(); // 주소창에 있는 문자열이 들어온다.

    const words = useFetch(`http://localhost:3001/words?day=${day}`)
    // const wordList = dummy.words.filter((word) =>
    //     word.day === Number(day))
    // console.log(wordList)
    // const[words, setWords] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:3001/words?day=${day}`)
    //     .then(res => {  // respose(응답)
    //         return res.json(); // json을 받아서 promise를 반환
    //     })
    //     .then(data => {
    //         setWords(data);
    //     });
    // }, [day])

    return ( 
        <>
            <h2>Day{day}</h2>
            {words.length === 0 &&(<spen>Loading...</spen>)}
                
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word = {word} key = {word.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
}