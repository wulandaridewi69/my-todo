import React from "react";

const Button = ({ id, label, className, loading, onClick }) => {
    return (
            <button
                className={className}
                onClick={onClick}
            >
                {label}
            </button>
    );
}

export default Button;

