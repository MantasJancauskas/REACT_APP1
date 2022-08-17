import { useState } from "react";
import React from "react";

function Tax() {
  const [pvm, setSelectedValue] = useState(21);
  const [sum, setSum] = useState(0);
  let noPVM = sum.toFixed(2);
  let pvmSum = ((sum / 100) * pvm).toFixed(2);
  let pvmsumStr = ((sum / 100) * pvm + sum).toFixed(2);

  return (
    <div className="box">
      <div className="content-box">
        <form className="form">
          <div className="ops">
            <select
              value={pvm}
              onChange={(e) => setSelectedValue(+e.target.value)}
            >
              <option value="21">21%</option>
              <option value="9">9%</option>
              <option value="5">5%</option>
            </select>
          </div>
          <div className="noPVM">
            <input
              value={noPVM}
              onChange={(e) => setSum(+e.target.value)}
            ></input>
          </div>
          <div className="withPVM">
            <input disabled value={pvmSum}></input>
          </div>
          <div className="rez">
            <input
              onChange={(e) => setSum((+e.target.value / (100 + pvm)) * 100)}
              value={pvmsumStr}
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Tax;
