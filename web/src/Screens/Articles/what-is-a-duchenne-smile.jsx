import React from 'react';
import "./smile-pages.css";

export default function WhatIsADuchenneSmile() {
  return (
    <div className="container-box mt-5 mb-5">
      <h1>What is a Duchenne Smile?</h1>

      <p>
        A <strong>Duchenne smile</strong> (Duchenne is pronounced “doo-shen”) is a type of
        genuine, heartfelt smile that involves the activation of specific facial muscles,
        signaling true happiness or positive emotion. It’s named after the French
        neurologist Guillaume Duchenne, who first studied the physiology of facial
        expressions in the 19th century.
      </p>

      <hr />

      {/* Key Features Section */}
      <h3>Key Features of a Duchenne Smile</h3>

      <ul>
        <li>
          <strong>Muscles involved</strong>
          <ul style={{ marginTop: '8px' }}>
            <li>
              <strong>Zygomatic major:</strong> pulls the corners of the mouth upward (like in
              any smile).
            </li>
            <li>
              <strong>Orbicularis oculi:</strong> contracts around the eyes, causing the cheeks
              to raise and creating crow’s feet (wrinkles) at the outer corners of the eyes.
            </li>
          </ul>
        </li>

        <li style={{ marginTop: '15px' }}>
          <strong>Why a Duchenne smile is special</strong>
          <p style={{ marginTop: '5px' }}>
            The activation of the orbicularis oculi muscle is <strong>involuntary</strong> and
            difficult to fake, so this smile is considered a true expression of genuine
            happiness or enjoyment.
          </p>
        </li>
      </ul>

      <hr />

      {/* Keys to Remember */}
      <h3>🔑 Keys to Remember</h3>

      <ul>
        <li>
          Duchenne smiles are perceived as <strong>more sincere, trustworthy, and warm</strong>{' '}
          compared to non-Duchenne (fake or polite) smiles.
        </li>
        <li style={{ marginTop: '8px' }}>
          Duchenne smiles tend to elicit stronger positive social responses and create better
          emotional connections.
        </li>
      </ul>

      <p style={{ marginTop: '20px' }}>
        Read the next article <strong>“Why is a Duchenne smile more powerful than other smiles?”</strong>{' '}
        to find out why a Duchenne smile is so powerful!
      </p>
    </div>
  );
}
