declare module "prosemirror/dist/edit" {
    import {Keymap} from "browserkeymap";
    import {Doc, Schema} from "prosemirror/dist/model";

    interface ProseMirrorOptions {
        place: Element,
        schema: Schema,
        doc: Doc,
        plugins: Plugin[]
    }

    export class ProseMirror {
        constructor(options: ProseMirrorOptions);
        addKeymap(km: Keymap, priority: number) : void;
        removeKeymap(km: Keymap) : void;
    }

    export class Plugin {
        constructor(state: any, options: any);
        config(options: any) : Plugin;
        attach(pm: ProseMirror) : Plugin;
        detach(pm: ProseMirror) : void;
    }
}

declare module "prosemirror/dist/commands" {
    import {Keymap} from "browserkeymap";

    export const baseKeymap : Keymap;
}

declare module "prosemirror/dist/history" {
    import {Plugin} from "prosemirror/dist/edit";

    export const historyPlugin : Plugin;
}

declare module "prosemirror/dist/model" {
    export class Doc {}
    export class Text {}
    export class Block {}
    export class MarkType {}
    export class Schema {
        constructor(options: {
            nodes: any,
            marks: any
        });
        parseDOM(element: Element): Doc;

    }
}

declare module "prosemirror/dist/edit" {
}
