import clsx from "clsx";
import React from "react";

export default function Small({
  size,
  as,
  className,
  children,
  disabled,
  ...props
}: SmallProps) {
  const baseClassName = {
    sm: "text-sm",
    xs: "text-xs",
  };

  const Component: React.ElementType = (
    typeof as === "string" ? as : `small`
  ) as React.ElementType;

  return (
    <Component
      {...props}
      className={clsx(
        "font-montserrat",
        className,
        baseClassName[size],
        disabled && "opacity-50"
      )}
    >
      {children}
    </Component>
  );
}
