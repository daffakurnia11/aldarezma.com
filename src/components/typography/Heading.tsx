import clsx from "clsx";
import React from "react";

export default function Heading({
  level,
  as,
  className,
  children,
  disabled,
  ...props
}: HeadingProps) {
  const classNameLevel = {
    1: "text-6xl",
    2: "text-5xl",
    3: "text-4xl",
    4: "text-3xl",
    5: "text-2xl",
    6: "text-xl",
  };

  const baseClassName = classNameLevel[level];

  const Component: React.ElementType = (
    typeof as === "string" ? as : `h${level}`
  ) as React.ElementType;

  return (
    <Component {...props} className={clsx('font-montserrat', className, baseClassName, disabled && "opacity-50")}>
      {children}
    </Component>
  );
}
