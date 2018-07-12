
// Get elements by CSS selector:
export function qs(selector, scope) {
  return (scope || document).querySelector(selector);
}

export function qsa(selector, scope) {
  return (scope || document).querySelectorAll(selector);
}
