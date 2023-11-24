/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
// Add event listeners
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgressBar);
progress.addEventListener('click', setProgressBar);
volume.addEventListener('input', setVolume);
playbackSpeed.addEventListener('input', setPlaybackSpeed);
skipButtons.forEach(button => button.addEventListener('click', skip));
backwardButton.addEventListener('click', backward);
forwardButton.addEventListener('click', forward);

// Function to toggle play/pause
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

// Function to update the progress bar
function updateProgressBar() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

// Function to set progress bar on click
function setProgressBar(e) {
  const newTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = newTime;
}

// Function to set volume
function setVolume() {
  video.volume = volume.value;
}

// Function to set playback speed
function setPlaybackSpeed() {
  video.playbackRate = playbackSpeed.value;
}

// Function to skip forward or backward
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Function to skip backward by 10 seconds
function backward() {
  video.currentTime -= 10;
}

// Function to skip forward by 25 seconds
function forward() {
  video.currentTime += 25;
}