import axios from 'axios';
import Card from './Card';
import React from 'react';
import { useState, useEffect } from 'react';
import ApiConstants from './app_constants';
import Navbar from './NavigationBar';
import FriendList from './FriendList';

interface CardData {
    id: string;
    title: string;
    content: string;
    username: string;
    date: string | Date;
}

export default function Feed(): React.JSX.Element {
    const [cards, setCards] = useState<CardData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get<CardData[]>(`${ApiConstants.baseUrl}${ApiConstants.allPostsPrefix}`)
            .then(res => {
                const processedCards = res.data.map(card => ({
                    ...card,
                    date: card.date
                        ? (card.date instanceof Date
                            ? card.date
                            : new Date(card.date))
                        : new Date()
                }));

                if (processedCards.length) {
                    setCards(processedCards);
                    console.log(processedCards);
                } else {
                    setCards([{
                        id: "",
                        title: "",
                        content: "No Posts Have Been Shared Yet",
                        username: "",
                        date: new Date()
                    }]);
                }
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching cards:', error);
                setError('Failed to load posts');
                setIsLoading(false);
                setCards([{
                    id: "",
                    title: "",
                    content: "Error Loading Posts",
                    username: "",
                    date: new Date()
                }]);
            });
    }, []);

    if (isLoading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}>
                Loading...
            </div>
        );
    }

    if (error) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                color: 'red'
            }}>
                {error}
            </div>
        );
    }

    return (
        <div style={{ backgroundColor: "#d5d6db", backgroundSize: 'cover' }}>
            <Navbar />
            <FriendList />
            <div style={{
                marginTop: 70,
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: 10
            }}>
                {cards.map((card) => (
                    <Card
                        id={card.id} // Use index as key if no unique identifier
                        title={card.title}
                        content={card.content}
                        username={card.username}
                        date={card.date}
                    />
                ))}
            </div>
        </div>
    );
}