import React from "react";
import SaveBtn from "./SaveBtn";

const Password = () => {
    return (
        <div className="h-[82vh]">
            <div className="section-1 font-blackOps w-full h-[20%] text-[#bcc4db] text-shadow-[2px_1px_5px_black] flex items-center justify-center">
                <span className="text-6xl">PassDB</span>
                <div className="flex flex-col items-start text-sm leading-2.5">
                    <span>Your</span>
                    <span>Own</span>
                    <span>Password</span>
                    <span>Manager</span>
                </div>
            </div>
            <div className="section-2 font-roboto w-full flex flex-col items-center gap-2.5">
                <div className="website-field flex items-center gap-2 w-1/2">
                    <label className="font-bold" htmlFor="website">Website</label>
                    <input
                    className="bg-white w-full" 
                    type="text" id="website" name="website"/>
                </div>
                <div className="user-pass flex gap-2.5 w-1/2">
                    <div className="user-field ">
                        <label className="font-bold" htmlFor="username">Username</label>
                        <input 
                        className="bg-white"
                        type="text" id="username" name="username"/>
                    </div>
                    <div className="pass-field">
                        <label className="font-bold" htmlFor="password">Password</label>
                        <input
                        className="bg-white"
                        type="password" id="password" name="password"/>
                    </div>
                    <div className="save-btn">
                        <button>
                            <SaveBtn/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Password;