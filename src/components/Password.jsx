import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import SaveBtn from "./SaveBtn";
import { EyeClosedIcon, EyeIcon, Trash2Icon, UserPenIcon, CopyIcon } from "@animateicons/react/lucide";


const Password = () => {
    const handlePasswords = () => {
        let tempArr = localStorage.getItem('passwords');
        return tempArr !== null ? JSON.parse(tempArr) : [];
    }

    const [form, setForm] = useState({
        website: '',
        username: '',
        password: '',
        uid: ''
    });
    const [passArray, setPassArray] = useState(handlePasswords);
    const [hide, setHide] = useState(true)
    const passField = useRef()



    const handleSave = () => {
        setPassArray([...passArray, form]);
        localStorage.setItem('passwords', JSON.stringify([...passArray, form]))
        setForm({
            website: '',
            username: '',
            password: '',
            uid: uuidv4()
        })
    }

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
                        type="text" id="website" name="website"
                        value={form.website}
                        onChange={(e) => { setForm({ ...form, website: e.target.value }) }}
                    />
                </div>
                <div className="user-pass flex gap-2.5 w-1/2">
                    <div className="user-field flex items-center gap-2 w-full">
                        <label className="text-shadow-[2px_1px_5px_black] text-[#bcc4db]" htmlFor="username">Username</label>
                        <input
                            className="bg-white w-full rounded-lg px-2 py-px focus-within:outline-3 focus-within:outline-black"
                            placeholder="Enter Username"
                            type="text" id="username" name="username"
                            value={form.username}
                            onChange={(e) => { setForm({ ...form, username: e.target.value }) }}
                        />
                    </div>
                    <div className="pass-field flex items-center gap-2 w-full">
                        <label className="text-shadow-[2px_1px_5px_black] text-[#bcc4db]" htmlFor="password">Password</label>
                        <div className="flex items-center bg-white rounded-lg overflow-hidden w-full h-fit px-2 py-px focus-within:outline-3 focus-within:outline-black">
                            <input
                                className="bg-white w-full p-0 rounded-lg focus:outline-none"
                                placeholder="Enter Password"
                                ref={passField}
                                type="password" id="password" name="password"
                                value={form.password}
                                onChange={(e) => { setForm({ ...form, password: e.target.value }) }}
                            />
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
                        {/* <div>
                            <SaveBtn />
                        </div> */}
                        <div className="git-btn cursor-pointer border-2 border-black bg-[#c0a9b0] pb-1 select-none transition-all duration-100 ease-in-out active:p-0 active:mb-1 active:translate-y-1">
                            <button className="cursor-pointer bg-[#7880b5] text-[#bcc4db] text-shadow-[2px_1px_5px_black] flex items-enter gap-3 border border-white font-bold  p-1 py-0"
                                onClick={handleSave}
                            >
                                <span>Save</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-3 w-full flex flex-col items-center justify-center">

                <div className="w-1/2 bg-[#7880b5] my-2.5 border border-[#c0a9b0] text-center text-[#bcc4db] text-shadow-[2px_1px_5px_black]">
                    <div className="font-blackOps select-none">Your Passwords</div>
                </div>
                <div className="w-1/2 bg-[#7880b5] border border-[#c0a9b0]">
                    <table className="table-fixed border-separate w-full">
                        <thead>
                            <tr>
                                <th className="w-[30%] border-b-2 border-black">Website</th>
                                <th className="w-[30%] border-b-2 border-black">Username</th>
                                <th className="w-[30%] border-b-2 border-black">Password</th>
                                <th className="w-[10%] border-b-2 border-black">Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* Tables Starting from Here... */}
                            {passArray.length > 0 ? passArray.map((data) => {
                                return <tr key={data.uid} className="border-2 border-black">
                                    <td className="w-[30%] text-center text-white font-semibold border-b-2 border-black py-1">
                                        <div className="flex items-center justify-center gap-2">
                                            <span>{data.website}</span>
                                            <CopyIcon
                                                size={20}
                                                duration={1}
                                                color="#ffffff"
                                            />
                                        </div>
                                    </td>
                                    <td className="w-[30%] text-center text-white font-semibold border-b-2 border-black py-1">
                                        <div className="flex items-center justify-center gap-2">
                                            <span>{data.username}</span>
                                            <CopyIcon
                                                size={20}
                                                duration={1}
                                                color="#ffffff"
                                            />
                                        </div>
                                    </td>
                                    <td className="w-[30%] text-center text-white font-semibold border-b-2 border-black py-1">
                                        <div className="flex items-center justify-center gap-2">
                                            <span>{data.password}</span>
                                            <CopyIcon
                                                size={20}
                                                duration={1}
                                                color="#ffffff"
                                            />
                                        </div>
                                    </td>
                                    <td className="w-[10%] font-semibold border-b-2 border-black py-1">
                                        <div className="flex items-center justify-center gap-2.5">
                                            <UserPenIcon
                                                size={20}
                                                duration={1}
                                                color="#ffffff"
                                            />
                                            <Trash2Icon
                                                size={20}
                                                duration={1}
                                                color="#ffffff"
                                            />
                                        </div>
                                    </td>
                                </tr>
                            })
                            : <tr>
                                <td colSpan={4}>
                                    Nothing To Show
                                </td>
                            </tr>
                        }


                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Password;
