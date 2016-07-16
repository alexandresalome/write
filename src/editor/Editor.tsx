import {ProseMirror} from "prosemirror/dist/edit";
import {schema} from "./Schema";
import {setup} from "./Setup";

export class Editor
{
    editor: ProseMirror;
    _div: Element;

    constructor(div: Element)
    {
        this._div = div;
    }

    mount() {
        var doc = schema.parseDOM(this._div);
        this._div.innerHTML = '';

        this.editor = new ProseMirror({
            place: this._div,
            schema: schema,
            doc: doc,
            plugins: [setup.config({})]
        });
    }

    unmount() {
        this._div.parentNode.removeChild(this._div);
    }
}
