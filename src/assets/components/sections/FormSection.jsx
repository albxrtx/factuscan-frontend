import { useState } from "react";
import ExampleInvoice from "../ExampleInvoice";

function FormSection({ setInvoices }) {
  const demoInvoices = [
    { title: "Factura Teleco", file: "/public/factura_1.pdf" },
    { title: "Factura Mecánico", file: "/public/factura_2.pdf" },
  ];

  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [file, setFile] = useState(null);
  const handleFileName = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const fetchData = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Debes seleccionar un archivo");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    setLoading(true);
    setDisabled(true);
    try {
      const response = await fetch(
        "https://factuscan-backend.onrender.com/upload",
        // "http://127.0.0.1:8000/upload",
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await response.json();

      setInvoices((prev) => [...prev, data]);
      setLoading(false);
      setDisabled(false);
      console.log("Añadido: ", data);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setDisabled(false);
    }
  };
  return (
    <div className="flex gap-4 col-span-2">
      <form
        action=""
        id="upload-form"
        className=" flex flex-col justify-between w-[50%]"
      >
        <label
          htmlFor="file"
          className="flex flex-col items-center justify-center p-6 h-[70%] bg-blue-50 rounded-2xl border-dashed border-2 border-gray-400"
        >
          <svg className="text-blue-800">
            <use href="/icons.svg#upload-file" />
          </svg>
          <span className="font-semibold ">
            {file?.name || "Subir Factura"}
          </span>
          <p className="text-gray-600 text-sm text-center">
            Haz click para subir tu factura en formato PDF
          </p>
        </label>
        <input
          type="file"
          id="file"
          accept=".pdf,.png,.jpg,.jpeg"
          className="hidden"
          required
          onChange={handleFileName}
        />
        <button
          onClick={fetchData}
          disabled={disabled}
          type="submit"
          className="bg-blue-800 py-2 rounded-xl text-white font-semibold transition hover:bg-blue-950
          disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {loading ? "Procesando..." : "Subir factura"}
        </button>
      </form>
      <div className="w-[50%] flex gap-2 flex-col ">
        <h3 className="text-gray-400 font-semibold">FACTURAS DE EJEMPLO</h3>
        <div className="flex flex-col justify-between h-full ">
          {demoInvoices.map((invoice, index) => (
            <ExampleInvoice
              key={index}
              title={invoice.title}
              file={invoice.file}
              setInvoices={setInvoices}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FormSection;
