import React from "react";

function DeckForm({ formData, handleChange }) {
  return (
    <>
      <form id="deckForm">
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            placeholder="Deck Name"
            required
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="description">
            Description
          </label>
          <textarea
            className="form-control"
            type="text"
            id="description"
            name="description"
            placeholder="Brief description of the deck"
            required
            onChange={handleChange}
            value={formData.description}
          />
        </div>
      </form>
    </>
  );
}

export default DeckForm;
