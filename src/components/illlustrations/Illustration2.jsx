import * as React from "react";
const Illustration2 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={500}
    height={500}
    fill="none"
    {...props}
  >
    <path
      fill="#051550"
      d="M0 10C0 4.477 4.477 0 10 0h450c22.091 0 40 17.909 40 40v450c0 5.523-4.477 10-10 10H40c-22.091 0-40-17.909-40-40V10Z"
    />
    <circle cx={394} cy={100} r={80} fill="#FFC7D8" />
    <circle cx={107} cy={393} r={80} fill="#BCDFBF" />
    <circle cx={107} cy={100} r={80} fill="#C7C8E3" />
    <circle cx={394} cy={393} r={80} fill="#ADCDE8" />
    <path
      stroke="#D9D9D9"
      strokeWidth={10}
      d="M112 180v133M187 95h127M391 313.03V179.97M314 398H187"
    />
  </svg>
);
export default Illustration2;
