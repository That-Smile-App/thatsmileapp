import React from 'react';
import "./smile-pages.css";

export default function HowDoesSmilingElevateOurMood() {
  return (
    <div className="container-box mt-5 mb-5 smile-page" style={{ lineHeight: '1.7', fontSize: '18px' }}>
      <h1 className="mb-4">How does Smiling Elevate our Mood?</h1>

      <p>
        Smiling elevates our mood by triggering powerful biological and psychological responses that 
        <strong> shift the brain into a more positive, relaxed, and emotionally balanced state. </strong> 
        Even when you're not feeling particularly happy, <strong>the act of smiling can create a real change </strong> 
        in how you feel — thanks to how your body and brain are wired. Here’s a breakdown of how that works, 
        with research to back it up:
      </p>

      <hr className="my-4" />

      {/* SECTION 1 */}
      <h3>😊 1. Smiling Releases "Feel-Good" Brain Chemicals</h3>
      <p>When you smile, your brain releases:</p>
      <ul>
        <li><strong>Dopamine</strong> – boosts motivation and pleasure</li>
        <li><strong>Serotonin</strong> – regulates mood and promotes calm</li>
        <li><strong>Endorphins</strong> – reduce pain and enhance well-being</li>
      </ul>
      <p>
        These chemicals <strong>naturally improve your mood</strong>, reduce stress, and help you feel lighter — 
        sometimes within seconds.
      </p>

      <p><strong>📚 Research:</strong><br />
      Niedenthal, P. (2007). <em>Embodied emotion: Facial expressions influence emotional experience.</em>
      </p>

      <hr className="my-4" />

      {/* SECTION 2 */}
      <h3>🧠 2. Facial Feedback Loop: Your Face Talks to Your Brain</h3>
      <p>
        The <strong>Facial Feedback Hypothesis</strong> suggests that your facial expressions don't just 
        reflect emotion — <strong>they cause it</strong>.
      </p>

      <ul>
        <li>When you smile, your facial muscles send signals to your brain that you're feeling good.</li>
        <li>The brain responds by <strong>actually shifting your emotional state</strong> to match the expression.</li>
      </ul>

      <p><strong>📚 Study:</strong><br />
        Strack, Martin, & Stepper (1988) – People who were made to smile rated cartoons as funnier, 
        even when unaware of the smile.
      </p>

      <hr className="my-4" />

      {/* SECTION 3 */}
      <h3>🌬️ 3. Smiling Reduces Stress and Anxiety</h3>
      <p>Smiling:</p>

      <ul>
        <li>Lowers <strong>cortisol</strong> (your stress hormone)</li>
        <li>Reduces <strong>heart rate and blood pressure</strong></li>
        <li>Encourages <strong>deeper breathing</strong>, which calms the body</li>
      </ul>

      <p>
        With less stress in your system, your emotional baseline naturally shifts toward a 
        <strong> more peaceful and elevated mood.</strong>
      </p>

      <p><strong>📚 Study:</strong><br />
        Kraft & Pressman (2012) – Participants who smiled during stressful tasks had faster recovery 
        and lower heart rates.
      </p>

      <hr className="my-4" />

      {/* SECTION 4 */}
      <h3>🤝 4. Smiling Improves Social Feedback, Which Boosts Mood</h3>
      <p>When you smile at others, they’re more likely to:</p>

      <ul>
        <li>Smile back (thanks to <strong>mirror neurons</strong>)</li>
        <li>Be kind and warm in return</li>
        <li>Engage positively, boosting your own confidence and mood</li>
      </ul>

      <p>
        This <strong>positive social loop</strong> reinforces your improved emotional state.
      </p>

      <hr className="my-4" />

      {/* SECTION 5 */}
      <h3>🌟 5. Smiling Helps You Shift Perspective</h3>
      <p>Even a small intentional smile:</p>

      <ul>
        <li>Can disrupt negative thought loops</li>
        <li><strong>Remind your brain</strong> to look for what's going well</li>
        <li>Create a micro-moment of gratitude or optimism</li>
      </ul>

      <p>
        This helps you step back from stress or sadness and return to a 
        <strong> more balanced emotional space.</strong>
      </p>

      <hr className="my-4" />

      {/* SUMMARY TABLE */}
      <h3>✅ Summary: How Smiling Lifts Your Mood</h3>

      <table className="table mt-3" style={{ maxWidth: '600px' }}>
        <thead>
          <tr>
            <th><strong>Mechanism</strong></th>
            <th><strong>Mood Effect</strong></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Neurochemical release</td>
            <td>Triggers happiness and calm</td>
          </tr>
          <tr>
            <td>Facial feedback loop</td>
            <td>Signals brain to feel better</td>
          </tr>
          <tr>
            <td>Stress reduction</td>
            <td>Lowers anxiety and physical tension</td>
          </tr>
          <tr>
            <td>Positive social response</td>
            <td>Reinforces joy through connection</td>
          </tr>
          <tr>
            <td>Mindset shift</td>
            <td>Encourages perspective and optimism</td>
          </tr>
        </tbody>
      </table>

      <hr className="my-4" />

      {/* KEYS TO REMEMBER */}
      <h3>🔑 Keys to Remember</h3>
      <p>
        <strong>Smiling is a fast, free, and powerful way to boost your mood</strong> — even if you're not 
        feeling great to start with. Whether genuine or forced, a smile activates brain circuits that help 
        you feel lighter, calmer, and more positive almost instantly. 
      </p>
      <p>
        Smiling isn’t just a reflection of happiness — <strong>smiling actively helps create happiness.</strong>
      </p>
      <p>
        <strong>The Smile App is here to help boost your mood.</strong>
      </p>
    </div>
  );
}
