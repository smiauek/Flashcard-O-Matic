import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

function Card({ cards, cardId, setCardId, deckId }) {
  const [flip, setFlip] = useState(true);

  const history = useHistory();

  if (cards) {
    if (cards.length > 2) {
      return (
        <>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Card {cardId} of {cards.length}
              </h5>
              <p className="card-text">
                {flip ? cards[cardId - 1].front : cards[cardId - 1].back}
              </p>
              <button
                className="btn btn-secondary"
                onClick={() => setFlip(!flip)}
              >
                Flip
              </button>
              {!flip ? (
                <button
                  className="btn btn-primary ml-1"
                  onClick={() => {
                    if (cardId === cards.length) {
                      if (window.confirm("Restart cards?")) {
                        setCardId(1);
                        setFlip(!flip);
                      } else {
                        history.push("/");
                      }
                    } else {
                      setCardId(cardId + 1);
                      setFlip(!flip);
                    }
                  }}
                >
                  Next
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <h2>Not enough cards</h2>
          <p>
            You need at least 3 cards to study. There are {cards.length} cards
            in this deck.
          </p>
          <Link to={`/decks/${deckId}/cards/new`}>
            <button className="btn btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-plus-square"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>{" "}
              Add Cards
            </button>
          </Link>
        </>
      );
    }
  } else {
    return <p>Loading...</p>;
  }
}

export default Card;
