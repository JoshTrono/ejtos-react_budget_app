import react, { useContext } from "react";

const Currency = () => {
  return (
    <div>
      <span>
        <select>
          <option>Dollar</option>
          <option>Pound</option>
          <option>Euro</option>
          <option>Ruppee</option>
        </select>
      </span>
    </div>
  );
};
export default Currency;
