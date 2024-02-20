import { currencyFormatter } from "../util/formatting.jsx";

export default function CartItem({
  name,
  quantity,
  price,
  handleMinus,
  handleAdd,
}) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} x {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={handleMinus}> - </button>
        <span>{quantity}</span>
        <button onClick={handleAdd}>+</button>
      </p>
    </li>
  );
}
