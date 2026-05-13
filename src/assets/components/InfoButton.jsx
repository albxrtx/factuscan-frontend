function InfoButton() {
  return (
    <>
      <button
        className="bg-blue-200 fill-blue-800 absolute bottom-4 right-4 flex items-center justify-center p-2 border-0 rounded-xl  hover:bg-blue-300/75"
        commandfor="info-dialog"
        command="show-modal"
      >
        <svg viewBox="0 0 24 24" width="32" height="32">
          <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
          <path d="M12.717,5.063A4,4,0,0,0,8,9a1,1,0,0,0,2,0,2,2,0,0,1,2.371-1.967,2.024,2.024,0,0,1,1.6,1.595,2,2,0,0,1-1,2.125A3.954,3.954,0,0,0,11,14.257V15a1,1,0,0,0,2,0v-.743a1.982,1.982,0,0,1,.93-1.752,4,4,0,0,0-1.213-7.442Z" />
          <rect x="11" y="17" width="2" height="2" rx="1" />
        </svg>
      </button>
      <dialog
        id="info-dialog"
        className="m-auto  w-[50%] p-4 rounded-2xl shadow-2xl"
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">¿Cómo funciona?</h2>
          <p>
            Sube una factura en PDF o imagen. La aplicación extrae
            automáticamente el texto, identifica la empresa, el importe total y
            clasifica el gasto en una categoría.
          </p>
          <h3 className="text-xl font-semibold">¿Qué hace el sistema?</h3>
          <ul>
            <li className="flex gap-1">
              Lee el contenido de la factura pero
              <span className="font-semibold">
                no se guarda en ninguna base de datos
              </span>
            </li>
            <li>Extrae los datos principales de la factura</li>
            <li>Clasifica el gasto automáticamente</li>
            <li>Muestra un resumen visual en el gráfico</li>
          </ul>
          <h3 className="text-xl font-semibold">Limitaciones</h3>
          <ul>
            <li>La primera vez puede tardar varios segundos</li>
            <li>
              Facturas escaneadas o fotografías pueden no procesarse bien.
            </li>
            <li>Algunas facturas pueden no tener total detectable</li>
            <li>La clasificación depende del modelo (puede fallar)</li>
          </ul>
          <h3 className="text-xl font-semibold">Recomendaciones</h3>
          <ul>
            <li>Usar facturas no escaneadas</li>
            <li>Evita subir la misma factura varias veces</li>
            <li>
              Si una factura falla, no la envíes otra vez: probablemente fallará
              de nuevo
            </li>
          </ul>

          <button
            commandfor="info-dialog"
            command="close"
            className="w-fit bg-blue-200 text-blue-800 font-semibold p-1 rounded hover:bg-blue-300/75"
          >
            CERRAR
          </button>
        </div>
      </dialog>
    </>
  );
}
export default InfoButton;
