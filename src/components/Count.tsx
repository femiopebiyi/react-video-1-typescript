import { useState } from "react";




export function Count(){
    const isOld: boolean = false
    let [count, setCount] = useState<number>(0)

    function increase (){
        setCount(count+=1)
    }

    return <div>
        <button onClick={increase}>Increase</button>
        <button>Decrease</button>
        <button>Set to 0</button>

        <h1>{count}</h1>
        <h1>{isOld ? "nigga is old" : "aint old"}</h1>
    </div>
}