import React, { ComponentPropsWithRef, isValidElement, ReactNode, useCallback, useMemo, useState } from "react";
import { isFragment } from "react-is";
import AccordionContext from "./AccordionContext";

interface AccordionProps extends ComponentPropsWithRef<'div'> {
  defaultExpanded?: boolean;
  disabled?: boolean;
  disableGutters?: boolean;
  expanded?: boolean;
  onChange?: (...args: any) => void;
  classes?: {
    root?: string;
    region?: string;
  }
}
const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(function Accordion(props, ref) {
  const { children: childrenProp, className, defaultExpanded = false, disabled = false, disableGutters = false, expanded: expandedProp, onChange, classes, ...other } = props;

  const [expanded, setExpanded] = useState(defaultExpanded);
  const handleChange = useCallback((event) => {
    setExpanded(!expanded);

    if (onChange) onChange(event, !expanded);
  }, [expanded, onChange, setExpanded])

  const [summary, ...children] = React.Children.toArray(childrenProp);

  if (isFragment(summary)) {
    console.error('The Accordion doesn\'t accept a Fragment as a child.');
    return null;
  }
  if (!isValidElement<ComponentPropsWithRef<'div'>>(summary)) {
    console.error('Expected the first child of Accordion to be a valid element.')
    return null;
  }

  const contextValue = useMemo(() => ({ expanded, disabled, disableGutters, toggle: handleChange }), [expanded, handleChange, disableGutters, disabled]);

  return (
    <div
      ref={ref}
      {...other}
      className={`w-[40%] mx-auto ${classes?.root ? classes.root : ''}`}
    >
      <AccordionContext.Provider value={contextValue}>{summary}</AccordionContext.Provider>
      <div
        aria-labelledby={summary.props.id}
        id={summary.props['aria-controls']}
        role="region"
        className={classes?.region ? classes.region : ''}
        hidden={!expanded}
      >
        {children}
      </div>
    </div>
  )
})

export default Accordion;