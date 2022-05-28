import React,{useState} from "react";

const Form = () =>{
   const [name, setname] = useState("");
   const [useName, setuseName] = useState();
   const [lastName, setlastName] = useState("");
const [lastFullName, setlastFullName] = useState();

   const lastNewName = (e)=>{
       console.log(e.target.value);
       setlastName(e.target.value);
   }
    const inputName = (e)=>{
        console.log(e.target.value);
        setname(e.target.value);
    }
    const submit = (e)=>{
        e.preventDefault();
        setuseName(name);
        setlastFullName(lastName);
    }
    return(
        <>
            <form onSubmit={submit}>
            <div>
            <h1>Hello {useName} {lastFullName}</h1>
            <input type='text' placeholder='Enter Your Name' onChange={inputName} value={name}/><br/>
            <input type='text' placeholder='Enter Your LastName' onChange={lastNewName} value={lastName}/><br/>
            <button>Click here 👍</button>
            </div>
            </form>
        </>
    );
}
export default Form;
