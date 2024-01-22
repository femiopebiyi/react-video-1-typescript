import { useState } from "react"
import { login, logout } from "../store"
import { UseSelector, useDispatch, useSelector } from "react-redux"

export function Login(){
    const [newUsername, setNewUsername] = useState("")

    const dispatch = useDispatch()
    const username = useSelector((state: any)=> state.user.value.username)
    return <div>
        <h1>THIS IS THE Login PAGE {username}</h1>
        <input type="text" onChange={(e)=> {setNewUsername(e.target.value)}}/>
        <button onClick={()=>{dispatch(login({username: newUsername}))}}>Submit Login</button>
        <button onClick={()=> dispatch(logout())}>Logout</button>
    </div>
}