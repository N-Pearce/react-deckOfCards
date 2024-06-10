import {React, useState, useEffect} from 'react';
import axios from 'axios'
import Card from './Card'

const DeckOfCards = () => {
    const [deck, setDeck] = useState(null)
    const [cards, setCards] = useState([])

    useEffect(function getDeckOnLoadAndShuffle() {
        async function getDeck() {
            const deckResult = await axios.get(
                "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
            )
            setDeck(deckResult.data)
        }
        getDeck();
    }, [])


    async function drawCard() {
        try {
            const cardResult = await axios.get(
                `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`
            )
            if (cardResult.data.remaining === 0) throw new Error("Deck is empty!");

            const card = cardResult.data.cards[0];

            setCards(cards => [...cards, 
                {id: card.code,
                name: card.value + " of " + card,
                image: card.image}
            ]);
        } catch (err) {
            alert(err)
        }
    }

    async function shuffle() {
        try {
            setDeck(null)
            setCards([])
            const deckResult = await axios.get(
                `https://deckofcardsapi.com/api/deck/${deck.deck_id}/shuffle/`
            )
            setDeck(deckResult.data)
        } catch (err){
            alert(err)
        }
    }

    const allCards = cards.map(c => (
        <Card
            image={c.image}
        />
    ))


    return (
        <>
            {deck ? 
            <div id="deck-of-cards-container">
                <button onClick={drawCard}>Draw a card</button>
                <button onClick={shuffle}>ShuffleDeck</button>
                <div className="deckOfCards">
                    {allCards}
                </div>
            </div>
            : <i>(loading)</i>}
        </>
    ) 
}

export default DeckOfCards