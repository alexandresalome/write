import * as React from "react";

import {Editor as EditorService} from "../editor/Editor";

export class Editor extends React.Component<{}, {}>
{
    editor: EditorService;
    _div: Element;

    componentDidMount() {
        this.editor = new EditorService(this._div);
        this.editor.mount();
    }

    componentWillUnmount() {
        this.editor.unmount();
        this.editor = null;
    }

    render() {
        return (
            <div ref={(c) => this._div = c}><p>Hello <strong>world</strong>!</p><p>How are you?</p></div>
        );
    }
}
