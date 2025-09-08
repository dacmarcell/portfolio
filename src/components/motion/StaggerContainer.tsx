"use client";

import { Children, isValidElement } from "react";

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function StaggerContainer({
  children,
  className,
}: StaggerContainerProps) {
  const items = Children.toArray(children);

  return (
    <div className={className}>
      {items.map((child, i) => (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <div key={(isValidElement(child) && (child.key as any)) ?? i}>
          {child}
        </div>
      ))}
    </div>
  );
}
