import * as React from "react";
import * as RichEditor from "./RichEditor";

export class MainApp extends React.Component<{}, {}>
{
    render()
    {
        return (
            <div className="container-fluid">
                <h2>Write</h2>
                <RichEditor.Component />
            </div>
        );
    }
}
