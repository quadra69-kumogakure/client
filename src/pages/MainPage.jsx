import SideBar from "../components/Sidebar";
import MessageList from "../components/MessageList";
import ChatRoom from "../components/ChatRoom";

import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import { apiRequest } from "../utils/axios";

// const socket = io("http://localhost:3000")


function MainPage() {
    const [userData, setUserData] = useState({});
    const [convoList, setConvoList] = useState([]);
    const [currentConvo, setConvo] = useState({});
    const [currentConvoId, setConvoId] = useState();

    const [isLoading, setIsLoading] = useState(true);

    const fetchUserData = async () => {
        setIsLoading(true);

        try {
            const { data } = await apiRequest({
                method: 'GET',
                url: '/user-data',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });

            setUserData(data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    };

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
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleConvo = (event) => {
        setConvoId(event)
    };

    useEffect(() => {
        fetchUserData()
        fetchConversations()
    }, []);

    useEffect(() => {
        fetchConvo()
    }, [currentConvoId])

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