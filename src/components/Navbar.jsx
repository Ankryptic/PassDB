import React from "react";
import GithubButton from "./GithubButton";
import DarkButton from "./DarkButton";

const Navbar = () => {
    return (
        <nav className="font-blackOps text-black flex items-center justify-around h-18">
            <div className="logo text-2xl font-bold">
                <span>Pass</span>
                <span>&lt;DB&gt;</span>
                </div>
            <div className="buttons">
                <GithubButton/>
                <DarkButton/>
            </div>
        </nav>
    )
}

export default Navbar;