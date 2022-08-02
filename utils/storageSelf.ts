export const defaultConfig = {
  "prefix": "shopView-"
}
declare global {  //设置全局属性
  interface Window {  //window对象属性
    SharePreferencesApi: any;   //加入对象
  }
}

let sharePreferencesApi = window?.SharePreferencesApi && new window.SharePreferencesApi();
/**
 * Set storage
 *
 * @param name
 * @param content
 * @param maxAge
 */
export const setStore = (name: string, content: any) => {
  name = defaultConfig.prefix + name;
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  sharePreferencesApi.setString(name, content);
};

/**
 * Get storage
 *
 * @param name
 * @returns {*}
 */
export const getStore = (name: string) => {

  name = defaultConfig.prefix + name;

  let content = sharePreferencesApi.getString(name)

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
    sharePreferencesApi.remove(name)
  }
};


