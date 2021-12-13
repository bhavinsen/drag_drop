import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { DataContext } from "./context";
import '../drag_drop/from.css';

export default function Form() {
    const [data, setData] = useContext(DataContext);
    const [formValue, setFormValue] = useState("");

    const onSubmit = (e) => {
        const id = nanoid();
        setData([...data, { id, name: formValue }]);
    };

    return (

        <div className="Main-app">
            <form>
                <label>
                    Name:
                </label>
                <input type="text" autoComplete="off" onChange={(e) => setFormValue(e.target.value)} />
                {formValue ?
                    <button onClick={(e) => { e.preventDefault(); onSubmit(e) }}  >Add</button> :
                    <button disabled style={{ background: "rgb(143 143 143)" }} >Add</button>}
            </form>
        </div>
    );
}