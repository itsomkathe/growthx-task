import React, { useEffect, useState } from 'react'
import UserCard from '@components/modules/UserCard'
import classes from "./HomePage.module.css";

export default function HomePage() {
    const [users, setUsers] = useState([]);
    console.log(users)
    useEffect(()=>{
        fetch('https://mock-backend-for-interns.rahulyadav45.repl.co/users', {
            method: 'GET', 
            headers: {
              'Content-Type': 'application/json'
            },
        }).then((res)=>{
            return res.json();
        }).then((res)=>{
            setUsers(res?.users);
        })
        .catch(err=>console.log(err))
    }, [])

  return (
    <div>
        <div className={classes.container}>
            <UserCard
            
            />
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
        </div>
    </div>
  )
}
