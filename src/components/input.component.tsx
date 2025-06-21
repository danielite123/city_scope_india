import React, { forwardRef, useId } from "react";
import { LucideIcon } from "lucide-react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: LucideIcon;
  containerClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      type = "text",
      icon: Icon,
      className,
      containerClassName,
      ...props
    },
    ref
  ) => {
    const id = useId();

    return (
      <div className={`w-full ${containerClassName || ""}`}>
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
          >
            {label}
          </label>
        )}
        <div
          className={`
            relative flex items-center w-full
            bg-white dark:bg-gray-800
            border border-gray-300 dark:border-gray-600
            rounded-sm
            ${Icon ? "pl-9" : "px-3"}
          `}
        >
          {Icon && (
            <div className="absolute left-0 pl-3 flex items-center pointer-events-none">
              <Icon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
          )}

          <input
            id={id}
            type={type}
            ref={ref}
            className={`
              block w-full h-full py-2.5 bg-transparent
              border-none outline-none ring-0
              text-gray-900 dark:text-gray-100
              placeholder:text-gray-400 dark:placeholder:text-gray-500
              placeholder:text-[13px] 
              ${className || ""}
            `}
            {...props}
          />
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";
