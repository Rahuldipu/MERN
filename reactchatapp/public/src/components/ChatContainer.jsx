import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import Logout from "./Logout";
import axios from "axios";
import { getAllMessagesRoute, sendMessageRoute } from "../utils/APIRoutes";
import { v4 as uuidv4 } from "uuid";

export default function ChatContainer({ currentChat, currentUser, socket }) {
    const [messages, setMessages] = useState([]);
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const scrollRef = useRef();

    useEffect(() => {
        if(currentUser) {
            socket.current.emit("open-chat-screen", currentUser._id);
        }
        const fetchData = async () => {
            if (currentChat) {
                const response = await axios.post(
                    getAllMessagesRoute,
                    {
                        from: currentUser._id,
                        to: currentChat._id,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "access-token"
                            )}`,
                        },
                    }
                );
                setMessages(response.data.data);
            }
        };
        fetchData();
        // Cleanup function: Close the chat screen when the component unmounts
        return () => {
            if(currentUser) {
                socket.current.emit("close-chat-screen", currentUser._id);
            }
        };
    }, [currentChat]);

    const handleSendMsg = async (msg) => {
        await axios.post(
            sendMessageRoute,
            {
                from: currentUser._id,
                to: currentChat._id,
                message: msg,
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "access-token"
                    )}`,
                },
            }
        );
        socket.current.emit("send-msg", {
            to: currentChat._id,
            from: currentUser._id,
            message: msg,
        });

        const msgs = [...messages];
        msgs.push({
            fromSelf: true,
            message: msg,
            createdAt: new Date()
        });
        setMessages(msgs);
    };

    useEffect(() => {
        if (socket.current) {
            socket.current.on("msg-recieved", (msg) => {
                console.log(msg);
                setArrivalMessage({
                    fromSelf: false,
                    message: msg.msg,
                    createdAt: msg.createdAt
                });
            });
        }
    }, []);

    useEffect(() => {
        arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    function convertTimestampToAMPM(timestamp) {
        const date = new Date(timestamp);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
        const formattedTime = `${formattedHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
        return formattedTime;
    }

    return (
        <>
            {currentChat && (
                <Container>
                    <div className="chat-header">
                        <div className="user-details">
                            <div className="avatar">
                                <img
                                    src={currentChat.photoURL}
                                    alt="avatar"
                                />
                            </div>
                            <div className="username">
                                <h3>{currentChat.username}</h3>
                            </div>
                        </div>
                        <Logout />
                    </div>
                    <div className="chat-messages">
                        {messages.map((message) => {
                            return (
                                <div ref={scrollRef} key={uuidv4()}>
                                    <div
                                        className={`message ${
                                            message.fromSelf
                                                ? "sended"
                                                : "recieved"
                                        }`}
                                    >
                                        <div className="content ">
                                            <p>{message.message}</p>
                                            <p>{convertTimestampToAMPM(message.createdAt)}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <ChatInput handleSendMsg={handleSendMsg} />
                </Container>
            )}
        </>
    );
}

const Container = styled.div`
    display: grid;
    grid-template-rows: 10% 80% 10%;
    gap: 0.1rem;
    overflow: hidden;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
        grid-template-rows: 15% 70% 15%;
    }
    .chat-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
        .user-details {
            display: flex;
            align-items: center;
            gap: 1rem;
            .avatar {
                img {
                    height: 3rem;
                }
            }
            .username {
                h3 {
                    color: white;
                    text-transform: capitalize;
                }
            }
        }
    }
    .chat-messages {
        padding: 1rem 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        overflow: auto;
        &::-webkit-scrollbar {
            width: 0.2rem;
            &-thumb {
                background-color: #ffffff39;
                width: 0.1rem;
                border-radius: 1rem;
            }
        }
        .message {
            display: flex;
            align-items: center;
            .content {
                max-width: 40%;
                overflow-wrap: break-word;
                padding: 1rem;
                font-size: 1.1rem;
                border-radius: 1rem;
                color: #d1d1d1;
                @media screen and (min-width: 720px) and (max-width: 1080px) {
                    max-width: 70%;
                }
            }
        }
        .sended {
            justify-content: flex-end;
            .content {
                background-color: #4f04ff21;
            }
        }
        .recieved {
            justify-content: flex-start;
            .content {
                background-color: #9900ff20;
            }
        }
    }
`;
