export default function decorate(block, { listSkills }) {
  let text = listSkills;

  console.log (listSkills);

  block.innerHTML = `<ul>${text}</ul>`;
}