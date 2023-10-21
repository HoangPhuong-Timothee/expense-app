import React, { useState } from "react";
import Card from "../ExpenseCard/Card";
import List from "./List/List";
import ChartContent from "./Chart/ChartContent";
import Filter from "./Filter/Filter";

export default function Content({ items }) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const handleFilterYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const handleFilteredExpenses = items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <Filter
          selected={filteredYear}
          onChangeFilter={handleFilterYear}
        />
        <ChartContent expenses={handleFilteredExpenses} />
        <List items={handleFilteredExpenses} />
      </Card>
    </div>
  );
}
