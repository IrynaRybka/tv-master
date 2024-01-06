import { forwardRef } from "react";

const Headline = forwardRef(function Headline({text}, ref) {
  return <h2 ref={ref}>{text}</h2>
})

export default Headline;
  