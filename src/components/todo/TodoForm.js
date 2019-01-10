import React from "react";
import PropTypes from "prop-types";

export const TodoForm = props => (
    <form onSubmit={props.handleSubmit}>
        <input
            type="text"
            onChange={props.handleInputChange}
            value={props.currentTodo}
        />
    </form>
);

TodoForm.propTypes = {
    handleInputChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    currentTodo: PropTypes.string
};
