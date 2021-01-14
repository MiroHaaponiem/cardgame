import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                "A♥",
                "A♠",
                "A♦",
                "A♣",
                "2♣",
                "3♣",
                "4♣",
                "5♣",
                "6♣",
                "7♣",
                "8♣",
                "9♣",
                "10♣",
                "K♣",
                "Q♣",
                "J♣",
                "2♦",
                "3♦",
                "4♦",
                "5♦",
                "6♦",
                "7♦",
                "8♦",
                "9♦",
                "10♦",
                "K♦",
                "Q♦",
                "J♦",
                "2♥",
                "3♥",
                "4♥",
                "5♥",
                "6♥",
                "7♥",
                "8♥",
                "9♥",
                "10♥",
                "K♥",
                "Q♥",
                "J♥",
                "2♠",
                "3♠",
                "4♠",
                "5♠",
                "6♠",
                "7♠",
                "8♠",
                "9♠",
                "10♠",
                "K♠",
                "Q♠",
                "J♠"
            ],
            hand: []
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const cards = this.state.cards;

        const newHand = [];

        function get_rand(array) {
            var rand = array[Math.floor(Math.random() * array.length)];
            if (!newHand.includes(rand)) {
                newHand.push(rand);
            } else {
                get_rand(cards);
            }
        }

        for (var i = 0; i < 5; i++) {
            get_rand(cards);
        }

        this.setState({
            hand: newHand
        });
    }

    swapOneCard = () => {
        const currentHand = this.state.hand;
        const cardToRemove =
            currentHand[0];
        //you can set cardTorRemove = currentHand[0] if you just want to swap the first card
        //all cards
        const allCards = this.state.cards;
        const unchoosenCards = allCards.filter(card => {
            return !currentHand.includes(card);
        });

        // get random card from unchoosen cards
        var cardToAdd =
            unchoosenCards[Math.floor(Math.random() * unchoosenCards.length)];

        const newHand = currentHand.map(card => {
            if (card == cardToRemove) {
                return cardToAdd;
            } else {
                return card;
            }
        });

        this.setState({
            hand: newHand
        });
    };

    render() {
        const { hand } = this.state;
        return (
            <div>
                {hand
                    ? hand.map(card => {
                        return <p>{card}</p>;
                    })
                    : null}
                <button onClick={this.handleClick}>Randomize</button>
                <button onClick={this.swapOneCard}>Swap</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
