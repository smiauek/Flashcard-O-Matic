import React from "react";

function CardForm({ formData, handleChange }) {
  return (
    <>
      <form id="CardForm">
        <div className="mb-3">
          <label className="form-label" htmlFor="front">
            Front
          </label>
          <textarea
            className="form-control"
            type="text"
            id="front"
            name="front"
            placeholder="Front side of card"
            required
            onChange={handleChange}
            value={formData.front}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="back">
            Back
          </label>
          <textarea
            className="form-control"
            type="text"
            id="back"
            name="back"
            placeholder="Back side of card"
            required
            onChange={handleChange}
            value={formData.back}
          />
        </div>
      </form>
    </>
  );
}

export default CardForm;
