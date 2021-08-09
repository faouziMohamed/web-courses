export function handleEmptyLinks() {
  document.querySelectorAll("a[href='#']").forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });
}

export function configureBurgerMenu() {
  const burgerCheck = document.querySelector('.burger-check');
  const tableOfContent = document.querySelector('.app-table-of-content');
  const mainContentContainer = document.querySelector('.content-wrapper');
  if (!(burgerCheck && tableOfContent && mainContentContainer)) {
    return;
  }

  // Set closed by default the table of content when screen is less than 675px
  // burgerCheck is a checkbox hidden(input)
  burgerCheck.checked = false;
  tableOfContent.classList.add('table-of-content-closed');

  // TOC = Table of Contents
  burgerCheck.addEventListener('change', function openAndCloseTOC() {
    tableOfContent.classList.toggle('table-of-content-closed');
  });

  mainContentContainer.addEventListener('click', function closeTOC() {
    tableOfContent.classList.add('table-of-content-closed');
    burgerCheck.checked = false;
  });
}

export function insertAfter(elToInsert, reference) {
  reference.parentNode.insertBefore(elToInsert, reference.nextSibling);
}

export function createTableOfContent() {
  const tableOfContent = document.querySelector('#table-of-content-list');
  if (!tableOfContent) {
    return;
  }

  addTableOfContentHeading(tableOfContent);
  addTableOfContentData(tableOfContent);
}

function setSectionsTitleClassName(titleClassName) {
  document.querySelectorAll('.main-section :is(h2, h3, h4)').forEach((h) => {
    h.classList.add(
      [`${titleClassName}`],
      [`${titleClassName}-${h.nodeName.toLowerCase()}`],
    );
  });
}

function addTableOfContentData(tableOfContent) {
  const titleClassName = 'section-title';
  setSectionsTitleClassName(titleClassName);

  const allTitles = document.querySelectorAll(`.${titleClassName}`);
  allTitles.forEach((title, index) => {
    appendTitleToTOC(tableOfContent, title, index);
  });
}

function appendTitleToTOC(ul, node, index) {
  const id = `titre${index + 1}`;
  const level = node.nodeName.toLowerCase();
  node.id = id;
  const a = newElement(
    'a',
    {
      class: `table-of-content-link toc-${level}`,
      href: `#${id}`,
    },
    node.innerText,
  );
  const li = newElement('li', { class: `toc-li` });
  li.appendChild(a);
  ul.appendChild(li);
  return li;
}

function addTableOfContentHeading(tableOfContent) {
  const mainTitle = document.querySelector('.main-title');
  const id = 'top-h1';
  mainTitle.id = id;
  const tocHeading = newElement('h2', { class: 'toc-page-title' });
  const titleContent = mainTitle.firstChild.data;
  const titleAttribute = {
    class: 'toc-page-title-anchor',
    href: `#${id}`,
  };
  const titleAnchor = newElement('a', titleAttribute, titleContent);
  tocHeading.appendChild(titleAnchor);
  tableOfContent.parentNode.insertBefore(tocHeading, tableOfContent);
}

export function newElement(name, attributes = {}, text = '') {
  const node = document.createElement(name);
  const keys = Object.getOwnPropertyNames(attributes);
  keys.forEach((key) => {
    node.setAttribute(`${key}`, attributes[`${key}`]);
  });

  if (text) {
    node.appendChild(newTxtNode(text));
  }
  return node;
}

function newTxtNode(text) {
  return document.createTextNode(text);
}
