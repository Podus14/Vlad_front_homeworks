import React from "react";

export const Filters = ({ setTab, tab }) => {
  // не трогать
  console.log("rerender Filters");
  //
  return (
    <div className="filters">
      Filters
      <button
        className={("btn", tab === "all" ? "active" : "")}
        onClick={() => setTab("all")}
      >
        All
      </button>
      <button
        className={("btn", tab === "active" ? "active" : "")}
        onClick={() => setTab("active")}
      >
        Active
      </button>
      <button
        className={("btn", tab === "completed" ? "active" : "")}
        onClick={() => setTab("completed")}
      >
        Completed
      </button>
    </div>
  );
};
