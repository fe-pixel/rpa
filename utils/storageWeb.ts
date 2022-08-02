export const defaultConfig = {
  "prefix": "shopView-"
}
//new SharePreferencesApi()
/**
 * Set storage
 *
 * @param name
 * @param content
 * @param maxAge
 */
export const setStore = (name: string, content: any) => {
  if (!name) {
    return;
  }
  name = defaultConfig.prefix + name;

  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }

  let storage = global.window.localStorage

  storage.setItem(name, content)

};

/**
 * Get storage
 *
 * @param name
 * @returns {*}
 */
export const getStore = (name: string) => {
  if (!name) {
    return;
  }
  name = defaultConfig.prefix + name;

  let content = window.localStorage.getItem(name)

  try {
    return JSON.parse(content as string)
  } catch (e) {
    return content
  }
};

/**
 * Clear storage
 *
 * @param name
 */
export const clearStore = (...names: string[]) => {
  if (names.length === 0) return;
  for (let name of names) {
    name = defaultConfig.prefix + name;
    window.localStorage.removeItem(name)
  }
};


