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
  const posts = qsa('.js-posted-on');
  let formatDate;

  if (!posts.length) return;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < posts.length; i++) {
    formatDate = posts[i].getAttribute('datetime');
    formatDate = new Date(formatDate);
    posts[i].textContent = ago(formatDate);
  }
}
