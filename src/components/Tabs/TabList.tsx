import React, { ComponentPropsWithRef, forwardRef } from "react"
import { getPanelId, getTabId, useTabContext } from "./TabContext";
import Tabs from "./Tabs";

interface TabListProps extends ComponentPropsWithRef<'div'> {
  onChange: (...args: any) => void;
}
const TabList = forwardRef<HTMLDivElement, TabListProps>((props, ref) => {

  const { children: childrenProp, ...other } = props;

  const context = useTabContext();
  if (context === null) {
    throw new TypeError('No TabContext provided');
  }

  const children = React.Children.map(childrenProp, (child) => {
    if (!React.isValidElement(child)) {
      return null;
    }

    return React.cloneElement(child, {
      'aria-controls': getPanelId(context, child.props.value),
      id: getTabId(context, child.props.value)
    })
  })

  return (
    <Tabs {...other} ref={ref} value={context.value}>
      {children}
    </Tabs>
  )
})

export default TabList;