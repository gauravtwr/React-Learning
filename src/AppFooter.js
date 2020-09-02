import React from "react";
import "./css/AppFooter.css"

export default function AppFooter(props) {
    return (
        <div><p className="app-footer">&copy; {props.year} All Rights Reserved By <a
            href={props.website}>{props.company}</a></p></div>
    )
}