export default function decorate(block, { listSkills }) {
  let text = listSkills[0];

  console.log (listSkills[0]);

  block.innerHTML = `<ul>${text}</ul>`;
}