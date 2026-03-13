import { useState } from "react"

function Increment()
{
const[Num,setNum] = useState(0)


const Decre = () =>
{
    setNum(Num - 1);
}

const Incre = () =>
{
    setNum(Num + 1);
}

const rest =() =>
{
    setNum(0)
}

return(

    <div className="bord">

        <p className="hg">Num : {Num}</p>
        <button onClick={Decre} className="bt">Decrement</button>
        <button onClick={rest} className="bt">Reset</button>
        <button onClick={Incre} className="bt">Increment</button>
    </div>
)

}

export default Increment