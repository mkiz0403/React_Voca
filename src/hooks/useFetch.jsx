import { useEffect,useState } from "react";

export default function useFetch(url){ // 바뀔부분, Api 주소를 받아서

  const[data, setData] = useState([]);

  
useEffect(() => {
        fetch(url) // Api 값을 넘겨 받아 fetch한다.
        .then(res => {  // respose(응답) 
            return res.json(); // json을 받아서 promise를 반환
        })
        .then(data => {
            setData(data); // 응답받은 데이터를 setData 해준다.
        });
    }, [url])

    return data; // 반환해준다.
}