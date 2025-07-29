export default function decorate(block, { messageType }) {
  let text = '';

  switch (messageType) {
    case 'greeting':
      text = 'Ciao, benvenuto!';
      break;
    case 'confirmation':
      text = 'La tua richiesta è stata confermata.';
      break;
    default:
      text = 'Seleziona una tipologia di messaggio.';
  }

  block.innerHTML = `<p>${text}</p>`;
}