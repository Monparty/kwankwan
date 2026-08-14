import React, { forwardRef } from "react";

const UseInputPass = forwardRef(({ onChange, onKeyDown }, ref) => {
    return (
        <input
            type="password"
            className="w-11 h-12 text-center text-pink-400 rounded-lg border-2 text-lg border-pink-400 shadow-md focus:outline-pink-400 focus:-translate-y-1 transition-all"
            ref={ref}
            pattern="[0-9]*"
            maxLength={1}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    );
});

export default UseInputPass;
