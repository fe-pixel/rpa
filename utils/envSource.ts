
import { getStore } from './storage';
import { shopviewLauncherApi } from '../service/ShopViewAPI'

//设备类型
export type EquipmentItem = { id: number, name: string }

//系统类型
export type SystemTypes = {
  [x: number]: { id: number, name: string }[]
}

//系统联动选择
export type OsOptionItem = {
  id: number,
  name: string,
  children: { id: number, name: string, }[]
}

//浏览器接受的系统类型枚举
export enum DeviceType {
  PCWindows = 0,// 电脑 windows
  PCMac = 1, // 电脑 mac
  PCLinux = 2,// 电脑 linux
  PadIOS = 3,// 平板 ipad
  PadAndroid = 4,// 平板 android
  PhoneIOS = 5, // 手机 ios
  PhoneAndroid = 6// 手机 android
};

//代理选项
export type AgentItem = {
  id: number,
  name: string,
  desc?: string,
  protocol: string[],
  needHost?: boolean,
  needLocation?: boolean,
  needRange?: boolean,
  noCheck?: boolean,
  [x: string]: any;
}

//代理信息
export type ProxyInfo = {
  proxyType: number,
  proxyIP?: string,
  proxyPasswd?: string,
  proxyAccount?: string,
  proxyHost?: string,
  protocol?: string,
  proxyLocation?: string,
  port?: string,
  country?: string,
  region?: string,
  city?: string

  proxyDetail?: {
    matchRange?: number
  },
  [key: string]: any
}

//代理详情
export type ProxyDetail = Omit<ProxyInfo, 'proxyType' | 'proxyLocation'>;

// 可选择的代理范围
export type RangeType = { id: number, name: string }

// 可选择的语言类型
export type Language = { id: string, name: string, hide?: boolean }

//基础信息
export type BasicInfo = {
  envName: string,
  createTime: string,
  groupId: string,
  groupName: string,
}

//指纹信息
export type BfInfo = {
  deviceType: number,
  osType: number,
  userAgent: string,
  envLang: string,
  bfId: string,
  cookie?: string,
  localStorage?: string,
  isPlaintext?: boolean
}

//环境信息
export type EnvironmentItem = {
  envId: string,
  envIP: string,
  toTop: number, //1置顶、0不置顶
  envState: {
    openState: number, //0未使用,1本人使用中,2他人使用
    currentUsername: string,
    currentUid: string,
    deviceMark?: string
  }
  basicInfo: BasicInfo,
  proxyInfo: ProxyInfo,
  linkedAccount: any[],
  fingerprint: string,
  bfInfo: BfInfo
}

class EnvStaticFactory {
  baseHasInit: boolean = false;
  deviceTypes: EquipmentItem[] = [];
  deviceOsType: any = [];
  deviceNameIdMap: { [key: string]: number } = {};
  deviceIdNameMap: { [key: number]: string } = {};

  systemTypes: SystemTypes = {};
  systemTypeMap: { [key: string]: number } = {};

  emptyAgentItem: AgentItem = { id: -1, name: '无代理', protocol: [] };
  agentTypes: AgentItem[] = [];
  agentIdItemMap: { [key: number]: AgentItem } = {};
  lowerAgentNameItemMap: { [key: string]: AgentItem } = {};
  agentNameIdMap: { [key: string]: number } = {};

  protocols: string[] = [];
  lowerProtocolsMap: { [key: string]: string } = {};

  constructor() { }

  // 初始化基本静态数据
  initBaseConf(data: any) {
    let { agentTypes, deviceTypes, protocols, systemTypeMap, systemTypes, DeviceOsType } = data;
    this.setDeviceTypes(deviceTypes);
    this.setSystemTypes(systemTypes, systemTypeMap);
    this.setAgentTypes(agentTypes);
    this.setProtocols(protocols);
    this.deviceOsType = DeviceOsType;
    this.baseHasInit = true;
  }

  setDeviceTypes(data: EquipmentItem[]) {
    this.deviceTypes = data;
    this.deviceNameIdMap = data.reduce((a: { [key: string]: number }, b: EquipmentItem) => { return a[b.name] = b.id, a; }, {});
    this.deviceIdNameMap = data.reduce((a: { [key: number]: string }, b: EquipmentItem) => { return a[b.id] = b.name, a; }, {});
  }

  setSystemTypes(data: SystemTypes, dataMap: { [key: string]: number }) {
    this.systemTypes = data;
    this.systemTypeMap = dataMap;
  }

  setProtocols(data: string[]) {
    this.protocols = data;
    this.lowerProtocolsMap = data.reduce((a: { [key: string]: string }, b: string) => { return a[b.toLowerCase()] = b, a; }, {});
  }

  setAgentTypes(data: AgentItem[]) {
    this.agentTypes = data;
    this.agentIdItemMap = data.reduce((a: { [key: number]: AgentItem }, b: AgentItem) => { return a[b.id] = b, a; }, {});
    this.lowerAgentNameItemMap = data.reduce((a: { [key: string]: AgentItem }, b: AgentItem) => { return a[b.name.toLowerCase()] = b, a; }, {});
    this.agentNameIdMap = data.reduce((a: { [key: string]: number }, b: AgentItem) => { return a[b.name] = b.id, a; }, {});
  }

  // 通过ID返回浏览器对应的枚举
  getBrowserOs(deviceType: number, osType: number) {
    return this.deviceOsType[deviceType][osType];
  }

  // 通过ID获取代理类型
  getAgentById(id: number) {
    let findAgentItem = this.agentIdItemMap[id];
    return findAgentItem || { ...this.emptyAgentItem };
  }

  // 验证IP是否为IPv6
  validateIPVSix(ipaddress: string) {
    let ip = ipaddress.trim();
    let regIpv6 = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;

    if (regIpv6.test(ip)) {
      return true;
    }
    return false;
  }

  // 获取ipv6格式的IP（要在ip前后拼接中括号）
  getFormatIP = (ipAddress: string) => {
    return ipAddress && this.validateIPVSix(ipAddress) ? ('[' + ipAddress + ']') : ipAddress;
  }

  // 结合地理信息生成account
  getPlaceAccount = (info: ProxyDetail, name: string) => {
    let accountMap: { [key: string]: string } = { 'Oxylabsauto': 'customer', 'Lumauto': '' }
    let countryMap: { [key: string]: string } = { 'Oxylabsauto': 'cc', 'Lumauto': 'country' }
    let regionMap: { [key: string]: string } = { 'Oxylabsauto': 'st', 'Lumauto': 'state' }
    let spaceMap: { [key: string]: string } = { 'Oxylabsauto': '_', 'Lumauto': '' }
    let accountArr = new Array();
    let { proxyAccount = '', country = '', region = '', city = '' } = info

    if (accountMap[name]) {
      accountArr.push(accountMap[name]); //账号
    }
    accountArr.push(proxyAccount);

    if (country) {
      accountArr.push(countryMap[name]); //国家
      accountArr.push(country);
    }

    if (region) {
      accountArr.push(regionMap[name]); //州省
      accountArr.push(region.trim().replace(/\s+/g, spaceMap[name]));
    }

    if (city) {
      accountArr.push('city'); //城市
      accountArr.push(city.trim().replace(/\s+/g, spaceMap[name]));
    }

    return accountArr.join('-');
  }

  // 代理请求、检查代理参数构建
  // Oxylabsauto account格式:customer-rjoyy-cc-us-st-us_ca-city-Los_Angeles
  getAgentParams = (agentType: number, agentDetail: ProxyDetail) => {
    let proxyItem = this.getAgentById(agentType);
    let proxyConfigJSON = {
      protocol: agentDetail.protocol ? agentDetail.protocol.toLowerCase() : agentDetail.protocol,
      proxyType: proxyItem['name'],
      host: '', port: '', account: '', password: '',
      country: '', region: '', city: '', rangeType: 0
    }

    // 需要主机端口信息,且IPv6需在ip前后拼接中括号
    if (proxyItem['needHost']) {
      proxyConfigJSON['host'] = this.getFormatIP(agentDetail.proxyHost);
      proxyConfigJSON['port'] = agentDetail.port;
      proxyConfigJSON['account'] = agentDetail.proxyAccount;
      proxyConfigJSON['password'] = agentDetail.proxyPasswd;
    }

    // 需要国家信息
    if (proxyItem['needLocation']) {
      proxyConfigJSON['country'] = agentDetail.country;
      proxyConfigJSON['region'] = agentDetail.region;
      proxyConfigJSON['city'] = agentDetail.city;
    }

    // 需要IP获取范围
    if (proxyItem['needRange']) {
      if (agentDetail.proxyDetail && agentDetail.proxyDetail.matchRange) {
        proxyConfigJSON.rangeType = agentDetail.proxyDetail.matchRange;
      }
    }

    // 不需要host，所以是将代理IP传入host
    if (proxyItem['name'] == '911S5') {
      proxyConfigJSON['host'] = this.getFormatIP(agentDetail.proxyIP);
    }

    // 动态代理按格式拼接账号
    if (proxyItem['name'] == 'Oxylabsauto' || proxyItem['name'] == 'Lumauto') {
      proxyConfigJSON['account'] = this.getPlaceAccount(agentDetail, proxyItem['name']);
    }

    return proxyConfigJSON;
  }

  //  打开环境的参数构建
  getOpenEnvParams(envItem: EnvironmentItem) {
    let sysDesc = this.getBrowserOs(envItem.bfInfo.deviceType, envItem.bfInfo.osType);
    let config_json = {
      "os": sysDesc,
      "language": envItem.bfInfo.envLang,
      "ua": envItem.bfInfo.userAgent,
      "linkedAccount": envItem.linkedAccount,
      "envName": envItem.basicInfo.envName,
      "envType": 'env',
      "groupName": envItem.basicInfo.groupName,
      "cookie": envItem.bfInfo.cookie,
      "localStorage": envItem.bfInfo.localStorage
    };
    let agent_json = this.getAgentParams(envItem.proxyInfo.proxyType, envItem.proxyInfo);
    if (envItem.bfInfo?.isPlaintext) {
      //后端回传的是明文时，需要加密
      if (config_json.cookie != "") config_json['cookie'] = shopviewLauncherApi.encrypt(config_json.cookie);
      if (config_json.localStorage != "") config_json['localStorage'] = shopviewLauncherApi.encrypt(config_json.localStorage);
    }
    return {
      envId: envItem.envId,
      fingerprint: envItem.fingerprint,
      config_json: JSON.stringify(config_json),
      proxy_config: JSON.stringify({ ...agent_json, header: { "X-accessKey": getStore("token") } })
    }
  }
}

const envStaticStore = new EnvStaticFactory();
export default envStaticStore;