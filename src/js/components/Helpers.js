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
