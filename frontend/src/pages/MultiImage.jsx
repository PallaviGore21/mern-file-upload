import React, { useState } from 'react'
// import axios from "axios"
import axios from "axios"
import { useEffect } from 'react'
import Axi from './Axi'
const MultiImage = () => {
    const [name, setName] = useState("kate")
    const [documents, setdocuments] = useState()
    const [users, setUsers] = useState([])

    // const userInstance= axios.create({
    //     baseURL: "http://localhost:5000"
    // })

    const handleSubmit=async(e)=>{
        e.preventDefault()
      console.log("Submitted");
      console.log(documents);

      const fd = new FormData()
      fd.append("name",name)
    //   for (let i = 0; i < documents.length; i++) {
    //    fd.append("doc", documents[i]) 
    //   }
      for(let d of documents){
        fd.append("doc", d) 

      }
    //   for(const x of fd.entries()){
    //    console.log(x);

    //   }

    const {data} = await axios.post("http://localhost:5000/user/gallery",fd)
         console.log(data);
  
    }


    const Allgetuser = async () => { 
      const {data: {result}} = await axios.get("http://localhost:5000/user/fetch")
  console.log(result);
  setUsers(result)
}
        useEffect(()=>{
          Allgetuser()
        },[])


  return <>
  {/* <Axi/> */}
  <pre>
    {JSON.stringify(documents,null,2)}
    {JSON.stringify(users,null,2)}
  </pre>
  <form onSubmit={handleSubmit} >
  <div className='container'>
    <input 
    value={name}
    onChange={e=>setName(e.target.value)}
    placeholder='enter name'
    className='form-control'
    type="text" />

<input 
    multiple
    onChange={e=>setdocuments(e.target.files)}
    placeholder='enter name'
    className='form-control'
    type="file" />
  </div>
  <button type='submit' className='btn btn-primary'>add Docs</button>
  </form>
  </>
}


<div className="mt-5">
    {/* {
        users.map(item => <div class="card">
          <div class="card-body">
        <p>{item.name}</p>
        {item.docs.map(url => <img 
        src={`http://localhost:5000/${url}`}
        height="150"
        width="150" className='img-fluid'
        alt=""
        />)}
          </div>
        </div>)
    } */}
</div>


export default MultiImage