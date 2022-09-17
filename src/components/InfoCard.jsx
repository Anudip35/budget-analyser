import React from "react";

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <p style={{ lineHeight: "1.5rem", margin: "8px", fontSize: "15px" }}>
      Try Saying: Add {isIncome ? "Income " : "Expense "}
      for {isIncome ? "₹200 " : "₹100 "}
      in Category {isIncome ? "Business " : "Food "}
      for {isIncome ? "Monday " : "Sunday "} ...
    </p>
  );
};

export default InfoCard;
