import React from 'react'

const cartContainer: React.CSSProperties = {
    // marginTop: "50px",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
};

export default function Cart() {
  return (
    <div style={cartContainer}>
        <h1>This is the cart page!!</h1>
    </div>
  )
}
