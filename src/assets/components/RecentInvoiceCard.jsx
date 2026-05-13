import { useState } from "react";

function RecentInvoiceCard({
  id,
  companyName,
  category,
  amount,
  date,
  onDelete,
}) {
  return (
    <li className="bg-white p-4 rounded-xl grid grid-cols-[80%_1fr] items-center justify-center gap-6">
      <div className="flex items-center  justify-between">
        <div className=" flex items-center  gap-2">
          <svg className="w-8 h-8 text-blue-800">
            <use href="/icons.svg#file-icon" />
          </svg>
          <div className="flex flex-col justify-center">
            <span className="font-semibold">{companyName}</span>
            <span className="text-gray-400 text-sm">{date}</span>
            <span className="text-gray-400 text-sm">{category}</span>
          </div>
        </div>
        <span className="font-semibold">{amount}€</span>
      </div>
      <button
        className="bg-blue-200 p-2 w-fit flex items-center justify-center rounded  hover:bg-blue-300/75"
        onClick={() => onDelete(id)}
      >
        <svg className="w-6 h-6 text-blue-800">
          <use href="/icons.svg#delete-icon" />
        </svg>
      </button>
    </li>
  );
}
export default RecentInvoiceCard;
