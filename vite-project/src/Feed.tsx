import axios from 'axios';
import Card from './Card';
import React from 'react';
import { useState, useEffect } from 'react';
import ApiConstants from './app_constants';
import Navbar from './NavigationBar';
import Search from './Search';
import FriendList from './FriendList';

interface CardData {
    title: string;
    content: string;
    username: string;
}

export default function Feed(): React.JSX.Element {
    const [cards, setCards] = useState<CardData[]>([]);

    useEffect(() => {
        axios.get<CardData[]>(`${ApiConstants.baseUrl}${ApiConstants.allPostsPrefix}`)
            .then(res => {
                if (res.data.length) {
                    setCards(res.data);
                } else {
                    setCards([{ title: "", content: "No Posts Have Been Shared Yet", username: "" }]);
                }
            })
            .catch(error => {
                console.log('Error fetching cards:', error);
            });
    }, []);

    return (
        <>
            <div style={{ /*width: '100%'*/backgroundColor: "#d5d6db", backgroundSize: 'cover' }}>
                <Navbar />
                {/* <Search /> */}
                <FriendList />
                <div style={{ marginTop: 70, padding: '10px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {cards.map(card => (
                        <Card
                            title={card.title}
                            content={card.content}
                            username={card.username}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}