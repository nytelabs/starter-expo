// Modules
import * as React from "react";

// Types
type IfProps = {
  condition: boolean;
  renderWhenTrue?: React.ReactNode;
  renderWhenFalse?: React.ReactNode;
  children?: React.ReactNode;
};

// Component
export const If: React.FC<IfProps> = ({
  condition,
  renderWhenTrue = null,
  renderWhenFalse = null,
  children = null,
}): React.ReactNode => {
  if (children && condition) {
    return children;
  }

  if (condition) {
    return renderWhenTrue;
  }

  return renderWhenFalse;
};
