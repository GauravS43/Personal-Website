import React from "react";

export function Modal({ display, hideModal }) {
    let modal_style = {
        opacity: 0
    };

    if (display) {
        modal_style = { opacity: 1 };
    }
    return (
        <div className="modal_wrapper" style={modal_style} onClick={hideModal}>
            <div className="inner_modal">
                <h2>Title</h2>
                <h3>text</h3>
            </div>
        </div>
    )
}