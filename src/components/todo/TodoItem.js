import React from "react";
import PropTypes from "prop-types";
import {partial} from "../../lib/util";

export const TodoItem = props => {
    const handleToggle = partial(props.handleToggle, props.id);
    return (
        <li>
            <input
                type="checkbox"
                onChange={handleToggle}
                checked={props.isComplete}
            />
            {props.name}
        </li>
    );
};

TodoItem.propTypes = {
    name: PropTypes.string,
    isComplete: PropTypes.bool,
    id: PropTypes.number
};
