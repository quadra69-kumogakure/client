
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

function ChatRoom({ currentConvo, fetchConvo, fetchConversations }) {
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
                <ChatMessages currentConvo={currentConvo} />
                <ChatInput currentConvo={currentConvo} fetchConvo={fetchConvo} fetchConversations={fetchConversations}/>
            </>) : (<>

            </>)}

        </div>
    )
};

export default ChatRoom;