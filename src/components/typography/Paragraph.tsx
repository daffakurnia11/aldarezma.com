import clsx from "clsx";
import React from "react";

export default function Paragraph({
  size,
  as,
  className,
  children,
  disabled,
  ...props
}: ParagraphProps) {
  const baseClassName = {
    base: "text-base",
    lg: "text-lg",
  };

  const Component: React.ElementType = (
    typeof as === "string" ? as : `p`
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
