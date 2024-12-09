import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-800 flex justify-between uppercase px-4 py- text-sm text-stone-200 sm:px-6 md:text-base">
      <p className="font-semibold space-x-4  items-center sm:space-x-6 text-stone-300">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
