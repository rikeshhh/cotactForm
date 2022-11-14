import React, { useState } from "react";

function Contact(props) {
  const {setList, contact,list } = props;
//   const [values, setValues] = useState({
//     name: contact ? contact.name : "",
//     email: contact ? contact.email : "",
//     phone: contact ? contact.phone : "",
//   });
const [name,setName] = useState(contact ? contact.name : "",)
const [email,setEmail] = useState(contact ? contact.email : "",)
const [phone,setPhone] = useState(contact ? contact.phone : "",)
  const [readOnly,setReadOnly]=useState(true)
  const [update, setUpdate] = useState(false);
  console.log(update,'update')
  console.log(readOnly,'ureasf')

const edit=()=>{
    console.log('clicked');
  const newContactlist=  list.map((b)=>{
        if (contact===b) {
            return {
                ...b, 
                name:name,
                email:email,
                phone:phone
            }
        }
        return b
    })
    setReadOnly(true);
    setUpdate(false);
    setList(newContactlist);
}
const deleteContact = ()=>{
    const newcontact = list.filter((el)=>  el!==contact);
    setList(newcontact);
}
  return (
    <div>
      
      <div>
        {!update ? (
          <button
            onClick={() => {
              setUpdate(true);
              setReadOnly(false)
            }}
          >
            Update
          </button>
        ) : (
          <button onClick={edit}>Save</button>
        )}
        <button onClick={deleteContact}>Delete</button>
      </div>
<div>
    <input value={name} readOnly={readOnly}  onChange={(e)=>setName(e.target.value)}></input>
    <input value={email} readOnly={readOnly} onChange={(e)=>setEmail(e.target.value)} ></input>
    <input value={phone} readOnly={readOnly} onChange={(e)=>setPhone(e.target.value)} ></input>
</div>

    </div>
  );
}

export default Contact;
