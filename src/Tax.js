import { useState } from "react";
import React from "react";

function Tax() {
    const [pvm, setSelectedValue] = useState(21);
    const [sum, setSum] = useState(21);
    const [nopvm, setNoPvm] = useState(1000);
    
    function addValue(event) {
        console.log(event.target.value);
        setSelectedValue(event.target.value);
    }

    // const pvmMulti = perc => perc / 100 + 1;

    // const exVatToIncVat = (perc, bePVM) =>
    //         bePVM * pvmMulti(perc);

    // const incVatToExtVat = (perc, suPVM) =>
    //         suPVM / pvmMulti(perc);

    // const handleIncVatChange = event => {
    //     const inc = parseInt(event.target.value, 10)
    //     this.setState({
    //         suPVM: inc,
    //         bePVM: incVatToExtVat(event.target.value, inc)
    //     })
    //     };
    
    // const handleExVatChange = event => {
    //     const ex = parseInt(event.target.value, 10)
    //     this.setState({
    //         bePVM: ex,
    //         suPVM: exVatToIncVat(event.target.value, ex)
    //     })
    //     };

    return (
        <div className="box">
            <div className="content-box">
                <form className="form">
                    <div className="ops">
                        <select 
                        value={pvm} 
                        onChange={addValue}
                        > 
                            <option value="21">21%</option>
                            <option value="9">9%</option>
                            <option value="5">5%</option>
                        </select>
                    </div>
                    <div className="noPVM">
                        <input 
                        value = {nopvm}
                        onChange = {event => setNoPvm(+event.target.value)}
                        // onChange={handleExVatChange}
                        // value = {this.current.suPVM}
                        ></input>
                    </div>
                    <div className="withPVM">
                        <input 
                        value={sum}
                        onChange={ event => setSum(+event.target.value)}
                        disabled
                        // value={this.current.bePVM}
                        // onChange={handleIncVatChange}
                        ></input>
                    </div>
                    <div className="rez">
                        <input 
                        // value={this.current.suPVM - this.current.bePVM}
                        ></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Tax;