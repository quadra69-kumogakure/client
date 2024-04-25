import { useEffect, useState, useContext } from "react";
import { apiRequest } from "../utils/axios";
import socket from "../utils/socket";
import { ConvoContext } from "../pages/MainPage";

function ChatInput() {
    let {fetchConvo, currentConvo} = useContext(ConvoContext);

    const [message, setMessage] = useState("");

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    }

    const handleChatSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await apiRequest({
                method : "POST",
                url : "/messages",
                headers : {
                    Authorization : `Bearer ${localStorage.getItem("token")}`
                },
                data : {
                    message,
                    ConversationId : currentConvo.conversation.id
                }
            })

            fetchConvo();
            socket.emit("sent-message", {
                conversationId: currentConvo.conversation.id,
                message
            });
            event.target.message.value = "";
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex-none">
            <form onSubmit={handleChatSubmit} autoComplete="off">
                <div className="flex bg-slate-100 rounded-full px-3 py-2">
                    <input type="text" name="message" placeholder="Type Something..." id=""
                        className="bg-slate-100 grow outline-none"
                        onChange={handleInputChange}
                    />
                    <button>
                        <svg class="w-[29px] h-[29px] text-blue-700 dark:text-white rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.326 1.281L13 19.517V13a1 1 0 1 0-2 0v6.517l-5.606 2.402a1 1 0 0 1-1.326-1.281l7-18A1 1 0 0 1 12 2Z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    )
};

export default ChatInput;