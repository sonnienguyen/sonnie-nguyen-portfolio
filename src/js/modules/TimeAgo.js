class TimeAgo {
  constructor() {
    this.dateTime = document.querySelectorAll('#js-posted-on');
    this.postedAgo = document.querySelectorAll('#js-posted-ago');
    this.date();
  }

  date() {
    for (let i = 0; i < this.dateTime.length; i++) {
      this.postedAgo[i].innerHTML = this.convertToSeconds(Date.parse(this.dateTime[i].getAttribute('datetime')));
    }
  }

  convertToSeconds(date) {
    this.seconds = Math.floor((new Date() - date) / 1000);
    this.interval = Math.floor(this.seconds / 31536000);

    if (this.interval >= 1) {
      return this.render(this.interval, 'year');
    }
    this.interval = Math.floor(this.seconds / 86400);
    if (this.interval >= 1) {
      return this.render(this.interval, 'day');
    }
    this.interval = Math.floor(this.seconds / 3600);
    if (this.interval >= 1) {
      return this.render(this.interval, 'hour');
    }
    this.interval = Math.floor(this.seconds / 60);
    if (this.interval >= 1) {
      return this.render(this.interval, 'minute');
    }
    this.interval = Math.floor(this.seconds);
    return this.render(this.interval, 'second');
  }

  render(n, unit) {
    this.unit = unit;
    this.n = n;
    return `${this.n} ${this.unit}${this.n === 1 ? '' : 's'} ago`;
  }
}

export default TimeAgo;
