const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.join("./db/", "contacts.json");

const WriteFileFunction = (contacts) => {
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), (err) => {
    if (err) {
      console.error("Error al escribir en el archivo contacts.json:", err);
      return;
    }
    console.log("Contacto eliminado exitosamente.");
  });
};

const listContacts = () => {
  fs.readFile(contactsPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo contacts.json:", err);
      return;
    }
    try {
      const contacts = JSON.parse(data);
      return console.log(JSON.stringify(contacts, null, 2));
    } catch (error) {
      console.error(
        "Error al parsear el contenido del archivo contacts.json:",
        error
      );
    }
  });
};

function getContactById(contactId) {
  fs.readFile(contactsPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo contacts.json:", err);
      return;
    }

    try {
      const contacts = JSON.parse(data);
      const contactFind = contacts.find((contact) => contact.id === contactId);
      return console.log(JSON.stringify(contactFind, null, 2));
    } catch (error) {
      console.error(
        "Error al parsear el contenido del archivo contacts.json:",
        error
      );
    }
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo contacts.json:", err);
      return;
    }

    try {
      const contacts = JSON.parse(data);
      const index = contacts.findIndex((contact) => contact.id === contactId);

      if (index !== -1) {
        contacts.splice(index, 1);
        WriteFileFunction(contacts);
      } else {
        console.log("No se encontró ningún contacto con el ID proporcionado.");
      }
    } catch (error) {
      console.error(
        "Error al parsear el contenido del archivo contacts.json:",
        error
      );
    }
  });
}

function addContact(name, email, phone) {
  const newObject = {
    id: uuidv4(),
    name: name,
    email: email,
    phone: phone,
  };

  fs.readFile(contactsPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo contacts.json:", err);
      return;
    }

    try {
      const contacts = JSON.parse(data);

      if (!contacts.find((contact) => contact.email === email)) {
        contacts.push(newObject);
        WriteFileFunction(contacts);
      } else {
        console.log("Este email ya se encuentra registrado");
      }
    } catch (error) {
      console.error(
        "Error al parsear el contenido del archivo contacts.json:",
        error
      );
    }
  });
}

module.exports = { listContacts, getContactById, removeContact, addContact };
