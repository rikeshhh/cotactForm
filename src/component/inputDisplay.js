import React from 'react'
import Contact from './Contact'
function InputDisplay(props) {
    const {list,setList}=props
  return (
    <div>
        {
        list.map((a,index)=>(
        <Contact contact={a} list={list} setList={setList}/>
        ))
        }
    </div>
  )
}

export default InputDisplay