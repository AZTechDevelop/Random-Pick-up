import React,{useState} from 'react'
import './App.css'
function Generate(){
    const [numbers, setNumbers] = useState([])
    const [N, setN] = useState('')

    const snuffle = () => {
        let array = []
        for(let i=1 ; i<=N ; i++){
            array.push(i)
        }

        for(let i=array.length-1; i>0 ; i--){
            const j = Math.floor(Math.random() * (i))
            let x = array[i]
            array[i]=array[j]
            array[j]=x
        }
        
        setNumbers(array)
    }
    return(
        <div className="generate-container">
            <input
            type="number"
            placeholder="Enter a number..."
            value={N}
            onChange={(el) =>  setN(parseInt(el.target.value) || '')}
            />
            <button onClick={snuffle}
            className="btn"
            >Snuffle</button>
            <div className="number-box">
                {numbers.length > 0 ? numbers.map((el) => 
                <span className="number " 
                key={el}>
                {el} </span>)  
                : 'Please enter a number' 
            }
            </div>
        </div>
    )
}

export default Generate;