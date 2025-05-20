// Footer component
// Used to render a footer with active todo count, filter buttons(all, active, completed), clear completed button
// Props:
// activeCount - number of active todo
// setFilter - function to update current filter
// currentFilter - currently selected filter key
// clearCompleted - function to remove all completed todos
// showClearCompleted - boolean to control visibility of the clear button

import React from "react";
import filters from "../data/filters";
import FilterButton from "./FilterButton";

function Footer({activeCount, setFilter, currentFilter, clearCompleted, showClearCompleted}) {
    return (
        <div className="footer">
            <span>{activeCount} items left</span>
            <div>
                {filters.map(({key, label}) => (
                    <FilterButton key={key} label={label} isActive={currentFilter === key} onClick={() => setFilter(key)} />
                ))}
                <button onClick={clearCompleted} className={`clear-complete ${showClearCompleted ? "show" : "hide"}`}>Clear Completed</button>
            </div>
        </div>
    )
}

export default Footer;