import React from "react";
import gitLogo from '../assets/github.svg'

const Navbar = () => {
    return (
        <nav className="bg-slate-700 text-white flex items-center justify-around h-10">
            <div className="logo text-2xl font-bold">PassDB</div>
            <div className="buttons">
                <button className="cursor-pointer flex items-enter gap-3 border border-white rounded-2xl p-1">
                    <img className="invert w-6" src={gitLogo} alt="GitHub-Image" />
                    <span>GitHub</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;