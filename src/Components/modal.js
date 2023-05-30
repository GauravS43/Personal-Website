import React from "react";

export function Modal({ display_state, hideModal }) {
    let modal_style = (display_state > 0) ? { display: "block" } : { display: "none" };

    let title = ["title1", "title2"];
    let text = ["text1", "text2"];

    return (
        <div className="modal_wrapper" style={modal_style} onClick={hideModal}>
            <div className="inner_modal">
                <h2>{title[display_state - 1]}</h2>
                <h3>{text[display_state - 1]}</h3>
            </div>
        </div>
    )
}