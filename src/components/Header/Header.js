import React from "react";

function Header({ children, loading }) {
  return (
    <header>
      {React.Children.toArray(children).map((child) => {
        return React.cloneElement(child, {
          loading: +loading,
          key: child.key,
        });
      })}
    </header>
  );
}

export { Header };
