'use client';

import { useState } from 'react';

const story = {
  start: {
    text: "You wake up in a quiet forest at dawn. The air smells of earth and rain. Two paths lie ahead.",
    choices: [
      { text: "Follow the sunlit path", next: "sunlit" },
      { text: "Take the shadowed trail", next: "shadow" }
    ]
  },
  sunlit: {
    text: "The path opens into a meadow full of wildflowers. A small fox watches you from the grass.",
    choices: [
      { text: "Approach the fox gently", next: "fox" },
      { text: "Keep walking toward the hills", next: "hills" }
    ]
  },
  shadow: {
    text: "The trail grows darker. You hear water nearby. A wooden bridge appears over a misty stream.",
    choices: [
      { text: "Cross the bridge", next: "bridge" },
      { text: "Follow the stream downstream", next: "stream" }
    ]
  },
  fox: {
    text: "The fox leads you to a hidden grove. In the center sits a glowing stone. You feel calm.",
    choices: [
      { text: "Touch the stone", next: "ending_magic" },
      { text: "Sit and rest", next: "ending_peace" }
    ]
  },
  hills: {
    text: "From the hills you see a distant village. Smoke rises from chimneys. Someone is waiting.",
    choices: [
      { text: "Walk to the village", next: "ending_village" },
      { text: "Turn back to the forest", next: "start" }
    ]
  },
  bridge: {
    text: "Halfway across, the mist clears. An old man stands on the other side, smiling.",
    choices: [
      { text: "Speak with him", next: "ending_wisdom" },
      { text: "Bow and continue", next: "ending_journey" }
    ]
  },
  stream: {
    text: "The stream leads to a quiet pool. The water is clear. Your reflection looks different.",
    choices: [
      { text: "Look closer", next: "ending_reflection" },
      { text: "Drink from the pool", next: "ending_peace" }
    ]
  },
  ending_magic: {
    text: "The stone warms in your hand. The forest feels alive. You are no longer just a visitor. The End.",
    choices: [{ text: "Start again", next: "start" }]
  },
  ending_peace: {
    text: "You rest. Time slows. When you open your eyes, the path feels lighter. The End.",
    choices: [{ text: "Start again", next: "start" }]
  },
  ending_village: {
    text: "The villagers welcome you. You stay for a night. In the morning, the road continues. The End.",
    choices: [{ text: "Start again", next: "start" }]
  },
  ending_wisdom: {
    text: "The old man shares a story. You listen. When he finishes, the mist is gone. The End.",
    choices: [{ text: "Start again", next: "start" }]
  },
  ending_journey: {
    text: "You walk on. The forest opens. Somewhere ahead, another path waits. The End.",
    choices: [{ text: "Start again", next: "start" }]
  },
  ending_reflection: {
    text: "Your reflection smiles back. You understand something you cannot name. The End.",
    choices: [{ text: "Start again", next: "start" }]
  }
};

export default function Story() {
  const [node, setNode] = useState('start');
  const current = story[node];

  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '60px 24px', minHeight: '100vh' }}>
      <h1 style={{ fontSize: 28, fontWeight: 400, marginBottom: 8, letterSpacing: '-0.02em' }}>
        The Quiet Path
      </h1>
      <p style={{ opacity: 0.6, marginBottom: 40, fontSize: 14 }}>Choose your way</p>

      <div style={{ 
        background: 'white', 
        padding: 32, 
        borderRadius: 12, 
        boxShadow: '0 4px 24px rgba(20,17,14,0.06)',
        marginBottom: 28,
        lineHeight: 1.7,
        fontSize: 18
      }}>
        {current.text}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {current.choices.map((choice, i) => (
          <button
            key={i}
            onClick={() => setNode(choice.next)}
            style={{
              padding: '14px 20px',
              background: '#e39a3c',
              border: 'none',
              borderRadius: 8,
              color: '#14110e',
              fontSize: 16,
              cursor: 'pointer',
              textAlign: 'left',
              fontFamily: 'inherit',
              transition: 'transform 0.15s, box-shadow 0.15s'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            {choice.text}
          </button>
        ))}
      </div>

      <footer style={{ marginTop: 60, textAlign: 'center', opacity: 0.5, fontSize: 13 }}>
        Made with care for Azlan 💛
      </footer>
    </div>
  );
}