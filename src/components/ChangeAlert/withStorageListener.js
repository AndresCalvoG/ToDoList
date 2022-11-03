import React, { useState } from "react";

function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChnage] = useState(false);

    return (
      <WrappedComponent show={storageChange} toggleShow={setStorageChnage} />
    );
  };
}

export { withStorageListener };
