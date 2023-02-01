import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Axi = () => {
  const [images, setImages] = useState()
  const getData = async()=>{
    const {data} = await axios.get("http://localhost:5000/user/fetch")
    console.log(data); 

  }
  useEffect(()=>{
    getData()
  },[])
  const hanelSubmit = ()=>{
    const fd = new FormData()
    // console.log(images);
    for (const i of images) {
        fd.append("doc",i)
    }
    
  }
  return (
    <>
    
    <div>Axi</div>
    <input type="file"
    multiple
    onChange={e=>setImages(e.target.files)}
     />
     <button onClick={hanelSubmit}> add</button>
    </>
  )
}

export default Axi