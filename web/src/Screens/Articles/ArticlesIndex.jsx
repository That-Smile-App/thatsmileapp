import React from "react";
import { Link } from "react-router-dom";

const articles = [
  { title: "The Power of Your Smile", slug: "the-power-of-your-smile" },
  { title: "What Happens to Your Brain When You Smile?", slug: "what-happens-to-your-brain-when-you-smile" },
  { title: "What is a Duchenne Smile?", slug: "what-is-a-duchenne-smile" },
  { title: "Why is a Duchenne Smile More Powerful than Other Smiles?", slug: "why-is-a-duchenne-smile-more-powerful-than-other-smiles" },
  { title: "Is Smiling Better than Chocolate?", slug: "is-smiling-better-than-chocolate" },
  { title: "How Does Smiling Reduce Stress and Anxiety?", slug: "how-does-smiling-reduce-stress-and-anxiety" },
  { title: "How does Smiling Increase Happiness?", slug: "how-does-smiling-increase-happiness" },
  { title: "Is Smiling Contagious?", slug: "is-smiling-contagious" },
  { title: "How does Smiling Elevate our Mood?", slug: "how-does-smiling-elevate-our-mood" },
  { title: "How does Smiling Reduce Pain?", slug: "how-does-smiling-reduce-pain" },
  { title: "Can Smiling Make You Look Younger?", slug: "can-smiling-make-you-look-younger" },
  { title: "Does Smiling Make You More Attractive?", slug: "does-smiling-make-you-more-attractive" },
  { title: "How does Smiling Improve Relationships?", slug: "how-does-smiling-improve-relationships" },
  { title: "Can Smiling Help You Live Longer?", slug: "can-smiling-help-you-live-longer" },
  { title: "How does Smiling Boost Your Immune System?", slug: "how-does-smiling-boost-your-immune-system" },
  { title: "How does Smiling Lower Your Blood Pressure?", slug: "how-does-smiling-lower-your-blood-pressure" },
  { title: "Does Smiling Cause Wrinkles?", slug: "does-smiling-cause-wrinkles" },
  { title: "Are Smiles More Attractive than Makeup?", slug: "are-smiles-more-attractive-than-makeup" },
  { title: "How does Smiling Boost Confidence?", slug: "how-does-smiling-boost-confidence" },
  { title: "Why are Smiles More Powerful When Looking at Family?", slug: "why-are-smiles-more-powerful-when-looking-at-family" },
  { title: "How Does Smiling Make You More Grateful?", slug: "how-does-smiling-make-you-more-grateful" },
  { title: "How Does Smiling Boost Energy?", slug: "how-does-smiling-boost-energy" },
  { title: "How Does Smiling Help Us Feel at Peace?", slug: "how-does-smiling-help-us-feel-at-peace" },
  { title: "How Long do You Have to Smile to Receive Health Benefits?", slug: "how-long-do-you-have-to-smile-to-receive-health-benefits" },
];

export default function ArticlesIndex() {
  return (
    <>


        <div className="container-box mt-5 mb-5">
          <h1 className="text-center mb-4">Smile Science Articles</h1>

          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {articles.map((a) => (
              <li key={a.slug} className="mb-3">
                <Link
                  to={`/smilescience/${a.slug}`}
                  className="common-Text"
                  style={{ fontSize: "22px" }}
                >
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
    </>
  );
}
