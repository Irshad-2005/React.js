import { useDispatch, useSelector } from "react-redux";
import {CDN_URL} from "../utils/constants"
import FoodItmes from "./FoodItems";
import { clearItem } from "../utils/cardSlice.js";
import PaymentCard from "./PaymentCard.js";
const Card = () => {
  const cardItem = useSelector((store) => store.card.item);
  const dispatch = useDispatch();

   const ClearItemHandler = ()=>
   {
      dispatch(clearItem());
   }
  return (
    <>
   
     <button className="p-2 my-2 mx-5 bg-red-900 text-white rounded-lg" onClick={()=>ClearItemHandler()}>ClearItem</button>
    <div className="flex m-2 p-2 flex-wrap">

      {
        cardItem.map(
          (item)=> <FoodItmes key = {item.id} item={item}/>
        )
      }
      
    </div>
    <PaymentCard/>
    </>
  );
};

export default Card;
