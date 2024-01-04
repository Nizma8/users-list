import React, { useState } from 'react'
import UsersList from './UsersList'
import UsersData from './UsersData'
function Main() {
    const [dataFromResponse,setDataFromResposne] = useState([])
 
  const [data,setData]= useState({})
  return (
    <div className='flex w-screen justify-around items-center'>
        <UsersList dataFromResponse={dataFromResponse} setDataFromResposne={setDataFromResposne} setData={setData} />
        <UsersData data={data}/>
    </div>
  )
}

export default Main


    