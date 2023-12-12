import * as React from "react";
const Illustration3 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={500}
    height={500}
    fill="none"
    {...props}
  >
    <path
      fill="#051550"
      d="M0 40C0 17.909 17.909 0 40 0h450c5.523 0 10 4.477 10 10v450c0 22.091-17.909 40-40 40H10c-5.523 0-10-4.477-10-10V40Z"
    />
    <circle cx={250} cy={250} r={172} fill="#ADCDE8" />
    <circle cx={250} cy={250} r={107} fill="#BCDFBF" />
    <circle cx={249.873} cy={249.873} r={61.399} fill="#FFC7D8" />
  </svg>
);
export default Illustration3;
