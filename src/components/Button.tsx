import { ComponentPropsWithoutRef } from "react";

const colors: Record<ThemeColor, string> = {
  'soft-red': 'bg-soft-red hover:text-soft-red hover:border-soft-red',
  'soft-blue': 'bg-soft-blue hover:text-soft-blue hover:border-soft-blue',
  'gray': '!text-gray-600 bg-gray-100 hover:text-white hover:border-gray-600 hover:bg-gray-600'
}
type ThemeColor = 'soft-red' | 'soft-blue' | 'gray';

const Button = ({ themeColor, className, ...otherProps }: ComponentPropsWithoutRef<'button'> & { themeColor?: ThemeColor }) => {

  const colorClasses = themeColor ? colors[themeColor] : colors['soft-blue'];

  return (
    <button className={`md:px-8 md:py-2 px-4 py-2 rounded-md text-white shadow-md hover:bg-white border-transparent border-solid border-2 ${colorClasses} ${className}`} {...otherProps}>
    </button>
  )
}

export default Button;