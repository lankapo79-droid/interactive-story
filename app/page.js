'use client';

import { useState } from 'react';

const story = {
  start: {
    text: "You wake up in a quiet forest at dawn. Soft light filters through the trees. Two paths lie ahead.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    choices: [
      { text: "Follow the sunlit path", next: "sunlit" },
      { text: "Take the shadowed trail", next: "shadow" }
    ]
  },
  sunlit: {
    text: "The path opens into a golden meadow. A beautiful woman in a simple dress sits among the wildflowers, smiling softly at you.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    choices: [
      { text: "Walk toward her", next: "meet_her" },
      { text: "Stay and watch from afar", next: "watch" }
    ]
  },
  shadow: {
    text: "The trail grows quieter. By the stream, you see her again — or is it the same woman? She looks up, eyes gentle.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    choices: [
      { text: "Approach and say hello", next: "meet_her" },
      { text: "Sit beside the water", next: "stream_quiet" }
    ]
  },
  meet_her: {
    text: "She stands as you near. \"I was hoping someone would come,\" she says softly. Her hand brushes yours.",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80",
    choices: [
      { text: "Take her hand", next: "love_hold" },
      { text: "Ask her name", next: "love_talk" }
    ]
  },
  watch: {
    text: "You watch her gather flowers. She notices you and waves, then walks closer with a quiet smile.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    choices: [
      { text: "Wave back and meet her", next: "meet_her" },
      { text: "Continue on your way", next: "hills" }
    ]
  },
  stream_quiet: {
    text: "You sit. She comes to sit beside you. The only sound is the water and her quiet breathing.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
    choices: [
      { text: "Lean closer", next: "love_close" },
      { text: "Just stay in the silence", next: "ending_peace" }
    ]
  },
  love_hold: {
    text: "Her fingers intertwine with yours. She looks at you like the forest just became warmer. \"Stay with me a while?\"",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
    choices: [
      { text: "Kiss her gently", next: "ending_kiss" },
      { text: "Pull her into an embrace", next: "love_deeper" },
      { text: "Whisper that you want more", next: "love_intimate" }
    ]
  },
  love_talk: {
    text: "\"My name is Lina,\" she says. \"And you feel like someone I've been waiting for.\" She steps closer, eyes dark with something soft.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
    choices: [
      { text: "Tell her your name and lean in", next: "love_close" },
      { text: "Smile and take her hand", next: "love_hold" },
      { text: "Ask if she wants to stay longer", next: "love_intimate" }
    ]
  },
  love_close: {
    text: "She rests her forehead against yours. The world feels small and perfect. Her lips are close, breathing warm.",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80",
    choices: [
      { text: "Kiss her", next: "ending_kiss" },
      { text: "Hold her close", next: "love_deeper" },
      { text: "Let the moment deepen", next: "love_intimate" }
    ]
  },
  love_deeper: {
    text: "You pull her against you. She sighs into your neck. Her hands slide up your back. The forest fades.",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
    choices: [
      { text: "Kiss her deeper", next: "ending_passionate" },
      { text: "Lay down with her in the grass", next: "love_intimate" }
    ]
  },
  love_intimate: {
    text: "She looks at you with open eyes. \"Come here,\" she whispers. You sink down together among the flowers. Her skin is warm under your hands.",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80",
    choices: [
      { text: "Kiss her slowly, everywhere", next: "ending_passionate" },
      { text: "Just hold her like this", next: "ending_tender" }
    ]
  },
  hills: {
    text: "From the hills the meadow looks peaceful. You wonder if she's still there, waiting.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    choices: [
      { text: "Go back to find her", next: "sunlit" },
      { text: "Continue walking", next: "ending_journey" }
    ]
  },
  ending_kiss: {
    text: "You kiss her slowly. She melts into you, fingers in your hair. The forest holds its breath. Some paths are meant to be shared. The End.",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
    choices: [{ text: "Start again", next: "start" }]
  },
  ending_passionate: {
    text: "The kiss deepens. Clothes shift. The grass is cool beneath you both. She whispers your name like a secret. Time disappears. The End.",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80",
    choices: [{ text: "Start again", next: "start" }]
  },
  ending_tender: {
    text: "You hold her close, skin to skin, hearts slow. No rush. Just the two of you and the quiet forest. The End.",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
    choices: [{ text: "Start again", next: "start" }]
  },
  ending_peace: {
    text: "You rest together in the quiet. Sometimes love is just staying. The End.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
    choices: [{ text: "Start again", next: "start" }]
  },
  ending_journey: {
    text: "You walk on, but her smile and the warmth of her stay with you. Some meetings change the path forever. The End.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    choices: [{ text: "Start again", next: "start" }]
  }
};

export default function Story() {
  const [node, setNode] = useState('start');
  const current = story[node];

  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '40px 20px', minHeight: '100vh' }}>
      <h1 style={{ fontSize: 26, fontWeight: 400, marginBottom: 4 }}>The Quiet Path</h1>
      <p style={{ opacity: 0.6, marginBottom: 24, fontSize: 14 }}>A story with choices · and love</p>

      {current.image && (
        <img 
          src={current.image} 
          alt="" 
          style={{ 
            width: '100%', 
            height: 280, 
            objectFit: 'cover', 
            borderRadius: 12, 
            marginBottom: 20,
            boxShadow: '0 4px 20px rgba(20,17,14,0.1)'
          }} 
        />
      )}

      <div style={{ 
        background: 'white', 
        padding: 28, 
        borderRadius: 12, 
        boxShadow: '0 4px 24px rgba(20,17,14,0.06)',
        marginBottom: 24,
        lineHeight: 1.7,
        fontSize: 17
      }}>
        {current.text}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {current.choices.map((choice, i) => (
          <button
            key={i}
            onClick={() => setNode(choice.next)}
            style={{
              padding: '14px 18px',
              background: '#e39a3c',
              border: 'none',
              borderRadius: 8,
              color: '#14110e',
              fontSize: 15.5,
              cursor: 'pointer',
              textAlign: 'left',
              fontFamily: 'inherit'
            }}
          >
            {choice.text}
          </button>
        ))}
      </div>

      <footer style={{ marginTop: 48, textAlign: 'center', opacity: 0.5, fontSize: 13 }}>
        Made with love for Azlan 💛
      </footer>
    </div>
  );
}