import React, { useEffect, useRef, useState } from "react";
import SaveBtn from "./SaveBtn";
import { EyeClosedIcon, EyeIcon } from "@animateicons/react/lucide";


const Password = () => {
    const [hide, setHide] = useState(true)
    const passField = useRef()

    useEffect(() => {
        hide ? passField.current.type = "password" : passField.current.type = "text";
    }, [hide])

    const toggleHide = () => {
        setHide(!hide)
    }

    return (
        <div className="h-[82vh]">
            <div className="section-1 font-blackOps w-full h-[20%] text-[#bcc4db] text-shadow-[2px_1px_5px_black] flex items-center justify-center">
                <span className="text-6xl select-none">PassDB</span>
                <div className="flex flex-col items-start text-sm leading-2.5 select-none">
                    <span>Your</span>
                    <span>Own</span>
                    <span>Password</span>
                    <span>Manager</span>
                </div>
            </div>
            <div className="section-2 font-blackOps w-full flex flex-col items-center gap-2.5 mb-10">
                <div className="website-field flex items-center gap-2 w-1/2">
                    <label className="text-shadow-[2px_1px_5px_black] text-[#bcc4db]" htmlFor="website">Website</label>
                    <input
                        className="bg-white w-full rounded-lg px-2 py-px focus-within:outline-3 focus-within:outline-black"
                        placeholder="Enter Website Name"
                        type="text" id="website" name="website" />
                </div>
                <div className="user-pass flex gap-2.5 w-1/2">
                    <div className="user-field flex items-center gap-2 w-full">
                        <label className="text-shadow-[2px_1px_5px_black] text-[#bcc4db]" htmlFor="username">Username</label>
                        <input
                            className="bg-white w-full rounded-lg px-2 py-px focus-within:outline-3 focus-within:outline-black"
                            placeholder="Enter Username"
                            type="text" id="username" name="username" />
                    </div>
                    <div className="pass-field flex items-center gap-2 w-full">
                        <label className="text-shadow-[2px_1px_5px_black] text-[#bcc4db]" htmlFor="password">Password</label>
                        <div className="flex items-center bg-white rounded-lg overflow-hidden w-full h-fit px-2 py-px focus-within:outline-3 focus-within:outline-black">
                            <input
                                className="bg-white w-full p-0 rounded-lg focus:outline-none"
                                placeholder="Enter Password"
                                ref={passField}
                                type="password" id="password" name="password" />
                            <span className="cursor-pointer" onClick={toggleHide}>
                                {hide ? <EyeIcon
                                    size={18}
                                    duration={1}
                                    color="black" />
                                    : <EyeClosedIcon
                                        size={18}
                                        duration={1}
                                        color="black" />
                                }
                            </span>

                        </div>
                    </div>
                    <div className="save-btn">
                        <div>
                            <SaveBtn />
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-3 w-full flex flex-col items-center justify-center">

                    <div className="w-1/2 bg-[#7880b5] my-2.5 border border-[#c0a9b0] text-center text-[#bcc4db] text-shadow-[2px_1px_5px_black]">
                        <div className="font-blackOps">Your Passwords</div>
                    </div>
                <div className="w-1/2 bg-[#7880b5] border border-[#c0a9b0]">
                    <table class="table-fixed">
                        <thead>
                            <tr>
                                <th>Website</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                <td>Malcolm Lockyer</td>
                                <td>1961</td>
                            </tr>
                            <tr>
                                <td>Witchy Woman</td>
                                <td>The Eagles</td>
                                <td>1972</td>
                            </tr>
                            <tr>
                                <td>Shining Star</td>
                                <td>Earth, Wind, and Fire</td>
                                <td>1975</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Password;