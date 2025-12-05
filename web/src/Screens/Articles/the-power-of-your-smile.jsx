import React from 'react';
import "./smile-pages.css";

export default function ThePowerOfYourSmile() {
  return (
    <div className="container-box mt-5 mb-5 text-left space-y-6 smile-page">
      <h1 className="font-bold text-2xl">The Power of Your Smile</h1>

      <p>
        Smiling is <strong>one of the most powerful, universally recognized and impactful human behaviors</strong>,
        influencing your brain, body, and relationships in remarkable ways. Here's why smiling holds so much
        power, with the science to back it up:
      </p>

      {/* Section 1 */}
      <hr />
      <h2 className="font-semibold text-xl mt-4">🧠 1. Smiling Changes Your Brain Chemistry</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Smiling activates the release of <strong>"feel-good" chemicals</strong> like:</li>
        <ul className="list-disc ml-10 space-y-1">
          <li><strong>Dopamine</strong> (boosts motivation and pleasure)</li>
          <li><strong>Endorphins</strong> (natural painkillers)</li>
          <li><strong>Serotonin</strong> (improves mood and reduces stress)</li>
        </ul>
        <li>
          These neurochemical shifts can make you feel <strong>happier, more relaxed, and more confident</strong>,
          even if the smile is initially forced.
        </li>
      </ul>
      <p className="text-sm italic ml-2">📚 Kraft & Pressman, 2012 – Smiling reduces stress and promotes emotional recovery.</p>

      {/* Section 2 */}
      <hr />
      <h2 className="font-semibold text-xl mt-4">❤️ 2. Smiling Improves Physical Health</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Reduces <strong>blood pressure</strong> and <strong>heart rate</strong> by activating the parasympathetic nervous system.</li>
        <li>Strengthens the <strong>immune system</strong> by reducing stress-related hormones like cortisol.</li>
        <li>May even contribute to <strong>longer life expectancy</strong>.</li>
      </ul>
      <p className="text-sm italic ml-2">📚 Fredrickson et al., 2000 – Positive emotions like those from smiling promote resilience and health.</p>

      {/* Section 3 */}
      <hr />
      <h2 className="font-semibold text-xl mt-4">🤝 3. Smiling Builds Trust and Connection</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Smiling is a <strong>universal signal</strong> of friendliness and cooperation.</li>
        <li>People who smile are perceived as <strong>more approachable, trustworthy, and competent</strong>.</li>
        <li>It fosters <strong>social bonding</strong> and empathy, which strengthens personal and professional relationships.</li>
      </ul>
      <p className="text-sm italic ml-2">📚 Krumhuber et al., 2007 – Duchenne smiles (genuine smiles) increase perceptions of trustworthiness.</p>

      {/* Section 4 */}
      <hr />
      <h2 className="font-semibold text-xl mt-4">😊 4. Smiling Is Contagious</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>
          Thanks to <strong>mirror neurons</strong>, when you see someone smile, your brain often makes you smile too.
        </li>
        <li>This creates a <strong>ripple effect</strong>, lifting the mood in a group or social setting.</li>
      </ul>
      <p className="text-sm italic ml-2">📚 Hatfield et al., 1994 – Emotional contagion through facial expressions strengthens social ties.</p>

      {/* Section 5 */}
      <hr />
      <h2 className="font-semibold text-xl mt-4">💪 5. Smiling Boosts Confidence and Reduces Anxiety</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Smiling can trick your brain into <strong>feeling more secure and confident</strong>.</li>
        <li>
          It reduces anxiety and helps you appear <strong>more in control</strong> during challenging situations like
          interviews or public speaking.
        </li>
      </ul>

      {/* Summary */}
      <hr />
      <h2 className="font-semibold text-xl mt-4">Summary</h2>
      <table className="table-auto mt-2">
        <thead>
          <tr className="font-semibold">
            <td className="pr-10">Power of Smiling</td>
            <td>Why It Matters</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Boosts brain chemistry</td>
            <td>Increases happiness, reduces stress</td>
          </tr>
          <tr>
            <td>Improves physical health</td>
            <td>Lowers blood pressure, boosts immunity</td>
          </tr>
          <tr>
            <td>Builds social connection</td>
            <td>Encourages trust, likability, and bonding</td>
          </tr>
          <tr>
            <td>Spreads positivity</td>
            <td>Contagious mood-lifting effect</td>
          </tr>
          <tr>
            <td>Enhances confidence</td>
            <td>Helps you feel and appear more self-assured</td>
          </tr>
        </tbody>
      </table>

      {/* Keys to Remember */}
      <hr />
      <h2 className="font-semibold text-xl mt-4">🔑 Keys to Remember</h2>
      <p>
        Smiling is powerful because it improves your <strong>mood, health, and relationships</strong>—while also
        positively influencing how others see and respond to you. Smiling is one of the simplest ways to improve
        both your life and the lives of those around you.
      </p>
      <p className="font-semibold">
        Smiling more makes your life better. That Smile App is here to help you improve your life, happiness and health
        through smiling more!
      </p>
    </div>
  );
}
