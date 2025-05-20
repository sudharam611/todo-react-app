// Filter Button Component
// Reusable button component which is used to filter items
// Props:
// label - text to be shown in the UI
// isActive - boolean, determines whether the button isActive or not to show a visual in UI
// onClick - callback function called when button is clicked

import React from "react"
function FilterButton({label, isActive, onClick}) {
    return (
        <button onClick={onClick} className={`todo-filter ${isActive ? "active-filter" : ""}`}>
            {label}
        </button>
    )
}

export default FilterButton;