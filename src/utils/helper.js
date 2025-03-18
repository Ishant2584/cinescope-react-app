export function getMintoDuration(min) {
  const hours = Math.floor(min / 60);
  const remainingMinutes = min % 60;

  return `${hours} Hrs ${remainingMinutes} Min`;
}
