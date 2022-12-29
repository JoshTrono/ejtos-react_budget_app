import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { dispatch, budget, expenses } = useContext(AppContext);

  // console.log(" is the budget. " + newBudget + " is the new budget.");

  const changeBudget = (val) => {
    const totalExpenses = expenses.reduce((total, item) => {
      return (total += item.cost);
    }, 0);

    if (val < totalExpenses) {
      alert("You cannot reduce the budget that is already allocated!");
    } else if (val >= 20000) {
      alert("The budget can not be above 20,000");
    } else {
      dispatch({
        type: "SET_BUDGET",
        payload: val,
      });
    }
  };

  // const twoCalls = (event) => {
  //   setbudget(event.target.value);
  //   submitEvent();
  // };
  return (
    <div className="alert alert-secondary">
      <span>
        Budget: £
        <input
          type="number"
          step="10"
          value={budget}
          onInput={(event) => changeBudget(event.target.value)}
        ></input>
      </span>
    </div>
  );
};

export default Budget;
