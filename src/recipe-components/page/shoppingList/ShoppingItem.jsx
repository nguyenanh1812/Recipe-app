import React from "react";

export default function ShoppingItem({ item, handleClickItemOrder }) {
  return (
    <div
      key={item.id}
      className="m-0 p-2 px-3 border border-top-0"
      onClick={(e) => handleClickItemOrder(item)}
    >
      <p
        style={{
          cursor: "pointer",
          margin: "10px 0",
          fontWeight: 600,
          fontSize: 18,
        }}
      >
        {item.name} ({item.quantity})
      </p>
    </div>
  );
}
