// The page is a complete CV without JavaScript. This adds a small side quest.
const rollButton = document.querySelector('[data-roll]');
const rollBox = document.getElementById('project-roll');

if (rollButton && rollBox) {
  const projects = [...document.querySelectorAll('.project-card')];
  const dieValue = document.getElementById('die-value');
  const result = document.getElementById('roll-result');
  const link = document.getElementById('loot-link');

  if (projects.length && dieValue && result && link) {
    rollBox.hidden = false;

    rollButton.addEventListener('click', () => {
      const roll = Math.floor(Math.random() * 20) + 1;
      const project = projects[Math.floor((roll - 1) * projects.length / 20)];
      const name = project.querySelector('h3').textContent.replace('↗', '').trim();

      dieValue.textContent = String(roll);
      result.textContent = `${roll === 20 ? 'Natural 20!' : `You rolled ${roll}.`} Found: ${name}.`;
      link.href = `#${project.id}`;
      link.textContent = `Inspect ${name} ↓`;
      link.hidden = false;
      rollBox.classList.toggle('critical', roll === 20);
    });
  }
}
