import React, { useState } from 'react';
import { GrAdd, GrSubtract } from 'react-icons/gr';

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <GrSubtract /> : <GrAdd />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
