export default function decorate(block, { skills }) {
  let text = skills;

  console.log (text);

  block.innerHTML = `<ul>${text}</ul>`;
}