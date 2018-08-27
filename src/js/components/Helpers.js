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
 * Displaying the time elapsed since posted.
 */

export function humanizeDate() {
  const dateTime = qsa('.js-posted-on');

  for (let i = 0; i < dateTime.length; i++) {
    qsa('.js-posted-ago')[i].textContent = ago(new Date(dateTime[i].getAttribute('datetime')));
  }
}
