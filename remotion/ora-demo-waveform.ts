// Real RMS amplitude peaks (0-1, 64 buckets) extracted from
// public/audio/ora-demo.mp3, so the waveform bars trace the actual
// recording instead of a decorative animation. Regenerate with:
//   ffmpeg -y -i public/audio/ora-demo.mp3 -ac 1 -ar 8000 -f s16le -acodec pcm_s16le /tmp/ora-demo.pcm
// then bucket the PCM into 64 chunks and take the normalized RMS of each.
export const ORA_DEMO_WAVEFORM_PEAKS = [
  0.796, 0.626, 0.647, 0.932, 0.518, 0.697, 0.701, 0.656, 1, 0.564, 0.666, 0.485, 0.398, 0.628,
  0.618, 0.714, 0.694, 0.448, 0.42, 0.356, 0.466, 0.657, 0.717, 0.538, 0.767, 0.565, 0.722, 0.101,
  0.592, 0.761, 0.804, 0.525, 0.442, 0.564, 0.552, 0.665, 0.704, 0.474, 0.758, 0.002, 0.332, 0.515,
  0.656, 0.71, 0.642, 0.572, 0.77, 0.746, 0.561, 0.594, 0.177, 0.499, 0.487, 0.496, 0.58, 0.788,
  0.704, 0.677, 0.402, 0.409, 0.522, 0.697, 0.114, 0.399,
]
