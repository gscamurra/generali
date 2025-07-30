export default function decorate(block, { listSkills }) {
  let text = listSkills;


  block.innerHTML = `<ul>${text}</ul>`;
}