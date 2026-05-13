function ListElement({ category, total }) {
  return (
    <li className="bg-white p-2 rounded w-full flex justify-between font-semibold">
      <span>{category} </span>
      <span className="">{total}€</span>
    </li>
  );
}

export default ListElement;
