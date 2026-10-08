class BlkoTwistSignature extends HTMLElement{connectedCallback(){if(this.dataset.bound)return;this.dataset.bound="";const document=this;
      if (customElements.get('blko-fbt')) return;
      customElements.define('blko-fbt', class extends HTMLElement {
        connectedCallback() {
          const items = () => [...this.querySelectorAll('[data-fbt-item]')];
          const total = this.querySelector('[data-fbt-total]');
          const currency = this.dataset.currency || 'USD';
          const value = (box) => box.dataset.cents ? Number(box.dataset.cents) / 100 : Number(box.dataset.price || 0);
          const render = () => {
            const sum = items().filter((box) => box.checked).reduce((acc, box) => acc + value(box), 0);
            if (total) total.textContent = new Intl.NumberFormat(undefined, { style: 'currency', currency }).format(sum);
          };
          this.addEventListener('change', render);
          this.querySelector('[data-fbt-add]')?.addEventListener('click', async () => {
            const url = this.dataset.cartAdd;
            if (!url) return;
            const lines = items().filter((box) => box.checked && box.dataset.variant).map((box) => ({ id: Number(box.dataset.variant), quantity: 1 }));
            if (!lines.length) return;
            try { await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ items: lines }) }); window.location.href = '/cart'; } catch (error) { /* keep page usable */ }
          });
          render();
        }
      });
    }}if(!customElements.get('blko-twist-signature'))customElements.define('blko-twist-signature',BlkoTwistSignature);