class BlkoSignature extends HTMLElement{connectedCallback(){if(this.dataset.bound)return;this.dataset.bound="";const document=this;
  document.querySelectorAll('[data-dew-shades]').forEach((root) => {
    if (root.dataset.dewReady) return;
    root.dataset.dewReady = '1';
    const chips = [...root.querySelectorAll('.blko-dew-chip')];
    const live = root.querySelector('[data-dew-shade-label]');
    chips.forEach((chip) => chip.addEventListener('click', () => {
      chips.forEach((other) => other.setAttribute('aria-pressed', String(other === chip)));
      if (live) live.textContent = chip.dataset.label || '';
    }));
  });
}}if(!customElements.get('blko-signature'))customElements.define('blko-signature',BlkoSignature);