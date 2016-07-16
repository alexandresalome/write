import * as React from "react";
import {Link} from "react-router";

export class Component extends React.Component<{}, {}>
{
    render()
    {
        return (
            <div className="page-welcome">
                <h2>Welcome!</h2>
                <p><Link to="/edit">Open editor</Link></p>
           </div>
        );
    }
}
