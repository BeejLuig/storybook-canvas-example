export default function button({ label='', onClick=()=>{} }={}) {
  const btn = document.createElement('button');
  btn.textContent = label;
  btn.addEventListener('click', onClick);
  return btn;
}