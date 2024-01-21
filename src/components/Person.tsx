import { useState } from "react";

interface Props {
    name: string;
    email: string
    age: number;
    isMarried: boolean;
    friends: string[];
    country: string
}

export enum Country {
    Brazil = "Brazil",
    Canada = "Canada",
    France = "France"
}

export function Person(props: Props) {
    const [name, setName] = useState<string>("")

    return <div>
        <h1>Name: {props.name}</h1>
        <h1>Email: {props.email}</h1>
        <h1>Age: {props.age}</h1>
        <h1>This person {props.isMarried ? "is": "is not"} Married</h1>


        {props.friends.map((friend: string, index: number)=>{
            return <h1 key={index}>friend {index+=1}: {friend}</h1>
        })}

            <h1>Country: {props.country}</h1>
    </div>
}


