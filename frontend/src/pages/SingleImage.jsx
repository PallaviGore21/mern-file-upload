import axios from 'axios';
import React, { useEffect } from 'react'

const SingleImage = () => {


    const x = async (e) => { 
        //  const {data} = await axios.get("http://localhost:5000/user/fetch")
         const {data} = await axios.get("http://localhost:5000/user/fetch")
        console.log("hiii");
    console.log(data);
}

useEffect(() => {
  x()
}, [])


  return (
    <div>SingleImage</div>
  )
}

export default SingleImage