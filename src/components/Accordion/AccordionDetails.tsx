import React from "react";
import { ComponentPropsWithRef } from "react";

interface AccordionDetailsProps extends ComponentPropsWithRef<'div'> {
  classes?: {
    root: string
  }
}
const AccordionDetails = React.forwardRef<HTMLDivElement, AccordionDetailsProps>(function AccordionDetails(props, ref) {
  const { className, classes, ...other } = props;
  return (
    <div
      ref={ref}
      className={classes?.root ? classes.root : ''}
      {...other}
    >
    </div>
  )
})

export default AccordionDetails;