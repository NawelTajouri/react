import React from "react";
import "./Inputs.css";
import MontantTranches from "./MontantTranches";
function Table({ tableData, amount }) {
  console.log(amount);
  return (
    <div>
      <table id="table">
        <thead>
          <th>ID</th>
          <th>Client</th>
          <th>Montant par tranche</th>
          <th>Nombre des tranches</th>
        </thead>
        <tbody>
          {tableData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.Client}</td>

                <td>
                  <MontantTranches amount={amount} />
                  {/* <td>{data.Montant_Global}</td> */}
                </td>
                <td>{data.Nombre_des_tranches}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
