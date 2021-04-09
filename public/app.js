import { Invoice } from "./classes/invoices.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/payments.js";
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    //tuples
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value == "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc = addUID({ name: "mike", age: 33 });
console.log(doc);
//enum
var Quantity;
(function (Quantity) {
    Quantity[Quantity["Zero"] = 0] = "Zero";
    Quantity[Quantity["One"] = 1] = "One";
    Quantity[Quantity["Two"] = 2] = "Two";
    Quantity[Quantity["Three"] = 3] = "Three";
})(Quantity || (Quantity = {}));
const doc3 = {
    uid: 23,
    quantity: Quantity.Three,
    data: {
        nu: "data",
    },
};
console.log(doc3);
