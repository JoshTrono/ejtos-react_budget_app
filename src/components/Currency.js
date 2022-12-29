import react, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch } = useContext(AppContext);
  const [currency, setCurrency] = useState("");

  const updateCurrency = (event) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: event.target.value,
    });
    setCurrency(event.target.value);
  };

  return (
    <div className="alert alert-secondary">
      <label className="btn btn-success" select="test">
        Currency (
        {
          <select
            className="btn btn-success"
            id="currency"
            onChange={(event) => updateCurrency(event)}
            style={{ padding: 0, border: 0 }}
          >
            <option value="£">£ Pound</option>
            <option value="$">$ Dollar</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Rupee</option>
          </select>
        }
        )
      </label>
    </div>
  );
};
export default Currency;
