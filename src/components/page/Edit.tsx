import * as React from "react";
import {Link} from "react-router";

import {Editor} from "../Editor";

export class Component extends React.Component<{}, {}>
{
    render() {
        return (
            <div class="page-edit">
                <Editor />
                <Link to="/">Go back to home</Link>
           </div>
        );
    }
}
