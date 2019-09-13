export default function toPercent(number, float) {
  const percent = parseFloat(number * 100).toFixed(float)
  return percent
}
