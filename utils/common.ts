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


/**
 * 日期时间格式化函数
 * @param dateObj {Date} date实例
 * @param format {String} 格式字符串
 * @returns {String} 格式化后的字符串
 */
export const formatDate = (dateObj: Date, format: string) => {
  let o: any = {
    'M+': dateObj.getMonth() + 1,
    'd+': dateObj.getDate(),
    'h+': dateObj.getHours() % 12 === 0 ? 12 : dateObj.getHours() % 12,
    'H+': dateObj.getHours(),
    'm+': dateObj.getMinutes(),
    's+': dateObj.getSeconds(),
    'q+': Math.floor((dateObj.getMonth() + 3) / 3),
    'S': dateObj.getMilliseconds()
  };
  let week: any = {
    '0': '\u65e5',
    '1': '\u4e00',
    '2': '\u4e8c',
    '3': '\u4e09',
    '4': '\u56db',
    '5': '\u4e94',
    '6': '\u516d'
  };
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (dateObj.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  if (/(E+)/.test(format)) {
    format = format.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '\u661f\u671f' : '\u5468') : '') + week[dateObj.getDay() + '']);
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    }
  }
  return format;
}