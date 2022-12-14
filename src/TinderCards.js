import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import { collection, onSnapshot } from 'firebase/firestore';
import database from './firebase';
import './TinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
        const unsubscribe = onSnapshot(collection(database, 'people'), (snapshot) => {
            setPeople(snapshot.docs.map(doc => doc.data()))
        });
        return () => {
            unsubscribe();
        }
  }, []);
  return (
    <div>
        <div className="tinderCards__cardContainer">
        {people.map((person) => {
            return (
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up", "down"]}
                >
                    <div
                    style={{ backgroundImage: `url(${person.url})` }}
                    className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            )
        })}
        </div>
    </div>
  );
}

export default TinderCards