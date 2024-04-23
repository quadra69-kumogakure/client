
function ChatMessages({ currentConvo }) {
    let current_user = currentConvo.current_user;
    let messages = currentConvo.conversation.Messages;
    // let participantWithId2 = participants.find(participant => participant.UserId === 2);

    return (
        <div className="grow flex flex-col gap-2 overflow-auto py-2">
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
        </div>
    );
}

    // return (
    //     <div className="grow flex flex-col gap-2 overflow-auto py-2">
    //         {messages.map((el) => (
    //             {
    //                 el.User.id === current_user.id ? (<>
    //                     <div className="flex flex-row-reverse gap-3">
    //                         <img
    //                             src="https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/45843.png&w=350&h=254" alt="..."
    //                             className="shadow-lg rounded-full w-12 h-12 align-middle border-none object-cover"
    //                         />
    //                         <div className="flex flex-col items-end max-w-80">
    //                             <p className="text-slate-900 font-normal">You:</p>
    //                             <div className="bg-blue-700 px-2 py-2 rounded-l-lg">
    //                                 <p className="text-white font-normal text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facere officiis officia! Pariatur praesentium ipsa harum provident eaque? Eum, excepturi.</p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </>) : (<>
    //                     < div className="flex gap-3" >
    //                         <img
    //                             src={el.User.profilePicture} alt="..."
    //                             className="shadow-lg rounded-full w-12 h-12 align-middle border-none object-cover"
    //                         />
    //                         <div className="flex flex-col max-w-80">
    //                             <p className="text-slate-900 font-normal">{el.User?.firstName} {el.User?.lastName}:</p>
    //                             <div className="bg-slate-200 px-2 py-2 rounded-r-lg">
    //                                 <p>{el.message}</p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </>)
    //             }
    //         ))
    //         }
    //         <div className="flex gap-3">
    //             <img
    //                 src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTTJbB81jhhw85Um815yzwnd0ST9HGiLNm7InsO_cXS6QCrWRqF" alt="..."
    //                 className="shadow-lg rounded-full w-12 h-12 align-middle border-none object-cover"
    //             />
    //             <div className="flex flex-col max-w-80">
    //                 <p className="text-slate-900 font-normal">Emiliano Martinez:</p>
    //                 <div className="bg-slate-200 px-2 py-2 rounded-r-lg">
    //                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta architecto quae dolor fugiat voluptates odio cupiditate eum nostrum, in doloremque!</p>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="flex flex-row-reverse gap-3">
    //             <img
    //                 src="https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/45843.png&w=350&h=254" alt="..."
    //                 className="shadow-lg rounded-full w-12 h-12 align-middle border-none object-cover"
    //             />
    //             <div className="flex flex-col items-end max-w-80">
    //                 <p className="text-slate-900 font-normal">You:</p>
    //                 <div className="bg-blue-700 px-2 py-2 rounded-l-lg">
    //                     <p className="text-white font-normal text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facere officiis officia! Pariatur praesentium ipsa harum provident eaque? Eum, excepturi.</p>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="flex gap-3">
    //             <img
    //                 src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTTJbB81jhhw85Um815yzwnd0ST9HGiLNm7InsO_cXS6QCrWRqF" alt="..."
    //                 className="shadow-lg rounded-full w-12 h-12 align-middle border-none object-cover"
    //             />
    //             <div className="flex flex-col max-w-80">
    //                 <p className="text-slate-900 font-normal">Emiliano Martinez:</p>
    //                 <div className="bg-slate-200 px-2 py-2 rounded-r-lg">
    //                     <p>wkwk</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div >
    // )


export default ChatMessages;