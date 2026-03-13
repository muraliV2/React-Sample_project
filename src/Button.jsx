function Button()
{
const Handleclick = (e) => e.target.textContent = "ouch ?" ;
    
    return(
        <button onClick={(e) =>Handleclick(e)}> Click Me</button>
    )
}

export default Button