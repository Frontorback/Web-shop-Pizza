import axios from "axios"
import { useEffect, useState } from "react"

const Meat = () =>{

    const [api, setApi] = useState([])    

    
    useEffect(()=>{
        Get()
    },[])
    
    const Get = async() =>{
       let res = await axios.get('http://localhost:3000/db.json')
        let payload = Object.keys(res.data.pizzas).map((key)=>{
            return {
                ...res.data.pizzas[key],
            }

        })
        setApi(payload)
            console.log(`res:${payload[0]}`)
    }
    console.log(api)

    return (
        <div>Meat
            
                {api.map((key) =>(
                <div>{key.name}</div>
            ))}
            
        </div>
    )
}
export default Meat