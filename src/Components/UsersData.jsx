import React, { useEffect, useState } from 'react'
import { togetUsersApi } from '../Services/AllUpi'
useState
function UsersData({data}) {
 console.log(data);
    
  return (
    <div>
        {data?
        (<div className='flex flex-col'>
            <h3>{data.name}</h3>
            <h3>{data.email}</h3>
            <h3>{data.address?.zipcode}</h3>
        </div>):"No data"
        }
    </div>
  )
}

export default UsersData