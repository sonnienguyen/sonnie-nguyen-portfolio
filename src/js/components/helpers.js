import ago from 's-ago';

/**
 * Shortcut for `querySelector`.
 *
 * @param {String} selector
 * @param {Element} [scope] (optional)
 * @returns {Element}
 */

export function qs(selector, scope) {
  return (scope || document).querySelector(selector);
}

/**
 * Shortcut for `querySelectorAll`.
 *
 * @param {String} selector
 * @param {Element} [scope] (optional)
 * @returns {Element}
 */

export function qsa(selector, scope) {
  return (scope || document).querySelectorAll(selector);
}

/**
 * Returns `datetime` into human readable.
 *
 * @param {Array} dates
 */

export function humanizeDate(dates) {
  return dates
    .map(date => new Date(date.getAttribute('datetime')))
    .map(date => ago(date));
}

/**
 * Display the time elapsed since posted.
 *
 * @param {Array} arr
 * @param {String} selector
 */

export function showDates(arr, selector) {
  if (arr.length === 0) return;
  const dates = humanizeDate(arr);
  dates.forEach((date, position) => {
    document.querySelectorAll(selector)[position].textContent = date;
  });
}
