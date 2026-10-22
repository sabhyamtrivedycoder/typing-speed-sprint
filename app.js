function calculateWPM(chars, elapsedSec) {
  if (elapsedSec <= 0) return 0;
  const words = chars / 5;
  return Math.round((words / elapsedSec) * 60);
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('typeInput');
    const wpmEl = document.getElementById('wpm');
    let startT = null;

    input.addEventListener('input', () => {
      if (!startT) startT = performance.now();
      const sec = (performance.now() - startT) / 1000;
      wpmEl.textContent = calculateWPM(input.value.length, sec);
    });
  });
}
if (typeof module !== 'undefined') module.exports = { calculateWPM };
