/**
 * Shortcut for `querySelector`.
 *
 * @param {string} selector
 * @param {element} [scope] (optional)
 * @returns {element}
 */

export function qs(selector, scope) {
  return (scope || document).querySelector(selector);
}

/**
 * Shortcut for `querySelectorAll`.
 *
 * @param {string} selector
 * @param {element} [scope] (optional)
 * @returns {element}
 */

export function qsa(selector, scope) {
  return (scope || document).querySelectorAll(selector);
}
