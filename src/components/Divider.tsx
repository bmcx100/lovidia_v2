import React from "react";

const Divider = ({ isDark = true }: { isDark?: boolean }) => {
  return (
    <>
      {isDark ? (
        <div className="mx-auto mt-2 w-2/3 border-b border-brandDark/20"></div>
      ) : (
        <div className="mx-auto mt-2 w-2/3 border-b border-brandLight/20"></div>
      )}
    </>
  );
};

export default Divider;
