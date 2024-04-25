export default function ContactEdit() {
    return (<>
        <div className="flex justify-end items-center relative">
            <button
                type="submit"
                className="text-xs font-medium hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-black px-4 py-2 rounded-lg shadow-md"
            >
                Save
            </button>
        </div>
        <div className="flex justify-center items-center w-full">
            <h1 className="text-lg text-center font-semibold text-gray-900 mt-6 mb-4">Contact Info</h1>
        </div>

        <form className="max-w-md mx-auto mt-6">
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="alias"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="floating_alias"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Alias
                    </label>
                </div>
            </div>
        </form>
    </>)
}