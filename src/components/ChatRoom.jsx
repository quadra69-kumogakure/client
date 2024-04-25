import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { ConvoContext } from "../pages/MainPage";
import { useContext } from "react";

function ChatRoom() {
    let {currentConvo} = useContext(ConvoContext);

    let chatName

    if (currentConvo.conversation) {
        chatName = `${currentConvo.conversation.parti[0]?.User.firstName} ${currentConvo.conversation.parti[0]?.User.lastName}`
    }


    return (
        <div className="col-span-6 flex flex-col bg-slate-50 px-3 py-5 overflow-auto">
            {currentConvo.conversation ? (<>
                <div className="flex-none pb-3 border-b-2 border-solid">
                    <p className="font-semibold text-slate-900 text-xl">{chatName}</p>
                </div>
                <ChatMessages/>
                <ChatInput/>
            </>) : (<>

            </>)}

        </div>
    )
};

export default ChatRoom;