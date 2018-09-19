/**
 * get title from file name
 *
 * @export
 * @param {string} title
 * @returns {string}
 */
export function onlyTitle(title) {
  return title
    .replace(/\.md$/, '')
    .replace(/^\d{4}-\d{1,2}-\d{1,2}-/, '')
    .replace(/-/g, ' ')
    .replace(/^\w/, c => c.toUpperCase())
}

export function removeExtension(title) {
  return title.replace(/\.md$/, '')
}

/**
 * get publish date from file name
 *
 * @export
 * @param {string} title
 * @returns {string}
 */
export function onlyDate(title) {
  return /^\d{4}-\d{1,2}-\d{1,2}/.exec(title)[0]
}

/**
 * get slug from file name
 *
 * @export
 * @param {string} title
 * @returns {string}
 */
export function onlySlug(title) {
  return title
    .replace('.md', '')
    .replace(/[^a-zA-Z ]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase()
}
