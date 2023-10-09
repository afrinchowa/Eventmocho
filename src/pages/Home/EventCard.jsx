import { Link } from "react-router-dom";


const EventCard = ({event}) => {
    const{name,img,price,description,id} = event;
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure><img src={img} /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{price}</p>
<p>
    {
        
        description.length > 200
        ? <p>{description.slice(0,200)}<Link to={`/event/${id}`}
        className=" text-blue-700 font-bold">Show Details...</Link></p>
        :
        <p>{description}</p>
        
        
        }</p>
    
  </div>
</div>
    );
};

export default EventCard;