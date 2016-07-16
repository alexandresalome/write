// reference: https://github.com/ProseMirror/prosemirror/blob/master/src/schema-basic/index.js

import {Schema, Block, Text, MarkType} from "prosemirror/dist/model";

export {Text};

class Doc extends Block
{
}

class Paragraph extends Block
{
    get matchDOMTag() : any
    {
        return {"p": null};
    }

    toDOM()
    {
        return ["p", 0];
    }
}

class StrongMark extends MarkType
{
    get matchDOMTag() : any
    {
        return {
            //"b": null,
            "strong": null
        };
    }

    toDOM()
    {
        return ["strong"];
    }
}

export const schema = new Schema({
  nodes: {
    doc: {type: Doc, content: "block+"},
    paragraph: {type: Paragraph, content: "inline<_>*", group: "block"},
    text: {type: Text, group: "inline"},
  },

  marks: {
    strong: StrongMark,
  }
})
