/* Add any JavaScript you need to this file. */
const productsInfo = products.reduce((acc, cur) => {
  if (!acc[cur['category']]) {
    acc[cur['category']] = [];
  }
  acc[cur['category']].push(cur);
  return acc;
}, {});

const proContent = document.querySelector('.products .content');
const cateNav = document.querySelector('.category-nav');
const cateArr = Object.keys(productsInfo);
const cateFragment = document.createDocumentFragment();
cateArr.forEach(item => {
  const li = document.createElement('li');
  li.innerHTML = `<a href="#${item}">${item}</a>`;
  cateFragment.appendChild(li);
});
cateNav.appendChild(cateFragment);
for (const key in productsInfo) {
  const fragment = document.createDocumentFragment();
  const proDetails = document.createElement('div');
  proDetails.className = 'products-details';
  proDetails.name = key;
  proDetails.id = key;
  const proHead = document.createElement('div');
  proHead.className = 'proHead';
  const proList = document.createElement('ul');
  proList.className = 'products-list';
  proHead.innerHTML = `<span class="line left-line"></span>
  <div class="category-title">
    <h1>${key}</h1>
  </div>
  <span class="line right-line"></span>`;

  productsInfo[key].forEach(item => {
    const liEle = document.createElement('li');
    liEle.innerHTML = `
    <a href="javascript:" data-name='${item.name}'>
      <img src="${item.imageUrl}" alt="" />
      <div class="title">
        <p class="product-name">[${item.name}]</p>
        <p class="product-desc">${item.description}</p>
        <p><span class="price">＄${item.price}</span></p>
      </div>
    </a>`;
    proList.appendChild(liEle);
  });
  proDetails.appendChild(proHead);
  proDetails.appendChild(proList);
  fragment.appendChild(proDetails);
  proContent.appendChild(fragment);
}

const aEles = document.querySelectorAll('.products-details a');
const itemImg = document.querySelector('.left-item-img img');
const itemName = document.querySelector('.item-name');
const itemDesc = document.querySelector('.item-desc');
const itemPrice = document.querySelector('.item-price');
const increment = document.querySelector('.increment');
const decrement = document.querySelector('.decrement');
const count = document.querySelector('.count');
aEles.forEach(item => {
  item.addEventListener(
    'click',
    function() {
      const name = this.dataset.name;
      const result = products.find(item => item.name === name);
      itemImg.src = result.imageUrl;
      itemName.innerHTML = result.name;
      itemDesc.innerHTML = result.description;
      itemPrice.innerHTML = '＄' + result.price;
      document.querySelector('.cover').style.display = 'block';
    },
    false
  );
});
decrement.addEventListener('click', function() {
  if (count.innerHTML === '0') {
    return 0;
  }
  count.innerHTML = parseInt(count.innerHTML) - 1;
});
increment.addEventListener('click', function() {
  count.innerHTML = parseInt(count.innerHTML) + 1;
});

document.querySelector('.cover').onclick = function(e) {
  if (e.target.className === 'cover') {
    this.style.display = 'none';
  }
};
