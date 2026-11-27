class BlkoPdp extends HTMLElement{connectedCallback(){if(this.dataset.bound)return;this.dataset.bound="";const document=this;
const all=(selector,root=document)=>[...root.querySelectorAll(selector)];
const money=value=>value||"$48";
const fmt=(amount,currency)=>{const whole=Number.isInteger(amount);try{return new Intl.NumberFormat("en-US",{style:"currency",currency:currency||"USD",minimumFractionDigits:whole?0:2,maximumFractionDigits:whole?0:2}).format(amount)}catch(error){return "$"+amount.toFixed(whole?0:2)}};
const mark=(items,choice)=>items.forEach(item=>{const selected=item===choice;item.classList.toggle("is-active",selected);item.setAttribute("aria-pressed",String(selected))});

/* Shopify: resolve the variant from the chosen options, keep the form, prices, plans and availability in step. */
const sync=product=>{
  const data=product&&product.querySelector("[data-pdp-variants]");if(!data)return;
  let variants;try{variants=JSON.parse(data.textContent||"[]")}catch(error){return}
  const value=selector=>{const choice=product.querySelector(selector+" .is-active");return choice?choice.dataset.pdpValue:undefined};
  const first=value("[data-pdp-shades]"),second=value("[data-pdp-size]");
  const variant=variants.find(item=>(first===undefined||item.option1===first)&&(second===undefined||item.option2===second));
  if(!variant)return;
  const currency=product.dataset.pdpCurrency;
  all('input[name="id"]',product).forEach(input=>input.value=String(variant.id));
  all("[data-pdp-add]",product).forEach(button=>{
    if(button.dataset.pdpHtml===undefined)button.dataset.pdpHtml=button.innerHTML;
    if(variant.available){button.innerHTML=button.dataset.pdpHtml;button.disabled=false}else{button.textContent=product.dataset.pdpSoldOut||"Sold out";button.disabled=true}
  });
  const allocations=variant.selling_plan_allocations||[];
  all("[data-pdp-plan-option]",product).forEach(option=>{
    const plan=option.dataset.pdpSellingPlan;const allocation=plan?allocations.find(item=>String(item.selling_plan_id)===plan):null;
    const cents=plan?(allocation?allocation.price:null):variant.price;if(cents==null)return;
    const label=fmt(cents/100,currency);option.dataset.price=label;const strong=option.querySelector("strong");if(strong)strong.textContent=label;
  });
  const chosen=product.querySelector("[data-pdp-plan-option].is-active");const label=chosen?chosen.dataset.price:fmt(variant.price/100,currency);
  const headline=product.querySelector(".blko-pdp-price strong");if(headline)headline.textContent=fmt(variant.price/100,currency);
  all("[data-pdp-cart-price]",product).forEach(node=>node.textContent=label);all("[data-pdp-sticky-price]",product).forEach(node=>node.textContent=label);
  try{const url=new URL(location.href);url.searchParams.set("variant",String(variant.id));history.replaceState({},"",url)}catch(error){}
};

all("[data-pdp-gallery]").forEach(gallery=>{
  const main=gallery.querySelector("[data-pdp-main-image]")||gallery.querySelector("[data-pdp-zoom]>img");
  all("[data-pdp-thumb]",gallery).forEach(thumb=>thumb.addEventListener("click",()=>{
    if(!main)return;main.src=thumb.dataset.src||main.src;main.removeAttribute("srcset");
    all("[data-pdp-thumb]",gallery).forEach(item=>{const selected=item===thumb;item.classList.toggle("is-active",selected);item.setAttribute("aria-selected",String(selected))});
  }));
  const zoom=()=>gallery.querySelector("[data-pdp-zoom]")?.classList.toggle("is-zoomed");
  gallery.querySelector("[data-pdp-zoom-trigger]")?.addEventListener("click",zoom);
  gallery.querySelector("[data-pdp-zoom]")?.addEventListener("keydown",event=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();zoom()}});
});

all("[data-pdp-shades]").forEach(root=>all("[data-pdp-shade]",root).forEach(choice=>choice.addEventListener("click",()=>{
  mark(all("[data-pdp-shade]",root),choice);
  const name=choice.dataset.pdpShade||"";all("[data-pdp-shade-name]").forEach(label=>label.textContent=name);all("[data-pdp-sticky-shade]").forEach(label=>label.textContent=name);
  sync(root.closest("[data-pdp-product]"));
})));
all("[data-pdp-size]").forEach(root=>all("[data-pdp-size-option]",root).forEach(choice=>choice.addEventListener("click",()=>{
  all("[data-pdp-size-option]",root).forEach(item=>{const selected=item===choice;item.classList.toggle("is-active",selected);item.setAttribute("aria-pressed",String(selected))});
  sync(root.closest("[data-pdp-product]"));
})));
all("[data-pdp-plan]").forEach(root=>all("[data-pdp-plan-option]",root).forEach(choice=>choice.addEventListener("click",()=>{
  mark(all("[data-pdp-plan-option]",root),choice);
  const next=money(choice.dataset.price);all("[data-pdp-cart-price]").forEach(label=>label.textContent=next);all("[data-pdp-sticky-price]").forEach(label=>label.textContent=next);
  const plan=choice.dataset.pdpSellingPlan||"";all('input[name="selling_plan"]').forEach(input=>{input.value=plan;input.disabled=!plan});
})));
all("[data-pdp-add]").forEach(button=>button.addEventListener("click",()=>{
  if(button.form){const quantity=button.form.querySelector('input[name="quantity"]');const output=document.querySelector("[data-quantity-output]");if(quantity&&output)quantity.value=String(Number(output.textContent)||1);return}
  const count=document.querySelector(".blko-bag-count");if(count)count.textContent=String(Number(count.textContent||"0")+1);
}));
all("[data-pdp-product]").forEach(product=>{
  const sticky=product.querySelector("[data-pdp-sticky]");const purchase=product.querySelector("[data-pdp-purchase]");
  if(!sticky||!purchase||!("IntersectionObserver" in window))return;
  new IntersectionObserver(entries=>{const visible=!entries[0].isIntersecting;sticky.classList.toggle("is-visible",visible);sticky.setAttribute("aria-hidden",String(!visible))},{threshold:.15}).observe(purchase);
});
all("[data-pdp-compare]").forEach(compare=>{
  const before=compare.querySelector(".blko-pdp-compare__before");const range=compare.querySelector("[data-pdp-compare-range]");
  range?.addEventListener("input",()=>{if(before)before.style.width=range.value+"%"});
});

all("[data-pdp-review-filters]").forEach(filters=>all("[data-pdp-review-filter]",filters).forEach(filter=>filter.addEventListener("click",()=>{
  const value=filter.dataset.pdpReviewFilter||"all";all("[data-pdp-review-filter]",filters).forEach(item=>item.classList.toggle("is-active",item===filter));
  const root=filters.closest("[data-pdp-reviews]");if(!root)return;
  let count=0;all("[data-pdp-review]",root).forEach(review=>{const visible=value==="all"||(review.dataset.tags||"").split(" ").includes(value);review.hidden=!visible;if(visible)count++});
  const empty=root.querySelector("[data-pdp-no-reviews]");if(empty)empty.hidden=count>0;
})));

/* Shopify: reviews come from the Worker API (GET {base}/reviews?product_id=); the static markup stays when the request fails. */
all("[data-pdp-reviews][data-pdp-api]").forEach(root=>{
  const id=root.dataset.pdpProductId;if(!id||!window.fetch)return;
  const base=(root.dataset.pdpApi||"/apps/blocko").replace(/\/+$/,"");
  const stars=value=>{const n=Math.max(0,Math.min(5,Math.round(value)));return "★".repeat(n)+"☆".repeat(5-n)};
  fetch(base+"/reviews?product_id="+encodeURIComponent(id),{headers:{Accept:"application/json"}}).then(response=>response.ok?response.json():null).then(data=>{
    if(!data||!data.summary||!Array.isArray(data.items))return;
    const count=Number(data.summary.count)||0,avg=Number(data.summary.avg)||0,histogram=data.summary.histogram||{};
    const heading=root.querySelector(".blko-pdp-reviews__summary h2");
    if(heading&&heading.firstChild){heading.firstChild.textContent=(count?avg.toFixed(1):"–")+" ";const span=heading.querySelector("span");if(span)span.textContent=count?stars(avg):""}
    const line=root.querySelector(".blko-pdp-reviews__summary h2 + p");if(line)line.textContent=count?"Based on "+count+" verified review"+(count===1?"":"s"):"No reviews yet";
    root.querySelectorAll(".blko-pdp-rating-bars p").forEach((row,index)=>{
      const percent=count?Math.round((Number(histogram[String(5-index)])||0)/count*100):0;const bar=row.querySelector("i"),label=row.querySelector("b");
      if(bar)bar.style.setProperty("--pdp-rating",percent+"%");if(label)label.textContent=percent+"%";
    });
    const list=root.querySelector("[data-pdp-review-items]");
    if(list){
      list.textContent="";
      data.items.forEach(item=>{
        const article=globalThis.document.createElement("article");article.className="blko-pdp-review";article.setAttribute("data-pdp-review","");article.setAttribute("data-tags","");
        const head=globalThis.document.createElement("div");const rating=globalThis.document.createElement("strong");rating.textContent=stars(item.rating);head.appendChild(rating);
        if(item.verified){const badge=globalThis.document.createElement("span");badge.textContent="Verified buyer";head.appendChild(badge)}
        article.appendChild(head);
        if(item.title){const title=globalThis.document.createElement("h3");title.textContent=item.title;article.appendChild(title)}
        const body=globalThis.document.createElement("p");body.textContent=item.body||"";article.appendChild(body);
        const footer=globalThis.document.createElement("footer");const when=item.created_at?new Date(item.created_at).toLocaleDateString():"";footer.textContent=[item.author,when].filter(Boolean).join(" · ");article.appendChild(footer);
        list.appendChild(article);
      });
    }
    const filters=root.querySelector("[data-pdp-review-filters]");if(filters)filters.style.display="none";
    const empty=root.querySelector("[data-pdp-no-reviews]");if(empty){empty.hidden=data.items.length>0;if(!data.items.length)empty.textContent="No reviews yet."}
  }).catch(()=>{});
});

/* Shopify: product recommendations through the Section Rendering API; the server-rendered fallback stays on failure. */
all("[data-pdp-recs]").forEach(root=>{
  const url=root.dataset.pdpRecs||"";if(url.charAt(0)!=="/"||!window.fetch)return;
  fetch(url).then(response=>response.ok?response.text():"").then(text=>{
    if(!text)return;const next=new DOMParser().parseFromString(text,"text/html").querySelector("[data-pdp-recs-grid]");const grid=root.querySelector("[data-pdp-recs-grid]");
    if(next&&grid&&next.children.length)grid.innerHTML=next.innerHTML;
  }).catch(()=>{});
});

/* Shopify: recently viewed handles live in localStorage and load from /products/<handle>.js; the collection fallback stays when empty. */
all("[data-pdp-recent]").forEach(root=>{
  const handle=root.dataset.pdpRecent||"";let seen=[];
  try{seen=JSON.parse(localStorage.getItem("blko:recent")||"[]");if(handle){seen=[handle].concat(seen.filter(item=>item!==handle)).slice(0,12);localStorage.setItem("blko:recent",JSON.stringify(seen))}}catch(error){}
  const others=seen.filter(item=>item!==handle).slice(0,3);const grid=root.querySelector(".blko-pdp-recent__grid");
  if(!others.length||!grid||!window.fetch)return;
  Promise.all(others.map(item=>fetch("/products/"+encodeURIComponent(item)+".js").then(response=>response.ok?response.json():null).catch(()=>null))).then(products=>{
    const found=products.filter(Boolean);if(!found.length)return;grid.textContent="";
    found.forEach(product=>{
      const card=globalThis.document.createElement("article");card.className="blko-product-card";
      if(product.featured_image){const image=globalThis.document.createElement("img");image.src=product.featured_image+(product.featured_image.includes("?")?"&":"?")+"width=720";image.alt=product.title;card.appendChild(image)}
      const text=globalThis.document.createElement("div");
      const vendor=globalThis.document.createElement("p");vendor.className="blko-eyebrow";vendor.textContent=product.vendor||"";text.appendChild(vendor);
      const title=globalThis.document.createElement("h3");const link=globalThis.document.createElement("a");link.className="blko-product-link";link.href=product.url;link.textContent=product.title;title.appendChild(link);text.appendChild(title);
      const cost=globalThis.document.createElement("strong");cost.className="blko-price";cost.textContent=fmt(product.price/100);text.appendChild(cost);
      card.appendChild(text);grid.appendChild(card);
    });
  });
});

all("[data-pdp-bundle]").forEach(bundle=>{
  const items=all("[data-pdp-bundle-item]",bundle);const count=()=>items.filter(item=>item.classList.contains("is-selected"));
  const currency=bundle.dataset.pdpCurrency;const unit=item=>item.dataset.pdpPriceCents?Number(item.dataset.pdpPriceCents)/100:Number(item.dataset.price||0);
  const update=()=>{
    const selected=count(),subtotal=selected.reduce((sum,item)=>sum+unit(item),0),ready=selected.length===3,total=ready?subtotal*.85:subtotal;
    all("[data-pdp-bundle-count]",bundle).forEach(label=>label.textContent=String(selected.length));
    const progress=bundle.querySelector("[data-pdp-bundle-progress]");if(progress)progress.style.width=(selected.length/3*100)+"%";
    const summary=bundle.querySelector("[data-pdp-bundle-summary]");
    if(summary)summary.textContent=ready?selected.map(item=>item.querySelector("h2")?.textContent||"").join(" · "):"Choose "+(3-selected.length)+" more item"+(selected.length===2?"":"s")+" to unlock your set";
    const price=bundle.querySelector(".blko-pdp-bundle__summary .blko-pdp-price strong");if(price)price.textContent=fmt(Math.round(total),currency);
    const saving=bundle.querySelector("[data-pdp-bundle-saving]");if(saving)saving.textContent=ready?"You save "+fmt(Math.round(subtotal-total),currency)+" on this set.":"Save 15% when your three picks are ready.";
    const add=bundle.querySelector("[data-pdp-bundle-add]");if(add){add.disabled=!ready;add.textContent=ready?"Add set to bag":"Add 3 items to bag"}
  };
  items.forEach(item=>{
    const toggle=item.querySelector("[data-pdp-bundle-toggle]");if(!toggle)return;toggle.dataset.pdpLabel=toggle.textContent||"Add";
    toggle.addEventListener("click",()=>{
      const selected=item.classList.contains("is-selected");if(!selected&&count().length>=3)return;
      item.classList.toggle("is-selected",!selected);toggle.setAttribute("aria-pressed",String(!selected));toggle.textContent=selected?toggle.dataset.pdpLabel:(toggle.dataset.pdpRemove||"Remove");update();
    });
  });
  /* Shopify: add the three picked variants with the Ajax Cart API, then open the cart. */
  bundle.querySelector("[data-pdp-bundle-add]")?.addEventListener("click",event=>{
    if(!bundle.hasAttribute("data-pdp-live"))return;const add=event.currentTarget;if(add.disabled)return;
    const lines=count().map(item=>({id:Number(item.dataset.pdpVariant),quantity:1})).filter(line=>line.id);if(lines.length!==3)return;
    add.disabled=true;
    fetch(bundle.dataset.pdpCartAdd||"/cart/add.js",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({items:lines})}).then(response=>{if(!response.ok)throw new Error("cart");location.href=bundle.dataset.pdpCart||"/cart"}).catch(()=>{add.disabled=false;add.textContent="Could not add the set, try again"});
  });
  update();
});
}}if(!customElements.get('blko-pdp'))customElements.define('blko-pdp',BlkoPdp);