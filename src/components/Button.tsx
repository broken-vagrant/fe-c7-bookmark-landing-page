import { ComponentPropsWithoutRef } from "react";

const colors: Record<ThemeColor, string> = {
  'soft-red': 'bg-soft-red hover:text-soft-red hover:border-soft-red',
  'soft-blue': 'bg-soft-blue hover:text-soft-blue hover:border-soft-red'
}
type ThemeColor = 'soft-red' | 'soft-blue';

const Button = ({ themeColor, ...otherProps }: ComponentPropsWithoutRef<'button'> & { themeColor?: ThemeColor }) => {

  const colorClasses = themeColor ? colors[themeColor] : colors['soft-blue'];

  return (
    <button className={`${colorClasses} px-8 py-2 rounded-md text-[white] shadow-md hover:bg-white border-transparent border-solid border-2`} {...otherProps}>
    </button>
  )
}

export default Button;