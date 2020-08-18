export default function Circle({ radius=50 }={}) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = radius * 2 + 2;
  canvas.height = radius * 2 + 2;
  ctx.beginPath();
  ctx.arc(radius + 1, radius + 1, radius, 0, 2 * Math.PI)
  ctx.stroke();
  return canvas;
}