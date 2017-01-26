document.addEventListener('DOMContentLoaded', () => {

  new LoadHolidays();

  setInterval(() => {
    new LoadHolidays();
  }, 60000);
});

class LoadHolidays {
  constructor() {
    this.loadHolidays();
  }

  extractPeoplesEmail(email) {
    return email.replace('@endouble.com', '');
  }

  renderMessages(message) {
    const messageContainer = document.createElement('div');
    messageContainer.className = 'holiday-message';
    messageContainer.innerHTML = message;

    return messageContainer;
  }

  renderHolidayListItem(hollidayItem) {
    const container = document.createElement('div');
    const name = document.createElement('div');

    name.className = 'holiday-list-name';

    name.innerHTML = hollidayItem.creator.displayName || this.extractPeoplesEmail(hollidayItem.creator.email);
    container.appendChild(name);

    return container;
  }

  buildHolidaysList(response) {
    const fragment = document.createDocumentFragment();
    const pageContainer = document.querySelector('.holidays-container');
    if (response.readyState === 4 && response.status === 200) {
      const data = JSON.parse(response.responseText);
      if (data.message) {
        fragment.appendChild(this.renderMessages(data.message));
      } else {
        for (var i = 0; i < data.length; i++) {
          fragment.appendChild(this.renderHolidayListItem(data[i]));
        }
      }
    }
    pageContainer.innerHTML = '';
    pageContainer.appendChild(fragment);
  }

  loadHolidays() {

    const req = new XMLHttpRequest();

    req.open('GET', '/holidays', true);
    req.onreadystatechange = (res) => this.buildHolidaysList(res.target);
    req.send();
  }
}
