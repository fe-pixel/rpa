import lodash from "lodash"

/**
 *
 * @param {string} code
 * @param {*} props
 * @return {*}  {Promise<string>}
 */
export async function render(code: string, params: Array<string>): Promise<string> {
  lodash.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
  var compiled = lodash.template(code);
  return compiled({ params });
}


export const runScriptTest = ({ script, args, envId }: {
  script?: string | Function,
  args?: Object,
  envId?: string
}) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: [0, 0, 0, 0, 0, 0, 0, 10][Math.floor(Math.random() * 8)],
        data: {},
        message: '成功',
      })
    }, Math.random() * 1000 + 1000);
  })
}


export const sleep = (ms: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(""), ms);
  })
}