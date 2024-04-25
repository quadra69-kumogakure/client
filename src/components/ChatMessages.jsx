import ScrollToBottom from 'react-scroll-to-bottom';
import { useContext } from 'react';
import { ConvoContext } from "../pages/MainPage";


function ChatMessages() {
    let {currentConvo} = useContext(ConvoContext);

    let current_user = currentConvo.current_user;
    let messages = currentConvo.conversation.Messages;

    return (
        <div className="grow flex flex-col gap-2 overflow-auto py-2">
            <ScrollToBottom className='overflow-auto'>
            {messages.map((message) => (
                <div key={message.id}>
                    {message.User.id === current_user.id ? (
                        <div className="flex flex-row-reverse gap-3">
                            <img
                                src={current_user.profilePicture}
                                alt="..."
                                className="shadow-lg rounded-full w-12 h-12 align-middle border-none object-cover"
                            />
                            <div className="flex flex-col items-end max-w-80">
                                <p className="text-slate-900 font-normal">You:</p>
                                <div className="bg-blue-700 px-2 py-2 rounded-l-lg">
                                    <p className="text-white font-normal text-right">
                                        {message.message}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex gap-3">
                            <img
                                src={message.User.profilePicture}
                                alt="..."
                                className="shadow-lg rounded-full w-12 h-12 align-middle border-none object-cover"
                            />
                            <div className="flex flex-col max-w-80">
                                <p className="text-slate-900 font-normal">
                                    {message.User?.firstName} {message.User?.lastName}:
                                </p>
                                <div className="bg-slate-200 px-2 py-2 rounded-r-lg">
                                    <p>{message.message}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
            </ScrollToBottom>
        </div>
    );
}


export default ChatMessages;