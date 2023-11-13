import Welcome from "./Welcome"
import World from "./World"
import styles from './Hello.module.css' // 클래스네임을 같이 쓰는게 가능함.
import { useState } from "react"
import UserName from "./UserName"

export default function Hello (props) { // props에 대한 개념 좀 더 공부
console.log(props)
const [name, setName] = useState('태정')
const [age, setAge] = useState(props.age)
const msg = age > 10 ? "성인 입니다." : "미성년자 입니다.";

const changeName =() => {
setName(name === '태정' ? '채원' : '태정')
}

const changeAge = () => {
    setAge(age+1) 
}

const handler = () => {
    changeAge()
    changeName()
} // 함수를 한번에 사용하고 싶으면 하나로 묶어야 함

return (
    <>
        <p className={styles.box}>Hello</p>
        <World/>
        <Welcome/>
        <div>
        <p>{name}({age}) : {msg}</p>
        <UserName name = {name} />
          <button onClick={handler}> Change</button>
        </div>
    
    </>
    )
}