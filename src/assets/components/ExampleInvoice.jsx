import { useState } from "react";
function ExampleInvoice({ title, file, setInvoices }) {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const fetchData = async (e) => {
    e.preventDefault();

    try {
      const fileResponse = await fetch(file);

      const blob = await fileResponse.blob();

      const pdfFile = new File([blob], "invoice.pdf", {
        type: blob.type,
      });

      const formData = new FormData();
      formData.append("file", pdfFile);

      setLoading(true);
      setDisabled(true);

      const response = await fetch(
        "https://factuscan-backend.onrender.com/upload",
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error procesando factura");
      }

      setInvoices((prev) => [...prev, data]);
      console.log("Añadido: ", data);
      setLoading(false);
      setDisabled(false);
    } catch (error) {
      console.error(error);
      alert(error.message);
      setLoading(false);
      setDisabled(false);
    }
  };
  return (
    <div className="flex flex-col gap-2 bg-blue-50 w-full p-2 rounded-xl">
      <div className="flex items-center justify-between">
        <p className="font-semibold "> {title} </p>
        <a
          href={file}
          target="_blank"
          className="text-[0.9rem] hover:underline text-blue-800"
        >
          Ver factura
        </a>
      </div>
      <button
        className="bg-blue-200 text-blue-800 font-semibold p-1 rounded hover:bg-blue-300/75 disabled:text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
        type="submit"
        disabled={disabled}
        onClick={fetchData}
      >
        {loading ? "PROCESANDO" : "PROBAR"}
      </button>
    </div>
  );
}
export default ExampleInvoice;
