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
            console.log(data, ">>>>")
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
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleConvo = (event) => {
        console.log(event, "Convo")
        setConvoId(event)
    };

    useEffect(() => {
        fetchConversations()
    }, []);

    useEffect(() => {
        fetchConvo()
    }, [currentConvoId])

    useEffect(() => {
        socket.off("sent-message")
        socket.on("sent-message", (id, message) => {
            console.log(`${message} --- [${id}, ${currentConvoId}]`)
            // setConvoId(id);
            if (currentConvoId === id) {
                fetchConvo()
            }
        });
        return () => {
        }
    }, [currentConvoId]);

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