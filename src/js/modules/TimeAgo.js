function TimeAgo(date) {
  function render(n, unit) {
    return `${n} ${unit}${n === 1 ? '' : 's'} ago`;
  }

  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = Math.floor(seconds / (60 * 60 * 24 * 30 * 365));
  if (Math.floor(seconds / (60 * 60 * 24 * 30 * 365)) >= 1) {
    return render(interval, 'year');
  }
  interval = Math.floor(seconds / (60 * 60 * 24 * 30));
  if (interval >= 1) {
    return render(interval, 'month');
  }
  interval = Math.floor(seconds / (60 * 60 * 24));
  if (interval >= 1) {
    return render(interval, 'day');
  }
  interval = Math.floor(seconds / (60 * 60));
  if (interval >= 1) {
    return render(interval, 'hour');
  }
  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    return render(interval, 'minute');
  }
  interval = Math.floor(seconds);
  return render(interval, 'second');
}

const dateTime = document.querySelectorAll('#js-posted-on');
const postedAgo = document.querySelectorAll('#js-posted-ago');

for (let i = 0; i < dateTime.length; i++) {
  postedAgo[i].innerHTML = TimeAgo(Date.parse(dateTime[i].getAttribute('datetime')));
}

export default TimeAgo;
