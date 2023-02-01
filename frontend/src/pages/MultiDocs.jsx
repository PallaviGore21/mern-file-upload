import axios from 'axios'
import React, { useEffect, useState } from 'react'

const MultiDocs = () => {
    const [aa, setaa] = useState()
    const [tt, settt] = useState()
    const [dd, setdd] = useState()
    const [fetch, setFetch] = useState([])

 const handleSubmit=async(e)=>{
     e.preventDefault()
    const fd = new FormData()
    fd.append("userDob",dd)
    fd.append("addhar",aa)
    fd.append("userTc",tt)
   


    const {data} = await axios.post("http://localhost:5000/doc/add",fd)
    console.log(data);

}
    const getMultipleDocs=async()=>{
        const {data} = await axios.get("http://localhost:5000/doc/fetch")
        console.log(data);
        setFetch(data)

    }


 useEffect(() => {
    getMultipleDocs()

 }, [])
 


  return<>
  <pre>
  {/* {JSON.stringify(fetch)} */}
  </pre>
  <form onSubmit={handleSubmit}>
    {/* <input type="file" /> */}
  <input 
  
  type="file" 
   onChange={e=>setaa(e.target.files[0])}
//    placeholder='enter adhar'
//    className='form-control'
   /> 
  

  <input 
  type="file"
 
   onChange={e=>settt(e.target.files[0])}
   placeholder='enter tc'
//    className='form-control'
   />
  
  
  <input 
  type="file"
  
   onChange={e=>setdd(e.target.files[0])}
   placeholder='enter dob'
//    className='form-control'
    />
  <button type='submit' className='btn btn-primary'>add MutiDocs</button>
  </form>
  
<div>

   {
      fetch.map(item => <div>
        <img 
       src={`http://localhost:5000/${item.userDob}`}
       height="150"
       width="150" className='img-fluid'
       alt=""
       />
        <img 
       src={`http://localhost:5000/${item.addhar}`}
       height="150"
       width="150" className='img-fluid'
       alt=""
       />
        <img 
       src={`http://localhost:5000/${item.userTc}`}
       height="150"
       width="150" className='img-fluid'
       alt=""
       />

       </div>)
       }

        </div>


  </>
}

export default MultiDocs