function List(props)
{
 const category = props.category;
   const Fooditems = props.items

    //    const Lowcal = Foods.filter(Food => Food.calories>200)
    
   
    const ListOfFoods = Fooditems.map(Food =>
    {
      return(
        <li key={Food.id}>{Food.name} : <b>{Food.calories}</b></li>
      )  
    }

    
    )
    return(
        <>
    <h3 className="list-Category">{category}</h3>
    <ol className="list-Food">{ListOfFoods}</ol>
    </>)
}

export default List