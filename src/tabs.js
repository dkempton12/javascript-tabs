// select elements
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('.tabButton');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));
console.log(tabs, tabButtons, tabPanels);

const handleTabButtonClick = (event) => {
  // unselect all buttons
  tabButtons.forEach((button) => {
    button.setAttribute('aria-selected', false);
  });
  // set targeted button as selected
  event.target.setAttribute('aria-selected', true);

  // hide all tabpanels
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });

  // grab reference to the button id
  const { id } = event.target;
  // Find tabpanel where its aria-labelledby attribute is equal to the corresponding button id
  const findTabPanel = tabPanels.find(
    (panel) => panel.getAttribute('aria-labelledby') === id
  );
  findTabPanel.hidden = false;
};

tabButtons.forEach((button) =>
  button.addEventListener('click', handleTabButtonClick)
);
