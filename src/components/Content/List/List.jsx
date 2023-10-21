import React from "react";
import '../List/list.css'
import Item from '../Item/Item'

export default function List(props) {
  if (props.items.length === 0) {
    return <h2 className="not-found">Found no expenses.</h2>;
  }
  return (
    <ul className="list">
      {props.items.map((expense) => (
        <Item
          key={expense.id}
          name={expense.name}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
}
