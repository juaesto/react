import React from "react";
import { MediaBox } from "react-materialize";

export default function MaterializeMediaBox() {
    return (
        <MediaBox
            options={{
                inDuration: 275,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200
            }}
        >
            <img
                alt=""
                src="https://materializecss.com/images/sample-1.jpg"
                width="650"
            />
        </MediaBox>
    );
}