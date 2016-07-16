import {ProseMirror, Plugin} from "prosemirror/dist/edit";
import {baseKeymap} from "prosemirror/dist/commands";
import {historyPlugin} from "prosemirror/dist/history";

class Options
{
    enabled: boolean;
}

class Setup
{
    constructor(pm : ProseMirror, options : Options)
    {
        pm.addKeymap(baseKeymap, -100)
        historyPlugin.attach(pm);
    }

    detach(pm : ProseMirror)
    {
        alert("Detaching");
        pm.removeKeymap(baseKeymap)
        historyPlugin.detach(pm);
    }
}

export const setup = new Plugin(Setup, Options);
