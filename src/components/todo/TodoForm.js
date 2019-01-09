import React from 'react';
import PropTypes from 'prop-types';

export const TodoForm = (props) => (
    <form>
        <input type="text"
               onChange={props.handleInputChange}
               value={props.currentTodo}
        />
    </form>
);


TodoForm.propTypes = {
    handleInputChange: PropTypes.func,
    currentTodo:  PropTypes.string
};
