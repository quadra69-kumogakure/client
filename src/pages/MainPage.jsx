import MessageList from "../components/MessageList";
import ChatRoom from "../components/ChatRoom";

import { useEffect, useState } from "react";
import { apiRequest } from "../utils/axios";
import socket from "../utils/socket";


function MainPage() {
    const [convoList, setConvoList] = useState([]);
    const [currentConvo, setConvo] = useState({});
    const [currentConvoId, setConvoId] = useState();

    const [isLoading, setIsLoading] = useState(true);

    const fetchConversations = async () => {
        setIsLoading(true);
        try {
            const { data } = await apiRequest({
                method: 'GET',
                url: '/conversations',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })

            setConvoList(data.details);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchConvo = async () => {
        try {
            if (currentConvoId) {
                const { data } = await apiRequest({
                    method: 'GET',
                    url: `/conversations/${currentConvoId}`,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });

                setConvo(data);
                socket.emit("join-conversation", currentConvoId);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleConvo = (event) => {
        setConvoId(event)
    };

    useEffect(() => {
        fetchConversations()
    }, []);

    useEffect(() => {
        fetchConvo()
    }, [currentConvoId])

    useEffect(() => {
        socket.on("sent-message", (message) => {
            console.log(`${message}`)
            fetchConvo()
        });
    }, []);

    return (
        <>
            {isLoading ? (<>
                <p>Tunggu dulu ya...</p>
            </>) : (<>
                <MessageList convoList={convoList} handleConvo={handleConvo} />
            </>)}
            <ChatRoom currentConvo={currentConvo} fetchConvo={fetchConvo} fetchConversations={fetchConversations} />
        </>
    )
};

export default MainPage;