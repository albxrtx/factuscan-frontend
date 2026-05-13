import RecentInvoiceCard from "../RecentInvoiceCard";
import { useState } from "react";
function RecentInvoiceSection({ invoices, setInvoices }) {
  const deleteInvoice = (indexToDelete) => {
    setInvoices((prev) => prev.filter((_, index) => index !== indexToDelete));
  };
  return (
    <div className="bg-blue-50 flex flex-col gap-6  p-4 rounded-2xl row-span-3 col-start-3 row-start-1">
      <header>
        <h3 className="font-bold text-xl">Facturas recientes</h3>
      </header>
      <ul className="flex flex-col gap-3 h-full overflow-y-auto">
        {invoices.map((invoice, index) => (
          <RecentInvoiceCard
            key={index}
            id={index}
            companyName={invoice.company_name}
            category={invoice.category}
            date={invoice.date}
            amount={invoice.total}
            onDelete={deleteInvoice}
          />
        ))}
      </ul>
    </div>
  );
}
export default RecentInvoiceSection;
