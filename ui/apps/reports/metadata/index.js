import factura from "./factura.json"
import reportecredito from "./reportecredito.json"
import recibo from "./recibo.json"
import inventario from "./inventario.json"

function Metadata(name) {
  if (name == "factura") return factura;
  else if (name == "reportecredito") return reportecredito;
  else if (name == "recibo") return recibo;
  else if (name == "inventario") return inventario;
}

export default Metadata
