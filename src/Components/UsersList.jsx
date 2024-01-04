import React, { useEffect,  } from 'react'
import { singleInfo,  togetUsersApi } from '../Services/AllUpi'

function UsersList({dataFromResponse,setDataFromResposne,setData}) {

    const getAllUsers = async()=>{
        const resposne = await togetUsersApi()
        setDataFromResposne(resposne.data)
    }
    // delete

    const deleteItem = async(id)=>{
   const res=  dataFromResponse.filter((item)=>item.id != id)
   console.log(res);
  setDataFromResposne(res)
    }
    const getSingleItem = async(id)=>{
        const resposne = await singleInfo(id) 
        setData(resposne.data)
    }
    useEffect(()=>{
        getAllUsers()
    },[])

  return (
    <div>
        <h1>User list</h1>
        <input type="text"  />
       { dataFromResponse?.length>0?dataFromResponse.map((item)=>{
        return(
<div className='border border-black flex flex-col py-3' key={item.id}>
           <h3>{item.name}</h3>
           <div className='flex justify-around'>
               <button className='rounded bg-red-500 py-2 px-2' onClick={()=>{getSingleItem(item.id)}}>info</button>
               <button className='rounded py-2 bg-green-400 px-2' onClick={()=>{deleteItem(item.id)}}>delete</button>
           </div>
        </div>
        )
       }):""
       }
    </div>
  )
}

export default UsersList