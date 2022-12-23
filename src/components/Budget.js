import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [newBudget, setbudget] = useState(budget);

  // took the dispatch to submit a appreducer that take the set_budget input
  // with the new budget which is the newbudget variable origionally
  // the budget when initiallized but changed whenever the screen changes.

  const submitEvent = () => {
    dispatch({
      type: "SET_BUDGET",
      payload: newBudget,
    });
  };

  const twoCalls = (event) => {
    setbudget(event.target.value);
    submitEvent();
  };
  return (
    <div className="alert alert-secondary">
      <span>
        Budget: £
        <input
          type="number"
          value={newBudget}
          onChange={(e) => twoCalls(e)}
        ></input>
      </span>
    </div>
  );
};

export default Budget;
