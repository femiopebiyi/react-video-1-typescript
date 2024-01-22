import { useDispatch, useSelector } from "react-redux"

export function Home(){

    const username = useSelector((state: any)=> state.user.value.username)
    return <div>
        <h1>THIS IS THE HOME PAGE {username}</h1>
    </div>
}