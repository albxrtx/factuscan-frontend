import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

import ListElement from "../ListElement";
import { useState } from "react";
function ChartSection({ invoices }) {
  const totalAmount =
    invoices.reduce((acc, invoice) => {
      return acc + Math.round(parseFloat(invoice.total) * 100);
    }, 0) / 100;

  const groupedCategories = invoices.reduce((acc, invoice) => {
    const category = invoice.category;
    const total = parseFloat(invoice.total);

    if (!acc[category]) {
      acc[category] = 0;
    }

    acc[category] += total;

    return acc;
  }, {});

  const categories = Object.keys(groupedCategories);

  const totals = Object.values(groupedCategories);

  const colors = [
    "#4F46E5",
    "#22C55E",
    "#F59E0B",
    "#EF4444",
    "#3B82F6",
    "#10B981",
    "#EAB308",
    "#F97316",
    "#8B5CF6",
    "#EC4899",
    "#14B8A6",
    "#6366F1",
    "#84CC16",
    "#F43F5E",
    "#0EA5E9",
  ];

  const data = {
    labels: categories,
    datasets: [
      {
        label: "Gastos (€)",
        data: totals,
        backgroundColor: colors,
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <div className="bg-blue-50  p-4 rounded-2xl col-span-2 row-span-2 col-start-1 row-start-2">
        <header>
          <h3 className="font-bold text-xl">Análisis de Gastos</h3>
          <p className="text-gray-500 text-sm">
            Desglose categorizado de los pasivos.
          </p>
        </header>
        <div className="flex items-center justify-between gap-7 w-full px-8">
          <Doughnut className="max-w-90 max-h-90" data={data} />
          <div className="flex flex-col gap-3 w-full max-h-90">
            <ul className="flex flex-col gap-2 overflow-y-auto">
              {invoices.map((invoice, index) => (
                <ListElement
                  key={index}
                  category={invoice.category}
                  total={invoice.total}
                />
              ))}
            </ul>
            <div className="bg-white p-2 rounded w-full flex justify-between font-semibold">
              <span>Total: </span>
              <span>{totalAmount}€</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ChartSection;
