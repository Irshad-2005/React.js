import { CDN_URL } from "../utils/constants";
const FoodItmes = (props) => {
  const { name, price, imageId, defaultPrice } = props.item;
  console.log(props.item);
  return (
    <div className="w-[200] h-[250] bg-gray-200 p-2 m-2 shadow-gray-300 shadow-lg">
      <img className="w-[180] h-[120]" alt="img" src={CDN_URL + imageId} />
      <h2 className="mx-2 px-1 font-bold">{name}</h2>
      <h3 className="mx-2 px-1 font-bold">
        Price - {price / 100 || defaultPrice / 100} ₹
      </h3>
    </div>
  );
};
export default FoodItmes;
