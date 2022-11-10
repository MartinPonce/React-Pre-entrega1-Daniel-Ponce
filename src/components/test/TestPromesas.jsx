import React, { useEffect } from "react";

export default function TestPromesas() {
    useEffect(() => {
        let arrayDeProductos = [];
    })
}
    let pago = new Promise((res, rej) => {
      setTimeout(() => {
        res([
          { id: 100, name: "pelota" },
          { id: 100, name: "arco de futbol" },
        ]);
      }, 2000);
    });

    pago
      .then((res) => {
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        console.log("aca si que termino todo!");
      });
     [third];

return (
    <div>
      <div>{/* <ItemList res={res}/> */}</div>
    </div>
);
