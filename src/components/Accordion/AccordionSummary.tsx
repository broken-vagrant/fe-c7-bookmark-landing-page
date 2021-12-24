import React, { ComponentPropsWithRef, useContext } from "react";
import AccordionContext from "./AccordionContext";

interface AccordionSummaryProps extends ComponentPropsWithRef<'button'> {
  classes?: {
    root?: string;
    button?: string;
    content?: string;
    icon?: string;
  }
}
const AccordionSummary = React.forwardRef<HTMLButtonElement, AccordionSummaryProps>(function AccordionSummary(props, ref) {
  const { children, className, onClick, classes, ...other } = props;

  const { disabled = false, disableGutters, expanded, toggle } = useContext(AccordionContext)!;

  const handleChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (toggle) {
      toggle(event);
    }
    if (onClick) {
      onClick(event)
    }
  }
  return (
    <h3>
      <button
        disabled={disabled}
        aria-expanded={expanded}
        className={`py-1 w-full ${classes?.button ? classes.button : ""}`}
        ref={ref}
        onClick={handleChange}
        {...other}
      >
        <div className={`flex justify-between items-center ${classes?.content ? classes.content : ''}`}>
          {children}
          <span className={classes?.icon}>icon</span>
        </div>
      </button>
    </h3>
  )
})

export default AccordionSummary;