function openEnvelope() {
  const envelopeContainer = document.getElementById('envelopeContainer');
  const messageContainer = document.getElementById('messageContainer');

  if (envelopeContainer && messageContainer) {
    const envelope = envelopeContainer.querySelector('.envelope');
    
    if (envelope) {
      envelope.classList.add('open');

      setTimeout(() => {
        envelopeContainer.style.display = 'none';
        messageContainer.style.display='block';
      }, 2000); // Match the CSS transition duration
    } else {
      console.error('Envelope element not found.');
    }
  } else {
    console.error('Container elements not found.');
  }
}
