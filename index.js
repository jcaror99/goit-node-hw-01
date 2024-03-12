// const argv = require("yargs").argv;
const contacts = require("./contacts");

contacts.listContacts();
contacts.getContactById("AeHIrLTr6JkxGE6SN-0Rw");
// contacts.removeContact("AeHIrLTr6JkxGE6SN-0Rw");
// contacts.addContact(
//   "Allen Raymond",
//   "nulla.ante@vestibul.co.uk",
//   "(992) 914-3792"
// );

// function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case "list":
//       // ...
//       break;

//     case "get":
//       // ... id
//       break;

//     case "add":
//       // ... name email phone
//       break;

//     case "remove":
//       // ... id
//       break;

//     default:
//       console.warn("\x1B[31m Unknown action type!");
//   }
// }

// invokeAction(argv);
