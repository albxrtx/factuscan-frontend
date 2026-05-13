import { useState } from "react";
import "./App.css";
import FormSection from "./assets/components/sections/FormSection";
import ChartSection from "./assets/components/sections/ChartSection";
import RecentInvoiceSection from "./assets/components/sections/RecentInvoicesSection";
import InfoButton from "./assets/components/InfoButton";

function App() {
  const [invoices, setInvoices] = useState([]);
  // TODO: Mover todos los svgs a public/icons.svg
  return (
    <>
      <main className="relative py-8 px-32 h-dvh grid grid-cols-3 grid-rows-3 gap-4 ">
        <FormSection setInvoices={setInvoices} />
        <ChartSection invoices={invoices} />
        <RecentInvoiceSection invoices={invoices} setInvoices={setInvoices} />
        <InfoButton></InfoButton>
      </main>
    </>
  );
}

export default App;
