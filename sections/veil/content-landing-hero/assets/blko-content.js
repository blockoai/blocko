class BlkoContent extends HTMLElement{connectedCallback(){if(this.dataset.bound)return;this.dataset.bound="";const document=this;
      const root = document;
      root.querySelectorAll('.blko-content-faq-item').forEach((item) => {
        const trigger = item.querySelector('[data-content-faq-trigger]');
        trigger?.addEventListener('click', () => {
          const open = item.classList.toggle('is-open');
          trigger.setAttribute('aria-expanded', String(open));
        });
      });
      root.querySelectorAll('[data-content-faq]').forEach((faq) => {
        const search = faq.querySelector('[data-content-faq-search]');
        const tabs = [...faq.querySelectorAll('[data-content-faq-tab]')];
        const items = [...faq.querySelectorAll('[data-content-faq-item]')];
        const empty = faq.querySelector('[data-content-faq-empty]');
        let category = 'all';
        const filter = () => {
          const query = String(search?.value || '').trim().toLowerCase();
          let count = 0;
          items.forEach((item) => {
            const matchesCategory = category === 'all' || item.dataset.contentCategory === category;
            const matchesQuery = !query || item.textContent.toLowerCase().includes(query);
            const show = matchesCategory && matchesQuery;
            item.hidden = !show;
            if (show) count += 1;
          });
          if (empty) empty.hidden = count !== 0;
        };
        search?.addEventListener('input', filter);
        tabs.forEach((tab) => tab.addEventListener('click', () => {
          category = tab.dataset.contentFaqTab || 'all';
          tabs.forEach((candidate) => candidate.setAttribute('aria-selected', String(candidate === tab)));
          filter();
        }));
      });
      root.querySelectorAll('[data-content-form]').forEach((form) => form.addEventListener('submit', (event) => {
        event.preventDefault();
        const status = form.querySelector('[data-content-form-status]');
        if (!form.checkValidity()) {
          status.textContent = 'Please complete the required fields before sending your message.';
          form.reportValidity();
          return;
        }
        status.textContent = 'Thanks — your message is ready to send.';
        form.reset();
      }));
    }}if(!customElements.get('blko-content'))customElements.define('blko-content',BlkoContent);