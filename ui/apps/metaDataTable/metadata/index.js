import clientes from "./clientes.json"
import productos from "./productos.json"
import codes from "./codes.json"
import contactos from "./contactos.json"
import contents from "./contents.json"
import pedidos from "./pedidos.json"
import proveedores from "./proveedores.json"
import users from "./users.json"
import cuentasporpagar from "./cuentasporpagar.json";
import logs from "./logs.json";
import catalog_products from "./catalog_products.json";

function Metadata(name) {
  if (name == "clientes") return clientes;
  else if (name == "productos") return productos;
  else if (name == "contactos") return contactos;
  else if (name == "codes") return codes;
  else if (name == "contents") return contents;
  else if (name == "catalog_products") return catalog_products;
  else if (name == "pedidos") return pedidos;
  else if (name == "proveedores") return proveedores;
  else if (name == "users") return users;
  else if (name == "cuentasporpagar") return cuentasporpagar;
  else if (name == "logs") return logs;
  else throw new Error(name + " not found in Metadata");
}

export default Metadata
