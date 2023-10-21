import React, {useState} from "react";
import Card from "../../ExpenseCard/Card";
import Date from '../Date/Date'
import '../Item/item.css'

export default function Item(props) {
  const [name, setName] = useState(props.name);

  return (
    <li>
      <Card className="item">
        <Date date={props.date} />
        <div className="item-desc">
          <h2>{props.name}</h2>
          <div className="item-amount">$ {props.amount}</div>
        </div>
      </Card>
    </li>
  );
}
