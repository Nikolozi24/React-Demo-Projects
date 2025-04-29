import React from "react";
import { formatter, calculateInvestmentResults } from "../../util/investment";
function Results({ inputs }) {
  const Investments = calculateInvestmentResults(inputs);
  const { valueEndOfYear, interest, annualInvestment } = Investments[0];
  const InitialInverstemt = valueEndOfYear - interest - annualInvestment;
  console.log(Investments);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th> Investment Value</th>
          <th>Interest (Year)</th>
          <th> Total Interest </th>
          <th> Invested Capital </th>
        </tr>
      </thead>
      <tbody>
        {Investments.map((invest) => {
          const { year, valueEndOfYear, interest, annualInvestment } = invest;
          const totalInterest =
            valueEndOfYear - annualInvestment * year - InitialInverstemt;
          const totalAmountInvesterd = valueEndOfYear - totalInterest;
          return (
            <tr id={year}>
              <th>{year}</th>
              <th>{formatter.format(valueEndOfYear)}</th>
              <th>{formatter.format(interest)}</th>
              <th>{formatter.format(totalInterest)}</th>
              <th>{formatter.format(totalAmountInvesterd)}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Results;
