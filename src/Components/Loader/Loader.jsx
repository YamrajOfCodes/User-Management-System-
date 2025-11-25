import React from 'react';

const Loader = () => {
  const loaderStyle = {
    width: "48px",
    height: "48px",
    border: "5px solid white",
    borderBottomColor: "green",
    borderRadius: "50%",
    display: "inline-block",
    boxSizing: "border-box",
    animation: "rotation 1s linear infinite",
  };

  return (
    <>
      <span style={loaderStyle}></span>

      <style>{`
        @keyframes rotation {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};

export default Loader;