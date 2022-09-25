import React, { useEffect, useState } from 'react'
import { database } from '../firebase';

function Firebase() {
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    let createUserInDB=async()=>{
        // let res=await database.users.add({name,age});
        let res=await database.users.doc('111111').set({name,age});////Create Command
        console.log(res);
    }
    useEffect(async()=>{
        let uid='dpNZuWkiAV93FUHZ2DMT';
        // let data=await database.users.orderBy('createdAt','desc').get();//onSnapShot//READ
        let data=await database.users.get();
        data.forEach((obj)=>console.log(obj.data())) 
    })

    let Update=async()=>{
let uid='dpNZuWkiAV93FUHZ2DMT';
await database.users.doc(uid).update({
    name,age
})
}  
    let Delete=async()=>{
let uid='111111'
await database.users.doc(uid).delete()
    }
  return (
    <>
    <div>
        <label htmlFor="name">Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <label htmlFor="age">Age</label>
        <input type="number"value={age} onChange={(e)=>setAge(e.target.value)}/>
        <button onClick={createUserInDB}>Create</button>
        <button onClick={Update}>Update</button>
        <button onClick={Delete}>Delete</button>
        
        </div>
        </>
    
  )
}

export default Firebase