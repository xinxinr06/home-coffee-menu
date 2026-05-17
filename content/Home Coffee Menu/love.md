---
title: 💝
---

<div class="love-overlay" id="loveOverlay">
  <div class="love-center">
    <div class="big-heart">💝</div>
  </div>
  <div id="heartsContainer"></div>
</div>

<script>
(function() {
  const container = document.getElementById('heartsContainer');
  const emojis = ['❤️','💕','💖','💗','💓','💝','💘','💞','🧡','💛','💚','💙','💜','🩷','🩶'];

  function spawnHeart() {
    const el = document.createElement('span');
    el.className = 'raining-heart';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = (Math.random() * 96) + 'vw';
    el.style.fontSize = (1.2 + Math.random() * 2.4) + 'rem';
    const dur = 4 + Math.random() * 5;
    el.style.animationDuration = dur + 's';
    el.style.animationDelay = (Math.random() * 1.5) + 's';
    container.appendChild(el);
    setTimeout(() => el.remove(), (dur + 2) * 1000);
  }

  for (let i = 0; i < 30; i++) setTimeout(spawnHeart, i * 80);
  setInterval(spawnHeart, 350);
})();
</script>

<style>
.love-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: linear-gradient(160deg, #ffe4f0 0%, #ffd6e8 30%, #fff0fa 60%, #ffecd2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

#heartsContainer {
  position: fixed;
  inset: 0;
  pointer-events: none;
}

.raining-heart {
  position: absolute;
  top: -60px;
  animation: fallDown linear forwards;
  user-select: none;
  opacity: 0.9;
}

@keyframes fallDown {
  0%   { transform: translateY(0) rotate(0deg) scale(1);   opacity: 0.95; }
  80%  { opacity: 0.7; }
  100% { transform: translateY(110vh) rotate(480deg) scale(0.6); opacity: 0; }
}

.love-center {
  position: relative;
  z-index: 10;
  text-align: center;
  pointer-events: none;
}

.big-heart {
  font-size: 9rem;
  animation: heartbeat 0.9s ease-in-out infinite;
  filter: drop-shadow(0 0 24px rgba(255,80,120,0.55));
  line-height: 1;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  14%       { transform: scale(1.25); }
  28%       { transform: scale(1); }
  42%       { transform: scale(1.15); }
  56%       { transform: scale(1); }
}
</style>
