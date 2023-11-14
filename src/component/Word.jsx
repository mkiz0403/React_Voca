import { useState } from "react";
export default function Word({word}){
    const[isShow, setIsShow] = useState(false);

    const toggleShow = () => {
      setIsShow(!isShow)
    }
  return (
    <>
      <tr>
        <td>
            <input type="checkbox" />
        </td>
        <td>{word.eng}</td>
        <td>{isShow && word.kor}</td>
        <td>
            <button onClick={toggleShow}className='view'>뜻 보기</button>
            <button className='del'>삭제</button>
        </td>
      </tr>
    </>
  )
}