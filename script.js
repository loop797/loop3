document.addEventListener('DOMContentLoaded', function() {
  const musicButton = document.querySelector('.music-btn');
  const discordButton = document.querySelector('.discord-btn');

  musicButton.addEventListener('click', function() {
      alert('Music toggle functionality goes here!');
  });

  discordButton.addEventListener('click', function() {
      window.open('https://discord.gg/DVTbMPnF', '_blank');
  });
});
