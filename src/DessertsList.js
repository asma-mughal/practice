function DessertsList(props) {
    // Implement the component here.
   
    const listItems = props?.data?.map((dessert)=>{
       const ItemText = `${dessert.name} - ${dessert.calories} cal`
       return <li>{ItemText}</li>
    }).filter((dessert)=>{
        return dessert.calories <=500
     }).sort(
        (p1, p2) => (p1.calories > p2.calories) ? 1 : (p1.calories < p2.calories) ? -1 : 0);
        
     return (
        <div>
        <ul >
         {listItems?.map((i)=>(
         <li>{i.name} - {i.calories}</li>
         ))}
    
        </ul>
        </div>
     )
  }
  
  export default DessertsList;
  