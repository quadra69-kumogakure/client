import SearchBar from "./SearchBar";
import ContactMessages from "./ContactMessages";

function MessageList({handleConvo}) {

    return (
        <div className="col-span-3 flex flex-col bg-slate-100 px-3 py-5 overflow-auto">
            <SearchBar />
            <ContactMessages handleConvo={handleConvo}/>
        </div>
    )
};

export default MessageList;