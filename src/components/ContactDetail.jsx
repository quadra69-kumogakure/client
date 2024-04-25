import { useState, useEffect } from "react";

export default function ContactDetail({ contact, onDelete, onSave }) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [profilePicture, setProfilePicture] = useState("")
    const [alias, setAlias] = useState("")

    useEffect(() => {
        if (contact && contact.friend) {
            setFirstName(contact.friend.firstName)
            setLastName(contact.friend.lastName)
            setEmail(contact.friend.email)
            setProfilePicture(contact.friend.profilePicture)
            setAlias(contact.alias)
        }
    }, [contact])

    if (!contact || !contact.friend) return null

    const handleDelete = () => {
        onDelete(contact.friend.id)
    };

    const handleUpdate = () => {
        onSave(contact.alias)
    }
    
    return (
        <>
            <div className="flex justify-start items-center relative">
                    <button
                        onClick={handleDelete}
                        className="text-xs font-medium bg-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 text-white px-4 py-2 rounded-lg shadow-md"
                    >
                        Delete
                    </button>
                <div className="absolute top-0 right-0">
                    <button
                        onClick={handleUpdate}
                        type="submit"
                        className="text-xs font-medium hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-black px-4 py-2 rounded-lg shadow-md"
                    >
                        Save
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-center w-full">
                <h1 className="text-lg text-center font-semibold text-gray-900 mt-6 mb-4">Contact Info</h1>
            </div>

            <div className="bg-white shadow-md rounded-md px-2 py-8 w-3/4 mx-auto flex flex-col items-center">
                <img
                    className="h-20 w-20 rounded-full"
                    src={profilePicture}
                    alt="Profile Picture"
                />
                <p className="text-lg font-bold font-medium text-slate-900">{`${firstName} ${lastName}`}</p>
            </div>

            <form className="max-w-md mx-auto mt-6">
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="floating_first_name"
                            id="floating_first_name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            readOnly
                        />
                        <label
                            htmlFor="floating_first_name"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            First name
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="floating_last_name"
                            id="floating_last_name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            readOnly
                        />
                        <label
                            htmlFor="floating_last_name"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Last name
                        </label>
                    </div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="email"
                        name="floating_email"
                        id="floating_email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        readOnly
                    />
                    <label
                        htmlFor="floating_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Email address
                    </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="floating_alias"
                        id="floating_alias"
                        value={alias}
                        onChange={(e) => setAlias(e.target.value)}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="floating_alias"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Alias
                    </label>
                </div>
            </form>
        </>
    );
}