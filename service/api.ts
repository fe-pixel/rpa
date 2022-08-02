/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, FileData, prepare } from 'yapi-to-typescript'
// @ts-ignore
// prettier-ignore
import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript'
// @ts-ignore
import request from '../utils/yapiRequest'

type UserRequestRestArgs = RequestFunctionRestArgs<typeof request>

// Request: 目前 React Hooks 功能有用到
export type Request<
  TRequestData,
  TRequestConfig extends RequestConfig,
  TRequestResult,
> = (TRequestConfig['requestDataOptional'] extends true
  ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult
  : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
  requestConfig: TRequestConfig
}

const mockUrl_0_0_0_0 = 'http://www.yapi-efox.duowan.com/mock/1151' as any
const devUrl_0_0_0_0 = 'https://api-test.shopviewer.com' as any
const prodUrl_0_0_0_0 = '' as any
const dataKey_0_0_0_0 = '' as any

/**
 * 接口 [获取OSS的STS信息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16239) 的 **请求类型**
 *
 * @分类 [公共分类↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4338)
 * @请求头 `GET /shopone-config/storage/ossSts`
 * @更新时间 `2022-06-22 10:39:35`
 */
export interface OssStsRequest {
  /**
   * 默认1
   */
  count?: string
  /**
   * cover：头像
   */
  type: string
  bucket?: string
  /**
   * 例如：shopview，那么返回的上传key就是 shopview/type/xxx
   */
  appName?: string
}

/**
 * 接口 [获取OSS的STS信息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16239) 的 **返回类型**
 *
 * @分类 [公共分类↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4338)
 * @请求头 `GET /shopone-config/storage/ossSts`
 * @更新时间 `2022-06-22 10:39:35`
 */
export interface OssStsResponse {
  code?: number
  message?: string
  data?: {
    statusCode?: string
    fileObjs?: {
      fileName?: string
      url?: string
    }[]
    bucket?: string
    expiration?: string
    accessKeyId?: string
    accessKeySecret?: string
    securityToken?: string
    endpoint?: string
  }
}

/**
 * 接口 [获取OSS的STS信息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16239) 的 **请求配置的类型**
 *
 * @分类 [公共分类↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4338)
 * @请求头 `GET /shopone-config/storage/ossSts`
 * @更新时间 `2022-06-22 10:39:35`
 */
type OssStsRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-config/storage/ossSts',
    '',
    string,
    'count' | 'type' | 'bucket' | 'appName',
    false
  >
>

/**
 * 接口 [获取OSS的STS信息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16239) 的 **请求配置**
 *
 * @分类 [公共分类↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4338)
 * @请求头 `GET /shopone-config/storage/ossSts`
 * @更新时间 `2022-06-22 10:39:35`
 */
const ossStsRequestConfig: OssStsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/shopone-config/storage/ossSts',
  method: Method.GET,
  requestHeaders: {'X-parkes-udb-uid': ''},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['count', 'type', 'bucket', 'appName'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'ossSts',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取OSS的STS信息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16239) 的 **请求函数**
 *
 * @分类 [公共分类↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4338)
 * @请求头 `GET /shopone-config/storage/ossSts`
 * @更新时间 `2022-06-22 10:39:35`
 */
export const ossSts = /*#__PURE__*/ (requestData: OssStsRequest, ...args: UserRequestRestArgs) => {
  return request<OssStsResponse>(prepare(ossStsRequestConfig, requestData), ...args)
}

ossSts.requestConfig = ossStsRequestConfig

/**
 * 接口 [根据IP交换国家↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16299) 的 **请求类型**
 *
 * @分类 [公共分类↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4338)
 * @请求头 `GET /shopone-config/ipdb/exchangeCountry`
 * @更新时间 `2022-04-27 11:02:13`
 */
export interface ExchangeCountryRequest {}

/**
 * 接口 [根据IP交换国家↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16299) 的 **返回类型**
 *
 * @分类 [公共分类↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4338)
 * @请求头 `GET /shopone-config/ipdb/exchangeCountry`
 * @更新时间 `2022-04-27 11:02:13`
 */
export interface ExchangeCountryResponse {
  code?: number
  message?: string
  data?: {
    country?: string
    countryCode?: string
    city?: string
    timeZone?: string
    ip?: string
  }
}

/**
 * 接口 [根据IP交换国家↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16299) 的 **请求配置的类型**
 *
 * @分类 [公共分类↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4338)
 * @请求头 `GET /shopone-config/ipdb/exchangeCountry`
 * @更新时间 `2022-04-27 11:02:13`
 */
type ExchangeCountryRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-config/ipdb/exchangeCountry',
    '',
    string,
    string,
    true
  >
>

/**
 * 接口 [根据IP交换国家↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16299) 的 **请求配置**
 *
 * @分类 [公共分类↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4338)
 * @请求头 `GET /shopone-config/ipdb/exchangeCountry`
 * @更新时间 `2022-04-27 11:02:13`
 */
const exchangeCountryRequestConfig: ExchangeCountryRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/shopone-config/ipdb/exchangeCountry',
  method: Method.GET,
  requestHeaders: {'X-parkes-udb-uid': '1', 'X-userIp': '58.248.229.156'},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'exchangeCountry',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [根据IP交换国家↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16299) 的 **请求函数**
 *
 * @分类 [公共分类↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4338)
 * @请求头 `GET /shopone-config/ipdb/exchangeCountry`
 * @更新时间 `2022-04-27 11:02:13`
 */
export const exchangeCountry = /*#__PURE__*/ (requestData?: ExchangeCountryRequest, ...args: UserRequestRestArgs) => {
  return request<ExchangeCountryResponse>(prepare(exchangeCountryRequestConfig, requestData), ...args)
}

exchangeCountry.requestConfig = exchangeCountryRequestConfig

/**
 * 接口 [根据IP交换国家（外部API）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16323) 的 **请求类型**
 *
 * @分类 [公共分类↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4338)
 * @请求头 `GET /shopone-config/ipdb/exchangeCountryByApi`
 * @更新时间 `2022-04-27 14:43:21`
 */
export interface ExchangeCountryByApiRequest {}

/**
 * 接口 [根据IP交换国家（外部API）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16323) 的 **返回类型**
 *
 * @分类 [公共分类↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4338)
 * @请求头 `GET /shopone-config/ipdb/exchangeCountryByApi`
 * @更新时间 `2022-04-27 14:43:21`
 */
export interface ExchangeCountryByApiResponse {
  code?: number
  message?: string
  data?: {
    status?: string
    country?: string
    countryCode?: string
    region?: string
    regionName?: string
    city?: string
    zip?: string
    lat?: number
    lon?: number
    timezone?: string
    isp?: string
    org?: string
    as?: string
    query?: string
  }
}

/**
 * 接口 [根据IP交换国家（外部API）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16323) 的 **请求配置的类型**
 *
 * @分类 [公共分类↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4338)
 * @请求头 `GET /shopone-config/ipdb/exchangeCountryByApi`
 * @更新时间 `2022-04-27 14:43:21`
 */
type ExchangeCountryByApiRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-config/ipdb/exchangeCountryByApi',
    '',
    string,
    string,
    true
  >
>

/**
 * 接口 [根据IP交换国家（外部API）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16323) 的 **请求配置**
 *
 * @分类 [公共分类↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4338)
 * @请求头 `GET /shopone-config/ipdb/exchangeCountryByApi`
 * @更新时间 `2022-04-27 14:43:21`
 */
const exchangeCountryByApiRequestConfig: ExchangeCountryByApiRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/shopone-config/ipdb/exchangeCountryByApi',
  method: Method.GET,
  requestHeaders: {'X-parkes-udb-uid': '1', 'X-userIp': '58.248.229.156'},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'exchangeCountryByApi',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [根据IP交换国家（外部API）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16323) 的 **请求函数**
 *
 * @分类 [公共分类↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4338)
 * @请求头 `GET /shopone-config/ipdb/exchangeCountryByApi`
 * @更新时间 `2022-04-27 14:43:21`
 */
export const exchangeCountryByApi = /*#__PURE__*/ (
  requestData?: ExchangeCountryByApiRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ExchangeCountryByApiResponse>(prepare(exchangeCountryByApiRequestConfig, requestData), ...args)
}

exchangeCountryByApi.requestConfig = exchangeCountryByApiRequestConfig

/**
 * 接口 [用户注册后初始化团队以及昵称↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16344) 的 **请求类型**
 *
 * @分类 [公共分类↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4338)
 * @请求头 `POST /batchApi/user/infoInit`
 * @更新时间 `2022-04-29 12:07:00`
 */
export interface InfoInitRequest {
  /**
   * 团队名称
   */
  teamName?: string
  /**
   * 用户昵称
   */
  nickname?: string
}

/**
 * 接口 [用户注册后初始化团队以及昵称↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16344) 的 **返回类型**
 *
 * @分类 [公共分类↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4338)
 * @请求头 `POST /batchApi/user/infoInit`
 * @更新时间 `2022-04-29 12:07:00`
 */
export interface InfoInitResponse {
  code?: number
  message?: string
}

/**
 * 接口 [用户注册后初始化团队以及昵称↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16344) 的 **请求配置的类型**
 *
 * @分类 [公共分类↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4338)
 * @请求头 `POST /batchApi/user/infoInit`
 * @更新时间 `2022-04-29 12:07:00`
 */
type InfoInitRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/batchApi/user/infoInit',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [用户注册后初始化团队以及昵称↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16344) 的 **请求配置**
 *
 * @分类 [公共分类↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4338)
 * @请求头 `POST /batchApi/user/infoInit`
 * @更新时间 `2022-04-29 12:07:00`
 */
const infoInitRequestConfig: InfoInitRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/batchApi/user/infoInit',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'infoInit',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [用户注册后初始化团队以及昵称↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16344) 的 **请求函数**
 *
 * @分类 [公共分类↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4338)
 * @请求头 `POST /batchApi/user/infoInit`
 * @更新时间 `2022-04-29 12:07:00`
 */
export const infoInit = /*#__PURE__*/ (requestData: InfoInitRequest, ...args: UserRequestRestArgs) => {
  return request<InfoInitResponse>(prepare(infoInitRequestConfig, requestData), ...args)
}

infoInit.requestConfig = infoInitRequestConfig

/**
 * 接口 [获取配置信息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16671) 的 **请求类型**
 *
 * @分类 [公共分类↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4338)
 * @请求头 `GET /shopone-config/config/getConfig`
 * @更新时间 `2022-06-02 15:54:32`
 */
export interface GetConfigRequest {
  /**
   * device: 设备配置；os：系统配置；language：语言配置；range：上次IP > 城市 > 州/省 > 国家/地区；agent：代理配置
   */
  key?: string
}

/**
 * 接口 [获取配置信息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16671) 的 **返回类型**
 *
 * @分类 [公共分类↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4338)
 * @请求头 `GET /shopone-config/config/getConfig`
 * @更新时间 `2022-06-02 15:54:32`
 */
export interface GetConfigResponse {
  code?: number
  message?: string
  data?: {
    statusCode?: string
    fileObjs?: {
      fileName?: string
      url?: string
    }[]
    bucket?: string
    expiration?: string
    accessKeyId?: string
    accessKeySecret?: string
    securityToken?: string
    endpoint?: string
  }
}

/**
 * 接口 [获取配置信息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16671) 的 **请求配置的类型**
 *
 * @分类 [公共分类↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4338)
 * @请求头 `GET /shopone-config/config/getConfig`
 * @更新时间 `2022-06-02 15:54:32`
 */
type GetConfigRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-config/config/getConfig',
    '',
    string,
    'key',
    false
  >
>

/**
 * 接口 [获取配置信息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16671) 的 **请求配置**
 *
 * @分类 [公共分类↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4338)
 * @请求头 `GET /shopone-config/config/getConfig`
 * @更新时间 `2022-06-02 15:54:32`
 */
const getConfigRequestConfig: GetConfigRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/shopone-config/config/getConfig',
  method: Method.GET,
  requestHeaders: {'X-parkes-udb-uid': ''},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['key'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getConfig',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取配置信息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16671) 的 **请求函数**
 *
 * @分类 [公共分类↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4338)
 * @请求头 `GET /shopone-config/config/getConfig`
 * @更新时间 `2022-06-02 15:54:32`
 */
export const getConfig = /*#__PURE__*/ (requestData: GetConfigRequest, ...args: UserRequestRestArgs) => {
  return request<GetConfigResponse>(prepare(getConfigRequestConfig, requestData), ...args)
}

getConfig.requestConfig = getConfigRequestConfig

/**
 * 接口 [检查店铺、广告账号绑定情况↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17459) 的 **请求类型**
 *
 * @分类 [公共分类↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4338)
 * @请求头 `GET /shopone-store/progress/hasBind`
 * @更新时间 `2022-06-30 18:31:18`
 */
export interface HasBindRequest {}

/**
 * 接口 [检查店铺、广告账号绑定情况↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17459) 的 **返回类型**
 *
 * @分类 [公共分类↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4338)
 * @请求头 `GET /shopone-store/progress/hasBind`
 * @更新时间 `2022-06-30 18:31:18`
 */
export interface HasBindResponse {
  code?: number
  message?: string
  data?: {
    bindAds?: boolean
    bindStore?: boolean
  }
}

/**
 * 接口 [检查店铺、广告账号绑定情况↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17459) 的 **请求配置的类型**
 *
 * @分类 [公共分类↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4338)
 * @请求头 `GET /shopone-store/progress/hasBind`
 * @更新时间 `2022-06-30 18:31:18`
 */
type HasBindRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-store/progress/hasBind',
    '',
    string,
    string,
    true
  >
>

/**
 * 接口 [检查店铺、广告账号绑定情况↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17459) 的 **请求配置**
 *
 * @分类 [公共分类↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4338)
 * @请求头 `GET /shopone-store/progress/hasBind`
 * @更新时间 `2022-06-30 18:31:18`
 */
const hasBindRequestConfig: HasBindRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/shopone-store/progress/hasBind',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'hasBind',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [检查店铺、广告账号绑定情况↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17459) 的 **请求函数**
 *
 * @分类 [公共分类↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4338)
 * @请求头 `GET /shopone-store/progress/hasBind`
 * @更新时间 `2022-06-30 18:31:18`
 */
export const hasBind = /*#__PURE__*/ (requestData?: HasBindRequest, ...args: UserRequestRestArgs) => {
  return request<HasBindResponse>(prepare(hasBindRequestConfig, requestData), ...args)
}

hasBind.requestConfig = hasBindRequestConfig

const mockUrl_0_0_0_1 = 'http://www.yapi-efox.duowan.com/mock/1151' as any
const devUrl_0_0_0_1 = 'https://api-test.shopviewer.com' as any
const prodUrl_0_0_0_1 = '' as any
const dataKey_0_0_0_1 = '' as any

/**
 * 接口 [异步创建环境（批量创建环境）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15900) 的 **请求类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envImportCreate`
 * @更新时间 `2022-06-13 21:19:33`
 */
export type EnvImportCreateRequest = {
  /**
   * 环境名称
   */
  envName: string
  /**
   * 环境分组id
   */
  groupId?: string
  /**
   * 分组名称
   */
  groupName?: string
  /**
   * 浏览器指纹信息
   */
  bfInfo: {
    /**
     * 设备类型
     */
    deviceType: number
    /**
     * 操作系统类型
     */
    osType: number
    /**
     * UA
     */
    userAgent: string
    /**
     * 环境语言
     */
    envLang: string
    /**
     * 浏览器指纹
     */
    fingerprint: string
    /**
     * cookie
     */
    cookie?: string
    /**
     * localStorage
     */
    localStorage?: string
  }
  /**
   * 代理信息
   */
  proxyInfo: {
    /**
     * 代理类型
     */
    proxyType: number
    proxyIP?: string
    proxyLocation?: string
    /**
     * 代理密码
     */
    proxyPasswd?: string
    /**
     * 代理账号
     */
    proxyAccount?: string
    /**
     * 代理主机名称
     */
    proxyHost?: string
    protocol?: string
    port?: string
    country?: string
    region?: string
    city?: string
    /**
     * 代理详情
     */
    proxyDetail: {}
  }
  /**
   * 账号数组，（导入环境时使用）
   */
  accountList?: {
    /**
     * 账号名称
     */
    name: string
    /**
     * 账号分组
     */
    accountGroupName?: string
    /**
     * 平台名称
     */
    platformName?: string
    /**
     * 子平台名称
     */
    platformChildName?: string
    /**
     * 平台链接
     */
    url: string
    /**
     * 账号
     */
    account: string
    /**
     * 密码
     */
    password?: string
  }[]
}[]

/**
 * 接口 [异步创建环境（批量创建环境）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15900) 的 **返回类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envImportCreate`
 * @更新时间 `2022-06-13 21:19:33`
 */
export interface EnvImportCreateResponse {
  code: number
  message: string
  data: {
    /**
     * 异步任务id
     */
    taskId: string
  }
}

/**
 * 接口 [异步创建环境（批量创建环境）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15900) 的 **请求配置的类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envImportCreate`
 * @更新时间 `2022-06-13 21:19:33`
 */
type EnvImportCreateRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-env/envImportCreate',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [异步创建环境（批量创建环境）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15900) 的 **请求配置**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envImportCreate`
 * @更新时间 `2022-06-13 21:19:33`
 */
const envImportCreateRequestConfig: EnvImportCreateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/shopone-env/envImportCreate',
  method: Method.POST,
  requestHeaders: {'X-teamid': ''},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'envImportCreate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [异步创建环境（批量创建环境）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15900) 的 **请求函数**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envImportCreate`
 * @更新时间 `2022-06-13 21:19:33`
 */
export const envImportCreate = /*#__PURE__*/ (requestData: EnvImportCreateRequest, ...args: UserRequestRestArgs) => {
  return request<EnvImportCreateResponse>(prepare(envImportCreateRequestConfig, requestData), ...args)
}

envImportCreate.requestConfig = envImportCreateRequestConfig

/**
 * 接口 [编辑环境（基础信息）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15906) 的 **请求类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envEdit`
 * @更新时间 `2022-04-20 15:26:39`
 */
export interface EnvEditRequest {
  /**
   * 环境id
   */
  envId: string
  /**
   * 环境分组id
   */
  groupId: string
  /**
   * 环境名称
   */
  envName: string
}

/**
 * 接口 [编辑环境（基础信息）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15906) 的 **返回类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envEdit`
 * @更新时间 `2022-04-20 15:26:39`
 */
export interface EnvEditResponse {
  code: number
  message: string
  data: {}
}

/**
 * 接口 [编辑环境（基础信息）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15906) 的 **请求配置的类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envEdit`
 * @更新时间 `2022-04-20 15:26:39`
 */
type EnvEditRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-env/envEdit',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [编辑环境（基础信息）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15906) 的 **请求配置**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envEdit`
 * @更新时间 `2022-04-20 15:26:39`
 */
const envEditRequestConfig: EnvEditRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/shopone-env/envEdit',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'envEdit',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [编辑环境（基础信息）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15906) 的 **请求函数**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envEdit`
 * @更新时间 `2022-04-20 15:26:39`
 */
export const envEdit = /*#__PURE__*/ (requestData: EnvEditRequest, ...args: UserRequestRestArgs) => {
  return request<EnvEditResponse>(prepare(envEditRequestConfig, requestData), ...args)
}

envEdit.requestConfig = envEditRequestConfig

/**
 * 接口 [创建分组（批量创建）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15909) 的 **请求类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/groupCreate`
 * @更新时间 `2022-04-20 15:33:20`
 */
export type GroupCreateRequest = {
  /**
   * 分组名称
   */
  groupName: string
  /**
   * 显示颜色
   */
  color: string
}[]

/**
 * 接口 [创建分组（批量创建）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15909) 的 **返回类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/groupCreate`
 * @更新时间 `2022-04-20 15:33:20`
 */
export interface GroupCreateResponse {
  code: number
  message: string
  data: {}
}

/**
 * 接口 [创建分组（批量创建）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15909) 的 **请求配置的类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/groupCreate`
 * @更新时间 `2022-04-20 15:33:20`
 */
type GroupCreateRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-env/groupCreate',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [创建分组（批量创建）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15909) 的 **请求配置**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/groupCreate`
 * @更新时间 `2022-04-20 15:33:20`
 */
const groupCreateRequestConfig: GroupCreateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/shopone-env/groupCreate',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'groupCreate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [创建分组（批量创建）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15909) 的 **请求函数**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/groupCreate`
 * @更新时间 `2022-04-20 15:33:20`
 */
export const groupCreate = /*#__PURE__*/ (requestData: GroupCreateRequest, ...args: UserRequestRestArgs) => {
  return request<GroupCreateResponse>(prepare(groupCreateRequestConfig, requestData), ...args)
}

groupCreate.requestConfig = groupCreateRequestConfig

/**
 * 接口 [编辑分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15912) 的 **请求类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/groupEdit`
 * @更新时间 `2022-04-25 17:29:44`
 */
export interface GroupEditRequest {
  /**
   * 分组Id
   */
  groupId: string
  /**
   * 分组名称
   */
  groupName: string
  /**
   * 显示颜色
   */
  color: string
}

/**
 * 接口 [编辑分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15912) 的 **返回类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/groupEdit`
 * @更新时间 `2022-04-25 17:29:44`
 */
export interface GroupEditResponse {
  code: number
  message: string
  data: {}
}

/**
 * 接口 [编辑分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15912) 的 **请求配置的类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/groupEdit`
 * @更新时间 `2022-04-25 17:29:44`
 */
type GroupEditRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-env/groupEdit',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [编辑分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15912) 的 **请求配置**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/groupEdit`
 * @更新时间 `2022-04-25 17:29:44`
 */
const groupEditRequestConfig: GroupEditRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/shopone-env/groupEdit',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'groupEdit',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [编辑分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15912) 的 **请求函数**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/groupEdit`
 * @更新时间 `2022-04-25 17:29:44`
 */
export const groupEdit = /*#__PURE__*/ (requestData: GroupEditRequest, ...args: UserRequestRestArgs) => {
  return request<GroupEditResponse>(prepare(groupEditRequestConfig, requestData), ...args)
}

groupEdit.requestConfig = groupEditRequestConfig

/**
 * 接口 [编辑环境代理↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15915) 的 **请求类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/proxyEdit`
 * @更新时间 `2022-04-26 17:55:34`
 */
export interface ProxyEditRequest {
  /**
   * 环境代理Id
   */
  proxyId: string
  /**
   * 环境id
   */
  envId: string
  proxyHost: string
  /**
   * 代理类型
   */
  proxyType: number
  /**
   * 代理IP
   */
  proxyIP?: string
  proxyAccount: string
  proxyPasswd: string
  /**
   * 代理地址
   */
  proxyLocation?: string
  protocol?: string
  port?: string
  country?: string
  region?: string
  city?: string
  /**
   * 代理详情
   */
  proxyDetail: {}
}

/**
 * 接口 [编辑环境代理↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15915) 的 **返回类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/proxyEdit`
 * @更新时间 `2022-04-26 17:55:34`
 */
export interface ProxyEditResponse {
  code: number
  message: string
  data: {}
}

/**
 * 接口 [编辑环境代理↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15915) 的 **请求配置的类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/proxyEdit`
 * @更新时间 `2022-04-26 17:55:34`
 */
type ProxyEditRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-env/proxyEdit',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [编辑环境代理↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15915) 的 **请求配置**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/proxyEdit`
 * @更新时间 `2022-04-26 17:55:34`
 */
const proxyEditRequestConfig: ProxyEditRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/shopone-env/proxyEdit',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'proxyEdit',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [编辑环境代理↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15915) 的 **请求函数**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/proxyEdit`
 * @更新时间 `2022-04-26 17:55:34`
 */
export const proxyEdit = /*#__PURE__*/ (requestData: ProxyEditRequest, ...args: UserRequestRestArgs) => {
  return request<ProxyEditResponse>(prepare(proxyEditRequestConfig, requestData), ...args)
}

proxyEdit.requestConfig = proxyEditRequestConfig

/**
 * 接口 [查找环境(弃用)↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15918) 的 **请求类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/envFind`
 * @更新时间 `2022-06-27 15:17:44`
 */
export interface EnvFindRequest {
  /**
   * 查询关键字
   */
  keyword?: string
  /**
   * 环境分组id
   */
  groupId: string
  /**
   * 特定的环境id
   */
  specialEnvId?: string
  pageNum?: string
  pageSize?: string
}

/**
 * 接口 [查找环境(弃用)↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15918) 的 **返回类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/envFind`
 * @更新时间 `2022-06-27 15:17:44`
 */
export interface EnvFindResponse {
  code: number
  message: string
  data: {
    /**
     * 总数量
     */
    total: number
    /**
     * 总页数
     */
    totalPage?: number
    currentPage?: number
    items: {
      /**
       * 环境id
       */
      envId: string
      /**
       * 是否置顶：0否，1是
       */
      toTop: number
      /**
       * 环境IP
       */
      envIP: string
      /**
       * 浏览器指纹
       */
      fingerprint: string
      /**
       * 关联账号
       */
      linkedAccount: {
        /**
         * 账号类型
         */
        accountType: string
        /**
         * 数量
         */
        count: number
        /**
         * 账号logo
         */
        accountLogoUrl: string
        accountList: {
          /**
           * 账号id
           */
          accountId: string
          /**
           * 账号
           */
          account: string
          /**
           * 密码
           */
          password: string
          /**
           * 账号名称
           */
          accountName: string
          /**
           * 账号logo
           */
          accountLogoUrl: string
          /**
           * 账号平台信息
           */
          platformInfo: {
            /**
             * id
             */
            id: string
            /**
             * 名称
             */
            name: string
            /**
             * 子名称
             */
            childName: string
            /**
             * 图片URL
             */
            imgUrl: string
            /**
             * 链接
             */
            url: string
          }
        }[]
      }[]
      envState: {
        /**
         * 打开状态:1未使用,2本人使用中,3他人使用
         */
        openState: number
        /**
         * 当前用户名称
         */
        currentUsername: string
        /**
         * 当前用户id
         */
        currentUid: string
        /**
         * 设备标识
         */
        deviceMark: string
      }
      /**
       * 基础信息
       */
      basicInfo: {
        /**
         * 创建时间
         */
        createTime: string
        /**
         * 环境名称
         */
        envName: string
        /**
         * 环境分组id
         */
        groupId: string
        /**
         * 环境分组名称
         */
        groupName: string
        /**
         * 纯净标识：0否，1是
         */
        pureFlag: number
      }
      /**
       * 代理信息
       */
      proxyInfo: {
        /**
         * 代理id
         */
        proxyId: string
        /**
         * 代理类型
         */
        proxyType: number
        /**
         * 代理IP
         */
        proxyIP?: string
        /**
         * 代理位置
         */
        proxyLocation?: string
        protocol?: string
        port?: string
        country?: string
        region?: string
        city?: string
        /**
         * 代理详情
         */
        proxyDetail?: {}
      }
      /**
       * 浏览器指纹信息
       */
      bfInfo: {
        /**
         * 设备类型: 0电脑,1手机,2平板
         */
        deviceType: number
        /**
         * 操作系统类型: 0Windows,1MacOS,2Linux
         */
        osType: number
        /**
         * UA
         */
        userAgent: string
        /**
         * 环境语言
         */
        envLang: string
        /**
         * 指纹id
         */
        bfId: string
        /**
         * 是否明文cookie：true明文，false密文
         */
        isPlaintext?: boolean
        /**
         * cookie
         */
        cookie?: string
        /**
         * localStorage
         */
        localStorage?: string
      }
    }[]
  }
}

/**
 * 接口 [查找环境(弃用)↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15918) 的 **请求配置的类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/envFind`
 * @更新时间 `2022-06-27 15:17:44`
 */
type EnvFindRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-env/envFind',
    '',
    string,
    'keyword' | 'groupId' | 'specialEnvId' | 'pageNum' | 'pageSize',
    false
  >
>

/**
 * 接口 [查找环境(弃用)↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15918) 的 **请求配置**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/envFind`
 * @更新时间 `2022-06-27 15:17:44`
 */
const envFindRequestConfig: EnvFindRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/shopone-env/envFind',
  method: Method.GET,
  requestHeaders: {'X-teamid': ''},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: ['keyword', 'groupId', 'specialEnvId', 'pageNum', 'pageSize'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'envFind',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [查找环境(弃用)↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15918) 的 **请求函数**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/envFind`
 * @更新时间 `2022-06-27 15:17:44`
 */
export const envFind = /*#__PURE__*/ (requestData: EnvFindRequest, ...args: UserRequestRestArgs) => {
  return request<EnvFindResponse>(prepare(envFindRequestConfig, requestData), ...args)
}

envFind.requestConfig = envFindRequestConfig

/**
 * 接口 [查找分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15921) 的 **请求类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/groupFind`
 * @更新时间 `2022-04-20 15:33:55`
 */
export interface GroupFindRequest {
  /**
   * 分组名称
   */
  groupName?: string
}

/**
 * 接口 [查找分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15921) 的 **返回类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/groupFind`
 * @更新时间 `2022-04-20 15:33:55`
 */
export interface GroupFindResponse {
  code: number
  message: string
  data: {
    total: number
    items: {
      /**
       * 分组id
       */
      groupId: string
      /**
       * 分组名称
       */
      groupName: string
      /**
       * 显示颜色
       */
      color: string
      /**
       * 环境个数
       */
      envCount: number
    }[]
  }
}

/**
 * 接口 [查找分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15921) 的 **请求配置的类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/groupFind`
 * @更新时间 `2022-04-20 15:33:55`
 */
type GroupFindRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-env/groupFind',
    '',
    string,
    'groupName',
    false
  >
>

/**
 * 接口 [查找分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15921) 的 **请求配置**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/groupFind`
 * @更新时间 `2022-04-20 15:33:55`
 */
const groupFindRequestConfig: GroupFindRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/shopone-env/groupFind',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: ['groupName'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'groupFind',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [查找分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15921) 的 **请求函数**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/groupFind`
 * @更新时间 `2022-04-20 15:33:55`
 */
export const groupFind = /*#__PURE__*/ (requestData: GroupFindRequest, ...args: UserRequestRestArgs) => {
  return request<GroupFindResponse>(prepare(groupFindRequestConfig, requestData), ...args)
}

groupFind.requestConfig = groupFindRequestConfig

/**
 * 接口 [浏览器指纹编辑↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16026) 的 **请求类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/bfEdit`
 * @更新时间 `2022-06-24 20:18:59`
 */
export interface BfEditRequest {
  /**
   * 设备类型: 0电脑,1手机,2平板
   */
  deviceType: number
  /**
   * 操作系统类型: 0Windows,1MacOS,2Linux
   */
  osType: number
  /**
   * UA
   */
  userAgent: string
  /**
   * 环境语言
   */
  envLang: string
  /**
   * 指纹id
   */
  bfId: string
  /**
   * 环境id
   */
  envId: string
  /**
   * cookie
   */
  cookie?: string
}

/**
 * 接口 [浏览器指纹编辑↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16026) 的 **返回类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/bfEdit`
 * @更新时间 `2022-06-24 20:18:59`
 */
export interface BfEditResponse {
  code: number
  message: string
  data: {}
}

/**
 * 接口 [浏览器指纹编辑↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16026) 的 **请求配置的类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/bfEdit`
 * @更新时间 `2022-06-24 20:18:59`
 */
type BfEditRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-env/bfEdit',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [浏览器指纹编辑↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16026) 的 **请求配置**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/bfEdit`
 * @更新时间 `2022-06-24 20:18:59`
 */
const bfEditRequestConfig: BfEditRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/shopone-env/bfEdit',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'bfEdit',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [浏览器指纹编辑↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16026) 的 **请求函数**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/bfEdit`
 * @更新时间 `2022-06-24 20:18:59`
 */
export const bfEdit = /*#__PURE__*/ (requestData: BfEditRequest, ...args: UserRequestRestArgs) => {
  return request<BfEditResponse>(prepare(bfEditRequestConfig, requestData), ...args)
}

bfEdit.requestConfig = bfEditRequestConfig

/**
 * 接口 [删除环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16032) 的 **请求类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envDelete`
 * @更新时间 `2022-04-20 15:32:58`
 */
export interface EnvDeleteRequest {
  /**
   * 环境id
   */
  envId: string
}

/**
 * 接口 [删除环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16032) 的 **返回类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envDelete`
 * @更新时间 `2022-04-20 15:32:58`
 */
export interface EnvDeleteResponse {
  code: number
  message: string
  data: {}
}

/**
 * 接口 [删除环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16032) 的 **请求配置的类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envDelete`
 * @更新时间 `2022-04-20 15:32:58`
 */
type EnvDeleteRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-env/envDelete',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [删除环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16032) 的 **请求配置**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envDelete`
 * @更新时间 `2022-04-20 15:32:58`
 */
const envDeleteRequestConfig: EnvDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/shopone-env/envDelete',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'envDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [删除环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16032) 的 **请求函数**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envDelete`
 * @更新时间 `2022-04-20 15:32:58`
 */
export const envDelete = /*#__PURE__*/ (requestData: EnvDeleteRequest, ...args: UserRequestRestArgs) => {
  return request<EnvDeleteResponse>(prepare(envDeleteRequestConfig, requestData), ...args)
}

envDelete.requestConfig = envDeleteRequestConfig

/**
 * 接口 [环境转让↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16035) 的 **请求类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envTrade`
 * @更新时间 `2022-04-20 15:32:17`
 */
export interface EnvTradeRequest {
  /**
   * 待转让环境id
   */
  envId: string
  /**
   * 旧团队id
   */
  oldTeamId: string
  /**
   * 新团队id
   */
  newTeamId: string
  /**
   * 是否转让关联账号:0否,1是
   */
  isTradeAccount: number
}

/**
 * 接口 [环境转让↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16035) 的 **返回类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envTrade`
 * @更新时间 `2022-04-20 15:32:17`
 */
export interface EnvTradeResponse {
  code: number
  message: string
  data: {}
}

/**
 * 接口 [环境转让↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16035) 的 **请求配置的类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envTrade`
 * @更新时间 `2022-04-20 15:32:17`
 */
type EnvTradeRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-env/envTrade',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [环境转让↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16035) 的 **请求配置**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envTrade`
 * @更新时间 `2022-04-20 15:32:17`
 */
const envTradeRequestConfig: EnvTradeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/shopone-env/envTrade',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'envTrade',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [环境转让↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16035) 的 **请求函数**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envTrade`
 * @更新时间 `2022-04-20 15:32:17`
 */
export const envTrade = /*#__PURE__*/ (requestData: EnvTradeRequest, ...args: UserRequestRestArgs) => {
  return request<EnvTradeResponse>(prepare(envTradeRequestConfig, requestData), ...args)
}

envTrade.requestConfig = envTradeRequestConfig

/**
 * 接口 [环境置顶或取消置顶↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16038) 的 **请求类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envStickTop`
 * @更新时间 `2022-04-20 15:31:23`
 */
export interface EnvStickTopRequest {
  envId: string
  /**
   * 置顶:0取消置顶,1置顶
   */
  toTop: number
}

/**
 * 接口 [环境置顶或取消置顶↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16038) 的 **返回类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envStickTop`
 * @更新时间 `2022-04-20 15:31:23`
 */
export interface EnvStickTopResponse {
  code: number
  message: string
  data: {}
}

/**
 * 接口 [环境置顶或取消置顶↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16038) 的 **请求配置的类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envStickTop`
 * @更新时间 `2022-04-20 15:31:23`
 */
type EnvStickTopRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-env/envStickTop',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [环境置顶或取消置顶↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16038) 的 **请求配置**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envStickTop`
 * @更新时间 `2022-04-20 15:31:23`
 */
const envStickTopRequestConfig: EnvStickTopRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/shopone-env/envStickTop',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'envStickTop',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [环境置顶或取消置顶↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16038) 的 **请求函数**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envStickTop`
 * @更新时间 `2022-04-20 15:31:23`
 */
export const envStickTop = /*#__PURE__*/ (requestData: EnvStickTopRequest, ...args: UserRequestRestArgs) => {
  return request<EnvStickTopResponse>(prepare(envStickTopRequestConfig, requestData), ...args)
}

envStickTop.requestConfig = envStickTopRequestConfig

/**
 * 接口 [关联账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16047) 的 **请求类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envLinkedAccount`
 * @更新时间 `2022-04-20 19:56:28`
 */
export interface EnvLinkedAccountRequest {
  /**
   * 环境id
   */
  envId: string
  /**
   * 账号id数组
   */
  accountIds: string[]
}

/**
 * 接口 [关联账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16047) 的 **返回类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envLinkedAccount`
 * @更新时间 `2022-04-20 19:56:28`
 */
export interface EnvLinkedAccountResponse {
  code: string
  message: string
  data: {}
}

/**
 * 接口 [关联账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16047) 的 **请求配置的类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envLinkedAccount`
 * @更新时间 `2022-04-20 19:56:28`
 */
type EnvLinkedAccountRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-env/envLinkedAccount',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [关联账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16047) 的 **请求配置**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envLinkedAccount`
 * @更新时间 `2022-04-20 19:56:28`
 */
const envLinkedAccountRequestConfig: EnvLinkedAccountRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/shopone-env/envLinkedAccount',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'envLinkedAccount',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [关联账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16047) 的 **请求函数**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envLinkedAccount`
 * @更新时间 `2022-04-20 19:56:28`
 */
export const envLinkedAccount = /*#__PURE__*/ (requestData: EnvLinkedAccountRequest, ...args: UserRequestRestArgs) => {
  return request<EnvLinkedAccountResponse>(prepare(envLinkedAccountRequestConfig, requestData), ...args)
}

envLinkedAccount.requestConfig = envLinkedAccountRequestConfig

/**
 * 接口 [删除环境分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16158) 的 **请求类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/groupDelete`
 * @更新时间 `2022-04-20 15:34:34`
 */
export interface GroupDeleteRequest {
  /**
   * 环境分组id
   */
  groupId: string
}

/**
 * 接口 [删除环境分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16158) 的 **返回类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/groupDelete`
 * @更新时间 `2022-04-20 15:34:34`
 */
export interface GroupDeleteResponse {
  code: number
  message: string
  data: {}
}

/**
 * 接口 [删除环境分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16158) 的 **请求配置的类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/groupDelete`
 * @更新时间 `2022-04-20 15:34:34`
 */
type GroupDeleteRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-env/groupDelete',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [删除环境分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16158) 的 **请求配置**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/groupDelete`
 * @更新时间 `2022-04-20 15:34:34`
 */
const groupDeleteRequestConfig: GroupDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/shopone-env/groupDelete',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'groupDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [删除环境分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16158) 的 **请求函数**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/groupDelete`
 * @更新时间 `2022-04-20 15:34:34`
 */
export const groupDelete = /*#__PURE__*/ (requestData: GroupDeleteRequest, ...args: UserRequestRestArgs) => {
  return request<GroupDeleteResponse>(prepare(groupDeleteRequestConfig, requestData), ...args)
}

groupDelete.requestConfig = groupDeleteRequestConfig

/**
 * 接口 [环境授权↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16161) 的 **请求类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envGrant`
 * @更新时间 `2022-04-20 17:51:00`
 */
export interface EnvGrantRequest {
  /**
   * 下属id
   */
  subordinateUid: string
  /**
   * 授权环境id数组
   */
  envIds: string[]
}

/**
 * 接口 [环境授权↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16161) 的 **返回类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envGrant`
 * @更新时间 `2022-04-20 17:51:00`
 */
export interface EnvGrantResponse {
  code: number
  message: string
  data: {}
}

/**
 * 接口 [环境授权↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16161) 的 **请求配置的类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envGrant`
 * @更新时间 `2022-04-20 17:51:00`
 */
type EnvGrantRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-env/envGrant',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [环境授权↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16161) 的 **请求配置**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envGrant`
 * @更新时间 `2022-04-20 17:51:00`
 */
const envGrantRequestConfig: EnvGrantRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/shopone-env/envGrant',
  method: Method.POST,
  requestHeaders: {'X-teamid': ''},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'envGrant',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [环境授权↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16161) 的 **请求函数**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envGrant`
 * @更新时间 `2022-04-20 17:51:00`
 */
export const envGrant = /*#__PURE__*/ (requestData: EnvGrantRequest, ...args: UserRequestRestArgs) => {
  return request<EnvGrantResponse>(prepare(envGrantRequestConfig, requestData), ...args)
}

envGrant.requestConfig = envGrantRequestConfig

/**
 * 接口 [随机获取一个User-Agent↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16230) 的 **请求类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/uaInfoGet`
 * @更新时间 `2022-04-21 19:07:16`
 */
export interface UaInfoGetRequest {
  /**
   * 设备类型
   */
  deviceType: string
  /**
   * 系统类型
   */
  osType: string
}

/**
 * 接口 [随机获取一个User-Agent↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16230) 的 **返回类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/uaInfoGet`
 * @更新时间 `2022-04-21 19:07:16`
 */
export interface UaInfoGetResponse {
  code: number
  message: string
  data: {
    /**
     * ua
     */
    userAgent: string
  }
}

/**
 * 接口 [随机获取一个User-Agent↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16230) 的 **请求配置的类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/uaInfoGet`
 * @更新时间 `2022-04-21 19:07:16`
 */
type UaInfoGetRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-env/uaInfoGet',
    '',
    string,
    'deviceType' | 'osType',
    false
  >
>

/**
 * 接口 [随机获取一个User-Agent↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16230) 的 **请求配置**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/uaInfoGet`
 * @更新时间 `2022-04-21 19:07:16`
 */
const uaInfoGetRequestConfig: UaInfoGetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/shopone-env/uaInfoGet',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: ['deviceType', 'osType'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'uaInfoGet',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [随机获取一个User-Agent↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16230) 的 **请求函数**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/uaInfoGet`
 * @更新时间 `2022-04-21 19:07:16`
 */
export const uaInfoGet = /*#__PURE__*/ (requestData: UaInfoGetRequest, ...args: UserRequestRestArgs) => {
  return request<UaInfoGetResponse>(prepare(uaInfoGetRequestConfig, requestData), ...args)
}

uaInfoGet.requestConfig = uaInfoGetRequestConfig

/**
 * 接口 [查询环境使用状态（批量）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16242) 的 **请求类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/getEnvState`
 * @更新时间 `2022-05-05 16:31:58`
 */
export interface GetEnvStateRequest {
  /**
   * 环境id数组
   */
  envIds: string
}

/**
 * 接口 [查询环境使用状态（批量）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16242) 的 **返回类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/getEnvState`
 * @更新时间 `2022-05-05 16:31:58`
 */
export interface GetEnvStateResponse {
  code: number
  message: string
  data: {
    /**
     * 环境id
     */
    envId: string
    /**
     * 打开状态:1未使用,2本人使用中,3他人使用
     */
    openState: number
    /**
     * 当前用户id
     */
    currentUid: string
    /**
     * 当前用户名称
     */
    currentUsername: string
    /**
     * 设备标识
     */
    deviceMark: string
  }[]
}

/**
 * 接口 [查询环境使用状态（批量）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16242) 的 **请求配置的类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/getEnvState`
 * @更新时间 `2022-05-05 16:31:58`
 */
type GetEnvStateRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-env/getEnvState',
    '',
    string,
    'envIds',
    false
  >
>

/**
 * 接口 [查询环境使用状态（批量）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16242) 的 **请求配置**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/getEnvState`
 * @更新时间 `2022-05-05 16:31:58`
 */
const getEnvStateRequestConfig: GetEnvStateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/shopone-env/getEnvState',
  method: Method.GET,
  requestHeaders: {'X-teamid': ''},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: ['envIds'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getEnvState',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [查询环境使用状态（批量）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16242) 的 **请求函数**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/getEnvState`
 * @更新时间 `2022-05-05 16:31:58`
 */
export const getEnvState = /*#__PURE__*/ (requestData: GetEnvStateRequest, ...args: UserRequestRestArgs) => {
  return request<GetEnvStateResponse>(prepare(getEnvStateRequestConfig, requestData), ...args)
}

getEnvState.requestConfig = getEnvStateRequestConfig

/**
 * 接口 [刷新环境使用状态↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16254) 的 **请求类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envRefreshState`
 * @更新时间 `2022-05-05 18:52:15`
 */
export interface EnvRefreshStateRequest {
  envIds: {
    /**
     * 环境id
     */
    envId: string
    /**
     * 环境状态：1打开，2续期，3关闭；（一分钟内没有心跳也默认为已经关闭）
     */
    state: number
    /**
     * 设备标识
     */
    deviceMark?: string
  }[]
}

/**
 * 接口 [刷新环境使用状态↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16254) 的 **返回类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envRefreshState`
 * @更新时间 `2022-05-05 18:52:15`
 */
export interface EnvRefreshStateResponse {
  code: number
  message: string
  data: {}
}

/**
 * 接口 [刷新环境使用状态↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16254) 的 **请求配置的类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envRefreshState`
 * @更新时间 `2022-05-05 18:52:15`
 */
type EnvRefreshStateRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-env/envRefreshState',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [刷新环境使用状态↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16254) 的 **请求配置**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envRefreshState`
 * @更新时间 `2022-05-05 18:52:15`
 */
const envRefreshStateRequestConfig: EnvRefreshStateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/shopone-env/envRefreshState',
  method: Method.POST,
  requestHeaders: {'X-teamid': ''},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'envRefreshState',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [刷新环境使用状态↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16254) 的 **请求函数**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envRefreshState`
 * @更新时间 `2022-05-05 18:52:15`
 */
export const envRefreshState = /*#__PURE__*/ (requestData: EnvRefreshStateRequest, ...args: UserRequestRestArgs) => {
  return request<EnvRefreshStateResponse>(prepare(envRefreshStateRequestConfig, requestData), ...args)
}

envRefreshState.requestConfig = envRefreshStateRequestConfig

/**
 * 接口 [查询当前团队已创建的环境数量↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16636) 的 **请求类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/getEnvCount`
 * @更新时间 `2022-06-01 15:41:57`
 */
export interface GetEnvCountRequest {}

/**
 * 接口 [查询当前团队已创建的环境数量↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16636) 的 **返回类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/getEnvCount`
 * @更新时间 `2022-06-01 15:41:57`
 */
export interface GetEnvCountResponse {
  code: number
  message: string
  /**
   * 当前团队已创建环境数量
   */
  data: number
}

/**
 * 接口 [查询当前团队已创建的环境数量↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16636) 的 **请求配置的类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/getEnvCount`
 * @更新时间 `2022-06-01 15:41:57`
 */
type GetEnvCountRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-env/getEnvCount',
    '',
    string,
    string,
    true
  >
>

/**
 * 接口 [查询当前团队已创建的环境数量↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16636) 的 **请求配置**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/getEnvCount`
 * @更新时间 `2022-06-01 15:41:57`
 */
const getEnvCountRequestConfig: GetEnvCountRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/shopone-env/getEnvCount',
  method: Method.GET,
  requestHeaders: {'X-teamid': ''},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getEnvCount',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [查询当前团队已创建的环境数量↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16636) 的 **请求函数**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/getEnvCount`
 * @更新时间 `2022-06-01 15:41:57`
 */
export const getEnvCount = /*#__PURE__*/ (requestData?: GetEnvCountRequest, ...args: UserRequestRestArgs) => {
  return request<GetEnvCountResponse>(prepare(getEnvCountRequestConfig, requestData), ...args)
}

getEnvCount.requestConfig = getEnvCountRequestConfig

/**
 * 接口 [查询当前团队所有的环境信息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16641) 的 **请求类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/getAllEnvInfo`
 * @更新时间 `2022-06-01 15:55:43`
 */
export interface GetAllEnvInfoRequest {}

/**
 * 接口 [查询当前团队所有的环境信息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16641) 的 **返回类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/getAllEnvInfo`
 * @更新时间 `2022-06-01 15:55:43`
 */
export interface GetAllEnvInfoResponse {
  code: number
  message: string
  data: {
    /**
     * 环境id
     */
    envId: string
    /**
     * 环境名称
     */
    envName: string
  }[]
}

/**
 * 接口 [查询当前团队所有的环境信息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16641) 的 **请求配置的类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/getAllEnvInfo`
 * @更新时间 `2022-06-01 15:55:43`
 */
type GetAllEnvInfoRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-env/getAllEnvInfo',
    '',
    string,
    string,
    true
  >
>

/**
 * 接口 [查询当前团队所有的环境信息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16641) 的 **请求配置**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/getAllEnvInfo`
 * @更新时间 `2022-06-01 15:55:43`
 */
const getAllEnvInfoRequestConfig: GetAllEnvInfoRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/shopone-env/getAllEnvInfo',
  method: Method.GET,
  requestHeaders: {'X-teamid': ''},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAllEnvInfo',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [查询当前团队所有的环境信息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16641) 的 **请求函数**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/getAllEnvInfo`
 * @更新时间 `2022-06-01 15:55:43`
 */
export const getAllEnvInfo = /*#__PURE__*/ (requestData?: GetAllEnvInfoRequest, ...args: UserRequestRestArgs) => {
  return request<GetAllEnvInfoResponse>(prepare(getAllEnvInfoRequestConfig, requestData), ...args)
}

getAllEnvInfo.requestConfig = getAllEnvInfoRequestConfig

/**
 * 接口 [检查创建环境（批量创建环境）数据↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16646) 的 **请求类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/checkEnvImportCreate`
 * @更新时间 `2022-06-13 21:18:07`
 */
export type CheckEnvImportCreateRequest = {
  /**
   * 环境名称
   */
  envName: string
  /**
   * 环境分组id
   */
  groupId?: string
  /**
   * 分组名称
   */
  groupName?: string
  /**
   * 浏览器指纹信息
   */
  bfInfo: {
    /**
     * 设备类型
     */
    deviceType: number
    /**
     * 操作系统类型
     */
    osType: number
    /**
     * UA
     */
    userAgent: string
    /**
     * 环境语言
     */
    envLang: string
    /**
     * 浏览器指纹
     */
    fingerprint: string
    /**
     * cookie
     */
    cookie?: string
    /**
     * localStorage
     */
    localStorage?: string
  }
  /**
   * 代理信息
   */
  proxyInfo: {
    /**
     * 代理类型
     */
    proxyType: number
    proxyIP?: string
    proxyLocation?: string
    /**
     * 代理密码
     */
    proxyPasswd?: string
    /**
     * 代理账号
     */
    proxyAccount?: string
    /**
     * 代理主机名称
     */
    proxyHost?: string
    protocol?: string
    port?: string
    country?: string
    region?: string
    city?: string
    /**
     * 代理详情
     */
    proxyDetail: {}
  }
  /**
   * 账号数组，（导入环境时使用）
   */
  accountList?: {
    /**
     * 账号名称
     */
    name: string
    /**
     * 账号分组名称
     */
    accountGroupName?: string
    /**
     * 平台名称
     */
    platformName: string
    /**
     * 子平台名称，如果旗下有很多平台是必须
     */
    platformChildName: string
    /**
     * 平台链接，只有自定义需要
     */
    url?: string
    /**
     * 账号
     */
    account: string
    /**
     * 密码
     */
    password?: string
  }[]
}[]

/**
 * 接口 [检查创建环境（批量创建环境）数据↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16646) 的 **返回类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/checkEnvImportCreate`
 * @更新时间 `2022-06-13 21:18:07`
 */
export interface CheckEnvImportCreateResponse {
  code: number
  message: string
  data: {}
}

/**
 * 接口 [检查创建环境（批量创建环境）数据↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16646) 的 **请求配置的类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/checkEnvImportCreate`
 * @更新时间 `2022-06-13 21:18:07`
 */
type CheckEnvImportCreateRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-env/checkEnvImportCreate',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [检查创建环境（批量创建环境）数据↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16646) 的 **请求配置**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/checkEnvImportCreate`
 * @更新时间 `2022-06-13 21:18:07`
 */
const checkEnvImportCreateRequestConfig: CheckEnvImportCreateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/shopone-env/checkEnvImportCreate',
  method: Method.POST,
  requestHeaders: {'X-teamid': ''},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'checkEnvImportCreate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [检查创建环境（批量创建环境）数据↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16646) 的 **请求函数**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/checkEnvImportCreate`
 * @更新时间 `2022-06-13 21:18:07`
 */
export const checkEnvImportCreate = /*#__PURE__*/ (
  requestData: CheckEnvImportCreateRequest,
  ...args: UserRequestRestArgs
) => {
  return request<CheckEnvImportCreateResponse>(prepare(checkEnvImportCreateRequestConfig, requestData), ...args)
}

checkEnvImportCreate.requestConfig = checkEnvImportCreateRequestConfig

/**
 * 接口 [创建环境（批量创建环境)↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16666) 的 **请求类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envCreate`
 * @更新时间 `2022-06-13 21:18:41`
 */
export type EnvCreateRequest = {
  /**
   * 环境名称
   */
  envName: string
  /**
   * 环境分组id
   */
  groupId?: string
  /**
   * 分组名称
   */
  groupName?: string
  /**
   * 浏览器指纹信息
   */
  bfInfo: {
    /**
     * 设备类型
     */
    deviceType: number
    /**
     * 操作系统类型
     */
    osType: number
    /**
     * UA
     */
    userAgent: string
    /**
     * 环境语言
     */
    envLang: string
    /**
     * 浏览器指纹
     */
    fingerprint: string
    /**
     * cookie
     */
    cookie?: string
    /**
     * localStorage
     */
    localStorage?: string
  }
  /**
   * 代理信息
   */
  proxyInfo: {
    /**
     * 代理类型
     */
    proxyType: number
    proxyIP?: string
    proxyLocation?: string
    /**
     * 代理密码
     */
    proxyPasswd?: string
    /**
     * 代理账号
     */
    proxyAccount?: string
    /**
     * 代理主机名称
     */
    proxyHost?: string
    protocol?: string
    port?: string
    country?: string
    region?: string
    city?: string
    /**
     * 代理详情
     */
    proxyDetail: {}
  }
  /**
   * 账号数组，（导入环境时使用）
   */
  accountList?: {
    /**
     * 账号名称
     */
    name: string
    /**
     * 账号分组
     */
    accountGroupName: string
    /**
     * 平台名称
     */
    platformName: string
    /**
     * 子平台名称
     */
    platformChildName: string
    /**
     * 平台链接
     */
    url: string
    /**
     * 账号
     */
    account: string
    /**
     * 密码
     */
    password: string
  }[]
}[]

/**
 * 接口 [创建环境（批量创建环境)↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16666) 的 **返回类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envCreate`
 * @更新时间 `2022-06-13 21:18:41`
 */
export interface EnvCreateResponse {
  code: number
  message: string
  data: {}
}

/**
 * 接口 [创建环境（批量创建环境)↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16666) 的 **请求配置的类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envCreate`
 * @更新时间 `2022-06-13 21:18:41`
 */
type EnvCreateRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-env/envCreate',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [创建环境（批量创建环境)↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16666) 的 **请求配置**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envCreate`
 * @更新时间 `2022-06-13 21:18:41`
 */
const envCreateRequestConfig: EnvCreateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/shopone-env/envCreate',
  method: Method.POST,
  requestHeaders: {'X-teamid': ''},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'envCreate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [创建环境（批量创建环境)↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16666) 的 **请求函数**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envCreate`
 * @更新时间 `2022-06-13 21:18:41`
 */
export const envCreate = /*#__PURE__*/ (requestData: EnvCreateRequest, ...args: UserRequestRestArgs) => {
  return request<EnvCreateResponse>(prepare(envCreateRequestConfig, requestData), ...args)
}

envCreate.requestConfig = envCreateRequestConfig

/**
 * 接口 [编辑环境cookie↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16686) 的 **请求类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envCookieEdit`
 * @更新时间 `2022-06-13 21:16:18`
 */
export interface EnvCookieEditRequest {
  /**
   * cookie
   */
  cookie: string
  /**
   * localStorage
   */
  localStorage: string
  /**
   * 环境id
   */
  envId: string
}

/**
 * 接口 [编辑环境cookie↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16686) 的 **返回类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envCookieEdit`
 * @更新时间 `2022-06-13 21:16:18`
 */
export interface EnvCookieEditResponse {
  code: number
  message: string
  data: {}
}

/**
 * 接口 [编辑环境cookie↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16686) 的 **请求配置的类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envCookieEdit`
 * @更新时间 `2022-06-13 21:16:18`
 */
type EnvCookieEditRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-env/envCookieEdit',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [编辑环境cookie↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16686) 的 **请求配置**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envCookieEdit`
 * @更新时间 `2022-06-13 21:16:18`
 */
const envCookieEditRequestConfig: EnvCookieEditRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/shopone-env/envCookieEdit',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'envCookieEdit',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [编辑环境cookie↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16686) 的 **请求函数**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `POST /shopone-env/envCookieEdit`
 * @更新时间 `2022-06-13 21:16:18`
 */
export const envCookieEdit = /*#__PURE__*/ (requestData: EnvCookieEditRequest, ...args: UserRequestRestArgs) => {
  return request<EnvCookieEditResponse>(prepare(envCookieEditRequestConfig, requestData), ...args)
}

envCookieEdit.requestConfig = envCookieEditRequestConfig

/**
 * 接口 [获取指定数量User-Agent↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16886) 的 **请求类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/uaInfoGetList`
 * @更新时间 `2022-06-13 18:21:00`
 */
export interface UaInfoGetListRequest {
  /**
   * 设备类型
   */
  deviceType?: string
  /**
   * 系统类型
   */
  osType?: string
  /**
   * 返回数量
   */
  count: string
}

/**
 * 接口 [获取指定数量User-Agent↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16886) 的 **返回类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/uaInfoGetList`
 * @更新时间 `2022-06-13 18:21:00`
 */
export interface UaInfoGetListResponse {
  code: number
  message: string
  /**
   * ua列表
   */
  data: {
    /**
     * user-agent
     */
    userAgent: string
    /**
     * osType
     */
    osType: number
    /**
     * deviceType
     */
    deviceType: number
  }[]
}

/**
 * 接口 [获取指定数量User-Agent↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16886) 的 **请求配置的类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/uaInfoGetList`
 * @更新时间 `2022-06-13 18:21:00`
 */
type UaInfoGetListRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-env/uaInfoGetList',
    '',
    string,
    'deviceType' | 'osType' | 'count',
    false
  >
>

/**
 * 接口 [获取指定数量User-Agent↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16886) 的 **请求配置**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/uaInfoGetList`
 * @更新时间 `2022-06-13 18:21:00`
 */
const uaInfoGetListRequestConfig: UaInfoGetListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/shopone-env/uaInfoGetList',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: ['deviceType', 'osType', 'count'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'uaInfoGetList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取指定数量User-Agent↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16886) 的 **请求函数**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/uaInfoGetList`
 * @更新时间 `2022-06-13 18:21:00`
 */
export const uaInfoGetList = /*#__PURE__*/ (requestData: UaInfoGetListRequest, ...args: UserRequestRestArgs) => {
  return request<UaInfoGetListResponse>(prepare(uaInfoGetListRequestConfig, requestData), ...args)
}

uaInfoGetList.requestConfig = uaInfoGetListRequestConfig

/**
 * 接口 [查找环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17116) 的 **请求类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-search/env/searchEnvs`
 * @更新时间 `2022-06-27 18:02:06`
 */
export interface SearchEnvsRequest {
  /**
   * 查询关键字
   */
  keyword?: string
  /**
   * 环境分组id
   */
  groupId?: string
  /**
   * 特定的环境id
   */
  specialEnvId?: string
  pageNum: string
  pageSize: string
}

/**
 * 接口 [查找环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17116) 的 **返回类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-search/env/searchEnvs`
 * @更新时间 `2022-06-27 18:02:06`
 */
export interface SearchEnvsResponse {
  code: number
  message: string
  data: {
    /**
     * 总数量
     */
    total: number
    /**
     * 总页数
     */
    totalPage?: number
    currentPage?: number
    items: {
      /**
       * 环境id
       */
      envId: string
      /**
       * 是否置顶：0否，1是
       */
      toTop: number
      /**
       * 环境IP
       */
      envIP: string
      /**
       * 浏览器指纹
       */
      fingerprint: string
      /**
       * 关联账号
       */
      linkedAccount: {
        /**
         * 账号类型
         */
        accountType: string
        /**
         * 数量
         */
        count: number
        /**
         * 账号logo
         */
        accountLogoUrl: string
        accountList: {
          /**
           * 账号id
           */
          accountId: string
          /**
           * 账号
           */
          account: string
          /**
           * 密码
           */
          password: string
          /**
           * 账号名称
           */
          accountName: string
          /**
           * 账号logo
           */
          accountLogoUrl: string
          /**
           * 账号平台信息
           */
          platformInfo: {
            /**
             * id
             */
            id: string
            /**
             * 名称
             */
            name: string
            /**
             * 子名称
             */
            childName: string
            /**
             * 图片URL
             */
            imgUrl: string
            /**
             * 链接
             */
            url: string
          }
        }[]
      }[]
      envState: {
        /**
         * 打开状态:1未使用,2本人使用中,3他人使用
         */
        openState: number
        /**
         * 当前用户名称
         */
        currentUsername: string
        /**
         * 当前用户id
         */
        currentUid: string
        /**
         * 设备标识
         */
        deviceMark: string
      }
      /**
       * 基础信息
       */
      basicInfo: {
        /**
         * 创建时间
         */
        createTime: string
        /**
         * 环境名称
         */
        envName: string
        /**
         * 环境分组id
         */
        groupId: string
        /**
         * 环境分组名称
         */
        groupName: string
        /**
         * 纯净标识：0否，1是
         */
        pureFlag: number
      }
      /**
       * 代理信息
       */
      proxyInfo: {
        /**
         * 代理id
         */
        proxyId: string
        /**
         * 代理类型
         */
        proxyType: number
        /**
         * 代理IP
         */
        proxyIP?: string
        /**
         * 代理位置
         */
        proxyLocation?: string
        protocol?: string
        port?: string
        country?: string
        region?: string
        city?: string
        /**
         * 代理详情
         */
        proxyDetail?: {}
      }
      /**
       * 浏览器指纹信息
       */
      bfInfo: {
        /**
         * 设备类型: 0电脑,1手机,2平板
         */
        deviceType: number
        /**
         * 操作系统类型: 0Windows,1MacOS,2Linux
         */
        osType: number
        /**
         * UA
         */
        userAgent: string
        /**
         * 环境语言
         */
        envLang: string
        /**
         * 指纹id
         */
        bfId: string
        /**
         * 是否明文cookie：true明文，false密文
         */
        isPlaintext?: boolean
        /**
         * cookie
         */
        cookie?: string
        /**
         * localStorage
         */
        localStorage?: string
      }
    }[]
  }
}

/**
 * 接口 [查找环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17116) 的 **请求配置的类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-search/env/searchEnvs`
 * @更新时间 `2022-06-27 18:02:06`
 */
type SearchEnvsRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-search/env/searchEnvs',
    '',
    string,
    'keyword' | 'groupId' | 'specialEnvId' | 'pageNum' | 'pageSize',
    false
  >
>

/**
 * 接口 [查找环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17116) 的 **请求配置**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-search/env/searchEnvs`
 * @更新时间 `2022-06-27 18:02:06`
 */
const searchEnvsRequestConfig: SearchEnvsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/shopone-search/env/searchEnvs',
  method: Method.GET,
  requestHeaders: {'X-teamid': ''},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: ['keyword', 'groupId', 'specialEnvId', 'pageNum', 'pageSize'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'searchEnvs',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [查找环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17116) 的 **请求函数**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-search/env/searchEnvs`
 * @更新时间 `2022-06-27 18:02:06`
 */
export const searchEnvs = /*#__PURE__*/ (requestData: SearchEnvsRequest, ...args: UserRequestRestArgs) => {
  return request<SearchEnvsResponse>(prepare(searchEnvsRequestConfig, requestData), ...args)
}

searchEnvs.requestConfig = searchEnvsRequestConfig

/**
 * 接口 [根据envId查找环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17276) 的 **请求类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/envFindById`
 * @更新时间 `2022-07-02 17:25:58`
 */
export interface EnvFindByIdRequest {
  /**
   * 环境id
   */
  envId?: string
}

/**
 * 接口 [根据envId查找环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17276) 的 **返回类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/envFindById`
 * @更新时间 `2022-07-02 17:25:58`
 */
export interface EnvFindByIdResponse {
  code: number
  message: string
  data: {
    items: {
      /**
       * 环境id
       */
      envId: string
      /**
       * 环境名称
       */
      envName: string
      /**
       * 是否置顶：0否，1是
       */
      toTop: number
      /**
       * 环境IP
       */
      envIP: string
      /**
       * 浏览器指纹
       */
      fingerprint: string
      /**
       * 关联账号
       */
      linkedAccount: {
        /**
         * 账号类型
         */
        accountType: string
        /**
         * 数量
         */
        count: number
        /**
         * 账号logo
         */
        accountLogoUrl: string
        accountList: {
          /**
           * 账号id
           */
          accountId: string
          /**
           * 账号
           */
          account: string
          /**
           * 密码
           */
          password: string
          /**
           * 账号名称
           */
          accountName: string
          /**
           * 账号logo
           */
          accountLogoUrl: string
          /**
           * 账号平台信息
           */
          platformInfo: {
            /**
             * id
             */
            id: string
            /**
             * 名称
             */
            name: string
            /**
             * 子名称
             */
            childName: string
            /**
             * 图片URL
             */
            imgUrl: string
            /**
             * 链接
             */
            url: string
          }
        }[]
      }[]
      envState: {
        /**
         * 打开状态:1未使用,2本人使用中,3他人使用
         */
        openState: number
        /**
         * 当前用户名称
         */
        currentUsername: string
        /**
         * 当前用户id
         */
        currentUid: string
        /**
         * 设备标识
         */
        deviceMark: string
      }
      /**
       * 基础信息
       */
      basicInfo: {
        /**
         * 创建时间
         */
        createTime: string
        /**
         * 环境名称
         */
        envName: string
        /**
         * 环境分组id
         */
        groupId: string
        /**
         * 环境分组名称
         */
        groupName: string
        /**
         * 纯净标识：0否，1是
         */
        pureFlag: number
      }
      /**
       * 代理信息
       */
      proxyInfo: {
        /**
         * 代理id
         */
        proxyId: string
        /**
         * 代理类型
         */
        proxyType: number
        /**
         * 代理IP
         */
        proxyIP?: string
        /**
         * 代理位置
         */
        proxyLocation?: string
        protocol?: string
        port?: string
        country?: string
        region?: string
        city?: string
        /**
         * 代理详情
         */
        proxyDetail?: {}
      }
      /**
       * 浏览器指纹信息
       */
      bfInfo: {
        /**
         * 设备类型: 0电脑,1手机,2平板
         */
        deviceType: number
        /**
         * 操作系统类型: 0Windows,1MacOS,2Linux
         */
        osType: number
        /**
         * UA
         */
        userAgent: string
        /**
         * 环境语言
         */
        envLang: string
        /**
         * 指纹id
         */
        bfId: string
        /**
         * cookie
         */
        cookie?: string
        /**
         * localStorage
         */
        localStorage?: string
      }
    }[]
  }
}

/**
 * 接口 [根据envId查找环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17276) 的 **请求配置的类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/envFindById`
 * @更新时间 `2022-07-02 17:25:58`
 */
type EnvFindByIdRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-env/envFindById',
    '',
    string,
    'envId',
    false
  >
>

/**
 * 接口 [根据envId查找环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17276) 的 **请求配置**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/envFindById`
 * @更新时间 `2022-07-02 17:25:58`
 */
const envFindByIdRequestConfig: EnvFindByIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/shopone-env/envFindById',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: ['envId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'envFindById',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [根据envId查找环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17276) 的 **请求函数**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/envFindById`
 * @更新时间 `2022-07-02 17:25:58`
 */
export const envFindById = /*#__PURE__*/ (requestData: EnvFindByIdRequest, ...args: UserRequestRestArgs) => {
  return request<EnvFindByIdResponse>(prepare(envFindByIdRequestConfig, requestData), ...args)
}

envFindById.requestConfig = envFindByIdRequestConfig

/**
 * 接口 [根据envId查询环境使用状态↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17281) 的 **请求类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/getEnvStateByEnvId`
 * @更新时间 `2022-06-21 17:07:53`
 */
export interface GetEnvStateByEnvIdRequest {
  /**
   * 环境id
   */
  envId: string
}

/**
 * 接口 [根据envId查询环境使用状态↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17281) 的 **返回类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/getEnvStateByEnvId`
 * @更新时间 `2022-06-21 17:07:53`
 */
export interface GetEnvStateByEnvIdResponse {
  code: number
  message: string
  data: {
    /**
     * 打开状态:1未使用,4使用中
     */
    openState: number
    /**
     * 环境id
     */
    envId: string
  }
}

/**
 * 接口 [根据envId查询环境使用状态↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17281) 的 **请求配置的类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/getEnvStateByEnvId`
 * @更新时间 `2022-06-21 17:07:53`
 */
type GetEnvStateByEnvIdRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-env/getEnvStateByEnvId',
    '',
    string,
    'envId',
    false
  >
>

/**
 * 接口 [根据envId查询环境使用状态↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17281) 的 **请求配置**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/getEnvStateByEnvId`
 * @更新时间 `2022-06-21 17:07:53`
 */
const getEnvStateByEnvIdRequestConfig: GetEnvStateByEnvIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/shopone-env/getEnvStateByEnvId',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: ['envId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getEnvStateByEnvId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [根据envId查询环境使用状态↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17281) 的 **请求函数**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/getEnvStateByEnvId`
 * @更新时间 `2022-06-21 17:07:53`
 */
export const getEnvStateByEnvId = /*#__PURE__*/ (
  requestData: GetEnvStateByEnvIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetEnvStateByEnvIdResponse>(prepare(getEnvStateByEnvIdRequestConfig, requestData), ...args)
}

getEnvStateByEnvId.requestConfig = getEnvStateByEnvIdRequestConfig

/**
 * 接口 [获取原始cookie↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17405) 的 **请求类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/getOriginCookie`
 * @更新时间 `2022-06-27 19:23:21`
 */
export interface GetOriginCookieRequest {
  /**
   * 环境ID
   */
  envId: string
}

/**
 * 接口 [获取原始cookie↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17405) 的 **返回类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/getOriginCookie`
 * @更新时间 `2022-06-27 19:23:21`
 */
export interface GetOriginCookieResponse {
  code: number
  message: string
  /**
   * 加密的原始cookie
   */
  data: string
}

/**
 * 接口 [获取原始cookie↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17405) 的 **请求配置的类型**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/getOriginCookie`
 * @更新时间 `2022-06-27 19:23:21`
 */
type GetOriginCookieRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-env/getOriginCookie',
    '',
    string,
    'envId',
    false
  >
>

/**
 * 接口 [获取原始cookie↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17405) 的 **请求配置**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/getOriginCookie`
 * @更新时间 `2022-06-27 19:23:21`
 */
const getOriginCookieRequestConfig: GetOriginCookieRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/shopone-env/getOriginCookie',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: ['envId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getOriginCookie',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取原始cookie↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17405) 的 **请求函数**
 *
 * @分类 [环境↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4346)
 * @请求头 `GET /shopone-env/getOriginCookie`
 * @更新时间 `2022-06-27 19:23:21`
 */
export const getOriginCookie = /*#__PURE__*/ (requestData: GetOriginCookieRequest, ...args: UserRequestRestArgs) => {
  return request<GetOriginCookieResponse>(prepare(getOriginCookieRequestConfig, requestData), ...args)
}

getOriginCookie.requestConfig = getOriginCookieRequestConfig

const mockUrl_0_0_0_2 = 'http://www.yapi-efox.duowan.com/mock/1151' as any
const devUrl_0_0_0_2 = 'https://api-test.shopviewer.com' as any
const prodUrl_0_0_0_2 = '' as any
const dataKey_0_0_0_2 = '' as any

/**
 * 接口 [发送验证码↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15966) 的 **请求类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/sendCode`
 * @更新时间 `2022-04-12 16:08:20`
 */
export interface SendCodeRequest {
  /**
   * 手机号
   */
  account: string
  /**
   * 默认0086
   */
  areaCode?: string
  /**
   * 0：注册，2：登录
   */
  type: number
}

/**
 * 接口 [发送验证码↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15966) 的 **返回类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/sendCode`
 * @更新时间 `2022-04-12 16:08:20`
 */
export interface SendCodeResponse {
  /**
   * 非0为失败
   */
  code: number
  message: string
}

/**
 * 接口 [发送验证码↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15966) 的 **请求配置的类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/sendCode`
 * @更新时间 `2022-04-12 16:08:20`
 */
type SendCodeRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-user/user/sendCode',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [发送验证码↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15966) 的 **请求配置**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/sendCode`
 * @更新时间 `2022-04-12 16:08:20`
 */
const sendCodeRequestConfig: SendCodeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/shopone-user/user/sendCode',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'sendCode',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [发送验证码↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15966) 的 **请求函数**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/sendCode`
 * @更新时间 `2022-04-12 16:08:20`
 */
export const sendCode = /*#__PURE__*/ (requestData: SendCodeRequest, ...args: UserRequestRestArgs) => {
  return request<SendCodeResponse>(prepare(sendCodeRequestConfig, requestData), ...args)
}

sendCode.requestConfig = sendCodeRequestConfig

/**
 * 接口 [用户注册↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15969) 的 **请求类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/register`
 * @更新时间 `2022-05-13 14:23:50`
 */
export interface RegisterRequest {
  /**
   * 手机号
   */
  account: string
  vcode: string
  password: string
  inviteCode: string
}

/**
 * 接口 [用户注册↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15969) 的 **返回类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/register`
 * @更新时间 `2022-05-13 14:23:50`
 */
export interface RegisterResponse {
  /**
   * 非0为失败
   */
  code: number
  message: string
  data: {
    /**
     * 注册时的账号
     */
    account: string
    /**
     * 用户信息
     */
    user: {
      uid: number
      mobile: string
      areaCode: string
      /**
       * 昵称
       */
      nickname: string
      /**
       * 头像
       */
      cover: string
    }
    /**
     * access key，后续请求验证登录状态使用
     */
    credit: string
  }
}

/**
 * 接口 [用户注册↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15969) 的 **请求配置的类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/register`
 * @更新时间 `2022-05-13 14:23:50`
 */
type RegisterRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-user/user/register',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [用户注册↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15969) 的 **请求配置**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/register`
 * @更新时间 `2022-05-13 14:23:50`
 */
const registerRequestConfig: RegisterRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/shopone-user/user/register',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'register',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [用户注册↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15969) 的 **请求函数**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/register`
 * @更新时间 `2022-05-13 14:23:50`
 */
export const register = /*#__PURE__*/ (requestData: RegisterRequest, ...args: UserRequestRestArgs) => {
  return request<RegisterResponse>(prepare(registerRequestConfig, requestData), ...args)
}

register.requestConfig = registerRequestConfig

/**
 * 接口 [根据验证码登录↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15972) 的 **请求类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/codeLogin`
 * @更新时间 `2022-04-12 16:42:31`
 */
export interface CodeLoginRequest {
  /**
   * 手机号
   */
  account: string
  vcode: string
}

/**
 * 接口 [根据验证码登录↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15972) 的 **返回类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/codeLogin`
 * @更新时间 `2022-04-12 16:42:31`
 */
export interface CodeLoginResponse {
  /**
   * 非0为失败
   */
  code: number
  message: string
  data: {
    /**
     * 注册时的账号
     */
    account: string
    /**
     * 用户信息
     */
    user: {
      uid: number
      mobile: string
      areaCode: string
      /**
       * 昵称
       */
      nickname: string
      /**
       * 头像
       */
      cover: string
    }
    /**
     * access key，后续请求验证登录状态使用
     */
    credit: string
  }
}

/**
 * 接口 [根据验证码登录↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15972) 的 **请求配置的类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/codeLogin`
 * @更新时间 `2022-04-12 16:42:31`
 */
type CodeLoginRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-user/user/codeLogin',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [根据验证码登录↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15972) 的 **请求配置**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/codeLogin`
 * @更新时间 `2022-04-12 16:42:31`
 */
const codeLoginRequestConfig: CodeLoginRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/shopone-user/user/codeLogin',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'codeLogin',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [根据验证码登录↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15972) 的 **请求函数**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/codeLogin`
 * @更新时间 `2022-04-12 16:42:31`
 */
export const codeLogin = /*#__PURE__*/ (requestData: CodeLoginRequest, ...args: UserRequestRestArgs) => {
  return request<CodeLoginResponse>(prepare(codeLoginRequestConfig, requestData), ...args)
}

codeLogin.requestConfig = codeLoginRequestConfig

/**
 * 接口 [根据账号密码登录↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15975) 的 **请求类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/login`
 * @更新时间 `2022-04-12 16:48:21`
 */
export interface LoginRequest {
  /**
   * 手机号
   */
  account: string
  password: string
}

/**
 * 接口 [根据账号密码登录↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15975) 的 **返回类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/login`
 * @更新时间 `2022-04-12 16:48:21`
 */
export interface LoginResponse {
  /**
   * 非0为失败
   */
  code: number
  message: string
  data: {
    /**
     * 注册时的账号
     */
    account: string
    /**
     * 用户信息
     */
    user: {
      uid: number
      mobile: string
      areaCode: string
      /**
       * 昵称
       */
      nickname: string
      /**
       * 头像
       */
      cover: string
    }
    /**
     * access key，后续请求验证登录状态使用
     */
    credit: string
  }
}

/**
 * 接口 [根据账号密码登录↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15975) 的 **请求配置的类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/login`
 * @更新时间 `2022-04-12 16:48:21`
 */
type LoginRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-user/user/login',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [根据账号密码登录↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15975) 的 **请求配置**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/login`
 * @更新时间 `2022-04-12 16:48:21`
 */
const loginRequestConfig: LoginRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/shopone-user/user/login',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'login',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [根据账号密码登录↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15975) 的 **请求函数**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/login`
 * @更新时间 `2022-04-12 16:48:21`
 */
export const login = /*#__PURE__*/ (requestData: LoginRequest, ...args: UserRequestRestArgs) => {
  return request<LoginResponse>(prepare(loginRequestConfig, requestData), ...args)
}

login.requestConfig = loginRequestConfig

/**
 * 接口 [重置密码↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15978) 的 **请求类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/resetPassword`
 * @更新时间 `2022-04-12 17:00:09`
 */
export interface ResetPasswordRequest {
  /**
   * 手机号
   */
  account: string
  vcode: string
  newPassword: string
}

/**
 * 接口 [重置密码↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15978) 的 **返回类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/resetPassword`
 * @更新时间 `2022-04-12 17:00:09`
 */
export interface ResetPasswordResponse {
  /**
   * 非0为失败
   */
  code: number
  message: string
  data: {
    /**
     * 注册时的账号
     */
    account: string
    /**
     * 用户信息
     */
    user: {
      uid: number
      mobile: string
      areaCode: string
      /**
       * 昵称
       */
      nickname: string
      /**
       * 头像
       */
      cover: string
    }
    /**
     * access key，后续请求验证登录状态使用
     */
    credit: string
  }
}

/**
 * 接口 [重置密码↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15978) 的 **请求配置的类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/resetPassword`
 * @更新时间 `2022-04-12 17:00:09`
 */
type ResetPasswordRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-user/user/resetPassword',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [重置密码↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15978) 的 **请求配置**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/resetPassword`
 * @更新时间 `2022-04-12 17:00:09`
 */
const resetPasswordRequestConfig: ResetPasswordRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/shopone-user/user/resetPassword',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'resetPassword',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [重置密码↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/15978) 的 **请求函数**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/resetPassword`
 * @更新时间 `2022-04-12 17:00:09`
 */
export const resetPassword = /*#__PURE__*/ (requestData: ResetPasswordRequest, ...args: UserRequestRestArgs) => {
  return request<ResetPasswordResponse>(prepare(resetPasswordRequestConfig, requestData), ...args)
}

resetPassword.requestConfig = resetPasswordRequestConfig

/**
 * 接口 [获取用户信息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16014) 的 **请求类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `GET /shopone-user/user/getUser`
 * @更新时间 `2022-04-19 23:57:37`
 */
export interface GetUserRequest {}

/**
 * 接口 [获取用户信息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16014) 的 **返回类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `GET /shopone-user/user/getUser`
 * @更新时间 `2022-04-19 23:57:37`
 */
export interface GetUserResponse {
  /**
   * 非0为失败
   */
  code: number
  message: string
  data: {
    uid: number
    mobile: string
    areaCode: string
    nickname: string
    cover: string
  }
}

/**
 * 接口 [获取用户信息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16014) 的 **请求配置的类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `GET /shopone-user/user/getUser`
 * @更新时间 `2022-04-19 23:57:37`
 */
type GetUserRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-user/user/getUser',
    '',
    string,
    string,
    true
  >
>

/**
 * 接口 [获取用户信息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16014) 的 **请求配置**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `GET /shopone-user/user/getUser`
 * @更新时间 `2022-04-19 23:57:37`
 */
const getUserRequestConfig: GetUserRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/shopone-user/user/getUser',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getUser',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取用户信息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16014) 的 **请求函数**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `GET /shopone-user/user/getUser`
 * @更新时间 `2022-04-19 23:57:37`
 */
export const getUser = /*#__PURE__*/ (requestData?: GetUserRequest, ...args: UserRequestRestArgs) => {
  return request<GetUserResponse>(prepare(getUserRequestConfig, requestData), ...args)
}

getUser.requestConfig = getUserRequestConfig

/**
 * 接口 [修改手机号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16020) 的 **请求类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/changeAccount`
 * @更新时间 `2022-04-20 17:27:46`
 */
export interface ChangeAccountRequest {
  /**
   * 手机号
   */
  account: string
  /**
   * 区号，默认0086
   */
  areaCode: string
  /**
   * 3:手机号
   */
  accountType: number
  vcode: string
}

/**
 * 接口 [修改手机号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16020) 的 **返回类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/changeAccount`
 * @更新时间 `2022-04-20 17:27:46`
 */
export interface ChangeAccountResponse {
  /**
   * 非0为失败
   */
  code: number
  message: string
}

/**
 * 接口 [修改手机号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16020) 的 **请求配置的类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/changeAccount`
 * @更新时间 `2022-04-20 17:27:46`
 */
type ChangeAccountRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-user/user/changeAccount',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [修改手机号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16020) 的 **请求配置**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/changeAccount`
 * @更新时间 `2022-04-20 17:27:46`
 */
const changeAccountRequestConfig: ChangeAccountRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/shopone-user/user/changeAccount',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'changeAccount',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [修改手机号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16020) 的 **请求函数**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/changeAccount`
 * @更新时间 `2022-04-20 17:27:46`
 */
export const changeAccount = /*#__PURE__*/ (requestData: ChangeAccountRequest, ...args: UserRequestRestArgs) => {
  return request<ChangeAccountResponse>(prepare(changeAccountRequestConfig, requestData), ...args)
}

changeAccount.requestConfig = changeAccountRequestConfig

/**
 * 接口 [发送当前用户账号验证码（修改手机号）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16179) 的 **请求类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/sendCodeForUser`
 * @更新时间 `2022-04-20 17:28:43`
 */
export interface SendCodeForUserRequest {
  /**
   * 3：手机号
   */
  accountType: number
}

/**
 * 接口 [发送当前用户账号验证码（修改手机号）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16179) 的 **返回类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/sendCodeForUser`
 * @更新时间 `2022-04-20 17:28:43`
 */
export interface SendCodeForUserResponse {
  /**
   * 非0为失败
   */
  code: number
  message: string
}

/**
 * 接口 [发送当前用户账号验证码（修改手机号）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16179) 的 **请求配置的类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/sendCodeForUser`
 * @更新时间 `2022-04-20 17:28:43`
 */
type SendCodeForUserRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-user/user/sendCodeForUser',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [发送当前用户账号验证码（修改手机号）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16179) 的 **请求配置**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/sendCodeForUser`
 * @更新时间 `2022-04-20 17:28:43`
 */
const sendCodeForUserRequestConfig: SendCodeForUserRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/shopone-user/user/sendCodeForUser',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'sendCodeForUser',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [发送当前用户账号验证码（修改手机号）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16179) 的 **请求函数**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/sendCodeForUser`
 * @更新时间 `2022-04-20 17:28:43`
 */
export const sendCodeForUser = /*#__PURE__*/ (requestData: SendCodeForUserRequest, ...args: UserRequestRestArgs) => {
  return request<SendCodeForUserResponse>(prepare(sendCodeForUserRequestConfig, requestData), ...args)
}

sendCodeForUser.requestConfig = sendCodeForUserRequestConfig

/**
 * 接口 [验证当前用户账号（修改手机号）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16182) 的 **请求类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/verifyUserAccount`
 * @更新时间 `2022-04-20 17:29:33`
 */
export interface VerifyUserAccountRequest {
  /**
   * 3：手机号
   */
  accountType: number
  vcode: string
}

/**
 * 接口 [验证当前用户账号（修改手机号）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16182) 的 **返回类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/verifyUserAccount`
 * @更新时间 `2022-04-20 17:29:33`
 */
export interface VerifyUserAccountResponse {
  /**
   * 非0为失败
   */
  code: number
  message: string
}

/**
 * 接口 [验证当前用户账号（修改手机号）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16182) 的 **请求配置的类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/verifyUserAccount`
 * @更新时间 `2022-04-20 17:29:33`
 */
type VerifyUserAccountRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-user/user/verifyUserAccount',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [验证当前用户账号（修改手机号）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16182) 的 **请求配置**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/verifyUserAccount`
 * @更新时间 `2022-04-20 17:29:33`
 */
const verifyUserAccountRequestConfig: VerifyUserAccountRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/shopone-user/user/verifyUserAccount',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'verifyUserAccount',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [验证当前用户账号（修改手机号）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16182) 的 **请求函数**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/verifyUserAccount`
 * @更新时间 `2022-04-20 17:29:33`
 */
export const verifyUserAccount = /*#__PURE__*/ (
  requestData: VerifyUserAccountRequest,
  ...args: UserRequestRestArgs
) => {
  return request<VerifyUserAccountResponse>(prepare(verifyUserAccountRequestConfig, requestData), ...args)
}

verifyUserAccount.requestConfig = verifyUserAccountRequestConfig

/**
 * 接口 [修改用户信息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16221) 的 **请求类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/updateUser`
 * @更新时间 `2022-04-21 16:26:29`
 */
export interface UpdateUserRequest {
  nickname?: string
  cover?: string
}

/**
 * 接口 [修改用户信息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16221) 的 **返回类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/updateUser`
 * @更新时间 `2022-04-21 16:26:29`
 */
export interface UpdateUserResponse {
  code?: number
  message?: string
}

/**
 * 接口 [修改用户信息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16221) 的 **请求配置的类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/updateUser`
 * @更新时间 `2022-04-21 16:26:29`
 */
type UpdateUserRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-user/user/updateUser',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [修改用户信息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16221) 的 **请求配置**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/updateUser`
 * @更新时间 `2022-04-21 16:26:29`
 */
const updateUserRequestConfig: UpdateUserRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/shopone-user/user/updateUser',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'updateUser',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [修改用户信息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16221) 的 **请求函数**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `POST /shopone-user/user/updateUser`
 * @更新时间 `2022-04-21 16:26:29`
 */
export const updateUser = /*#__PURE__*/ (requestData: UpdateUserRequest, ...args: UserRequestRestArgs) => {
  return request<UpdateUserResponse>(prepare(updateUserRequestConfig, requestData), ...args)
}

updateUser.requestConfig = updateUserRequestConfig

/**
 * 接口 [获取用户的秘钥↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16275) 的 **请求类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `GET /shopone-user/user/secret/getUserSecret`
 * @更新时间 `2022-04-26 14:25:57`
 */
export interface GetUserSecretRequest {
  /**
   * 加密后的签名。
   * nonce: header的X-nonce
   * timestamp: header的X-timestamp
   * str = nonce:timestamp:加密秘钥的钥匙
   * sign = RASUtils.encrypt(str.getBytes(StandardCharsets.UTF_8), publicKey)
   */
  sign: string
}

/**
 * 接口 [获取用户的秘钥↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16275) 的 **返回类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `GET /shopone-user/user/secret/getUserSecret`
 * @更新时间 `2022-04-26 14:25:57`
 */
export interface GetUserSecretResponse {
  code?: number
  message?: string
  data?: {
    uid?: number
    /**
     * 秘钥明文，用来解密 密码的。
     */
    plaintext?: string
  }
}

/**
 * 接口 [获取用户的秘钥↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16275) 的 **请求配置的类型**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `GET /shopone-user/user/secret/getUserSecret`
 * @更新时间 `2022-04-26 14:25:57`
 */
type GetUserSecretRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-user/user/secret/getUserSecret',
    '',
    string,
    'sign',
    false
  >
>

/**
 * 接口 [获取用户的秘钥↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16275) 的 **请求配置**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `GET /shopone-user/user/secret/getUserSecret`
 * @更新时间 `2022-04-26 14:25:57`
 */
const getUserSecretRequestConfig: GetUserSecretRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/shopone-user/user/secret/getUserSecret',
  method: Method.GET,
  requestHeaders: {'X-accessKey': ''},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: ['sign'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getUserSecret',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取用户的秘钥↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16275) 的 **请求函数**
 *
 * @分类 [用户↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4358)
 * @请求头 `GET /shopone-user/user/secret/getUserSecret`
 * @更新时间 `2022-04-26 14:25:57`
 */
export const getUserSecret = /*#__PURE__*/ (requestData: GetUserSecretRequest, ...args: UserRequestRestArgs) => {
  return request<GetUserSecretResponse>(prepare(getUserSecretRequestConfig, requestData), ...args)
}

getUserSecret.requestConfig = getUserSecretRequestConfig

const mockUrl_0_0_0_3 = 'http://www.yapi-efox.duowan.com/mock/1151' as any
const devUrl_0_0_0_3 = 'https://api-test.shopviewer.com' as any
const prodUrl_0_0_0_3 = '' as any
const dataKey_0_0_0_3 = '' as any

/**
 * 接口 [获取消息列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16023) 的 **请求类型**
 *
 * @分类 [消息中心↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4370)
 * @请求头 `GET /shopone-search/message/searchMessages`
 * @更新时间 `2022-06-08 15:50:32`
 */
export interface SearchMessagesRequest {
  pageNum: string
  pageSize: string
}

/**
 * 接口 [获取消息列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16023) 的 **返回类型**
 *
 * @分类 [消息中心↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4370)
 * @请求头 `GET /shopone-search/message/searchMessages`
 * @更新时间 `2022-06-08 15:50:32`
 */
export interface SearchMessagesResponse {
  code: number
  message: string
  data: {
    items: {
      obj: {
        id: string
        uid: number
        /**
         * 1:成员邀请消息；2：环境转让消息；3：确认是否加入团队消息;4：环境授权或者取消授权 9：创建或新增环境  10:成员被移除
         */
        type: number
        /**
         * 0：未读，1：已读
         */
        readState: number
        /**
         * 时间戳；秒
         */
        createTime: number
        /**
         * 更新时间；秒
         */
        updateTime: number
        payload?: {
          payloadId?: string
          /**
           * 成员邀请消息时，有值
           */
          memberInvitation?: {
            teamId: number
            /**
             * 团队名称
             */
            teamName: string
            inviterUid: number
            /**
             * 邀请人名称
             */
            inviterName: string
            roleType: number
            /**
             * 0：未操作；1：已接受；2：已拒绝
             */
            accepted: number
          }
          /**
           * 环境转让
           */
          envTransfer?: {
            /**
             *  原团队id
             */
            transferTeamId: number
            /**
             * 原团队名称
             */
            transferTeamName: string
            /**
             * 新团队id
             */
            acceptTeamId: number
            /**
             * 新团队名称
             */
            acceptTeamName: string
            /**
             * 环境id
             */
            envId: string
            /**
             * 环境名称
             */
            envName: string
            /**
             * 转让用户
             */
            transferUserView: {
              /**
               * 转让用户id
               */
              uid: number
              /**
               * 转让用户昵称
               */
              username: string
              /**
               * 转让用户角色
               */
              roleName: string
            }
            /**
             * 被转让用户
             */
            acceptUserView: {
              /**
               * 被转让用户id
               */
              uid: number
              /**
               * 被转让用户昵称
               */
              username: string
              /**
               * 被转让用户角色
               */
              roleName: string
            }
            /**
             * 1：转让；2：被转让  3:被转让失败4：转让失败
             */
            type: number
          }
          /**
           * 成员确认加入团队消息
           */
          memberJoinTeam?: {
            /**
             * 角色；2：管理者；4：组长；6：成员
             */
            roleType: number
            teamId: number
            teamName: string
            /**
             * 被邀请人UID
             */
            memberUid: number
            /**
             * 被邀请人名称
             */
            memberName: string
            /**
             * 被邀请人账号；如果是拒绝加入，则需要显示这个。
             */
            account: string
            /**
             * 1：接受；2：拒绝
             */
            accepted: number
            /**
             * 操作人(邀请用户的人)
             */
            inviterUserView: {
              /**
               * 操作人id
               */
              uid: number
              /**
               * 操作人昵称
               */
              username: string
              /**
               * 操作人角色
               */
              roleName: string
            }
            /**
             * 被邀请人同意之后的上级用户
             */
            superiorUserView: {
              /**
               * id
               */
              uid: number
              /**
               * 昵称
               */
              username: string
              /**
               * 角色
               */
              roleName: string
            }
          }
          /**
           * 环境授权或者取消授权消息
           */
          envGrant?: {
            /**
             * 1：授权；2：取消授权
             */
            type: number
            /**
             * 操作人
             */
            operatorUserView: {
              /**
               * 操作人id
               */
              uid: number
              /**
               * 操作人昵称
               */
              username: string
              /**
               * 操作人角色
               */
              roleName: string
            }
            teamId: number
            teamName: string
            /**
             * 环境数量
             */
            envNum: number
            /**
             * 环境名称
             */
            envNames: string[]
          }
          /**
           * 环境添加或删除
           */
          envAddOrDeletePayloadView?: {
            /**
             * 1：添加；2：删除
             */
            type: string
            /**
             * 操作人
             */
            operatorUserView: {
              /**
               * 操作人id
               */
              uid: number
              /**
               * 操作人昵称
               */
              username: string
              /**
               * 操作人角色
               */
              roleName: string
            }
            /**
             * 环境名称
             */
            envInfos: {
              envId: string
              envName: string
            }[]
            /**
             * 环境数量
             */
            envNum: string
            /**
             * 团队id
             */
            teamId: number
            /**
             * 团队名称
             */
            teamName: string
          }
          /**
           * 10成员被移除对应payload
           */
          memberRemove?: {
            /**
             * 1：直属上级接收；2：被移除的成员接收
             */
            accepted: string
            /**
             * 操作人
             */
            operatorUserView: {
              /**
               * 操作人id
               */
              uid: number
              /**
               * 操作人昵称
               */
              username: string
              /**
               * 操作人角色
               */
              roleName: string
            }
            /**
             * 被移除成员
             */
            removeUserView: {
              /**
               * 被移除成员id
               */
              Uid: number
              /**
               * 被移除成员昵称
               */
              Username: string
              /**
               * 被移除成员角色
               */
              RoleName: string
            }
            /**
             * 团队id
             */
            teamId: number
            /**
             * 团队名称
             */
            teamName: string
          }
        }
      }
    }[]
    total: number
    totalPage: number
    currentPage: number
  }
}

/**
 * 接口 [获取消息列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16023) 的 **请求配置的类型**
 *
 * @分类 [消息中心↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4370)
 * @请求头 `GET /shopone-search/message/searchMessages`
 * @更新时间 `2022-06-08 15:50:32`
 */
type SearchMessagesRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-search/message/searchMessages',
    '',
    string,
    'pageNum' | 'pageSize',
    false
  >
>

/**
 * 接口 [获取消息列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16023) 的 **请求配置**
 *
 * @分类 [消息中心↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4370)
 * @请求头 `GET /shopone-search/message/searchMessages`
 * @更新时间 `2022-06-08 15:50:32`
 */
const searchMessagesRequestConfig: SearchMessagesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/shopone-search/message/searchMessages',
  method: Method.GET,
  requestHeaders: {'X-parkes-udb-uid': ''},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: ['pageNum', 'pageSize'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'searchMessages',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取消息列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16023) 的 **请求函数**
 *
 * @分类 [消息中心↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4370)
 * @请求头 `GET /shopone-search/message/searchMessages`
 * @更新时间 `2022-06-08 15:50:32`
 */
export const searchMessages = /*#__PURE__*/ (requestData: SearchMessagesRequest, ...args: UserRequestRestArgs) => {
  return request<SearchMessagesResponse>(prepare(searchMessagesRequestConfig, requestData), ...args)
}

searchMessages.requestConfig = searchMessagesRequestConfig

/**
 * 接口 [获取未读消息数↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16128) 的 **请求类型**
 *
 * @分类 [消息中心↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4370)
 * @请求头 `GET /shopone-message/message/getUnreadNumber`
 * @更新时间 `2022-05-11 16:25:32`
 */
export interface GetUnreadNumberRequest {}

/**
 * 接口 [获取未读消息数↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16128) 的 **返回类型**
 *
 * @分类 [消息中心↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4370)
 * @请求头 `GET /shopone-message/message/getUnreadNumber`
 * @更新时间 `2022-05-11 16:25:32`
 */
export interface GetUnreadNumberResponse {
  code?: number
  message?: string
  data?: {
    unread?: number
    typeIds: {
      /**
       * 1:团队(加入团队、修改角色、移除成员、修改团队名称、修改团队内昵称)；
       * 2：权限（默认权限修改、角色变更）；
       * 3：环境（增删改查、授权、转让）; 4：账号（增删改查）
       */
      type: number
      /**
       * biao'j
       */
      id: string
    }[]
  }
}

/**
 * 接口 [获取未读消息数↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16128) 的 **请求配置的类型**
 *
 * @分类 [消息中心↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4370)
 * @请求头 `GET /shopone-message/message/getUnreadNumber`
 * @更新时间 `2022-05-11 16:25:32`
 */
type GetUnreadNumberRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-message/message/getUnreadNumber',
    '',
    string,
    string,
    true
  >
>

/**
 * 接口 [获取未读消息数↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16128) 的 **请求配置**
 *
 * @分类 [消息中心↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4370)
 * @请求头 `GET /shopone-message/message/getUnreadNumber`
 * @更新时间 `2022-05-11 16:25:32`
 */
const getUnreadNumberRequestConfig: GetUnreadNumberRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/shopone-message/message/getUnreadNumber',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getUnreadNumber',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取未读消息数↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16128) 的 **请求函数**
 *
 * @分类 [消息中心↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4370)
 * @请求头 `GET /shopone-message/message/getUnreadNumber`
 * @更新时间 `2022-05-11 16:25:32`
 */
export const getUnreadNumber = /*#__PURE__*/ (requestData?: GetUnreadNumberRequest, ...args: UserRequestRestArgs) => {
  return request<GetUnreadNumberResponse>(prepare(getUnreadNumberRequestConfig, requestData), ...args)
}

getUnreadNumber.requestConfig = getUnreadNumberRequestConfig

/**
 * 接口 [读取消息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16131) 的 **请求类型**
 *
 * @分类 [消息中心↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4370)
 * @请求头 `POST /shopone-message/message/readMessages`
 * @更新时间 `2022-04-20 16:56:30`
 */
export interface ReadMessagesRequest {
  ids?: number[]
  readAll: boolean
}

/**
 * 接口 [读取消息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16131) 的 **返回类型**
 *
 * @分类 [消息中心↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4370)
 * @请求头 `POST /shopone-message/message/readMessages`
 * @更新时间 `2022-04-20 16:56:30`
 */
export interface ReadMessagesResponse {
  code: number
  message: string
}

/**
 * 接口 [读取消息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16131) 的 **请求配置的类型**
 *
 * @分类 [消息中心↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4370)
 * @请求头 `POST /shopone-message/message/readMessages`
 * @更新时间 `2022-04-20 16:56:30`
 */
type ReadMessagesRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-message/message/readMessages',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [读取消息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16131) 的 **请求配置**
 *
 * @分类 [消息中心↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4370)
 * @请求头 `POST /shopone-message/message/readMessages`
 * @更新时间 `2022-04-20 16:56:30`
 */
const readMessagesRequestConfig: ReadMessagesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/shopone-message/message/readMessages',
  method: Method.POST,
  requestHeaders: {'X-parkes-udb-uid': ''},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'readMessages',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [读取消息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16131) 的 **请求函数**
 *
 * @分类 [消息中心↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4370)
 * @请求头 `POST /shopone-message/message/readMessages`
 * @更新时间 `2022-04-20 16:56:30`
 */
export const readMessages = /*#__PURE__*/ (requestData: ReadMessagesRequest, ...args: UserRequestRestArgs) => {
  return request<ReadMessagesResponse>(prepare(readMessagesRequestConfig, requestData), ...args)
}

readMessages.requestConfig = readMessagesRequestConfig

/**
 * 接口 [确认加入团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16140) 的 **请求类型**
 *
 * @分类 [消息中心↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4370)
 * @请求头 `POST /shopone-message/message/sureMemberInvitation`
 * @更新时间 `2022-04-26 14:17:54`
 */
export interface SureMemberInvitationRequest {
  id?: number
  /**
   * 1：接受；2：拒绝
   */
  accepted?: number
  nickname?: string
}

/**
 * 接口 [确认加入团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16140) 的 **返回类型**
 *
 * @分类 [消息中心↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4370)
 * @请求头 `POST /shopone-message/message/sureMemberInvitation`
 * @更新时间 `2022-04-26 14:17:54`
 */
export interface SureMemberInvitationResponse {
  code?: number
  message?: string
}

/**
 * 接口 [确认加入团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16140) 的 **请求配置的类型**
 *
 * @分类 [消息中心↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4370)
 * @请求头 `POST /shopone-message/message/sureMemberInvitation`
 * @更新时间 `2022-04-26 14:17:54`
 */
type SureMemberInvitationRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-message/message/sureMemberInvitation',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [确认加入团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16140) 的 **请求配置**
 *
 * @分类 [消息中心↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4370)
 * @请求头 `POST /shopone-message/message/sureMemberInvitation`
 * @更新时间 `2022-04-26 14:17:54`
 */
const sureMemberInvitationRequestConfig: SureMemberInvitationRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/shopone-message/message/sureMemberInvitation',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'sureMemberInvitation',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [确认加入团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16140) 的 **请求函数**
 *
 * @分类 [消息中心↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4370)
 * @请求头 `POST /shopone-message/message/sureMemberInvitation`
 * @更新时间 `2022-04-26 14:17:54`
 */
export const sureMemberInvitation = /*#__PURE__*/ (
  requestData: SureMemberInvitationRequest,
  ...args: UserRequestRestArgs
) => {
  return request<SureMemberInvitationResponse>(prepare(sureMemberInvitationRequestConfig, requestData), ...args)
}

sureMemberInvitation.requestConfig = sureMemberInvitationRequestConfig

const mockUrl_0_0_0_4 = 'http://www.yapi-efox.duowan.com/mock/1151' as any
const devUrl_0_0_0_4 = 'https://api-test.shopviewer.com' as any
const prodUrl_0_0_0_4 = '' as any
const dataKey_0_0_0_4 = '' as any

/**
 * 接口 [获取账号所有所属平台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16056) 的 **请求类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `GET /shopone-account/accountPlatform/getAllPlatform`
 * @更新时间 `2022-04-21 10:19:37`
 */
export interface GetAllPlatformRequest {}

/**
 * 接口 [获取账号所有所属平台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16056) 的 **返回类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `GET /shopone-account/accountPlatform/getAllPlatform`
 * @更新时间 `2022-04-21 10:19:37`
 */
export interface GetAllPlatformResponse {
  code: number
  message: string
  data: {
    /**
     * 平台id
     */
    id: string
    /**
     * 平台名称
     */
    name: string
    /**
     * 平台图片
     */
    imgUrl: string
    /**
     * 平台子类型
     */
    accountPlatformChildViews: {
      /**
       * 平台子类型id
       */
      id: string
      /**
       * 平台子类型名称
       */
      name: string
      /**
       * 平台url
       */
      url: string
    }[]
  }[]
}

/**
 * 接口 [获取账号所有所属平台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16056) 的 **请求配置的类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `GET /shopone-account/accountPlatform/getAllPlatform`
 * @更新时间 `2022-04-21 10:19:37`
 */
type GetAllPlatformRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-account/accountPlatform/getAllPlatform',
    '',
    string,
    string,
    true
  >
>

/**
 * 接口 [获取账号所有所属平台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16056) 的 **请求配置**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `GET /shopone-account/accountPlatform/getAllPlatform`
 * @更新时间 `2022-04-21 10:19:37`
 */
const getAllPlatformRequestConfig: GetAllPlatformRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/shopone-account/accountPlatform/getAllPlatform',
  method: Method.GET,
  requestHeaders: {'X-teamid': ''},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAllPlatform',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取账号所有所属平台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16056) 的 **请求函数**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `GET /shopone-account/accountPlatform/getAllPlatform`
 * @更新时间 `2022-04-21 10:19:37`
 */
export const getAllPlatform = /*#__PURE__*/ (requestData?: GetAllPlatformRequest, ...args: UserRequestRestArgs) => {
  return request<GetAllPlatformResponse>(prepare(getAllPlatformRequestConfig, requestData), ...args)
}

getAllPlatform.requestConfig = getAllPlatformRequestConfig

/**
 * 接口 [获取所有账号分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16059) 的 **请求类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `GET /shopone-account/AccountGroup/getAll`
 * @更新时间 `2022-04-21 10:20:00`
 */
export interface GetAllRequest {}

/**
 * 接口 [获取所有账号分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16059) 的 **返回类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `GET /shopone-account/AccountGroup/getAll`
 * @更新时间 `2022-04-21 10:20:00`
 */
export interface GetAllResponse {
  code: number
  message: string
  data?: {
    /**
     * 分组id
     */
    id: string
    /**
     * 分组名称
     */
    name: string
    /**
     * 颜色:0 白色,1  红,2 蓝,3 黄,4 绿,5 青，6 橙，7紫
     */
    color: number
    /**
     * 账号个数
     */
    count: number
  }[]
}

/**
 * 接口 [获取所有账号分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16059) 的 **请求配置的类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `GET /shopone-account/AccountGroup/getAll`
 * @更新时间 `2022-04-21 10:20:00`
 */
type GetAllRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-account/AccountGroup/getAll',
    '',
    string,
    string,
    true
  >
>

/**
 * 接口 [获取所有账号分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16059) 的 **请求配置**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `GET /shopone-account/AccountGroup/getAll`
 * @更新时间 `2022-04-21 10:20:00`
 */
const getAllRequestConfig: GetAllRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/shopone-account/AccountGroup/getAll',
  method: Method.GET,
  requestHeaders: {'X-teamid': ''},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAll',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取所有账号分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16059) 的 **请求函数**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `GET /shopone-account/AccountGroup/getAll`
 * @更新时间 `2022-04-21 10:20:00`
 */
export const getAll = /*#__PURE__*/ (requestData?: GetAllRequest, ...args: UserRequestRestArgs) => {
  return request<GetAllResponse>(prepare(getAllRequestConfig, requestData), ...args)
}

getAll.requestConfig = getAllRequestConfig

/**
 * 接口 [添加账号分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16062) 的 **请求类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/AccountGroup/insertAccountGroup`
 * @更新时间 `2022-04-18 16:34:45`
 */
export interface InsertAccountGroupRequest {
  /**
   * 分组名称
   */
  name: string
  /**
   * 颜色:0 白色,1  红,2 蓝,3 黄,4 绿,5 青，6 橙，7紫
   */
  color: number
}

/**
 * 接口 [添加账号分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16062) 的 **返回类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/AccountGroup/insertAccountGroup`
 * @更新时间 `2022-04-18 16:34:45`
 */
export interface InsertAccountGroupResponse {
  code: number
  message: string
}

/**
 * 接口 [添加账号分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16062) 的 **请求配置的类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/AccountGroup/insertAccountGroup`
 * @更新时间 `2022-04-18 16:34:45`
 */
type InsertAccountGroupRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-account/AccountGroup/insertAccountGroup',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [添加账号分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16062) 的 **请求配置**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/AccountGroup/insertAccountGroup`
 * @更新时间 `2022-04-18 16:34:45`
 */
const insertAccountGroupRequestConfig: InsertAccountGroupRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/shopone-account/AccountGroup/insertAccountGroup',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'insertAccountGroup',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [添加账号分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16062) 的 **请求函数**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/AccountGroup/insertAccountGroup`
 * @更新时间 `2022-04-18 16:34:45`
 */
export const insertAccountGroup = /*#__PURE__*/ (
  requestData: InsertAccountGroupRequest,
  ...args: UserRequestRestArgs
) => {
  return request<InsertAccountGroupResponse>(prepare(insertAccountGroupRequestConfig, requestData), ...args)
}

insertAccountGroup.requestConfig = insertAccountGroupRequestConfig

/**
 * 接口 [编辑账号分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16065) 的 **请求类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/AccountGroup/updateAccountGroup`
 * @更新时间 `2022-04-25 10:22:18`
 */
export interface UpdateAccountGroupRequest {
  /**
   * 分组id
   */
  id: string
  /**
   * 分组名称
   */
  name?: string
  /**
   * 颜色:0 白色,1  红,2 蓝,3 黄,4 绿,5 青，6 橙，7紫
   */
  color?: number
}

/**
 * 接口 [编辑账号分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16065) 的 **返回类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/AccountGroup/updateAccountGroup`
 * @更新时间 `2022-04-25 10:22:18`
 */
export interface UpdateAccountGroupResponse {
  code: number
  message: string
}

/**
 * 接口 [编辑账号分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16065) 的 **请求配置的类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/AccountGroup/updateAccountGroup`
 * @更新时间 `2022-04-25 10:22:18`
 */
type UpdateAccountGroupRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-account/AccountGroup/updateAccountGroup',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [编辑账号分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16065) 的 **请求配置**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/AccountGroup/updateAccountGroup`
 * @更新时间 `2022-04-25 10:22:18`
 */
const updateAccountGroupRequestConfig: UpdateAccountGroupRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/shopone-account/AccountGroup/updateAccountGroup',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'updateAccountGroup',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [编辑账号分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16065) 的 **请求函数**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/AccountGroup/updateAccountGroup`
 * @更新时间 `2022-04-25 10:22:18`
 */
export const updateAccountGroup = /*#__PURE__*/ (
  requestData: UpdateAccountGroupRequest,
  ...args: UserRequestRestArgs
) => {
  return request<UpdateAccountGroupResponse>(prepare(updateAccountGroupRequestConfig, requestData), ...args)
}

updateAccountGroup.requestConfig = updateAccountGroupRequestConfig

/**
 * 接口 [添加账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16071) 的 **请求类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/account/insertAccount`
 * @更新时间 `2022-04-25 11:09:36`
 */
export interface InsertAccountRequest {
  /**
   * 账号名称
   */
  name: string
  /**
   * 账号所属分组id
   */
  accountGroupId?: string
  /**
   * 平台子类型id
   */
  platformId: string
  /**
   * 账号
   */
  account: string
  /**
   * 密码
   */
  password?: string
}

/**
 * 接口 [添加账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16071) 的 **返回类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/account/insertAccount`
 * @更新时间 `2022-04-25 11:09:36`
 */
export interface InsertAccountResponse {
  code: number
  message: string
}

/**
 * 接口 [添加账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16071) 的 **请求配置的类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/account/insertAccount`
 * @更新时间 `2022-04-25 11:09:36`
 */
type InsertAccountRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-account/account/insertAccount',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [添加账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16071) 的 **请求配置**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/account/insertAccount`
 * @更新时间 `2022-04-25 11:09:36`
 */
const insertAccountRequestConfig: InsertAccountRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/shopone-account/account/insertAccount',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'insertAccount',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [添加账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16071) 的 **请求函数**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/account/insertAccount`
 * @更新时间 `2022-04-25 11:09:36`
 */
export const insertAccount = /*#__PURE__*/ (requestData: InsertAccountRequest, ...args: UserRequestRestArgs) => {
  return request<InsertAccountResponse>(prepare(insertAccountRequestConfig, requestData), ...args)
}

insertAccount.requestConfig = insertAccountRequestConfig

/**
 * 接口 [编辑账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16074) 的 **请求类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/account/updateAccount`
 * @更新时间 `2022-06-15 17:31:25`
 */
export interface UpdateAccountRequest {
  /**
   * 账号id
   */
  id: string
  /**
   * 名称
   */
  name?: string
  /**
   * 密码
   */
  password?: string
  /**
   * 账号所属分组id
   */
  accountGroupId?: string
  /**
   * 平台id，平台id和url不能同时为空
   */
  platformId?: string
  /**
   * 当平台是其他是必填
   */
  url?: string
}

/**
 * 接口 [编辑账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16074) 的 **返回类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/account/updateAccount`
 * @更新时间 `2022-06-15 17:31:25`
 */
export interface UpdateAccountResponse {
  code: number
  message: string
}

/**
 * 接口 [编辑账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16074) 的 **请求配置的类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/account/updateAccount`
 * @更新时间 `2022-06-15 17:31:25`
 */
type UpdateAccountRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-account/account/updateAccount',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [编辑账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16074) 的 **请求配置**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/account/updateAccount`
 * @更新时间 `2022-06-15 17:31:25`
 */
const updateAccountRequestConfig: UpdateAccountRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/shopone-account/account/updateAccount',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'updateAccount',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [编辑账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16074) 的 **请求函数**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/account/updateAccount`
 * @更新时间 `2022-06-15 17:31:25`
 */
export const updateAccount = /*#__PURE__*/ (requestData: UpdateAccountRequest, ...args: UserRequestRestArgs) => {
  return request<UpdateAccountResponse>(prepare(updateAccountRequestConfig, requestData), ...args)
}

updateAccount.requestConfig = updateAccountRequestConfig

/**
 * 接口 [删除账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16077) 的 **请求类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/account/deleteAccount`
 * @更新时间 `2022-04-26 14:21:26`
 */
export interface DeleteAccountRequest {
  id: string
}

/**
 * 接口 [删除账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16077) 的 **返回类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/account/deleteAccount`
 * @更新时间 `2022-04-26 14:21:26`
 */
export interface DeleteAccountResponse {
  code: number
  message: string
}

/**
 * 接口 [删除账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16077) 的 **请求配置的类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/account/deleteAccount`
 * @更新时间 `2022-04-26 14:21:26`
 */
type DeleteAccountRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-account/account/deleteAccount',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [删除账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16077) 的 **请求配置**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/account/deleteAccount`
 * @更新时间 `2022-04-26 14:21:26`
 */
const deleteAccountRequestConfig: DeleteAccountRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/shopone-account/account/deleteAccount',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteAccount',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [删除账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16077) 的 **请求函数**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/account/deleteAccount`
 * @更新时间 `2022-04-26 14:21:26`
 */
export const deleteAccount = /*#__PURE__*/ (requestData: DeleteAccountRequest, ...args: UserRequestRestArgs) => {
  return request<DeleteAccountResponse>(prepare(deleteAccountRequestConfig, requestData), ...args)
}

deleteAccount.requestConfig = deleteAccountRequestConfig

/**
 * 接口 [删除账号分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16080) 的 **请求类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/AccountGroup/deleteAccountGroup`
 * @更新时间 `2022-04-25 10:11:16`
 */
export interface DeleteAccountGroupRequest {
  id: string
}

/**
 * 接口 [删除账号分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16080) 的 **返回类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/AccountGroup/deleteAccountGroup`
 * @更新时间 `2022-04-25 10:11:16`
 */
export interface DeleteAccountGroupResponse {
  code: number
  message: string
}

/**
 * 接口 [删除账号分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16080) 的 **请求配置的类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/AccountGroup/deleteAccountGroup`
 * @更新时间 `2022-04-25 10:11:16`
 */
type DeleteAccountGroupRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-account/AccountGroup/deleteAccountGroup',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [删除账号分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16080) 的 **请求配置**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/AccountGroup/deleteAccountGroup`
 * @更新时间 `2022-04-25 10:11:16`
 */
const deleteAccountGroupRequestConfig: DeleteAccountGroupRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/shopone-account/AccountGroup/deleteAccountGroup',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteAccountGroup',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [删除账号分组↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16080) 的 **请求函数**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/AccountGroup/deleteAccountGroup`
 * @更新时间 `2022-04-25 10:11:16`
 */
export const deleteAccountGroup = /*#__PURE__*/ (
  requestData: DeleteAccountGroupRequest,
  ...args: UserRequestRestArgs
) => {
  return request<DeleteAccountGroupResponse>(prepare(deleteAccountGroupRequestConfig, requestData), ...args)
}

deleteAccountGroup.requestConfig = deleteAccountGroupRequestConfig

/**
 * 接口 [账号置顶或取消置顶↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16164) 的 **请求类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/account/newStickTop`
 * @更新时间 `2022-04-26 19:15:24`
 */
export interface NewStickTopRequest {
  /**
   * 账号id
   */
  accountId: string
  /**
   * 置顶:0取消置顶,1置顶
   */
  toTop: number
}

/**
 * 接口 [账号置顶或取消置顶↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16164) 的 **返回类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/account/newStickTop`
 * @更新时间 `2022-04-26 19:15:24`
 */
export interface NewStickTopResponse {
  code: number
  message: string
}

/**
 * 接口 [账号置顶或取消置顶↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16164) 的 **请求配置的类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/account/newStickTop`
 * @更新时间 `2022-04-26 19:15:24`
 */
type NewStickTopRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-account/account/newStickTop',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [账号置顶或取消置顶↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16164) 的 **请求配置**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/account/newStickTop`
 * @更新时间 `2022-04-26 19:15:24`
 */
const newStickTopRequestConfig: NewStickTopRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/shopone-account/account/newStickTop',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'newStickTop',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [账号置顶或取消置顶↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16164) 的 **请求函数**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/account/newStickTop`
 * @更新时间 `2022-04-26 19:15:24`
 */
export const newStickTop = /*#__PURE__*/ (requestData: NewStickTopRequest, ...args: UserRequestRestArgs) => {
  return request<NewStickTopResponse>(prepare(newStickTopRequestConfig, requestData), ...args)
}

newStickTop.requestConfig = newStickTopRequestConfig

/**
 * 接口 [自定义账号平台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16170) 的 **请求类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/accountPlatform/addPlatform`
 * @更新时间 `2022-06-15 16:00:31`
 */
export interface AddPlatformRequest {
  /**
   * 平台名称
   */
  name?: string
  /**
   * 平台url
   */
  url: string
}

/**
 * 接口 [自定义账号平台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16170) 的 **返回类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/accountPlatform/addPlatform`
 * @更新时间 `2022-06-15 16:00:31`
 */
export interface AddPlatformResponse {
  code: number
  message: string
  data: {
    /**
     * 自定义平台id
     */
    id: string
    /**
     * 自定义平台名称
     */
    name: string
    /**
     * 自定义平台url
     */
    url: string
  }
}

/**
 * 接口 [自定义账号平台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16170) 的 **请求配置的类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/accountPlatform/addPlatform`
 * @更新时间 `2022-06-15 16:00:31`
 */
type AddPlatformRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-account/accountPlatform/addPlatform',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [自定义账号平台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16170) 的 **请求配置**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/accountPlatform/addPlatform`
 * @更新时间 `2022-06-15 16:00:31`
 */
const addPlatformRequestConfig: AddPlatformRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/shopone-account/accountPlatform/addPlatform',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'addPlatform',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [自定义账号平台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16170) 的 **请求函数**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `POST /shopone-account/accountPlatform/addPlatform`
 * @更新时间 `2022-06-15 16:00:31`
 */
export const addPlatform = /*#__PURE__*/ (requestData: AddPlatformRequest, ...args: UserRequestRestArgs) => {
  return request<AddPlatformResponse>(prepare(addPlatformRequestConfig, requestData), ...args)
}

addPlatform.requestConfig = addPlatformRequestConfig

/**
 * 接口 [根据账号ID查询账号(一个id)↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16197) 的 **请求类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `GET /shopone-account/account/selectAccount`
 * @更新时间 `2022-04-24 19:32:29`
 */
export interface SelectAccountRequest {
  /**
   * 账号id
   */
  accountId: string
}

/**
 * 接口 [根据账号ID查询账号(一个id)↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16197) 的 **返回类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `GET /shopone-account/account/selectAccount`
 * @更新时间 `2022-04-24 19:32:29`
 */
export interface SelectAccountResponse {
  code: number
  message: string
  data?: {
    /**
     * 账号id
     */
    id: string
    /**
     * 名称
     */
    name: string
    /**
     * 平台
     */
    platformView: {
      /**
       * 平台名称
       */
      name: string
      /**
       * 子平台名称
       */
      childName: string
      /**
       * 平台id
       */
      id: string
      /**
       * 平台图片
       */
      imgUrl: string
      /**
       * 平台url
       */
      url: string
    }
    /**
     * 账号
     */
    account: string
    /**
     * 密码
     */
    password: string
  }
}

/**
 * 接口 [根据账号ID查询账号(一个id)↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16197) 的 **请求配置的类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `GET /shopone-account/account/selectAccount`
 * @更新时间 `2022-04-24 19:32:29`
 */
type SelectAccountRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-account/account/selectAccount',
    '',
    string,
    'accountId',
    false
  >
>

/**
 * 接口 [根据账号ID查询账号(一个id)↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16197) 的 **请求配置**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `GET /shopone-account/account/selectAccount`
 * @更新时间 `2022-04-24 19:32:29`
 */
const selectAccountRequestConfig: SelectAccountRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/shopone-account/account/selectAccount',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: ['accountId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'selectAccount',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [根据账号ID查询账号(一个id)↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16197) 的 **请求函数**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `GET /shopone-account/account/selectAccount`
 * @更新时间 `2022-04-24 19:32:29`
 */
export const selectAccount = /*#__PURE__*/ (requestData: SelectAccountRequest, ...args: UserRequestRestArgs) => {
  return request<SelectAccountResponse>(prepare(selectAccountRequestConfig, requestData), ...args)
}

selectAccount.requestConfig = selectAccountRequestConfig

/**
 * 接口 [根据id列表查询账号(多个id)↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16224) 的 **请求类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `GET /shopone-account/account/queryByIds`
 * @更新时间 `2022-04-29 16:46:29`
 */
export interface QueryByIdsRequest {
  accountIds: string
}

/**
 * 接口 [根据id列表查询账号(多个id)↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16224) 的 **返回类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `GET /shopone-account/account/queryByIds`
 * @更新时间 `2022-04-29 16:46:29`
 */
export interface QueryByIdsResponse {
  code: number
  message: string
  data?: {
    /**
     * 账号id
     */
    id: string
    /**
     * 账号名称
     */
    name: string
    /**
     * 平台
     */
    platformView: {
      /**
       * 平台id
       */
      id: string
      /**
       * 平台名称
       */
      name: string
      /**
       * 子平台名称
       */
      childName: string
      /**
       * 平台图片
       */
      imgUrl: string
      /**
       * 平台url
       */
      url: string
    }
    /**
     * 账号
     */
    account: string
    /**
     * 密码
     */
    password: string
  }[]
}

/**
 * 接口 [根据id列表查询账号(多个id)↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16224) 的 **请求配置的类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `GET /shopone-account/account/queryByIds`
 * @更新时间 `2022-04-29 16:46:29`
 */
type QueryByIdsRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-account/account/queryByIds',
    '',
    string,
    'accountIds',
    false
  >
>

/**
 * 接口 [根据id列表查询账号(多个id)↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16224) 的 **请求配置**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `GET /shopone-account/account/queryByIds`
 * @更新时间 `2022-04-29 16:46:29`
 */
const queryByIdsRequestConfig: QueryByIdsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/shopone-account/account/queryByIds',
  method: Method.GET,
  requestHeaders: {'X-parkes-udb-uid': ''},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: ['accountIds'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'queryByIds',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [根据id列表查询账号(多个id)↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16224) 的 **请求函数**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `GET /shopone-account/account/queryByIds`
 * @更新时间 `2022-04-29 16:46:29`
 */
export const queryByIds = /*#__PURE__*/ (requestData: QueryByIdsRequest, ...args: UserRequestRestArgs) => {
  return request<QueryByIdsResponse>(prepare(queryByIdsRequestConfig, requestData), ...args)
}

queryByIds.requestConfig = queryByIdsRequestConfig

/**
 * 接口 [搜索账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16227) 的 **请求类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `GET /shopone-search/account/search`
 * @更新时间 `2022-06-15 15:47:43`
 */
export interface SearchRequest {
  pageNum: string
  pageSize: string
  /**
   * 搜索框里的值
   */
  blurry?: string
  /**
   * 分组id
   */
  accountGroupId?: string
  /**
   * 子平台id
   */
  platformId?: string
}

/**
 * 接口 [搜索账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16227) 的 **返回类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `GET /shopone-search/account/search`
 * @更新时间 `2022-06-15 15:47:43`
 */
export interface SearchResponse {
  code: number
  message: string
  data?: {
    items?: {
      obj?: {
        /**
         * 账号id
         */
        id?: string
        /**
         * 账号名称
         */
        name?: string
        /**
         * 账号平台
         */
        platformView?: {
          /**
           * 平台名称
           */
          name?: string
          /**
           * 子平台名称
           */
          childName?: string
          /**
           * 平台id
           */
          id?: string
          /**
           * 平台图片
           */
          imgUrl?: string
          /**
           * 平台url
           */
          url?: string
        }
        /**
         * 账号分组
         */
        accountGroupView?: {
          /**
           * 分组id
           */
          id?: string
          /**
           * 分组名称
           */
          name?: string
          /**
           * 颜色:0 白色,1  红,2 蓝,3 黄,4 绿,5 青，6 橙，7紫
           */
          color?: number
          /**
           * 分组下账号数量
           */
          count?: number
        }
        /**
         * 账号
         */
        account?: string
        /**
         * 密码
         */
        password?: string
        /**
         * 账号添加人
         */
        accountUserView?: {
          /**
           * 添加人id
           */
          uid?: number
          /**
           * 添加人名称
           */
          username?: string
          /**
           * 添加人角色
           */
          roleName?: string
        }
        /**
         * 置顶:0取消置顶,1置顶
         */
        top?: number
        /**
         * 环境
         */
        envs?: {
          /**
           * 环境id
           */
          envId?: string
          /**
           * 环境名称
           */
          envName?: string
        }[]
      }
    }[]
    /**
     * 账号数量
     */
    total?: number
    totalPage?: number
    currentPage?: number
  }
}

/**
 * 接口 [搜索账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16227) 的 **请求配置的类型**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `GET /shopone-search/account/search`
 * @更新时间 `2022-06-15 15:47:43`
 */
type SearchRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-search/account/search',
    '',
    string,
    'pageNum' | 'pageSize' | 'blurry' | 'accountGroupId' | 'platformId',
    false
  >
>

/**
 * 接口 [搜索账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16227) 的 **请求配置**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `GET /shopone-search/account/search`
 * @更新时间 `2022-06-15 15:47:43`
 */
const searchRequestConfig: SearchRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/shopone-search/account/search',
  method: Method.GET,
  requestHeaders: {'X-teamid': ''},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: ['pageNum', 'pageSize', 'blurry', 'accountGroupId', 'platformId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'search',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [搜索账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16227) 的 **请求函数**
 *
 * @分类 [账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4386)
 * @请求头 `GET /shopone-search/account/search`
 * @更新时间 `2022-06-15 15:47:43`
 */
export const search = /*#__PURE__*/ (requestData: SearchRequest, ...args: UserRequestRestArgs) => {
  return request<SearchResponse>(prepare(searchRequestConfig, requestData), ...args)
}

search.requestConfig = searchRequestConfig

const mockUrl_0_0_0_5 = 'http://www.yapi-efox.duowan.com/mock/1151' as any
const devUrl_0_0_0_5 = 'https://api-test.shopviewer.com' as any
const prodUrl_0_0_0_5 = '' as any
const dataKey_0_0_0_5 = '' as any

/**
 * 接口 [创建团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16083) 的 **请求类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/createTeam`
 * @更新时间 `2022-04-18 10:35:44`
 */
export interface CreateTeamRequest {
  /**
   * 团队名称
   */
  teamName: string
  /**
   * 备注名
   */
  nickName: string
}

/**
 * 接口 [创建团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16083) 的 **返回类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/createTeam`
 * @更新时间 `2022-04-18 10:35:44`
 */
export interface CreateTeamResponse {
  code: number
  message?: string
}

/**
 * 接口 [创建团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16083) 的 **请求配置的类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/createTeam`
 * @更新时间 `2022-04-18 10:35:44`
 */
type CreateTeamRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-team/team/createTeam',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [创建团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16083) 的 **请求配置**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/createTeam`
 * @更新时间 `2022-04-18 10:35:44`
 */
const createTeamRequestConfig: CreateTeamRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/shopone-team/team/createTeam',
  method: Method.POST,
  requestHeaders: {'x-parkes-udb-uid': '3306504461'},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'createTeam',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [创建团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16083) 的 **请求函数**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/createTeam`
 * @更新时间 `2022-04-18 10:35:44`
 */
export const createTeam = /*#__PURE__*/ (requestData: CreateTeamRequest, ...args: UserRequestRestArgs) => {
  return request<CreateTeamResponse>(prepare(createTeamRequestConfig, requestData), ...args)
}

createTeam.requestConfig = createTeamRequestConfig

/**
 * 接口 [获取团队列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16086) 的 **请求类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `GET /shopone-team/team/userTeamList`
 * @更新时间 `2022-05-20 10:58:26`
 */
export interface UserTeamListRequest {}

/**
 * 接口 [获取团队列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16086) 的 **返回类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `GET /shopone-team/team/userTeamList`
 * @更新时间 `2022-05-20 10:58:26`
 */
export interface UserTeamListResponse {
  code: number
  message?: string
  data: {
    id: number
    /**
     * 角色类型: 0->创建者，2->管理员, 4->组长, 6->成员
     */
    roleType: number
    /**
     * 团队名称
     */
    teamName: string
    /**
     * 是否默认团队 1 是， 0 否
     */
    defaultFlag: number
    /**
     * 角色名称
     */
    roleName: string
    /**
     * 创建人
     */
    createUserName: string
    /**
     * 创建时间
     */
    createTime: string
  }[]
}

/**
 * 接口 [获取团队列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16086) 的 **请求配置的类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `GET /shopone-team/team/userTeamList`
 * @更新时间 `2022-05-20 10:58:26`
 */
type UserTeamListRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-team/team/userTeamList',
    '',
    string,
    string,
    true
  >
>

/**
 * 接口 [获取团队列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16086) 的 **请求配置**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `GET /shopone-team/team/userTeamList`
 * @更新时间 `2022-05-20 10:58:26`
 */
const userTeamListRequestConfig: UserTeamListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/shopone-team/team/userTeamList',
  method: Method.GET,
  requestHeaders: {'x-parkes-udb-uid': '3306504461'},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'userTeamList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取团队列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16086) 的 **请求函数**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `GET /shopone-team/team/userTeamList`
 * @更新时间 `2022-05-20 10:58:26`
 */
export const userTeamList = /*#__PURE__*/ (requestData?: UserTeamListRequest, ...args: UserRequestRestArgs) => {
  return request<UserTeamListResponse>(prepare(userTeamListRequestConfig, requestData), ...args)
}

userTeamList.requestConfig = userTeamListRequestConfig

/**
 * 接口 [获取团队成员树↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16089) 的 **请求类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `GET /shopone-team/team/user/userTree`
 * @更新时间 `2022-04-29 15:25:46`
 */
export interface UserTreeRequest {}

/**
 * 接口 [获取团队成员树↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16089) 的 **返回类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `GET /shopone-team/team/user/userTree`
 * @更新时间 `2022-04-29 15:25:46`
 */
export interface UserTreeResponse {
  code: number
  message: string
  data: {
    /**
     * 用户标识
     */
    uid: number
    /**
     * 用户名称
     */
    userName: string
    /**
     * 手机号
     */
    userPhone: string
    /**
     * 邮箱
     */
    userEmail: string
    /**
     * 创建时间
     */
    createTime: string
    /**
     * 头像？
     */
    ave: string
    /**
     * 父id
     */
    parentId: number
    /**
     * 父名称
     */
    pUserName: string
    /**
     * 角色：0创建者，2管理员，4组长，6成员
     */
    roleType: number
    /**
     * 角色名称
     */
    roleName: string
    /**
     * 昵称
     */
    nickName: string
    /**
     * 团队id
     */
    teamId: number
    envirments: {
      /**
       * 环境分组
       */
      groupInfoList: {
        groupId: string
        /**
         * 分组名
         */
        groupName: string
        /**
         * 颜色值
         */
        color: string
      }[]
      /**
       * 环境名列表 没有：不会有key
       */
      envInfoList: {
        /**
         * id
         */
        envId: string
        /**
         * 环境名
         */
        envName: string
      }[]
    }
    /**
     * 没有下级：不会有key
     */
    roleCounts: {
      roleType: number
      roleName: string
      count: number
    }[]
    pRoleType: number
    pRoleName: string
    child?: {}[]
    /**
     * 是否所有环境：1 是 0 否
     */
    allEnvFlag: number
  }
}

/**
 * 接口 [获取团队成员树↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16089) 的 **请求配置的类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `GET /shopone-team/team/user/userTree`
 * @更新时间 `2022-04-29 15:25:46`
 */
type UserTreeRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-team/team/user/userTree',
    '',
    string,
    string,
    true
  >
>

/**
 * 接口 [获取团队成员树↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16089) 的 **请求配置**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `GET /shopone-team/team/user/userTree`
 * @更新时间 `2022-04-29 15:25:46`
 */
const userTreeRequestConfig: UserTreeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/shopone-team/team/user/userTree',
  method: Method.GET,
  requestHeaders: {'x-parkes-udb-uid': '3306504461', 'X-teamid': '3306504461'},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'userTree',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取团队成员树↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16089) 的 **请求函数**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `GET /shopone-team/team/user/userTree`
 * @更新时间 `2022-04-29 15:25:46`
 */
export const userTree = /*#__PURE__*/ (requestData?: UserTreeRequest, ...args: UserRequestRestArgs) => {
  return request<UserTreeResponse>(prepare(userTreeRequestConfig, requestData), ...args)
}

userTree.requestConfig = userTreeRequestConfig

/**
 * 接口 [修改默认团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16092) 的 **请求类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/user/changeDefault`
 * @更新时间 `2022-04-27 11:36:08`
 */
export interface ChangeDefaultRequest {
  /**
   * 团队id
   */
  teamId: number
}

/**
 * 接口 [修改默认团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16092) 的 **返回类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/user/changeDefault`
 * @更新时间 `2022-04-27 11:36:08`
 */
export interface ChangeDefaultResponse {
  code: number
  message?: string
}

/**
 * 接口 [修改默认团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16092) 的 **请求配置的类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/user/changeDefault`
 * @更新时间 `2022-04-27 11:36:08`
 */
type ChangeDefaultRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-team/team/user/changeDefault',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [修改默认团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16092) 的 **请求配置**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/user/changeDefault`
 * @更新时间 `2022-04-27 11:36:08`
 */
const changeDefaultRequestConfig: ChangeDefaultRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/shopone-team/team/user/changeDefault',
  method: Method.POST,
  requestHeaders: {'x-parkes-udb-uid': '3306504461'},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'changeDefault',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [修改默认团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16092) 的 **请求函数**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/user/changeDefault`
 * @更新时间 `2022-04-27 11:36:08`
 */
export const changeDefault = /*#__PURE__*/ (requestData: ChangeDefaultRequest, ...args: UserRequestRestArgs) => {
  return request<ChangeDefaultResponse>(prepare(changeDefaultRequestConfig, requestData), ...args)
}

changeDefault.requestConfig = changeDefaultRequestConfig

/**
 * 接口 [获取当前团队数据（个人中心）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16095) 的 **请求类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `GET /shopone-team/team/user/userTeamDetail`
 * @更新时间 `2022-04-27 11:36:24`
 */
export interface UserTeamDetailRequest {}

/**
 * 接口 [获取当前团队数据（个人中心）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16095) 的 **返回类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `GET /shopone-team/team/user/userTeamDetail`
 * @更新时间 `2022-04-27 11:36:24`
 */
export interface UserTeamDetailResponse {
  code?: number
  message?: string
  data?: {
    /**
     * 团队名称
     */
    teamName?: string
    /**
     * 昵称
     */
    nickName?: string
    /**
     * 角色类型
     */
    roleType?: number
    /**
     * 角色名称
     */
    roleName?: string
    /**
     * 父级昵称
     */
    pNickame?: string
    /**
     * 下级统计
     */
    roleCounts?: {
      roleType: number
      roleName: string
      count: number
    }[]
  }
}

/**
 * 接口 [获取当前团队数据（个人中心）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16095) 的 **请求配置的类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `GET /shopone-team/team/user/userTeamDetail`
 * @更新时间 `2022-04-27 11:36:24`
 */
type UserTeamDetailRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-team/team/user/userTeamDetail',
    '',
    string,
    string,
    true
  >
>

/**
 * 接口 [获取当前团队数据（个人中心）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16095) 的 **请求配置**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `GET /shopone-team/team/user/userTeamDetail`
 * @更新时间 `2022-04-27 11:36:24`
 */
const userTeamDetailRequestConfig: UserTeamDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/shopone-team/team/user/userTeamDetail',
  method: Method.GET,
  requestHeaders: {'x-parkes-udb-uid': '3306504461', 'X-teamid': '3306504461'},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'userTeamDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取当前团队数据（个人中心）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16095) 的 **请求函数**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `GET /shopone-team/team/user/userTeamDetail`
 * @更新时间 `2022-04-27 11:36:24`
 */
export const userTeamDetail = /*#__PURE__*/ (requestData?: UserTeamDetailRequest, ...args: UserRequestRestArgs) => {
  return request<UserTeamDetailResponse>(prepare(userTeamDetailRequestConfig, requestData), ...args)
}

userTeamDetail.requestConfig = userTeamDetailRequestConfig

/**
 * 接口 [修改昵称（个人中心）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16098) 的 **请求类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/user/changeNickName`
 * @更新时间 `2022-04-24 12:04:31`
 */
export interface ChangeNickNameRequest {
  /**
   * 昵称
   */
  nickName: string
}

/**
 * 接口 [修改昵称（个人中心）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16098) 的 **返回类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/user/changeNickName`
 * @更新时间 `2022-04-24 12:04:31`
 */
export interface ChangeNickNameResponse {
  code: number
  message: string
}

/**
 * 接口 [修改昵称（个人中心）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16098) 的 **请求配置的类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/user/changeNickName`
 * @更新时间 `2022-04-24 12:04:31`
 */
type ChangeNickNameRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-team/team/user/changeNickName',
    '',
    string,
    'nickName',
    false
  >
>

/**
 * 接口 [修改昵称（个人中心）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16098) 的 **请求配置**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/user/changeNickName`
 * @更新时间 `2022-04-24 12:04:31`
 */
const changeNickNameRequestConfig: ChangeNickNameRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/shopone-team/team/user/changeNickName',
  method: Method.POST,
  requestHeaders: {'x-parkes-udb-uid': '3306504461'},
  requestBodyType: RequestBodyType.form,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: ['nickName'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'changeNickName',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [修改昵称（个人中心）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16098) 的 **请求函数**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/user/changeNickName`
 * @更新时间 `2022-04-24 12:04:31`
 */
export const changeNickName = /*#__PURE__*/ (requestData: ChangeNickNameRequest, ...args: UserRequestRestArgs) => {
  return request<ChangeNickNameResponse>(prepare(changeNickNameRequestConfig, requestData), ...args)
}

changeNickName.requestConfig = changeNickNameRequestConfig

/**
 * 接口 [移除成员↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16101) 的 **请求类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/user/removeUser`
 * @更新时间 `2022-04-27 11:40:28`
 */
export interface RemoveUserRequest {
  /**
   * 被移除的人
   */
  targetUid: number
}

/**
 * 接口 [移除成员↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16101) 的 **返回类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/user/removeUser`
 * @更新时间 `2022-04-27 11:40:28`
 */
export interface RemoveUserResponse {
  code: number
  message: string
}

/**
 * 接口 [移除成员↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16101) 的 **请求配置的类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/user/removeUser`
 * @更新时间 `2022-04-27 11:40:28`
 */
type RemoveUserRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-team/team/user/removeUser',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [移除成员↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16101) 的 **请求配置**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/user/removeUser`
 * @更新时间 `2022-04-27 11:40:28`
 */
const removeUserRequestConfig: RemoveUserRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/shopone-team/team/user/removeUser',
  method: Method.POST,
  requestHeaders: {'x-parkes-udb-uid': '3306504461'},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'removeUser',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [移除成员↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16101) 的 **请求函数**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/user/removeUser`
 * @更新时间 `2022-04-27 11:40:28`
 */
export const removeUser = /*#__PURE__*/ (requestData: RemoveUserRequest, ...args: UserRequestRestArgs) => {
  return request<RemoveUserResponse>(prepare(removeUserRequestConfig, requestData), ...args)
}

removeUser.requestConfig = removeUserRequestConfig

/**
 * 接口 [编辑成员角色↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16104) 的 **请求类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/user/eidtUserRole`
 * @更新时间 `2022-04-18 11:06:08`
 */
export interface EidtUserRoleRequest {
  /**
   * 被移除的人
   */
  targetUid: string
  /**
   * 父级id
   */
  parentId: string
  /**
   * 角色类型:0 创建者，2 管理员，4 组长 , 6 成员
   */
  roleType: number
}

/**
 * 接口 [编辑成员角色↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16104) 的 **返回类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/user/eidtUserRole`
 * @更新时间 `2022-04-18 11:06:08`
 */
export interface EidtUserRoleResponse {
  code: number
  message: string
}

/**
 * 接口 [编辑成员角色↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16104) 的 **请求配置的类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/user/eidtUserRole`
 * @更新时间 `2022-04-18 11:06:08`
 */
type EidtUserRoleRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-team/team/user/eidtUserRole',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [编辑成员角色↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16104) 的 **请求配置**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/user/eidtUserRole`
 * @更新时间 `2022-04-18 11:06:08`
 */
const eidtUserRoleRequestConfig: EidtUserRoleRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/shopone-team/team/user/eidtUserRole',
  method: Method.POST,
  requestHeaders: {'x-parkes-udb-uid': '3306504461'},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'eidtUserRole',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [编辑成员角色↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16104) 的 **请求函数**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/user/eidtUserRole`
 * @更新时间 `2022-04-18 11:06:08`
 */
export const eidtUserRole = /*#__PURE__*/ (requestData: EidtUserRoleRequest, ...args: UserRequestRestArgs) => {
  return request<EidtUserRoleResponse>(prepare(eidtUserRoleRequestConfig, requestData), ...args)
}

eidtUserRole.requestConfig = eidtUserRoleRequestConfig

/**
 * 接口 [邀请成员加入团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16173) 的 **请求类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/apply/applyInviteMember`
 * @更新时间 `2022-04-20 16:37:04`
 */
export interface ApplyInviteMemberRequest {
  /**
   * 2:管理员；4：组长；6：成员
   */
  roleType?: number
  /**
   * 上级uid
   */
  superiorUid?: number
  /**
   * 邀请账号
   */
  account?: string
}

/**
 * 接口 [邀请成员加入团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16173) 的 **返回类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/apply/applyInviteMember`
 * @更新时间 `2022-04-20 16:37:04`
 */
export interface ApplyInviteMemberResponse {
  code?: number
  message?: string
}

/**
 * 接口 [邀请成员加入团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16173) 的 **请求配置的类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/apply/applyInviteMember`
 * @更新时间 `2022-04-20 16:37:04`
 */
type ApplyInviteMemberRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-team/team/apply/applyInviteMember',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [邀请成员加入团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16173) 的 **请求配置**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/apply/applyInviteMember`
 * @更新时间 `2022-04-20 16:37:04`
 */
const applyInviteMemberRequestConfig: ApplyInviteMemberRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/shopone-team/team/apply/applyInviteMember',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'applyInviteMember',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [邀请成员加入团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16173) 的 **请求函数**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/apply/applyInviteMember`
 * @更新时间 `2022-04-20 16:37:04`
 */
export const applyInviteMember = /*#__PURE__*/ (
  requestData: ApplyInviteMemberRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApplyInviteMemberResponse>(prepare(applyInviteMemberRequestConfig, requestData), ...args)
}

applyInviteMember.requestConfig = applyInviteMemberRequestConfig

/**
 * 接口 [获取当前所有下级(非成员)↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16194) 的 **请求类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `GET /shopone-team/team/user/queryAllSubUserWithMember`
 * @更新时间 `2022-04-20 18:29:14`
 */
export interface QueryAllSubUserWithMemberRequest {}

/**
 * 接口 [获取当前所有下级(非成员)↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16194) 的 **返回类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `GET /shopone-team/team/user/queryAllSubUserWithMember`
 * @更新时间 `2022-04-20 18:29:14`
 */
export interface QueryAllSubUserWithMemberResponse {
  code: string
  message: string
  data: {
    /**
     * 用户id
     */
    uid: string
    roleType: string
    /**
     * 角色名称
     */
    roleName: string
    /**
     * nickname
     */
    nickName: string
  }[]
}

/**
 * 接口 [获取当前所有下级(非成员)↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16194) 的 **请求配置的类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `GET /shopone-team/team/user/queryAllSubUserWithMember`
 * @更新时间 `2022-04-20 18:29:14`
 */
type QueryAllSubUserWithMemberRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-team/team/user/queryAllSubUserWithMember',
    '',
    string,
    string,
    true
  >
>

/**
 * 接口 [获取当前所有下级(非成员)↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16194) 的 **请求配置**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `GET /shopone-team/team/user/queryAllSubUserWithMember`
 * @更新时间 `2022-04-20 18:29:14`
 */
const queryAllSubUserWithMemberRequestConfig: QueryAllSubUserWithMemberRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/shopone-team/team/user/queryAllSubUserWithMember',
  method: Method.GET,
  requestHeaders: {'x-parkes-udb-uid': '3306504461', 'X-teamid': '3306504461'},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'queryAllSubUserWithMember',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取当前所有下级(非成员)↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16194) 的 **请求函数**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `GET /shopone-team/team/user/queryAllSubUserWithMember`
 * @更新时间 `2022-04-20 18:29:14`
 */
export const queryAllSubUserWithMember = /*#__PURE__*/ (
  requestData?: QueryAllSubUserWithMemberRequest,
  ...args: UserRequestRestArgs
) => {
  return request<QueryAllSubUserWithMemberResponse>(
    prepare(queryAllSubUserWithMemberRequestConfig, requestData),
    ...args,
  )
}

queryAllSubUserWithMember.requestConfig = queryAllSubUserWithMemberRequestConfig

/**
 * 接口 [修改环境授权标记↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16200) 的 **请求类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/user/changeEnvFlag`
 * @更新时间 `2022-04-27 15:58:40`
 */
export interface ChangeEnvFlagRequest {
  /**
   * 1 所有环境，0 自定义
   */
  envFlag: number
  /**
   * 目标用户id
   */
  targetUid: number
}

/**
 * 接口 [修改环境授权标记↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16200) 的 **返回类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/user/changeEnvFlag`
 * @更新时间 `2022-04-27 15:58:40`
 */
export interface ChangeEnvFlagResponse {
  code: number
  message?: string
}

/**
 * 接口 [修改环境授权标记↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16200) 的 **请求配置的类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/user/changeEnvFlag`
 * @更新时间 `2022-04-27 15:58:40`
 */
type ChangeEnvFlagRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-team/team/user/changeEnvFlag',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [修改环境授权标记↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16200) 的 **请求配置**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/user/changeEnvFlag`
 * @更新时间 `2022-04-27 15:58:40`
 */
const changeEnvFlagRequestConfig: ChangeEnvFlagRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/shopone-team/team/user/changeEnvFlag',
  method: Method.POST,
  requestHeaders: {'x-parkes-udb-uid': '3306504461'},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'changeEnvFlag',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [修改环境授权标记↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16200) 的 **请求函数**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/user/changeEnvFlag`
 * @更新时间 `2022-04-27 15:58:40`
 */
export const changeEnvFlag = /*#__PURE__*/ (requestData: ChangeEnvFlagRequest, ...args: UserRequestRestArgs) => {
  return request<ChangeEnvFlagResponse>(prepare(changeEnvFlagRequestConfig, requestData), ...args)
}

changeEnvFlag.requestConfig = changeEnvFlagRequestConfig

/**
 * 接口 [验证团队是否存在↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16203) 的 **请求类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `GET /shopone-team/team/checkTeamExist`
 * @更新时间 `2022-04-22 10:22:08`
 */
export interface CheckTeamExistRequest {
  /**
   * 团队id
   */
  id: string
}

/**
 * 接口 [验证团队是否存在↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16203) 的 **返回类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `GET /shopone-team/team/checkTeamExist`
 * @更新时间 `2022-04-22 10:22:08`
 */
export interface CheckTeamExistResponse {
  code: number
  message?: string
  /**
   * 是or否
   */
  data: boolean
}

/**
 * 接口 [验证团队是否存在↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16203) 的 **请求配置的类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `GET /shopone-team/team/checkTeamExist`
 * @更新时间 `2022-04-22 10:22:08`
 */
type CheckTeamExistRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-team/team/checkTeamExist',
    '',
    string,
    'id',
    false
  >
>

/**
 * 接口 [验证团队是否存在↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16203) 的 **请求配置**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `GET /shopone-team/team/checkTeamExist`
 * @更新时间 `2022-04-22 10:22:08`
 */
const checkTeamExistRequestConfig: CheckTeamExistRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/shopone-team/team/checkTeamExist',
  method: Method.GET,
  requestHeaders: {'x-parkes-udb-uid': '3306504461'},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'checkTeamExist',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [验证团队是否存在↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16203) 的 **请求函数**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `GET /shopone-team/team/checkTeamExist`
 * @更新时间 `2022-04-22 10:22:08`
 */
export const checkTeamExist = /*#__PURE__*/ (requestData: CheckTeamExistRequest, ...args: UserRequestRestArgs) => {
  return request<CheckTeamExistResponse>(prepare(checkTeamExistRequestConfig, requestData), ...args)
}

checkTeamExist.requestConfig = checkTeamExistRequestConfig

/**
 * 接口 [修改团队名称↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16245) 的 **请求类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/changeTeamName`
 * @更新时间 `2022-04-24 12:02:35`
 */
export interface ChangeTeamNameRequest {
  teamName: string
}

/**
 * 接口 [修改团队名称↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16245) 的 **返回类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/changeTeamName`
 * @更新时间 `2022-04-24 12:02:35`
 */
export interface ChangeTeamNameResponse {
  code: number
  message: string
}

/**
 * 接口 [修改团队名称↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16245) 的 **请求配置的类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/changeTeamName`
 * @更新时间 `2022-04-24 12:02:35`
 */
type ChangeTeamNameRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-team/team/changeTeamName',
    '',
    string,
    'teamName',
    false
  >
>

/**
 * 接口 [修改团队名称↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16245) 的 **请求配置**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/changeTeamName`
 * @更新时间 `2022-04-24 12:02:35`
 */
const changeTeamNameRequestConfig: ChangeTeamNameRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/shopone-team/team/changeTeamName',
  method: Method.POST,
  requestHeaders: {'x-parkes-udb-uid': '3306504461'},
  requestBodyType: RequestBodyType.form,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: ['teamName'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'changeTeamName',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [修改团队名称↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16245) 的 **请求函数**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/changeTeamName`
 * @更新时间 `2022-04-24 12:02:35`
 */
export const changeTeamName = /*#__PURE__*/ (requestData: ChangeTeamNameRequest, ...args: UserRequestRestArgs) => {
  return request<ChangeTeamNameResponse>(prepare(changeTeamNameRequestConfig, requestData), ...args)
}

changeTeamName.requestConfig = changeTeamNameRequestConfig

/**
 * 接口 [获取团队成员信息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16326) 的 **请求类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `GET /shopone-team/team/user/userDetail`
 * @更新时间 `2022-04-27 17:13:36`
 */
export interface UserDetailRequest {}

/**
 * 接口 [获取团队成员信息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16326) 的 **返回类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `GET /shopone-team/team/user/userDetail`
 * @更新时间 `2022-04-27 17:13:36`
 */
export interface UserDetailResponse {
  code?: number
  data?: {
    uid?: number
    roleName?: string
    roleType?: number
    pUserName?: string
    parentId?: number
    ave?: string
    createTime?: string
    userEmail?: string
    userPhone?: string
    teamId?: number
    nickName?: string
    envirments?: {
      groupInfoList?: {
        groupId: string
        groupName: string
        color: string
      }[]
      envInfoList?: {
        envId: string
        envName: string
      }[]
    }
    roleCounts?: {
      roleType: number
      roleName: string
      count: number
    }[]
    pRoleType?: number
    pRoleName?: string
    allEnvFlag?: number
  }
  message?: string
}

/**
 * 接口 [获取团队成员信息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16326) 的 **请求配置的类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `GET /shopone-team/team/user/userDetail`
 * @更新时间 `2022-04-27 17:13:36`
 */
type UserDetailRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-team/team/user/userDetail',
    '',
    string,
    string,
    true
  >
>

/**
 * 接口 [获取团队成员信息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16326) 的 **请求配置**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `GET /shopone-team/team/user/userDetail`
 * @更新时间 `2022-04-27 17:13:36`
 */
const userDetailRequestConfig: UserDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/shopone-team/team/user/userDetail',
  method: Method.GET,
  requestHeaders: {'x-parkes-udb-uid': '3306504461', 'X-teamid': '3306504461'},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'userDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取团队成员信息↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16326) 的 **请求函数**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `GET /shopone-team/team/user/userDetail`
 * @更新时间 `2022-04-27 17:13:36`
 */
export const userDetail = /*#__PURE__*/ (requestData?: UserDetailRequest, ...args: UserRequestRestArgs) => {
  return request<UserDetailResponse>(prepare(userDetailRequestConfig, requestData), ...args)
}

userDetail.requestConfig = userDetailRequestConfig

/**
 * 接口 [修改昵称2（个人中心）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16500) 的 **请求类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/user/changeNickNameV2`
 * @更新时间 `2022-05-25 15:14:47`
 */
export interface ChangeNickNameV2Request {
  nickName: string
  teamId: string
}

/**
 * 接口 [修改昵称2（个人中心）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16500) 的 **返回类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/user/changeNickNameV2`
 * @更新时间 `2022-05-25 15:14:47`
 */
export interface ChangeNickNameV2Response {
  code: number
  message: string
}

/**
 * 接口 [修改昵称2（个人中心）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16500) 的 **请求配置的类型**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/user/changeNickNameV2`
 * @更新时间 `2022-05-25 15:14:47`
 */
type ChangeNickNameV2RequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-team/team/user/changeNickNameV2',
    '',
    string,
    'nickName' | 'teamId',
    false
  >
>

/**
 * 接口 [修改昵称2（个人中心）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16500) 的 **请求配置**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/user/changeNickNameV2`
 * @更新时间 `2022-05-25 15:14:47`
 */
const changeNickNameV2RequestConfig: ChangeNickNameV2RequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/shopone-team/team/user/changeNickNameV2',
  method: Method.POST,
  requestHeaders: {'x-parkes-udb-uid': '3306504461'},
  requestBodyType: RequestBodyType.form,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: ['nickName', 'teamId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'changeNickNameV2',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [修改昵称2（个人中心）↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16500) 的 **请求函数**
 *
 * @分类 [团队↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4390)
 * @请求头 `POST /shopone-team/team/user/changeNickNameV2`
 * @更新时间 `2022-05-25 15:14:47`
 */
export const changeNickNameV2 = /*#__PURE__*/ (requestData: ChangeNickNameV2Request, ...args: UserRequestRestArgs) => {
  return request<ChangeNickNameV2Response>(prepare(changeNickNameV2RequestConfig, requestData), ...args)
}

changeNickNameV2.requestConfig = changeNickNameV2RequestConfig

const mockUrl_0_0_0_6 = 'http://www.yapi-efox.duowan.com/mock/1151' as any
const devUrl_0_0_0_6 = 'https://api-test.shopviewer.com' as any
const prodUrl_0_0_0_6 = '' as any
const dataKey_0_0_0_6 = '' as any

/**
 * 接口 [获取权限列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16107) 的 **请求类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/auth/userPerms`
 * @更新时间 `2022-04-20 18:02:13`
 */
export interface UserPermsRequest {}

/**
 * 接口 [获取权限列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16107) 的 **返回类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/auth/userPerms`
 * @更新时间 `2022-04-20 18:02:13`
 */
export interface UserPermsResponse {
  code: number
  message: string
  data: {
    id: string
    parentId: string
    /**
     * 是否是跟权限： 1 是， 0 否
     */
    rootFlag: number
    /**
     * 权限名称
     */
    permsName: string
    /**
     * 权限归属类型: 0 团队管理, 1 环境管理, 2 账号管理, 3 数据看板
     */
    permsType: number
    /**
     * 权限标识
     */
    perms: string
  }[]
}

/**
 * 接口 [获取权限列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16107) 的 **请求配置的类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/auth/userPerms`
 * @更新时间 `2022-04-20 18:02:13`
 */
type UserPermsRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-auth/auth/userPerms',
    '',
    string,
    string,
    true
  >
>

/**
 * 接口 [获取权限列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16107) 的 **请求配置**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/auth/userPerms`
 * @更新时间 `2022-04-20 18:02:13`
 */
const userPermsRequestConfig: UserPermsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/shopone-auth/auth/userPerms',
  method: Method.GET,
  requestHeaders: {'X-teamid': '3306504461', 'x-parkes-udb-uid': '3306504461'},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'userPerms',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取权限列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16107) 的 **请求函数**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/auth/userPerms`
 * @更新时间 `2022-04-20 18:02:13`
 */
export const userPerms = /*#__PURE__*/ (requestData?: UserPermsRequest, ...args: UserRequestRestArgs) => {
  return request<UserPermsResponse>(prepare(userPermsRequestConfig, requestData), ...args)
}

userPerms.requestConfig = userPermsRequestConfig

/**
 * 接口 [获取默认权限列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16185) 的 **请求类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/auth/listAllPerms`
 * @更新时间 `2022-05-10 13:52:42`
 */
export interface ListAllPermsRequest {
  roleType: string
}

/**
 * 接口 [获取默认权限列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16185) 的 **返回类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/auth/listAllPerms`
 * @更新时间 `2022-05-10 13:52:42`
 */
export interface ListAllPermsResponse {
  code: number
  message: string
  data: {
    id: string
    /**
     * 是否选中
     */
    selected: boolean
    parentId: string
    /**
     * 是否是跟权限： 1 是， 0 否
     */
    rootFlag: number
    /**
     * 权限名称
     */
    permsName: string
    /**
     * 权限归属类型: 0 团队管理, 1 环境管理, 2 账号管理, 3 数据看板
     */
    permsType: number
    /**
     * 权限标识
     */
    perms: string
    childrens: {
      id: string
      selected: boolean
      parentId: string
      rootFlag: number
      permsName: string
      permsType: number
      perms: string
    }[]
  }[]
}

/**
 * 接口 [获取默认权限列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16185) 的 **请求配置的类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/auth/listAllPerms`
 * @更新时间 `2022-05-10 13:52:42`
 */
type ListAllPermsRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-auth/auth/listAllPerms',
    '',
    string,
    'roleType',
    false
  >
>

/**
 * 接口 [获取默认权限列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16185) 的 **请求配置**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/auth/listAllPerms`
 * @更新时间 `2022-05-10 13:52:42`
 */
const listAllPermsRequestConfig: ListAllPermsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/shopone-auth/auth/listAllPerms',
  method: Method.GET,
  requestHeaders: {'X-teamid': '3306504461', 'x-parkes-udb-uid': '3306504461'},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: ['roleType'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'listAllPerms',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取默认权限列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16185) 的 **请求函数**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/auth/listAllPerms`
 * @更新时间 `2022-05-10 13:52:42`
 */
export const listAllPerms = /*#__PURE__*/ (requestData: ListAllPermsRequest, ...args: UserRequestRestArgs) => {
  return request<ListAllPermsResponse>(prepare(listAllPermsRequestConfig, requestData), ...args)
}

listAllPerms.requestConfig = listAllPermsRequestConfig

/**
 * 接口 [编辑默认权限列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16188) 的 **请求类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `POST /shopone-auth/auth/editRolePerms`
 * @更新时间 `2022-04-20 17:57:13`
 */
export interface EditRolePermsRequest {
  /**
   * 团队Id
   */
  teamPermsIds: string[]
  /**
   * 数据看板Id
   */
  dataBoardPermsIds: string[]
  /**
   * 环境Id
   */
  environmentPermsIds: string[]
  /**
   * 账号
   */
  accountPermsIds: string[]
  /**
   * 角色类型: 0->创建者，2->管理员, 4->组长, 6->成员
   */
  roleType: number
}

/**
 * 接口 [编辑默认权限列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16188) 的 **返回类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `POST /shopone-auth/auth/editRolePerms`
 * @更新时间 `2022-04-20 17:57:13`
 */
export interface EditRolePermsResponse {
  code: number
  message: string
}

/**
 * 接口 [编辑默认权限列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16188) 的 **请求配置的类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `POST /shopone-auth/auth/editRolePerms`
 * @更新时间 `2022-04-20 17:57:13`
 */
type EditRolePermsRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-auth/auth/editRolePerms',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [编辑默认权限列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16188) 的 **请求配置**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `POST /shopone-auth/auth/editRolePerms`
 * @更新时间 `2022-04-20 17:57:13`
 */
const editRolePermsRequestConfig: EditRolePermsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/shopone-auth/auth/editRolePerms',
  method: Method.POST,
  requestHeaders: {'X-teamid': '3306504461', 'x-parkes-udb-uid': '3306504461'},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'editRolePerms',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [编辑默认权限列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16188) 的 **请求函数**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `POST /shopone-auth/auth/editRolePerms`
 * @更新时间 `2022-04-20 17:57:13`
 */
export const editRolePerms = /*#__PURE__*/ (requestData: EditRolePermsRequest, ...args: UserRequestRestArgs) => {
  return request<EditRolePermsResponse>(prepare(editRolePermsRequestConfig, requestData), ...args)
}

editRolePerms.requestConfig = editRolePermsRequestConfig

/**
 * 接口 [获取数据权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17365) 的 **请求类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/auth/data/perms/listAllDataPerms`
 * @更新时间 `2022-07-04 11:51:08`
 */
export interface ListAllDataPermsRequest {
  /**
   * 数据角色id, 有则返回选择状态
   */
  dataRoleId?: string
}

/**
 * 接口 [获取数据权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17365) 的 **返回类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/auth/data/perms/listAllDataPerms`
 * @更新时间 `2022-07-04 11:51:08`
 */
export interface ListAllDataPermsResponse {
  code: number
  message: string
  data: {
    id: string
    parentId: string
    /**
     * 是否是跟权限： 1 是， 0 否
     */
    rootFlag: number
    /**
     * 权限名称
     */
    permsName: string
    /**
     * 权限归属类型: 0 团队管理, 1 环境管理, 2 账号管理, 3 数据看板
     */
    permsType: number
    /**
     * 权限标识
     */
    perms: string
    /**
     * 是否已经关联
     */
    selected: boolean
    /**
     * 下一级
     */
    childrens: {}[]
  }[]
}

/**
 * 接口 [获取数据权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17365) 的 **请求配置的类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/auth/data/perms/listAllDataPerms`
 * @更新时间 `2022-07-04 11:51:08`
 */
type ListAllDataPermsRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-auth/auth/data/perms/listAllDataPerms',
    '',
    string,
    'dataRoleId',
    false
  >
>

/**
 * 接口 [获取数据权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17365) 的 **请求配置**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/auth/data/perms/listAllDataPerms`
 * @更新时间 `2022-07-04 11:51:08`
 */
const listAllDataPermsRequestConfig: ListAllDataPermsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/shopone-auth/auth/data/perms/listAllDataPerms',
  method: Method.GET,
  requestHeaders: {'X-teamid': '3306504461', 'x-parkes-udb-uid': '3306504461'},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: ['dataRoleId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'listAllDataPerms',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取数据权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17365) 的 **请求函数**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/auth/data/perms/listAllDataPerms`
 * @更新时间 `2022-07-04 11:51:08`
 */
export const listAllDataPerms = /*#__PURE__*/ (requestData: ListAllDataPermsRequest, ...args: UserRequestRestArgs) => {
  return request<ListAllDataPermsResponse>(prepare(listAllDataPermsRequestConfig, requestData), ...args)
}

listAllDataPerms.requestConfig = listAllDataPermsRequestConfig

/**
 * 接口 [获取所有门店数据↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17369) 的 **请求类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/auth/data/listAllStore`
 * @更新时间 `2022-06-23 14:09:05`
 */
export interface ListAllStoreRequest {
  /**
   * 数据角色id, 有则返回选择状态
   */
  dataRoleId?: string
}

/**
 * 接口 [获取所有门店数据↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17369) 的 **返回类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/auth/data/listAllStore`
 * @更新时间 `2022-06-23 14:09:05`
 */
export interface ListAllStoreResponse {
  code: number
  message: string
  data: {
    storeId: string
    storeName: string
    /**
     * 门店类型： 后面定义
     */
    storeType: number
    /**
     * 门店类型名称
     */
    storeTypeName: string
    /**
     * 是否已经关联
     */
    selected: boolean
  }[]
}

/**
 * 接口 [获取所有门店数据↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17369) 的 **请求配置的类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/auth/data/listAllStore`
 * @更新时间 `2022-06-23 14:09:05`
 */
type ListAllStoreRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-auth/auth/data/listAllStore',
    '',
    string,
    'dataRoleId',
    false
  >
>

/**
 * 接口 [获取所有门店数据↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17369) 的 **请求配置**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/auth/data/listAllStore`
 * @更新时间 `2022-06-23 14:09:05`
 */
const listAllStoreRequestConfig: ListAllStoreRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/shopone-auth/auth/data/listAllStore',
  method: Method.GET,
  requestHeaders: {'X-teamid': '3306504461', 'x-parkes-udb-uid': '3306504461'},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: ['dataRoleId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'listAllStore',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取所有门店数据↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17369) 的 **请求函数**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/auth/data/listAllStore`
 * @更新时间 `2022-06-23 14:09:05`
 */
export const listAllStore = /*#__PURE__*/ (requestData: ListAllStoreRequest, ...args: UserRequestRestArgs) => {
  return request<ListAllStoreResponse>(prepare(listAllStoreRequestConfig, requestData), ...args)
}

listAllStore.requestConfig = listAllStoreRequestConfig

/**
 * 接口 [新增数据权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17373) 的 **请求类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `POST /shopone-auth/data/role/addDataRole`
 * @更新时间 `2022-06-23 14:12:16`
 */
export interface AddDataRoleRequest {
  /**
   * 关联的门店id
   */
  storeIds: string[]
  /**
   * 权限id
   */
  permsIds: string[]
  /**
   * 角色名字
   */
  roleName: string
}

/**
 * 接口 [新增数据权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17373) 的 **返回类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `POST /shopone-auth/data/role/addDataRole`
 * @更新时间 `2022-06-23 14:12:16`
 */
export interface AddDataRoleResponse {
  code: number
  message: string
}

/**
 * 接口 [新增数据权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17373) 的 **请求配置的类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `POST /shopone-auth/data/role/addDataRole`
 * @更新时间 `2022-06-23 14:12:16`
 */
type AddDataRoleRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-auth/data/role/addDataRole',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [新增数据权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17373) 的 **请求配置**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `POST /shopone-auth/data/role/addDataRole`
 * @更新时间 `2022-06-23 14:12:16`
 */
const addDataRoleRequestConfig: AddDataRoleRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/shopone-auth/data/role/addDataRole',
  method: Method.POST,
  requestHeaders: {'X-teamid': '3306504461', 'x-parkes-udb-uid': '3306504461'},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'addDataRole',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [新增数据权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17373) 的 **请求函数**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `POST /shopone-auth/data/role/addDataRole`
 * @更新时间 `2022-06-23 14:12:16`
 */
export const addDataRole = /*#__PURE__*/ (requestData: AddDataRoleRequest, ...args: UserRequestRestArgs) => {
  return request<AddDataRoleResponse>(prepare(addDataRoleRequestConfig, requestData), ...args)
}

addDataRole.requestConfig = addDataRoleRequestConfig

/**
 * 接口 [更新数据权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17375) 的 **请求类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `POST /shopone-auth/data/role/updateDataRole`
 * @更新时间 `2022-06-23 14:12:52`
 */
export interface UpdateDataRoleRequest {
  /**
   * 关联的门店id
   */
  storeIds: string[]
  /**
   * 权限id
   */
  permsIds: string[]
  /**
   * 角色名字
   */
  roleName: string
  /**
   * 角色id
   */
  roleId: string
}

/**
 * 接口 [更新数据权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17375) 的 **返回类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `POST /shopone-auth/data/role/updateDataRole`
 * @更新时间 `2022-06-23 14:12:52`
 */
export interface UpdateDataRoleResponse {
  code: number
  message: string
}

/**
 * 接口 [更新数据权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17375) 的 **请求配置的类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `POST /shopone-auth/data/role/updateDataRole`
 * @更新时间 `2022-06-23 14:12:52`
 */
type UpdateDataRoleRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-auth/data/role/updateDataRole',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [更新数据权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17375) 的 **请求配置**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `POST /shopone-auth/data/role/updateDataRole`
 * @更新时间 `2022-06-23 14:12:52`
 */
const updateDataRoleRequestConfig: UpdateDataRoleRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/shopone-auth/data/role/updateDataRole',
  method: Method.POST,
  requestHeaders: {'X-teamid': '3306504461', 'x-parkes-udb-uid': '3306504461'},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'updateDataRole',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [更新数据权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17375) 的 **请求函数**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `POST /shopone-auth/data/role/updateDataRole`
 * @更新时间 `2022-06-23 14:12:52`
 */
export const updateDataRole = /*#__PURE__*/ (requestData: UpdateDataRoleRequest, ...args: UserRequestRestArgs) => {
  return request<UpdateDataRoleResponse>(prepare(updateDataRoleRequestConfig, requestData), ...args)
}

updateDataRole.requestConfig = updateDataRoleRequestConfig

/**
 * 接口 [删除数据角色↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17377) 的 **请求类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/data/role/deleteDataRoleroleId`
 * @更新时间 `2022-06-23 14:20:22`
 */
export interface DeleteDataRoleroleIdRequest {
  /**
   * 角色id
   */
  roleId: string
}

/**
 * 接口 [删除数据角色↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17377) 的 **返回类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/data/role/deleteDataRoleroleId`
 * @更新时间 `2022-06-23 14:20:22`
 */
export interface DeleteDataRoleroleIdResponse {
  code: number
  message: string
}

/**
 * 接口 [删除数据角色↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17377) 的 **请求配置的类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/data/role/deleteDataRoleroleId`
 * @更新时间 `2022-06-23 14:20:22`
 */
type DeleteDataRoleroleIdRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-auth/data/role/deleteDataRoleroleId',
    '',
    string,
    'roleId',
    false
  >
>

/**
 * 接口 [删除数据角色↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17377) 的 **请求配置**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/data/role/deleteDataRoleroleId`
 * @更新时间 `2022-06-23 14:20:22`
 */
const deleteDataRoleroleIdRequestConfig: DeleteDataRoleroleIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/shopone-auth/data/role/deleteDataRoleroleId',
  method: Method.GET,
  requestHeaders: {'X-teamid': '3306504461', 'x-parkes-udb-uid': '3306504461'},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: ['roleId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteDataRoleroleId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [删除数据角色↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17377) 的 **请求函数**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/data/role/deleteDataRoleroleId`
 * @更新时间 `2022-06-23 14:20:22`
 */
export const deleteDataRoleroleId = /*#__PURE__*/ (
  requestData: DeleteDataRoleroleIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<DeleteDataRoleroleIdResponse>(prepare(deleteDataRoleroleIdRequestConfig, requestData), ...args)
}

deleteDataRoleroleId.requestConfig = deleteDataRoleroleIdRequestConfig

/**
 * 接口 [查询角色↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17381) 的 **请求类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/data/role/list`
 * @更新时间 `2022-06-23 14:25:54`
 */
export interface ListRequest {
  /**
   * 角色名称
   */
  roleName?: string
  /**
   * 开始时间
   */
  startCreateTime?: string
  /**
   * 结束时间
   */
  endCreateTime?: string
  /**
   * 页码
   */
  pageNum: string
  /**
   * 页大小
   */
  pageSize: string
}

/**
 * 接口 [查询角色↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17381) 的 **返回类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/data/role/list`
 * @更新时间 `2022-06-23 14:25:54`
 */
export interface ListResponse {
  code: number
  message: string
  data: {
    total: number
    results: {
      /**
       * id
       */
      roleId: string
      /**
       * 名字
       */
      roleName: string
      /**
       * 创建时间
       */
      createTime: string
    }[]
  }
}

/**
 * 接口 [查询角色↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17381) 的 **请求配置的类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/data/role/list`
 * @更新时间 `2022-06-23 14:25:54`
 */
type ListRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-auth/data/role/list',
    '',
    string,
    'roleName' | 'startCreateTime' | 'endCreateTime' | 'pageNum' | 'pageSize',
    false
  >
>

/**
 * 接口 [查询角色↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17381) 的 **请求配置**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/data/role/list`
 * @更新时间 `2022-06-23 14:25:54`
 */
const listRequestConfig: ListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/shopone-auth/data/role/list',
  method: Method.GET,
  requestHeaders: {'X-teamid': '3306504461', 'x-parkes-udb-uid': '3306504461'},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: ['roleName', 'startCreateTime', 'endCreateTime', 'pageNum', 'pageSize'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'list',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [查询角色↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17381) 的 **请求函数**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/data/role/list`
 * @更新时间 `2022-06-23 14:25:54`
 */
export const list = /*#__PURE__*/ (requestData: ListRequest, ...args: UserRequestRestArgs) => {
  return request<ListResponse>(prepare(listRequestConfig, requestData), ...args)
}

list.requestConfig = listRequestConfig

/**
 * 接口 [数据权限列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17383) 的 **请求类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/data/perms/userDataPerms`
 * @更新时间 `2022-06-23 15:57:46`
 */
export interface UserDataPermsRequest {}

/**
 * 接口 [数据权限列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17383) 的 **返回类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/data/perms/userDataPerms`
 * @更新时间 `2022-06-23 15:57:46`
 */
export interface UserDataPermsResponse {
  code: number
  message: string
  data: {
    id: string
    parentId: string
    /**
     * 是否是跟权限： 1 是， 0 否
     */
    rootFlag: number
    /**
     * 权限名称
     */
    permsName: string
    /**
     * 权限归属类型: 1 基础数据, 2 账号配置, 3 驾驶舱, 4 商品分析， 5 订单分析， 6 广告分析
     */
    permsType: number
    /**
     * 权限标识
     */
    perms: string
    childrens: {
      id: string
      parentId: string
      rootFlag: number
      permsName: string
      permsType: number
      perms: string
    }[]
  }[]
}

/**
 * 接口 [数据权限列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17383) 的 **请求配置的类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/data/perms/userDataPerms`
 * @更新时间 `2022-06-23 15:57:46`
 */
type UserDataPermsRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-auth/data/perms/userDataPerms',
    '',
    string,
    string,
    true
  >
>

/**
 * 接口 [数据权限列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17383) 的 **请求配置**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/data/perms/userDataPerms`
 * @更新时间 `2022-06-23 15:57:46`
 */
const userDataPermsRequestConfig: UserDataPermsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/shopone-auth/data/perms/userDataPerms',
  method: Method.GET,
  requestHeaders: {'X-teamid': '3306504461', 'x-parkes-udb-uid': '3306504461'},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'userDataPerms',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [数据权限列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17383) 的 **请求函数**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/data/perms/userDataPerms`
 * @更新时间 `2022-06-23 15:57:46`
 */
export const userDataPerms = /*#__PURE__*/ (requestData?: UserDataPermsRequest, ...args: UserRequestRestArgs) => {
  return request<UserDataPermsResponse>(prepare(userDataPermsRequestConfig, requestData), ...args)
}

userDataPerms.requestConfig = userDataPermsRequestConfig

/**
 * 接口 [数据角色列表(不分页)↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17387) 的 **请求类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/data/role/allRoles`
 * @更新时间 `2022-06-23 15:45:52`
 */
export interface AllRolesRequest {}

/**
 * 接口 [数据角色列表(不分页)↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17387) 的 **返回类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/data/role/allRoles`
 * @更新时间 `2022-06-23 15:45:52`
 */
export interface AllRolesResponse {
  code: number
  message: string
  data: {
    id: string
    /**
     * 团队名称
     */
    roleName: number
    /**
     * 创建时间
     */
    createTime: string
  }[]
}

/**
 * 接口 [数据角色列表(不分页)↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17387) 的 **请求配置的类型**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/data/role/allRoles`
 * @更新时间 `2022-06-23 15:45:52`
 */
type AllRolesRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-auth/data/role/allRoles',
    '',
    string,
    string,
    true
  >
>

/**
 * 接口 [数据角色列表(不分页)↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17387) 的 **请求配置**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/data/role/allRoles`
 * @更新时间 `2022-06-23 15:45:52`
 */
const allRolesRequestConfig: AllRolesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/shopone-auth/data/role/allRoles',
  method: Method.GET,
  requestHeaders: {'X-teamid': '3306504461', 'x-parkes-udb-uid': '3306504461'},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'allRoles',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [数据角色列表(不分页)↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17387) 的 **请求函数**
 *
 * @分类 [权限↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4394)
 * @请求头 `GET /shopone-auth/data/role/allRoles`
 * @更新时间 `2022-06-23 15:45:52`
 */
export const allRoles = /*#__PURE__*/ (requestData?: AllRolesRequest, ...args: UserRequestRestArgs) => {
  return request<AllRolesResponse>(prepare(allRolesRequestConfig, requestData), ...args)
}

allRoles.requestConfig = allRolesRequestConfig

const mockUrl_0_0_0_7 = 'http://www.yapi-efox.duowan.com/mock/1151' as any
const devUrl_0_0_0_7 = 'https://api-test.shopviewer.com' as any
const prodUrl_0_0_0_7 = '' as any
const dataKey_0_0_0_7 = '' as any

/**
 * 接口 [查询用户邀请码↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16410) 的 **请求类型**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `GET /shopone-rebate/rebate/getInviteInfo`
 * @更新时间 `2022-05-27 16:10:02`
 */
export interface GetInviteInfoRequest {}

/**
 * 接口 [查询用户邀请码↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16410) 的 **返回类型**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `GET /shopone-rebate/rebate/getInviteInfo`
 * @更新时间 `2022-05-27 16:10:02`
 */
export interface GetInviteInfoResponse {
  code: number
  message: string
  data: {
    /**
     * 邀请码
     */
    inviteCode: string
    /**
     * 邀请链接
     */
    inviteURL: string
  }
}

/**
 * 接口 [查询用户邀请码↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16410) 的 **请求配置的类型**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `GET /shopone-rebate/rebate/getInviteInfo`
 * @更新时间 `2022-05-27 16:10:02`
 */
type GetInviteInfoRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-rebate/rebate/getInviteInfo',
    '',
    string,
    string,
    true
  >
>

/**
 * 接口 [查询用户邀请码↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16410) 的 **请求配置**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `GET /shopone-rebate/rebate/getInviteInfo`
 * @更新时间 `2022-05-27 16:10:02`
 */
const getInviteInfoRequestConfig: GetInviteInfoRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/shopone-rebate/rebate/getInviteInfo',
  method: Method.GET,
  requestHeaders: {'X-parkes-udb-uid': ''},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_7,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getInviteInfo',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [查询用户邀请码↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16410) 的 **请求函数**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `GET /shopone-rebate/rebate/getInviteInfo`
 * @更新时间 `2022-05-27 16:10:02`
 */
export const getInviteInfo = /*#__PURE__*/ (requestData?: GetInviteInfoRequest, ...args: UserRequestRestArgs) => {
  return request<GetInviteInfoResponse>(prepare(getInviteInfoRequestConfig, requestData), ...args)
}

getInviteInfo.requestConfig = getInviteInfoRequestConfig

/**
 * 接口 [获取分销者账户详情↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16413) 的 **请求类型**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `GET /shopone-rebate/rebate/getDistributorAccountInfo`
 * @更新时间 `2022-05-20 10:38:40`
 */
export interface GetDistributorAccountInfoRequest {}

/**
 * 接口 [获取分销者账户详情↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16413) 的 **返回类型**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `GET /shopone-rebate/rebate/getDistributorAccountInfo`
 * @更新时间 `2022-05-20 10:38:40`
 */
export interface GetDistributorAccountInfoResponse {
  code: number
  message: string
  data: {
    /**
     * 累计奖励
     */
    totalAmount: string
    /**
     * 确认中金额
     */
    lockedAmount: string
    /**
     * 可提现金额
     */
    freeAmount: string
  }
}

/**
 * 接口 [获取分销者账户详情↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16413) 的 **请求配置的类型**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `GET /shopone-rebate/rebate/getDistributorAccountInfo`
 * @更新时间 `2022-05-20 10:38:40`
 */
type GetDistributorAccountInfoRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-rebate/rebate/getDistributorAccountInfo',
    '',
    string,
    string,
    true
  >
>

/**
 * 接口 [获取分销者账户详情↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16413) 的 **请求配置**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `GET /shopone-rebate/rebate/getDistributorAccountInfo`
 * @更新时间 `2022-05-20 10:38:40`
 */
const getDistributorAccountInfoRequestConfig: GetDistributorAccountInfoRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/shopone-rebate/rebate/getDistributorAccountInfo',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_7,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getDistributorAccountInfo',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取分销者账户详情↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16413) 的 **请求函数**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `GET /shopone-rebate/rebate/getDistributorAccountInfo`
 * @更新时间 `2022-05-20 10:38:40`
 */
export const getDistributorAccountInfo = /*#__PURE__*/ (
  requestData?: GetDistributorAccountInfoRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetDistributorAccountInfoResponse>(
    prepare(getDistributorAccountInfoRequestConfig, requestData),
    ...args,
  )
}

getDistributorAccountInfo.requestConfig = getDistributorAccountInfoRequestConfig

/**
 * 接口 [查询分佣记录↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16416) 的 **请求类型**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `GET /shopone-rebate/rebate/getRebateDetail`
 * @更新时间 `2022-05-25 11:43:01`
 */
export interface GetRebateDetailRequest {
  pageNum?: string
  pageSize?: string
}

/**
 * 接口 [查询分佣记录↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16416) 的 **返回类型**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `GET /shopone-rebate/rebate/getRebateDetail`
 * @更新时间 `2022-05-25 11:43:01`
 */
export interface GetRebateDetailResponse {
  code: number
  message: string
  data: {
    total: number
    totalPage: number
    currentPage: number
    items: {
      /**
       * 创建时间(毫秒时间戳)
       */
      createTime: string
      /**
       * 创建者名称
       */
      creatorName: string
      /**
       * 订单ID
       */
      orderId: string
      /**
       * 佣金状态:1：确认中，2：已完成，3：已取消
       */
      commissionState: number
      /**
       * 奖励金额
       */
      orderAmount: string
      /**
       * 可提现金额
       */
      orderFreeAmount: string
    }[]
  }
}

/**
 * 接口 [查询分佣记录↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16416) 的 **请求配置的类型**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `GET /shopone-rebate/rebate/getRebateDetail`
 * @更新时间 `2022-05-25 11:43:01`
 */
type GetRebateDetailRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-rebate/rebate/getRebateDetail',
    '',
    string,
    'pageNum' | 'pageSize',
    false
  >
>

/**
 * 接口 [查询分佣记录↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16416) 的 **请求配置**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `GET /shopone-rebate/rebate/getRebateDetail`
 * @更新时间 `2022-05-25 11:43:01`
 */
const getRebateDetailRequestConfig: GetRebateDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/shopone-rebate/rebate/getRebateDetail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_7,
  paramNames: [],
  queryNames: ['pageNum', 'pageSize'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getRebateDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [查询分佣记录↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16416) 的 **请求函数**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `GET /shopone-rebate/rebate/getRebateDetail`
 * @更新时间 `2022-05-25 11:43:01`
 */
export const getRebateDetail = /*#__PURE__*/ (requestData: GetRebateDetailRequest, ...args: UserRequestRestArgs) => {
  return request<GetRebateDetailResponse>(prepare(getRebateDetailRequestConfig, requestData), ...args)
}

getRebateDetail.requestConfig = getRebateDetailRequestConfig

/**
 * 接口 [查询提现记录↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16419) 的 **请求类型**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `GET /shopone-rebate/rebate/getCashOutDetail`
 * @更新时间 `2022-05-25 17:57:51`
 */
export interface GetCashOutDetailRequest {
  pageNum: string
  pageSize: string
}

/**
 * 接口 [查询提现记录↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16419) 的 **返回类型**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `GET /shopone-rebate/rebate/getCashOutDetail`
 * @更新时间 `2022-05-25 17:57:51`
 */
export interface GetCashOutDetailResponse {
  code: number
  message: string
  data: {
    total: number
    totalPage: number
    currentPage: number
    items: {
      /**
       * 提现ID
       */
      cashOutId: string
      /**
       * 提现时间
       */
      cashOutTime: string
      /**
       * 提现类型:1：Paypal，2：支付宝
       */
      cashOutType: number
      /**
       * 提现账号
       */
      acceptAccount: string
      /**
       * 提现单状态: 1：提现中，2：已到账，3：提现失败
       */
      state: number
      /**
       * 失败原因，成功时返回空字符串
       */
      failReason: string
      /**
       * 提现金额
       */
      cashAmount: string
    }[]
  }
}

/**
 * 接口 [查询提现记录↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16419) 的 **请求配置的类型**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `GET /shopone-rebate/rebate/getCashOutDetail`
 * @更新时间 `2022-05-25 17:57:51`
 */
type GetCashOutDetailRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-rebate/rebate/getCashOutDetail',
    '',
    string,
    'pageNum' | 'pageSize',
    false
  >
>

/**
 * 接口 [查询提现记录↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16419) 的 **请求配置**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `GET /shopone-rebate/rebate/getCashOutDetail`
 * @更新时间 `2022-05-25 17:57:51`
 */
const getCashOutDetailRequestConfig: GetCashOutDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/shopone-rebate/rebate/getCashOutDetail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_7,
  paramNames: [],
  queryNames: ['pageNum', 'pageSize'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getCashOutDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [查询提现记录↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16419) 的 **请求函数**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `GET /shopone-rebate/rebate/getCashOutDetail`
 * @更新时间 `2022-05-25 17:57:51`
 */
export const getCashOutDetail = /*#__PURE__*/ (requestData: GetCashOutDetailRequest, ...args: UserRequestRestArgs) => {
  return request<GetCashOutDetailResponse>(prepare(getCashOutDetailRequestConfig, requestData), ...args)
}

getCashOutDetail.requestConfig = getCashOutDetailRequestConfig

/**
 * 接口 [获取提现签名状态↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16467) 的 **请求类型**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `GET /shopone-rebate/rebate/getCashSignState`
 * @更新时间 `2022-05-23 20:39:53`
 */
export interface GetCashSignStateRequest {}

/**
 * 接口 [获取提现签名状态↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16467) 的 **返回类型**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `GET /shopone-rebate/rebate/getCashSignState`
 * @更新时间 `2022-05-23 20:39:53`
 */
export interface GetCashSignStateResponse {
  code: number
  message: string
  data: {
    /**
     * 是否已签名：1：否，2：是
     */
    isSign: number
  }
}

/**
 * 接口 [获取提现签名状态↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16467) 的 **请求配置的类型**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `GET /shopone-rebate/rebate/getCashSignState`
 * @更新时间 `2022-05-23 20:39:53`
 */
type GetCashSignStateRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-rebate/rebate/getCashSignState',
    '',
    string,
    string,
    true
  >
>

/**
 * 接口 [获取提现签名状态↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16467) 的 **请求配置**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `GET /shopone-rebate/rebate/getCashSignState`
 * @更新时间 `2022-05-23 20:39:53`
 */
const getCashSignStateRequestConfig: GetCashSignStateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/shopone-rebate/rebate/getCashSignState',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_7,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getCashSignState',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取提现签名状态↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16467) 的 **请求函数**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `GET /shopone-rebate/rebate/getCashSignState`
 * @更新时间 `2022-05-23 20:39:53`
 */
export const getCashSignState = /*#__PURE__*/ (requestData?: GetCashSignStateRequest, ...args: UserRequestRestArgs) => {
  return request<GetCashSignStateResponse>(prepare(getCashSignStateRequestConfig, requestData), ...args)
}

getCashSignState.requestConfig = getCashSignStateRequestConfig

/**
 * 接口 [佣金提现↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16476) 的 **请求类型**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `POST /shopone-rebate/rebate/withdraw`
 * @更新时间 `2022-05-24 19:05:07`
 */
export interface WithdrawRequest {
  /**
   * 提现金额
   */
  cashAmount: string
  /**
   * 提现账号
   */
  acceptAccount: string
  /**
   * 提现类型:1：Paypal，2：支付宝
   */
  cashOutType: number
}

/**
 * 接口 [佣金提现↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16476) 的 **返回类型**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `POST /shopone-rebate/rebate/withdraw`
 * @更新时间 `2022-05-24 19:05:07`
 */
export interface WithdrawResponse {
  code: number
  message: string
  data: {}
}

/**
 * 接口 [佣金提现↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16476) 的 **请求配置的类型**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `POST /shopone-rebate/rebate/withdraw`
 * @更新时间 `2022-05-24 19:05:07`
 */
type WithdrawRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-rebate/rebate/withdraw',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [佣金提现↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16476) 的 **请求配置**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `POST /shopone-rebate/rebate/withdraw`
 * @更新时间 `2022-05-24 19:05:07`
 */
const withdrawRequestConfig: WithdrawRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/shopone-rebate/rebate/withdraw',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_7,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'withdraw',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [佣金提现↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16476) 的 **请求函数**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `POST /shopone-rebate/rebate/withdraw`
 * @更新时间 `2022-05-24 19:05:07`
 */
export const withdraw = /*#__PURE__*/ (requestData: WithdrawRequest, ...args: UserRequestRestArgs) => {
  return request<WithdrawResponse>(prepare(withdrawRequestConfig, requestData), ...args)
}

withdraw.requestConfig = withdrawRequestConfig

/**
 * 接口 [获取提现账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16482) 的 **请求类型**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `GET /shopone-rebate/rebate/getCashAccount`
 * @更新时间 `2022-05-24 20:57:47`
 */
export interface GetCashAccountRequest {}

/**
 * 接口 [获取提现账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16482) 的 **返回类型**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `GET /shopone-rebate/rebate/getCashAccount`
 * @更新时间 `2022-05-24 20:57:47`
 */
export interface GetCashAccountResponse {
  code: number
  message: string
  /**
   * 提现账号数组
   */
  data?: string[]
}

/**
 * 接口 [获取提现账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16482) 的 **请求配置的类型**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `GET /shopone-rebate/rebate/getCashAccount`
 * @更新时间 `2022-05-24 20:57:47`
 */
type GetCashAccountRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-rebate/rebate/getCashAccount',
    '',
    string,
    string,
    true
  >
>

/**
 * 接口 [获取提现账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16482) 的 **请求配置**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `GET /shopone-rebate/rebate/getCashAccount`
 * @更新时间 `2022-05-24 20:57:47`
 */
const getCashAccountRequestConfig: GetCashAccountRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/shopone-rebate/rebate/getCashAccount',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_7,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getCashAccount',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取提现账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16482) 的 **请求函数**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `GET /shopone-rebate/rebate/getCashAccount`
 * @更新时间 `2022-05-24 20:57:47`
 */
export const getCashAccount = /*#__PURE__*/ (requestData?: GetCashAccountRequest, ...args: UserRequestRestArgs) => {
  return request<GetCashAccountResponse>(prepare(getCashAccountRequestConfig, requestData), ...args)
}

getCashAccount.requestConfig = getCashAccountRequestConfig

/**
 * 接口 [提现签名↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16491) 的 **请求类型**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `POST /shopone-rebate/rebate/signName`
 * @更新时间 `2022-05-24 15:17:23`
 */
export interface SignNameRequest {
  /**
   * 签名
   */
  signName: string
  /**
   * 签名图片路径
   */
  signPicUrl?: string
}

/**
 * 接口 [提现签名↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16491) 的 **返回类型**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `POST /shopone-rebate/rebate/signName`
 * @更新时间 `2022-05-24 15:17:23`
 */
export interface SignNameResponse {
  code: number
  message: string
  data: {}
}

/**
 * 接口 [提现签名↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16491) 的 **请求配置的类型**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `POST /shopone-rebate/rebate/signName`
 * @更新时间 `2022-05-24 15:17:23`
 */
type SignNameRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-rebate/rebate/signName',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [提现签名↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16491) 的 **请求配置**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `POST /shopone-rebate/rebate/signName`
 * @更新时间 `2022-05-24 15:17:23`
 */
const signNameRequestConfig: SignNameRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/shopone-rebate/rebate/signName',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_7,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'signName',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [提现签名↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16491) 的 **请求函数**
 *
 * @分类 [返佣↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4486)
 * @请求头 `POST /shopone-rebate/rebate/signName`
 * @更新时间 `2022-05-24 15:17:23`
 */
export const signName = /*#__PURE__*/ (requestData: SignNameRequest, ...args: UserRequestRestArgs) => {
  return request<SignNameResponse>(prepare(signNameRequestConfig, requestData), ...args)
}

signName.requestConfig = signNameRequestConfig

const mockUrl_0_0_0_8 = 'http://www.yapi-efox.duowan.com/mock/1151' as any
const devUrl_0_0_0_8 = 'https://api-test.shopviewer.com' as any
const prodUrl_0_0_0_8 = '' as any
const dataKey_0_0_0_8 = '' as any

/**
 * 接口 [获取订阅配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16425) 的 **请求类型**
 *
 * @分类 [订阅↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4490)
 * @请求头 `GET /shopone-subscription/subscribe/subList`
 * @更新时间 `2022-05-24 11:11:13`
 */
export interface SubListRequest {}

/**
 * 接口 [获取订阅配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16425) 的 **返回类型**
 *
 * @分类 [订阅↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4490)
 * @请求头 `GET /shopone-subscription/subscribe/subList`
 * @更新时间 `2022-05-24 11:11:13`
 */
export interface SubListResponse {
  code: number
  message?: string
  data: {
    /**
     * 等级: 1 免费版, 2 个人版, 3 团队版, 4 全能版
     */
    subType: number
    /**
     * 等级名称
     */
    subName: string
    /**
     * 成员数量
     */
    userCount: number
    /**
     * 环境数量
     */
    envCount: number
    /**
     * 环境分享转让: 1 支持， 0 不支持
     */
    envTransferFlag: number
    /**
     * 环境编辑:0->否,1->是
     */
    envBatchEditFlag: number
    /**
     * 代理自动匹配: 0 否, 1 是
     */
    proxyAutoMatchFlag: number
    /**
     * 共享云账号库：0 否 ，1 是
     */
    shareCloudAccountFlag: number
    /**
     * rpa标记:0->否,1->是
     */
    unlimitRpaFlag: number
    /**
     * 跨店铺数据看板:0 否， 1是
     */
    storeDataboardFlag: number
    /**
     * 团队协助套件: 0 否, 1 是
     */
    cooperationFlag: number
    /**
     * 操作日志: 0 否, 1 是
     */
    operateLogFlag: number
    /**
     * 月费
     */
    monthPrice: number
    /**
     * 年费
     */
    yearPrice: number
    id: number
  }[]
}

/**
 * 接口 [获取订阅配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16425) 的 **请求配置的类型**
 *
 * @分类 [订阅↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4490)
 * @请求头 `GET /shopone-subscription/subscribe/subList`
 * @更新时间 `2022-05-24 11:11:13`
 */
type SubListRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-subscription/subscribe/subList',
    '',
    string,
    string,
    true
  >
>

/**
 * 接口 [获取订阅配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16425) 的 **请求配置**
 *
 * @分类 [订阅↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4490)
 * @请求头 `GET /shopone-subscription/subscribe/subList`
 * @更新时间 `2022-05-24 11:11:13`
 */
const subListRequestConfig: SubListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/shopone-subscription/subscribe/subList',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'subList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取订阅配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16425) 的 **请求函数**
 *
 * @分类 [订阅↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4490)
 * @请求头 `GET /shopone-subscription/subscribe/subList`
 * @更新时间 `2022-05-24 11:11:13`
 */
export const subList = /*#__PURE__*/ (requestData?: SubListRequest, ...args: UserRequestRestArgs) => {
  return request<SubListResponse>(prepare(subListRequestConfig, requestData), ...args)
}

subList.requestConfig = subListRequestConfig

/**
 * 接口 [获取团队订阅配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16434) 的 **请求类型**
 *
 * @分类 [订阅↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4490)
 * @请求头 `GET /shopone-subscription/subscribe/teamSubscribeInfo`
 * @更新时间 `2022-05-24 17:25:54`
 */
export interface TeamSubscribeInfoRequest {}

/**
 * 接口 [获取团队订阅配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16434) 的 **返回类型**
 *
 * @分类 [订阅↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4490)
 * @请求头 `GET /shopone-subscription/subscribe/teamSubscribeInfo`
 * @更新时间 `2022-05-24 17:25:54`
 */
export interface TeamSubscribeInfoResponse {
  code: number
  message?: string
  data: {
    /**
     * 等级: 1 免费版, 2 个人版, 3 团队版, 4 全能版
     */
    subType: number
    /**
     * 等级名称
     */
    subName: string
    /**
     * 成员数量
     */
    userCount: number
    /**
     * 环境数量
     */
    envCount: number
    /**
     * 环境分享转让: 1 支持， 0 不支持
     */
    envTransferFlag: number
    /**
     * 环境编辑:0->否,1->是
     */
    envBatchEditFlag: number
    /**
     * 代理自动匹配: 0 否, 1 是
     */
    proxyAutoMatchFlag: number
    /**
     * 共享云账号库：0 否 ，1 是
     */
    shareCloudAccountFlag: number
    /**
     * rpa标记:0->否,1->是
     */
    unlimitRpaFlag: number
    /**
     * 跨店铺数据看板:0 否， 1是
     */
    storeDataboardFlag: number
    /**
     * 团队协助套件: 0 否, 1 是
     */
    cooperationFlag: number
    /**
     * 操作日志: 0 否, 1 是
     */
    operateLogFlag: number
    /**
     * 月费
     */
    monthPrice: number
    /**
     * 年费
     */
    yearPrice: number
    /**
     * 续费周期
     */
    periods: number
    /**
     * 续费类型: 1 按月, 2 按年
     */
    periodType: number
    /**
     * 上次续费金额
     */
    totalAmount: number
    /**
     * 订阅结束时间
     */
    subscribeEndTime: number
    /**
     * 是否过期
     */
    overDueFlag: boolean
    /**
     * 重置时间
     */
    resetTime: number
  }
}

/**
 * 接口 [获取团队订阅配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16434) 的 **请求配置的类型**
 *
 * @分类 [订阅↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4490)
 * @请求头 `GET /shopone-subscription/subscribe/teamSubscribeInfo`
 * @更新时间 `2022-05-24 17:25:54`
 */
type TeamSubscribeInfoRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-subscription/subscribe/teamSubscribeInfo',
    '',
    string,
    string,
    true
  >
>

/**
 * 接口 [获取团队订阅配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16434) 的 **请求配置**
 *
 * @分类 [订阅↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4490)
 * @请求头 `GET /shopone-subscription/subscribe/teamSubscribeInfo`
 * @更新时间 `2022-05-24 17:25:54`
 */
const teamSubscribeInfoRequestConfig: TeamSubscribeInfoRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/shopone-subscription/subscribe/teamSubscribeInfo',
  method: Method.GET,
  requestHeaders: {'x-parkes-udb-uid': ''},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'teamSubscribeInfo',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取团队订阅配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16434) 的 **请求函数**
 *
 * @分类 [订阅↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4490)
 * @请求头 `GET /shopone-subscription/subscribe/teamSubscribeInfo`
 * @更新时间 `2022-05-24 17:25:54`
 */
export const teamSubscribeInfo = /*#__PURE__*/ (
  requestData?: TeamSubscribeInfoRequest,
  ...args: UserRequestRestArgs
) => {
  return request<TeamSubscribeInfoResponse>(prepare(teamSubscribeInfoRequestConfig, requestData), ...args)
}

teamSubscribeInfo.requestConfig = teamSubscribeInfoRequestConfig

/**
 * 接口 [订单预算↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16437) 的 **请求类型**
 *
 * @分类 [订阅↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4490)
 * @请求头 `POST /shopone-subscription/subscribe/calcPrevOrderAmount`
 * @更新时间 `2022-05-31 15:51:36`
 */
export interface CalcPrevOrderAmountRequest {
  /**
   * 订阅类型
   */
  subType: number
  /**
   * 周期类型：1-月，2-年
   */
  periodsType: number
  /**
   * 期数
   */
  periods: number
}

/**
 * 接口 [订单预算↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16437) 的 **返回类型**
 *
 * @分类 [订阅↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4490)
 * @请求头 `POST /shopone-subscription/subscribe/calcPrevOrderAmount`
 * @更新时间 `2022-05-31 15:51:36`
 */
export interface CalcPrevOrderAmountResponse {
  code: number
  message?: string
  data: {
    id: string
    /**
     * 到期时间
     */
    subEndTime: number
    /**
     * 订阅类型
     */
    subType: number
    /**
     * 团队id
     */
    teamId: number
    /**
     * 周期类型：1-月，2-年
     */
    periodsType: number
    /**
     * 期数
     */
    periods: number
    /**
     * 支付金额
     */
    payAmount: number
    /**
     * 折扣
     */
    discount: number
    /**
     * periodsType下的最小值
     */
    miniPeriods: number
    /**
     * 范围
     */
    miniPeriodsType: number
  }
}

/**
 * 接口 [订单预算↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16437) 的 **请求配置的类型**
 *
 * @分类 [订阅↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4490)
 * @请求头 `POST /shopone-subscription/subscribe/calcPrevOrderAmount`
 * @更新时间 `2022-05-31 15:51:36`
 */
type CalcPrevOrderAmountRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-subscription/subscribe/calcPrevOrderAmount',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [订单预算↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16437) 的 **请求配置**
 *
 * @分类 [订阅↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4490)
 * @请求头 `POST /shopone-subscription/subscribe/calcPrevOrderAmount`
 * @更新时间 `2022-05-31 15:51:36`
 */
const calcPrevOrderAmountRequestConfig: CalcPrevOrderAmountRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/shopone-subscription/subscribe/calcPrevOrderAmount',
  method: Method.POST,
  requestHeaders: {'x-parkes-udb-uid': ''},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'calcPrevOrderAmount',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [订单预算↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16437) 的 **请求函数**
 *
 * @分类 [订阅↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4490)
 * @请求头 `POST /shopone-subscription/subscribe/calcPrevOrderAmount`
 * @更新时间 `2022-05-31 15:51:36`
 */
export const calcPrevOrderAmount = /*#__PURE__*/ (
  requestData: CalcPrevOrderAmountRequest,
  ...args: UserRequestRestArgs
) => {
  return request<CalcPrevOrderAmountResponse>(prepare(calcPrevOrderAmountRequestConfig, requestData), ...args)
}

calcPrevOrderAmount.requestConfig = calcPrevOrderAmountRequestConfig

/**
 * 接口 [创建订单↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16440) 的 **请求类型**
 *
 * @分类 [订阅↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4490)
 * @请求头 `POST /shopone-subscription/subscribe/commitOrder`
 * @更新时间 `2022-05-23 15:29:29`
 */
export interface CommitOrderRequest {
  previewId: string
}

/**
 * 接口 [创建订单↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16440) 的 **返回类型**
 *
 * @分类 [订阅↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4490)
 * @请求头 `POST /shopone-subscription/subscribe/commitOrder`
 * @更新时间 `2022-05-23 15:29:29`
 */
export interface CommitOrderResponse {
  code: number
  message?: string
  data: {
    /**
     * 支付金额
     */
    payFee: number
    /**
     * 订单编号
     */
    orderNo: string
    /**
     * 人民币结算
     */
    cnyPayFee: number
    /**
     * 汇率
     */
    exchangeRate: number
  }
}

/**
 * 接口 [创建订单↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16440) 的 **请求配置的类型**
 *
 * @分类 [订阅↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4490)
 * @请求头 `POST /shopone-subscription/subscribe/commitOrder`
 * @更新时间 `2022-05-23 15:29:29`
 */
type CommitOrderRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-subscription/subscribe/commitOrder',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [创建订单↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16440) 的 **请求配置**
 *
 * @分类 [订阅↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4490)
 * @请求头 `POST /shopone-subscription/subscribe/commitOrder`
 * @更新时间 `2022-05-23 15:29:29`
 */
const commitOrderRequestConfig: CommitOrderRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/shopone-subscription/subscribe/commitOrder',
  method: Method.POST,
  requestHeaders: {'x-parkes-udb-uid': ''},
  requestBodyType: RequestBodyType.form,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'commitOrder',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [创建订单↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16440) 的 **请求函数**
 *
 * @分类 [订阅↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4490)
 * @请求头 `POST /shopone-subscription/subscribe/commitOrder`
 * @更新时间 `2022-05-23 15:29:29`
 */
export const commitOrder = /*#__PURE__*/ (requestData: CommitOrderRequest, ...args: UserRequestRestArgs) => {
  return request<CommitOrderResponse>(prepare(commitOrderRequestConfig, requestData), ...args)
}

commitOrder.requestConfig = commitOrderRequestConfig

/**
 * 接口 [订单支付↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16443) 的 **请求类型**
 *
 * @分类 [订阅↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4490)
 * @请求头 `GET /shopone-subscription/subscribe/payOrder`
 * @更新时间 `2022-05-27 18:20:13`
 */
export interface PayOrderRequest {
  orderNo: string
  /**
   * 0 支付宝，1 微信，2 paypal
   */
  channelType: string
  uid: string
}

/**
 * 接口 [订单支付↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16443) 的 **返回类型**
 *
 * @分类 [订阅↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4490)
 * @请求头 `GET /shopone-subscription/subscribe/payOrder`
 * @更新时间 `2022-05-27 18:20:13`
 */
export interface PayOrderResponse {
  code: number
  message?: string
  data: {
    respBody: string
    payFee: number
    exchangeRate: number
  }
}

/**
 * 接口 [订单支付↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16443) 的 **请求配置的类型**
 *
 * @分类 [订阅↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4490)
 * @请求头 `GET /shopone-subscription/subscribe/payOrder`
 * @更新时间 `2022-05-27 18:20:13`
 */
type PayOrderRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-subscription/subscribe/payOrder',
    '',
    string,
    'orderNo' | 'channelType' | 'uid',
    false
  >
>

/**
 * 接口 [订单支付↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16443) 的 **请求配置**
 *
 * @分类 [订阅↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4490)
 * @请求头 `GET /shopone-subscription/subscribe/payOrder`
 * @更新时间 `2022-05-27 18:20:13`
 */
const payOrderRequestConfig: PayOrderRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/shopone-subscription/subscribe/payOrder',
  method: Method.GET,
  requestHeaders: {'x-parkes-udb-uid': ''},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: [],
  queryNames: ['orderNo', 'channelType', 'uid'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'payOrder',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [订单支付↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16443) 的 **请求函数**
 *
 * @分类 [订阅↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4490)
 * @请求头 `GET /shopone-subscription/subscribe/payOrder`
 * @更新时间 `2022-05-27 18:20:13`
 */
export const payOrder = /*#__PURE__*/ (requestData: PayOrderRequest, ...args: UserRequestRestArgs) => {
  return request<PayOrderResponse>(prepare(payOrderRequestConfig, requestData), ...args)
}

payOrder.requestConfig = payOrderRequestConfig

/**
 * 接口 [查询订单状态↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16488) 的 **请求类型**
 *
 * @分类 [订阅↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4490)
 * @请求头 `GET /shopone-subscription/subscribe/queryOrderStatus`
 * @更新时间 `2022-05-24 15:11:48`
 */
export interface QueryOrderStatusRequest {
  orderNo: string
}

/**
 * 接口 [查询订单状态↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16488) 的 **返回类型**
 *
 * @分类 [订阅↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4490)
 * @请求头 `GET /shopone-subscription/subscribe/queryOrderStatus`
 * @更新时间 `2022-05-24 15:11:48`
 */
export interface QueryOrderStatusResponse {
  /**
   * 1 待付款 5 完成 6 取消
   */
  data: number
  code: number
  message: string
}

/**
 * 接口 [查询订单状态↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16488) 的 **请求配置的类型**
 *
 * @分类 [订阅↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4490)
 * @请求头 `GET /shopone-subscription/subscribe/queryOrderStatus`
 * @更新时间 `2022-05-24 15:11:48`
 */
type QueryOrderStatusRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-subscription/subscribe/queryOrderStatus',
    '',
    string,
    'orderNo',
    false
  >
>

/**
 * 接口 [查询订单状态↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16488) 的 **请求配置**
 *
 * @分类 [订阅↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4490)
 * @请求头 `GET /shopone-subscription/subscribe/queryOrderStatus`
 * @更新时间 `2022-05-24 15:11:48`
 */
const queryOrderStatusRequestConfig: QueryOrderStatusRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_8,
  devUrl: devUrl_0_0_0_8,
  prodUrl: prodUrl_0_0_0_8,
  path: '/shopone-subscription/subscribe/queryOrderStatus',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_8,
  paramNames: [],
  queryNames: ['orderNo'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'queryOrderStatus',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [查询订单状态↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16488) 的 **请求函数**
 *
 * @分类 [订阅↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4490)
 * @请求头 `GET /shopone-subscription/subscribe/queryOrderStatus`
 * @更新时间 `2022-05-24 15:11:48`
 */
export const queryOrderStatus = /*#__PURE__*/ (requestData: QueryOrderStatusRequest, ...args: UserRequestRestArgs) => {
  return request<QueryOrderStatusResponse>(prepare(queryOrderStatusRequestConfig, requestData), ...args)
}

queryOrderStatus.requestConfig = queryOrderStatusRequestConfig

const mockUrl_0_0_0_9 = 'http://www.yapi-efox.duowan.com/mock/1151' as any
const devUrl_0_0_0_9 = 'https://api-test.shopviewer.com' as any
const prodUrl_0_0_0_9 = '' as any
const dataKey_0_0_0_9 = '' as any

/**
 * 接口 [查询所有工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16533) 的 **请求类型**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `GET /shopone-onehook/tool/listAllTools`
 * @更新时间 `2022-06-16 11:56:36`
 */
export interface ListAllToolsRequest {
  name?: string
}

/**
 * 接口 [查询所有工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16533) 的 **返回类型**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `GET /shopone-onehook/tool/listAllTools`
 * @更新时间 `2022-06-16 11:56:36`
 */
export interface ListAllToolsResponse {
  code?: number
  message?: string
  data?: {
    tools: {
      id: string
      name?: string
      cover?: string
      remark?: string
      /**
       * 颜色
       */
      color?: string
      /**
       * 1:共享计时；
       * 2：团队独占；
       * 3：团队普通
       */
      type?: number
      toolState: {
        /**
         * 1：空闲；
         * 2：占用中（团队独占）；
         * 3：爆满（共享计时）；
         * 4：时长已用完（共享计时）;
         * 5：使用中（当前用户在使用）
         */
        useState?: number
        /**
         * 共享计时应用，剩余可用时间，单位秒
         */
        duration?: number
        /**
         * 团队独占应用的使用人，当useState为2时有值，估计要判断当前用户是否和此uid相等，如果相等（针对浏览器崩溃时，可做关闭动作）
         */
        uid?: number
      }
      /**
       * 创建者uid
       */
      uid: number
    }[]
  }
}

/**
 * 接口 [查询所有工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16533) 的 **请求配置的类型**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `GET /shopone-onehook/tool/listAllTools`
 * @更新时间 `2022-06-16 11:56:36`
 */
type ListAllToolsRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-onehook/tool/listAllTools',
    '',
    string,
    'name',
    false
  >
>

/**
 * 接口 [查询所有工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16533) 的 **请求配置**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `GET /shopone-onehook/tool/listAllTools`
 * @更新时间 `2022-06-16 11:56:36`
 */
const listAllToolsRequestConfig: ListAllToolsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/shopone-onehook/tool/listAllTools',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: ['name'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'listAllTools',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [查询所有工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16533) 的 **请求函数**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `GET /shopone-onehook/tool/listAllTools`
 * @更新时间 `2022-06-16 11:56:36`
 */
export const listAllTools = /*#__PURE__*/ (requestData: ListAllToolsRequest, ...args: UserRequestRestArgs) => {
  return request<ListAllToolsResponse>(prepare(listAllToolsRequestConfig, requestData), ...args)
}

listAllTools.requestConfig = listAllToolsRequestConfig

/**
 * 接口 [创建应用↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16536) 的 **请求类型**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `POST /shopone-onehook/tool/createTool`
 * @更新时间 `2022-06-10 11:36:55`
 */
export interface CreateToolRequest {
  /**
   * 2：团队独占；
   * 3：团队普通；
   */
  type: number
  name: string
  link: string
  remark?: string
  /**
   * 关联的环境ID；如果没关联，此字段不传
   */
  envId?: string
  account?: string
  /**
   * 账号密码，需要加密
   */
  password?: string
  /**
   * 颜色
   */
  color?: string
}

/**
 * 接口 [创建应用↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16536) 的 **返回类型**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `POST /shopone-onehook/tool/createTool`
 * @更新时间 `2022-06-10 11:36:55`
 */
export interface CreateToolResponse {
  code?: number
  message?: string
}

/**
 * 接口 [创建应用↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16536) 的 **请求配置的类型**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `POST /shopone-onehook/tool/createTool`
 * @更新时间 `2022-06-10 11:36:55`
 */
type CreateToolRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-onehook/tool/createTool',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [创建应用↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16536) 的 **请求配置**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `POST /shopone-onehook/tool/createTool`
 * @更新时间 `2022-06-10 11:36:55`
 */
const createToolRequestConfig: CreateToolRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/shopone-onehook/tool/createTool',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'createTool',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [创建应用↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16536) 的 **请求函数**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `POST /shopone-onehook/tool/createTool`
 * @更新时间 `2022-06-10 11:36:55`
 */
export const createTool = /*#__PURE__*/ (requestData: CreateToolRequest, ...args: UserRequestRestArgs) => {
  return request<CreateToolResponse>(prepare(createToolRequestConfig, requestData), ...args)
}

createTool.requestConfig = createToolRequestConfig

/**
 * 接口 [删除应用↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16539) 的 **请求类型**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `POST /shopone-onehook/tool/deleteTool`
 * @更新时间 `2022-05-26 12:08:01`
 */
export interface DeleteToolRequest {
  /**
   * 应用ID
   */
  toolId: number
}

/**
 * 接口 [删除应用↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16539) 的 **返回类型**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `POST /shopone-onehook/tool/deleteTool`
 * @更新时间 `2022-05-26 12:08:01`
 */
export interface DeleteToolResponse {
  code?: number
  message?: string
}

/**
 * 接口 [删除应用↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16539) 的 **请求配置的类型**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `POST /shopone-onehook/tool/deleteTool`
 * @更新时间 `2022-05-26 12:08:01`
 */
type DeleteToolRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-onehook/tool/deleteTool',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [删除应用↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16539) 的 **请求配置**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `POST /shopone-onehook/tool/deleteTool`
 * @更新时间 `2022-05-26 12:08:01`
 */
const deleteToolRequestConfig: DeleteToolRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/shopone-onehook/tool/deleteTool',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'deleteTool',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [删除应用↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16539) 的 **请求函数**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `POST /shopone-onehook/tool/deleteTool`
 * @更新时间 `2022-05-26 12:08:01`
 */
export const deleteTool = /*#__PURE__*/ (requestData: DeleteToolRequest, ...args: UserRequestRestArgs) => {
  return request<DeleteToolResponse>(prepare(deleteToolRequestConfig, requestData), ...args)
}

deleteTool.requestConfig = deleteToolRequestConfig

/**
 * 接口 [打开应用↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16542) 的 **请求类型**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `GET /shopone-onehook/tool/openTool`
 * @更新时间 `2022-06-28 17:13:12`
 */
export interface OpenToolRequest {
  toolId: string
}

/**
 * 接口 [打开应用↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16542) 的 **返回类型**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `GET /shopone-onehook/tool/openTool`
 * @更新时间 `2022-06-28 17:13:12`
 */
export interface OpenToolResponse {
  code: number
  message: string
  data: {
    toolInfo: {
      id: string
      name: string
      cover: string
      remark: string
      type: string
      toolState: {
        toolId: string
        useState: number
        duration: number
        uid: number
      }
      /**
       * 应用地址
       */
      link: string
    }
    /**
     * 环境信息，有可能是空
     */
    envInfo?: {
      envName: string
      envIP: string
      proxyInfo?: {
        proxyId: string
        proxyType: number
        proxyIP: string
        proxyLocation: string
        proxyHost: string
        proxyPasswd: string
        proxyAccount: string
        protocol: string
        port: string
        country: string
        region: string
        city: string
        proxyDetail: {}
      }
      bfInfo: {
        bfId: string
        deviceType: number
        osType: number
        userAgent: string
        envLang: string
      }
      fingerprint: string
      envId: string
      groupId: string
      groupName: string
      creatorUid: string
    }
    account?: {
      count: string
      accountList: {
        accountId: string
        account: string
        password: string
        platformInfo: {
          url: string
          imgUrl: string
        }
        cookie: string
      }[]
      /**
       * 账号扩展配置
       */
      extConf: string
    }
    extConf?: {
      vmsIds: string[]
    }
  }
}

/**
 * 接口 [打开应用↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16542) 的 **请求配置的类型**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `GET /shopone-onehook/tool/openTool`
 * @更新时间 `2022-06-28 17:13:12`
 */
type OpenToolRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-onehook/tool/openTool',
    '',
    string,
    'toolId',
    false
  >
>

/**
 * 接口 [打开应用↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16542) 的 **请求配置**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `GET /shopone-onehook/tool/openTool`
 * @更新时间 `2022-06-28 17:13:12`
 */
const openToolRequestConfig: OpenToolRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/shopone-onehook/tool/openTool',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: ['toolId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'openTool',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [打开应用↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16542) 的 **请求函数**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `GET /shopone-onehook/tool/openTool`
 * @更新时间 `2022-06-28 17:13:12`
 */
export const openTool = /*#__PURE__*/ (requestData: OpenToolRequest, ...args: UserRequestRestArgs) => {
  return request<OpenToolResponse>(prepare(openToolRequestConfig, requestData), ...args)
}

openTool.requestConfig = openToolRequestConfig

/**
 * 接口 [关闭应用↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16545) 的 **请求类型**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `GET /shopone-onehook/tool/closeTool`
 * @更新时间 `2022-05-26 12:10:05`
 */
export interface CloseToolRequest {
  toolId: string
}

/**
 * 接口 [关闭应用↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16545) 的 **返回类型**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `GET /shopone-onehook/tool/closeTool`
 * @更新时间 `2022-05-26 12:10:05`
 */
export interface CloseToolResponse {
  code: number
  message: string
}

/**
 * 接口 [关闭应用↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16545) 的 **请求配置的类型**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `GET /shopone-onehook/tool/closeTool`
 * @更新时间 `2022-05-26 12:10:05`
 */
type CloseToolRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-onehook/tool/closeTool',
    '',
    string,
    'toolId',
    false
  >
>

/**
 * 接口 [关闭应用↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16545) 的 **请求配置**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `GET /shopone-onehook/tool/closeTool`
 * @更新时间 `2022-05-26 12:10:05`
 */
const closeToolRequestConfig: CloseToolRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/shopone-onehook/tool/closeTool',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: ['toolId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'closeTool',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [关闭应用↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16545) 的 **请求函数**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `GET /shopone-onehook/tool/closeTool`
 * @更新时间 `2022-05-26 12:10:05`
 */
export const closeTool = /*#__PURE__*/ (requestData: CloseToolRequest, ...args: UserRequestRestArgs) => {
  return request<CloseToolResponse>(prepare(closeToolRequestConfig, requestData), ...args)
}

closeTool.requestConfig = closeToolRequestConfig

/**
 * 接口 [更新账号的Cookie↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16631) 的 **请求类型**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `POST /shopone-onehook/toolAccount/updateCookie`
 * @更新时间 `2022-06-10 18:27:58`
 */
export interface UpdateCookieRequest {
  accountId: string
  cookie: string
  /**
   * 账号的额外配置
   */
  extConf: string
}

/**
 * 接口 [更新账号的Cookie↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16631) 的 **返回类型**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `POST /shopone-onehook/toolAccount/updateCookie`
 * @更新时间 `2022-06-10 18:27:58`
 */
export interface UpdateCookieResponse {
  code?: number
  message?: string
}

/**
 * 接口 [更新账号的Cookie↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16631) 的 **请求配置的类型**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `POST /shopone-onehook/toolAccount/updateCookie`
 * @更新时间 `2022-06-10 18:27:58`
 */
type UpdateCookieRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-onehook/toolAccount/updateCookie',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [更新账号的Cookie↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16631) 的 **请求配置**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `POST /shopone-onehook/toolAccount/updateCookie`
 * @更新时间 `2022-06-10 18:27:58`
 */
const updateCookieRequestConfig: UpdateCookieRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/shopone-onehook/toolAccount/updateCookie',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'updateCookie',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [更新账号的Cookie↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16631) 的 **请求函数**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `POST /shopone-onehook/toolAccount/updateCookie`
 * @更新时间 `2022-06-10 18:27:58`
 */
export const updateCookie = /*#__PURE__*/ (requestData: UpdateCookieRequest, ...args: UserRequestRestArgs) => {
  return request<UpdateCookieResponse>(prepare(updateCookieRequestConfig, requestData), ...args)
}

updateCookie.requestConfig = updateCookieRequestConfig

/**
 * 接口 [Adspy请求代理↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16711) 的 **请求类型**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `POST /shopone-onehook/proxy/adspy`
 * @更新时间 `2022-06-08 15:42:52`
 */
export interface AdspyRequest {
  /**
   * 查询adspy参数
   */
  queryBody: {}
}

/**
 * 接口 [Adspy请求代理↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16711) 的 **返回类型**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `POST /shopone-onehook/proxy/adspy`
 * @更新时间 `2022-06-08 15:42:52`
 */
export interface AdspyResponse {
  code: number
  message: string
  /**
   * adspy返回的json数据
   */
  data: string
}

/**
 * 接口 [Adspy请求代理↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16711) 的 **请求配置的类型**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `POST /shopone-onehook/proxy/adspy`
 * @更新时间 `2022-06-08 15:42:52`
 */
type AdspyRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-onehook/proxy/adspy',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [Adspy请求代理↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16711) 的 **请求配置**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `POST /shopone-onehook/proxy/adspy`
 * @更新时间 `2022-06-08 15:42:52`
 */
const adspyRequestConfig: AdspyRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/shopone-onehook/proxy/adspy',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'adspy',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [Adspy请求代理↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16711) 的 **请求函数**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `POST /shopone-onehook/proxy/adspy`
 * @更新时间 `2022-06-08 15:42:52`
 */
export const adspy = /*#__PURE__*/ (requestData: AdspyRequest, ...args: UserRequestRestArgs) => {
  return request<AdspyResponse>(prepare(adspyRequestConfig, requestData), ...args)
}

adspy.requestConfig = adspyRequestConfig

/**
 * 接口 [批量关闭应用↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16881) 的 **请求类型**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `POST /shopone-onehook/tool/closeToolList`
 * @更新时间 `2022-06-13 14:27:35`
 */
export type CloseToolListRequest = string[]

/**
 * 接口 [批量关闭应用↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16881) 的 **返回类型**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `POST /shopone-onehook/tool/closeToolList`
 * @更新时间 `2022-06-13 14:27:35`
 */
export interface CloseToolListResponse {
  code: number
  message: string
}

/**
 * 接口 [批量关闭应用↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16881) 的 **请求配置的类型**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `POST /shopone-onehook/tool/closeToolList`
 * @更新时间 `2022-06-13 14:27:35`
 */
type CloseToolListRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-onehook/tool/closeToolList',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [批量关闭应用↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16881) 的 **请求配置**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `POST /shopone-onehook/tool/closeToolList`
 * @更新时间 `2022-06-13 14:27:35`
 */
const closeToolListRequestConfig: CloseToolListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/shopone-onehook/tool/closeToolList',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'closeToolList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [批量关闭应用↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16881) 的 **请求函数**
 *
 * @分类 [工具↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4510)
 * @请求头 `POST /shopone-onehook/tool/closeToolList`
 * @更新时间 `2022-06-13 14:27:35`
 */
export const closeToolList = /*#__PURE__*/ (requestData: CloseToolListRequest, ...args: UserRequestRestArgs) => {
  return request<CloseToolListResponse>(prepare(closeToolListRequestConfig, requestData), ...args)
}

closeToolList.requestConfig = closeToolListRequestConfig

const mockUrl_0_0_0_10 = 'http://www.yapi-efox.duowan.com/mock/1151' as any
const devUrl_0_0_0_10 = 'https://api-test.shopviewer.com' as any
const prodUrl_0_0_0_10 = '' as any
const dataKey_0_0_0_10 = '' as any

/**
 * 接口 [下载Invoice↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16560) 的 **请求类型**
 *
 * @分类 [管理后台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4522)
 * @请求头 `GET /shopone-admin/cash/downloadInvoice`
 * @更新时间 `2022-05-26 20:06:25`
 */
export interface DownloadInvoiceRequest {
  /**
   * 提现ID
   */
  cashOutId: string
}

/**
 * 接口 [下载Invoice↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16560) 的 **返回类型**
 *
 * @分类 [管理后台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4522)
 * @请求头 `GET /shopone-admin/cash/downloadInvoice`
 * @更新时间 `2022-05-26 20:06:25`
 */
export interface DownloadInvoiceResponse {}

/**
 * 接口 [下载Invoice↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16560) 的 **请求配置的类型**
 *
 * @分类 [管理后台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4522)
 * @请求头 `GET /shopone-admin/cash/downloadInvoice`
 * @更新时间 `2022-05-26 20:06:25`
 */
type DownloadInvoiceRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-admin/cash/downloadInvoice',
    '',
    string,
    'cashOutId',
    false
  >
>

/**
 * 接口 [下载Invoice↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16560) 的 **请求配置**
 *
 * @分类 [管理后台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4522)
 * @请求头 `GET /shopone-admin/cash/downloadInvoice`
 * @更新时间 `2022-05-26 20:06:25`
 */
const downloadInvoiceRequestConfig: DownloadInvoiceRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_10,
  devUrl: devUrl_0_0_0_10,
  prodUrl: prodUrl_0_0_0_10,
  path: '/shopone-admin/cash/downloadInvoice',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_10,
  paramNames: [],
  queryNames: ['cashOutId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'downloadInvoice',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [下载Invoice↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16560) 的 **请求函数**
 *
 * @分类 [管理后台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4522)
 * @请求头 `GET /shopone-admin/cash/downloadInvoice`
 * @更新时间 `2022-05-26 20:06:25`
 */
export const downloadInvoice = /*#__PURE__*/ (requestData: DownloadInvoiceRequest, ...args: UserRequestRestArgs) => {
  return request<DownloadInvoiceResponse>(prepare(downloadInvoiceRequestConfig, requestData), ...args)
}

downloadInvoice.requestConfig = downloadInvoiceRequestConfig

/**
 * 接口 [修改转账单号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16563) 的 **请求类型**
 *
 * @分类 [管理后台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4522)
 * @请求头 `POST /shopone-admin/cash/editTradeNo`
 * @更新时间 `2022-05-26 20:06:35`
 */
export interface EditTradeNoRequest {
  /**
   * 提现ID
   */
  cashOutId: string
  /**
   * 新转账单号
   */
  tradeNo: string
}

/**
 * 接口 [修改转账单号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16563) 的 **返回类型**
 *
 * @分类 [管理后台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4522)
 * @请求头 `POST /shopone-admin/cash/editTradeNo`
 * @更新时间 `2022-05-26 20:06:35`
 */
export interface EditTradeNoResponse {
  code: number
  message: string
  data: {}
}

/**
 * 接口 [修改转账单号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16563) 的 **请求配置的类型**
 *
 * @分类 [管理后台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4522)
 * @请求头 `POST /shopone-admin/cash/editTradeNo`
 * @更新时间 `2022-05-26 20:06:35`
 */
type EditTradeNoRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-admin/cash/editTradeNo',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [修改转账单号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16563) 的 **请求配置**
 *
 * @分类 [管理后台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4522)
 * @请求头 `POST /shopone-admin/cash/editTradeNo`
 * @更新时间 `2022-05-26 20:06:35`
 */
const editTradeNoRequestConfig: EditTradeNoRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_10,
  devUrl: devUrl_0_0_0_10,
  prodUrl: prodUrl_0_0_0_10,
  path: '/shopone-admin/cash/editTradeNo',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_10,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'editTradeNo',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [修改转账单号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16563) 的 **请求函数**
 *
 * @分类 [管理后台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4522)
 * @请求头 `POST /shopone-admin/cash/editTradeNo`
 * @更新时间 `2022-05-26 20:06:35`
 */
export const editTradeNo = /*#__PURE__*/ (requestData: EditTradeNoRequest, ...args: UserRequestRestArgs) => {
  return request<EditTradeNoResponse>(prepare(editTradeNoRequestConfig, requestData), ...args)
}

editTradeNo.requestConfig = editTradeNoRequestConfig

/**
 * 接口 [转账失败↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16566) 的 **请求类型**
 *
 * @分类 [管理后台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4522)
 * @请求头 `POST /shopone-admin/cash/failTrade`
 * @更新时间 `2022-05-26 20:06:47`
 */
export interface FailTradeRequest {
  /**
   * 提现ID
   */
  cashOutId: string
  /**
   * 失败原因
   */
  failReason: string
}

/**
 * 接口 [转账失败↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16566) 的 **返回类型**
 *
 * @分类 [管理后台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4522)
 * @请求头 `POST /shopone-admin/cash/failTrade`
 * @更新时间 `2022-05-26 20:06:47`
 */
export interface FailTradeResponse {
  code: number
  message: string
  data: string
}

/**
 * 接口 [转账失败↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16566) 的 **请求配置的类型**
 *
 * @分类 [管理后台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4522)
 * @请求头 `POST /shopone-admin/cash/failTrade`
 * @更新时间 `2022-05-26 20:06:47`
 */
type FailTradeRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-admin/cash/failTrade',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [转账失败↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16566) 的 **请求配置**
 *
 * @分类 [管理后台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4522)
 * @请求头 `POST /shopone-admin/cash/failTrade`
 * @更新时间 `2022-05-26 20:06:47`
 */
const failTradeRequestConfig: FailTradeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_10,
  devUrl: devUrl_0_0_0_10,
  prodUrl: prodUrl_0_0_0_10,
  path: '/shopone-admin/cash/failTrade',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_10,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'failTrade',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [转账失败↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16566) 的 **请求函数**
 *
 * @分类 [管理后台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4522)
 * @请求头 `POST /shopone-admin/cash/failTrade`
 * @更新时间 `2022-05-26 20:06:47`
 */
export const failTrade = /*#__PURE__*/ (requestData: FailTradeRequest, ...args: UserRequestRestArgs) => {
  return request<FailTradeResponse>(prepare(failTradeRequestConfig, requestData), ...args)
}

failTrade.requestConfig = failTradeRequestConfig

/**
 * 接口 [转账成功↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16572) 的 **请求类型**
 *
 * @分类 [管理后台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4522)
 * @请求头 `POST /shopone-admin/cash/successTrade`
 * @更新时间 `2022-05-26 20:06:57`
 */
export interface SuccessTradeRequest {
  /**
   * 提现ID
   */
  cashOutId: string
  /**
   * 转账单号
   */
  tradeNo: string
}

/**
 * 接口 [转账成功↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16572) 的 **返回类型**
 *
 * @分类 [管理后台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4522)
 * @请求头 `POST /shopone-admin/cash/successTrade`
 * @更新时间 `2022-05-26 20:06:57`
 */
export interface SuccessTradeResponse {
  code: number
  message: string
  data: {}
}

/**
 * 接口 [转账成功↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16572) 的 **请求配置的类型**
 *
 * @分类 [管理后台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4522)
 * @请求头 `POST /shopone-admin/cash/successTrade`
 * @更新时间 `2022-05-26 20:06:57`
 */
type SuccessTradeRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-admin/cash/successTrade',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [转账成功↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16572) 的 **请求配置**
 *
 * @分类 [管理后台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4522)
 * @请求头 `POST /shopone-admin/cash/successTrade`
 * @更新时间 `2022-05-26 20:06:57`
 */
const successTradeRequestConfig: SuccessTradeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_10,
  devUrl: devUrl_0_0_0_10,
  prodUrl: prodUrl_0_0_0_10,
  path: '/shopone-admin/cash/successTrade',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_10,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'successTrade',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [转账成功↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16572) 的 **请求函数**
 *
 * @分类 [管理后台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4522)
 * @请求头 `POST /shopone-admin/cash/successTrade`
 * @更新时间 `2022-05-26 20:06:57`
 */
export const successTrade = /*#__PURE__*/ (requestData: SuccessTradeRequest, ...args: UserRequestRestArgs) => {
  return request<SuccessTradeResponse>(prepare(successTradeRequestConfig, requestData), ...args)
}

successTrade.requestConfig = successTradeRequestConfig

/**
 * 接口 [修改转账失败原因↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16575) 的 **请求类型**
 *
 * @分类 [管理后台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4522)
 * @请求头 `POST /shopone-admin/cash/editTradeFailReason`
 * @更新时间 `2022-05-26 20:07:06`
 */
export interface EditTradeFailReasonRequest {
  /**
   * 提现ID
   */
  cashOutId: string
  /**
   * 新 失败原因
   */
  failReason: string
}

/**
 * 接口 [修改转账失败原因↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16575) 的 **返回类型**
 *
 * @分类 [管理后台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4522)
 * @请求头 `POST /shopone-admin/cash/editTradeFailReason`
 * @更新时间 `2022-05-26 20:07:06`
 */
export interface EditTradeFailReasonResponse {
  code: number
  message: string
  data: {}
}

/**
 * 接口 [修改转账失败原因↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16575) 的 **请求配置的类型**
 *
 * @分类 [管理后台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4522)
 * @请求头 `POST /shopone-admin/cash/editTradeFailReason`
 * @更新时间 `2022-05-26 20:07:06`
 */
type EditTradeFailReasonRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-admin/cash/editTradeFailReason',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [修改转账失败原因↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16575) 的 **请求配置**
 *
 * @分类 [管理后台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4522)
 * @请求头 `POST /shopone-admin/cash/editTradeFailReason`
 * @更新时间 `2022-05-26 20:07:06`
 */
const editTradeFailReasonRequestConfig: EditTradeFailReasonRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_10,
  devUrl: devUrl_0_0_0_10,
  prodUrl: prodUrl_0_0_0_10,
  path: '/shopone-admin/cash/editTradeFailReason',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_10,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'editTradeFailReason',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [修改转账失败原因↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16575) 的 **请求函数**
 *
 * @分类 [管理后台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4522)
 * @请求头 `POST /shopone-admin/cash/editTradeFailReason`
 * @更新时间 `2022-05-26 20:07:06`
 */
export const editTradeFailReason = /*#__PURE__*/ (
  requestData: EditTradeFailReasonRequest,
  ...args: UserRequestRestArgs
) => {
  return request<EditTradeFailReasonResponse>(prepare(editTradeFailReasonRequestConfig, requestData), ...args)
}

editTradeFailReason.requestConfig = editTradeFailReasonRequestConfig

/**
 * 接口 [查询提现记录↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16578) 的 **请求类型**
 *
 * @分类 [管理后台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4522)
 * @请求头 `GET /shopone-admin/cash/queryCashOutDetail`
 * @更新时间 `2022-05-27 17:50:34`
 */
export interface QueryCashOutDetailRequest {
  /**
   * 提现账号/提现ID/uid/手机号
   */
  keyword?: string
  /**
   * 提现状态：提现单状态: 1：提待提现，2：已到账，3：提现失败
   */
  state?: string
  /**
   * 提现单申请最小创建时间，yyyy-MM-dd HH:mm:ss
   */
  beginDate?: string
  /**
   * 提现单提现申请最大创建时间 yyyy-MM-dd HH:mm:ss
   */
  endDate?: string
  pageNum?: string
  pageSize?: string
}

/**
 * 接口 [查询提现记录↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16578) 的 **返回类型**
 *
 * @分类 [管理后台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4522)
 * @请求头 `GET /shopone-admin/cash/queryCashOutDetail`
 * @更新时间 `2022-05-27 17:50:34`
 */
export interface QueryCashOutDetailResponse {
  code: number
  message: string
  data: {
    total: number
    items: {
      /**
       * 提现申请时间
       */
      createTime: string
      /**
       * 提现方式，1：Paypal，2：支付宝
       */
      cashOutType: number
      /**
       * 提现金额
       */
      cashAmount: string
      /**
       * 提现账号
       */
      acceptAccount: string
      /**
       * 提现ID
       */
      cashOutId: string
      /**
       * 提现单状态
       */
      state: number
      /**
       * 用户uid
       */
      uid: string
      /**
       * 失败原因
       */
      failReason: string
      /**
       * 用户手机号
       */
      userPhone: string
      /**
       * 转账单号
       */
      tradeNo: string
    }[]
  }
}

/**
 * 接口 [查询提现记录↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16578) 的 **请求配置的类型**
 *
 * @分类 [管理后台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4522)
 * @请求头 `GET /shopone-admin/cash/queryCashOutDetail`
 * @更新时间 `2022-05-27 17:50:34`
 */
type QueryCashOutDetailRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-admin/cash/queryCashOutDetail',
    '',
    string,
    'keyword' | 'state' | 'beginDate' | 'endDate' | 'pageNum' | 'pageSize',
    false
  >
>

/**
 * 接口 [查询提现记录↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16578) 的 **请求配置**
 *
 * @分类 [管理后台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4522)
 * @请求头 `GET /shopone-admin/cash/queryCashOutDetail`
 * @更新时间 `2022-05-27 17:50:34`
 */
const queryCashOutDetailRequestConfig: QueryCashOutDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_10,
  devUrl: devUrl_0_0_0_10,
  prodUrl: prodUrl_0_0_0_10,
  path: '/shopone-admin/cash/queryCashOutDetail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_10,
  paramNames: [],
  queryNames: ['keyword', 'state', 'beginDate', 'endDate', 'pageNum', 'pageSize'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'queryCashOutDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [查询提现记录↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/16578) 的 **请求函数**
 *
 * @分类 [管理后台↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4522)
 * @请求头 `GET /shopone-admin/cash/queryCashOutDetail`
 * @更新时间 `2022-05-27 17:50:34`
 */
export const queryCashOutDetail = /*#__PURE__*/ (
  requestData: QueryCashOutDetailRequest,
  ...args: UserRequestRestArgs
) => {
  return request<QueryCashOutDetailResponse>(prepare(queryCashOutDetailRequestConfig, requestData), ...args)
}

queryCashOutDetail.requestConfig = queryCashOutDetailRequestConfig

const mockUrl_0_0_0_11 = 'http://www.yapi-efox.duowan.com/mock/1151' as any
const devUrl_0_0_0_11 = 'https://api-test.shopviewer.com' as any
const prodUrl_0_0_0_11 = '' as any
const dataKey_0_0_0_11 = '' as any

/**
 * 接口 [店铺授权↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17306) 的 **请求类型**
 *
 * @分类 [店铺↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4718)
 * @请求头 `POST /shopone-store/storeGrant`
 * @更新时间 `2022-07-04 16:42:06`
 */
export interface StoreGrantRequest {
  /**
   * 店铺id
   */
  storeId: string
  /**
   * 团队账号信息id
   */
  teamAccountInfoId: string
  /**
   * 授权状态: 2授权,3授权失败,4取消授权
   */
  grantState: number
  accessTokenInfo?: {
    accessToken: string
    expireTime: string
    refreshExpireTime?: string
    refreshToken: string
    scope: string
  }
}

/**
 * 接口 [店铺授权↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17306) 的 **返回类型**
 *
 * @分类 [店铺↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4718)
 * @请求头 `POST /shopone-store/storeGrant`
 * @更新时间 `2022-07-04 16:42:06`
 */
export interface StoreGrantResponse {
  code: number
  message: string
  data?: {}
}

/**
 * 接口 [店铺授权↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17306) 的 **请求配置的类型**
 *
 * @分类 [店铺↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4718)
 * @请求头 `POST /shopone-store/storeGrant`
 * @更新时间 `2022-07-04 16:42:06`
 */
type StoreGrantRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-store/storeGrant',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [店铺授权↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17306) 的 **请求配置**
 *
 * @分类 [店铺↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4718)
 * @请求头 `POST /shopone-store/storeGrant`
 * @更新时间 `2022-07-04 16:42:06`
 */
const storeGrantRequestConfig: StoreGrantRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_11,
  devUrl: devUrl_0_0_0_11,
  prodUrl: prodUrl_0_0_0_11,
  path: '/shopone-store/storeGrant',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_11,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'storeGrant',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [店铺授权↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17306) 的 **请求函数**
 *
 * @分类 [店铺↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4718)
 * @请求头 `POST /shopone-store/storeGrant`
 * @更新时间 `2022-07-04 16:42:06`
 */
export const storeGrant = /*#__PURE__*/ (requestData: StoreGrantRequest, ...args: UserRequestRestArgs) => {
  return request<StoreGrantResponse>(prepare(storeGrantRequestConfig, requestData), ...args)
}

storeGrant.requestConfig = storeGrantRequestConfig

/**
 * 接口 [团队账号列表查询↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17311) 的 **请求类型**
 *
 * @分类 [店铺↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4718)
 * @请求头 `GET /shopone-store/storeTeamAccountList`
 * @更新时间 `2022-07-04 15:09:22`
 */
export interface StoreTeamAccountListRequest {
  /**
   * 平台类型
   */
  accountType?: string
  /**
   * 店铺域名
   */
  storeDomainName?: string
  /**
   * 账号名称
   */
  accountName?: string
  /**
   * 账号
   */
  account?: string
  /**
   * 店铺名称
   */
  storeName?: string
  /**
   * 店铺授权状态
   */
  grantState?: string
  /**
   * 账号最小创建时间
   */
  minCreateTime?: string
  /**
   * 账号最大创建时间
   */
  maxCreateTime?: string
  pageNum?: string
  pageSize?: string
}

/**
 * 接口 [团队账号列表查询↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17311) 的 **返回类型**
 *
 * @分类 [店铺↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4718)
 * @请求头 `GET /shopone-store/storeTeamAccountList`
 * @更新时间 `2022-07-04 15:09:22`
 */
export interface StoreTeamAccountListResponse {
  code: number
  message: string
  data: {
    total: string
    currentPage: string
    items: {
      /**
       * 团队账号信息ID
       */
      teamAccountInfoId: string
      /**
       * 账号id
       */
      accountId: string
      /**
       * 账号
       */
      account: string
      /**
       * 账号平台：2：shopline
       */
      accountType: number
      /**
       * 账号名称
       */
      accountName: string
      /**
       * 创建日期
       */
      createTime: string
      /**
       * 环境绑定状态: 1未绑定,2已绑定
       */
      envLinkState: number
      /**
       * 未授权店铺数量
       */
      ungrantCount: number
      /**
       * 已授权店铺数量
       */
      grantedCount: number
      /**
       * 上一次更新账号店铺时间戳
       */
      lastRefreshTime: string
    }[]
  }
}

/**
 * 接口 [团队账号列表查询↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17311) 的 **请求配置的类型**
 *
 * @分类 [店铺↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4718)
 * @请求头 `GET /shopone-store/storeTeamAccountList`
 * @更新时间 `2022-07-04 15:09:22`
 */
type StoreTeamAccountListRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-store/storeTeamAccountList',
    '',
    string,
    | 'accountType'
    | 'storeDomainName'
    | 'accountName'
    | 'account'
    | 'storeName'
    | 'grantState'
    | 'minCreateTime'
    | 'maxCreateTime'
    | 'pageNum'
    | 'pageSize',
    false
  >
>

/**
 * 接口 [团队账号列表查询↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17311) 的 **请求配置**
 *
 * @分类 [店铺↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4718)
 * @请求头 `GET /shopone-store/storeTeamAccountList`
 * @更新时间 `2022-07-04 15:09:22`
 */
const storeTeamAccountListRequestConfig: StoreTeamAccountListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_11,
  devUrl: devUrl_0_0_0_11,
  prodUrl: prodUrl_0_0_0_11,
  path: '/shopone-store/storeTeamAccountList',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_11,
  paramNames: [],
  queryNames: [
    'accountType',
    'storeDomainName',
    'accountName',
    'account',
    'storeName',
    'grantState',
    'minCreateTime',
    'maxCreateTime',
    'pageNum',
    'pageSize',
  ],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'storeTeamAccountList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [团队账号列表查询↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17311) 的 **请求函数**
 *
 * @分类 [店铺↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4718)
 * @请求头 `GET /shopone-store/storeTeamAccountList`
 * @更新时间 `2022-07-04 15:09:22`
 */
export const storeTeamAccountList = /*#__PURE__*/ (
  requestData: StoreTeamAccountListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<StoreTeamAccountListResponse>(prepare(storeTeamAccountListRequestConfig, requestData), ...args)
}

storeTeamAccountList.requestConfig = storeTeamAccountListRequestConfig

/**
 * 接口 [店铺数据刷新↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17321) 的 **请求类型**
 *
 * @分类 [店铺↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4718)
 * @请求头 `GET /shopone-store/storeDataRefresh`
 * @更新时间 `2022-06-22 17:08:23`
 */
export interface StoreDataRefreshRequest {
  /**
   * 店铺id
   */
  storeId: string
}

/**
 * 接口 [店铺数据刷新↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17321) 的 **返回类型**
 *
 * @分类 [店铺↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4718)
 * @请求头 `GET /shopone-store/storeDataRefresh`
 * @更新时间 `2022-06-22 17:08:23`
 */
export interface StoreDataRefreshResponse {
  code: number
  message: string
  data: {}
}

/**
 * 接口 [店铺数据刷新↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17321) 的 **请求配置的类型**
 *
 * @分类 [店铺↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4718)
 * @请求头 `GET /shopone-store/storeDataRefresh`
 * @更新时间 `2022-06-22 17:08:23`
 */
type StoreDataRefreshRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-store/storeDataRefresh',
    '',
    string,
    'storeId',
    false
  >
>

/**
 * 接口 [店铺数据刷新↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17321) 的 **请求配置**
 *
 * @分类 [店铺↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4718)
 * @请求头 `GET /shopone-store/storeDataRefresh`
 * @更新时间 `2022-06-22 17:08:23`
 */
const storeDataRefreshRequestConfig: StoreDataRefreshRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_11,
  devUrl: devUrl_0_0_0_11,
  prodUrl: prodUrl_0_0_0_11,
  path: '/shopone-store/storeDataRefresh',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_11,
  paramNames: [],
  queryNames: ['storeId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'storeDataRefresh',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [店铺数据刷新↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17321) 的 **请求函数**
 *
 * @分类 [店铺↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4718)
 * @请求头 `GET /shopone-store/storeDataRefresh`
 * @更新时间 `2022-06-22 17:08:23`
 */
export const storeDataRefresh = /*#__PURE__*/ (requestData: StoreDataRefreshRequest, ...args: UserRequestRestArgs) => {
  return request<StoreDataRefreshResponse>(prepare(storeDataRefreshRequestConfig, requestData), ...args)
}

storeDataRefresh.requestConfig = storeDataRefreshRequestConfig

/**
 * 接口 [查询团队账号所关联的店铺列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17417) 的 **请求类型**
 *
 * @分类 [店铺↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4718)
 * @请求头 `GET /shopone-store/getStoreList`
 * @更新时间 `2022-07-04 17:37:52`
 */
export interface GetStoreListRequest {
  /**
   * 团队账号id
   */
  teamAccountInfoId: string
}

/**
 * 接口 [查询团队账号所关联的店铺列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17417) 的 **返回类型**
 *
 * @分类 [店铺↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4718)
 * @请求头 `GET /shopone-store/getStoreList`
 * @更新时间 `2022-07-04 17:37:52`
 */
export interface GetStoreListResponse {
  code: number
  message: string
  data: {
    /**
     * 店铺名称
     */
    storeName: string
    /**
     * 店铺域名
     */
    storeDomainName: string
    /**
     * 数据刷新状态: 1正常刷新,2无法拉取数据
     */
    dataRefreshState: number
    /**
     * 店铺创建时间（时间戳）
     */
    createTime: string
    /**
     * 授权状态: 1未授权,2已授权,3授权失败,4取消授权
     */
    grantState: number
    /**
     * 店铺id
     */
    storeId: string
    /**
     * 店铺唯一标识
     */
    storeIdentifier: string
    /**
     * 团队账号信息ID
     */
    teamAccountInfoId: string
  }[]
}

/**
 * 接口 [查询团队账号所关联的店铺列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17417) 的 **请求配置的类型**
 *
 * @分类 [店铺↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4718)
 * @请求头 `GET /shopone-store/getStoreList`
 * @更新时间 `2022-07-04 17:37:52`
 */
type GetStoreListRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-store/getStoreList',
    '',
    string,
    'teamAccountInfoId',
    false
  >
>

/**
 * 接口 [查询团队账号所关联的店铺列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17417) 的 **请求配置**
 *
 * @分类 [店铺↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4718)
 * @请求头 `GET /shopone-store/getStoreList`
 * @更新时间 `2022-07-04 17:37:52`
 */
const getStoreListRequestConfig: GetStoreListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_11,
  devUrl: devUrl_0_0_0_11,
  prodUrl: prodUrl_0_0_0_11,
  path: '/shopone-store/getStoreList',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_11,
  paramNames: [],
  queryNames: ['teamAccountInfoId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getStoreList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [查询团队账号所关联的店铺列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17417) 的 **请求函数**
 *
 * @分类 [店铺↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4718)
 * @请求头 `GET /shopone-store/getStoreList`
 * @更新时间 `2022-07-04 17:37:52`
 */
export const getStoreList = /*#__PURE__*/ (requestData: GetStoreListRequest, ...args: UserRequestRestArgs) => {
  return request<GetStoreListResponse>(prepare(getStoreListRequestConfig, requestData), ...args)
}

getStoreList.requestConfig = getStoreListRequestConfig

/**
 * 接口 [保存店铺列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17437) 的 **请求类型**
 *
 * @分类 [店铺↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4718)
 * @请求头 `POST /shopone-store/saveStoreList`
 * @更新时间 `2022-06-29 19:39:04`
 */
export interface SaveStoreListRequest {
  /**
   * 团队账号信息id
   */
  teamAccountInfoId: string
  storeList: {
    /**
     * 店铺名称
     */
    storeName: string
    /**
     * 店铺域名
     */
    storeDomainName: string
    /**
     * 店铺标识
     */
    storeIdentifier: string
  }[]
}

/**
 * 接口 [保存店铺列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17437) 的 **返回类型**
 *
 * @分类 [店铺↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4718)
 * @请求头 `POST /shopone-store/saveStoreList`
 * @更新时间 `2022-06-29 19:39:04`
 */
export interface SaveStoreListResponse {
  code: number
  message: string
  data?: {}
}

/**
 * 接口 [保存店铺列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17437) 的 **请求配置的类型**
 *
 * @分类 [店铺↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4718)
 * @请求头 `POST /shopone-store/saveStoreList`
 * @更新时间 `2022-06-29 19:39:04`
 */
type SaveStoreListRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-store/saveStoreList',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [保存店铺列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17437) 的 **请求配置**
 *
 * @分类 [店铺↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4718)
 * @请求头 `POST /shopone-store/saveStoreList`
 * @更新时间 `2022-06-29 19:39:04`
 */
const saveStoreListRequestConfig: SaveStoreListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_11,
  devUrl: devUrl_0_0_0_11,
  prodUrl: prodUrl_0_0_0_11,
  path: '/shopone-store/saveStoreList',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_11,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'saveStoreList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [保存店铺列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17437) 的 **请求函数**
 *
 * @分类 [店铺↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4718)
 * @请求头 `POST /shopone-store/saveStoreList`
 * @更新时间 `2022-06-29 19:39:04`
 */
export const saveStoreList = /*#__PURE__*/ (requestData: SaveStoreListRequest, ...args: UserRequestRestArgs) => {
  return request<SaveStoreListResponse>(prepare(saveStoreListRequestConfig, requestData), ...args)
}

saveStoreList.requestConfig = saveStoreListRequestConfig

const mockUrl_0_0_0_12 = 'http://www.yapi-efox.duowan.com/mock/1151' as any
const devUrl_0_0_0_12 = 'https://api-test.shopviewer.com' as any
const prodUrl_0_0_0_12 = '' as any
const dataKey_0_0_0_12 = '' as any

/**
 * 接口 [查询谷歌子账号列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17333) 的 **请求类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/listGoogleSubAccounts`
 * @更新时间 `2022-07-01 16:01:12`
 */
export interface ListGoogleSubAccountsRequest {
  /**
   * 经理账号id
   */
  managerId?: string
  /**
   * 子账号id
   */
  subAccount?: string
  /**
   * 店铺id，多个逗号隔开
   */
  storeIds?: string
  pageNum: string
  pageSize: string
}

/**
 * 接口 [查询谷歌子账号列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17333) 的 **返回类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/listGoogleSubAccounts`
 * @更新时间 `2022-07-01 16:01:12`
 */
export interface ListGoogleSubAccountsResponse {
  code: number
  message: string
  data: {
    list: {
      id: string
      store: {
        id: string
        storeName: string
      }
      managerAccount: {
        id: string
        managerId: string
      }
      subAccount: string
      /**
       * 1:启用，可拉取数据；3：停用，可拉取数据；5：启用，且无法拉取数据；7：停用，且无法拉取数据。
       *
       * tips: 值转为2进制，第一位默认是1（满足前端枚举值需要大于0的需求）；第二位表示是否启用，0：启用，1：停用；第三位表示账号是否异常，0：正常，1：异常
       *  * 例如 3 = 011，所以第二位是1，第三位是0，表示停用，且正常。
       */
      state: number
      /**
       * 时间戳，单位毫秒
       */
      createTime: number
      updateTime: number
      campaign: string
    }[]
    total: number
    currentPage: number
  }
}

/**
 * 接口 [查询谷歌子账号列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17333) 的 **请求配置的类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/listGoogleSubAccounts`
 * @更新时间 `2022-07-01 16:01:12`
 */
type ListGoogleSubAccountsRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-store/ads/listGoogleSubAccounts',
    '',
    string,
    'managerId' | 'subAccount' | 'storeIds' | 'pageNum' | 'pageSize',
    false
  >
>

/**
 * 接口 [查询谷歌子账号列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17333) 的 **请求配置**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/listGoogleSubAccounts`
 * @更新时间 `2022-07-01 16:01:12`
 */
const listGoogleSubAccountsRequestConfig: ListGoogleSubAccountsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_12,
  devUrl: devUrl_0_0_0_12,
  prodUrl: prodUrl_0_0_0_12,
  path: '/shopone-store/ads/listGoogleSubAccounts',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_12,
  paramNames: [],
  queryNames: ['managerId', 'subAccount', 'storeIds', 'pageNum', 'pageSize'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'listGoogleSubAccounts',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [查询谷歌子账号列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17333) 的 **请求函数**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/listGoogleSubAccounts`
 * @更新时间 `2022-07-01 16:01:12`
 */
export const listGoogleSubAccounts = /*#__PURE__*/ (
  requestData: ListGoogleSubAccountsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ListGoogleSubAccountsResponse>(prepare(listGoogleSubAccountsRequestConfig, requestData), ...args)
}

listGoogleSubAccounts.requestConfig = listGoogleSubAccountsRequestConfig

/**
 * 接口 [查询谷歌经理账号列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17335) 的 **请求类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/listGoogleManagerAccounts`
 * @更新时间 `2022-07-01 16:01:51`
 */
export interface ListGoogleManagerAccountsRequest {}

/**
 * 接口 [查询谷歌经理账号列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17335) 的 **返回类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/listGoogleManagerAccounts`
 * @更新时间 `2022-07-01 16:01:51`
 */
export interface ListGoogleManagerAccountsResponse {
  code?: number
  message?: string
  data?: {
    list?: {
      id: string
      /**
       * 经理账号id
       */
      managerId: string
      /**
       * 开发者令牌
       */
      apiKey: string
      /**
       * 1：已授权；5未授权
       */
      state: number
      createTime: number
      clientId: string
      clientSecret: string
    }[]
  }
}

/**
 * 接口 [查询谷歌经理账号列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17335) 的 **请求配置的类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/listGoogleManagerAccounts`
 * @更新时间 `2022-07-01 16:01:51`
 */
type ListGoogleManagerAccountsRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-store/ads/listGoogleManagerAccounts',
    '',
    string,
    string,
    true
  >
>

/**
 * 接口 [查询谷歌经理账号列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17335) 的 **请求配置**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/listGoogleManagerAccounts`
 * @更新时间 `2022-07-01 16:01:51`
 */
const listGoogleManagerAccountsRequestConfig: ListGoogleManagerAccountsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_12,
  devUrl: devUrl_0_0_0_12,
  prodUrl: prodUrl_0_0_0_12,
  path: '/shopone-store/ads/listGoogleManagerAccounts',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_12,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'listGoogleManagerAccounts',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [查询谷歌经理账号列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17335) 的 **请求函数**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/listGoogleManagerAccounts`
 * @更新时间 `2022-07-01 16:01:51`
 */
export const listGoogleManagerAccounts = /*#__PURE__*/ (
  requestData?: ListGoogleManagerAccountsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ListGoogleManagerAccountsResponse>(
    prepare(listGoogleManagerAccountsRequestConfig, requestData),
    ...args,
  )
}

listGoogleManagerAccounts.requestConfig = listGoogleManagerAccountsRequestConfig

/**
 * 接口 [新增或修改谷歌经理账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17337) 的 **请求类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/saveGoogleManagerAccount`
 * @更新时间 `2022-06-23 10:24:10`
 */
export interface SaveGoogleManagerAccountRequest {
  /**
   * 如果是新增，不传；如果是编辑传id值
   */
  id?: string
  /**
   * 经理账号ID
   */
  managerId?: string
  /**
   * 开发者令牌
   */
  apiKey?: string
  /**
   * 客户端id
   */
  clientId?: string
  /**
   * 客户端secret
   */
  clientSecret?: string
}

/**
 * 接口 [新增或修改谷歌经理账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17337) 的 **返回类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/saveGoogleManagerAccount`
 * @更新时间 `2022-06-23 10:24:10`
 */
export interface SaveGoogleManagerAccountResponse {
  code?: number
  message?: string
}

/**
 * 接口 [新增或修改谷歌经理账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17337) 的 **请求配置的类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/saveGoogleManagerAccount`
 * @更新时间 `2022-06-23 10:24:10`
 */
type SaveGoogleManagerAccountRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-store/ads/saveGoogleManagerAccount',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [新增或修改谷歌经理账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17337) 的 **请求配置**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/saveGoogleManagerAccount`
 * @更新时间 `2022-06-23 10:24:10`
 */
const saveGoogleManagerAccountRequestConfig: SaveGoogleManagerAccountRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_12,
  devUrl: devUrl_0_0_0_12,
  prodUrl: prodUrl_0_0_0_12,
  path: '/shopone-store/ads/saveGoogleManagerAccount',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_12,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'saveGoogleManagerAccount',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [新增或修改谷歌经理账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17337) 的 **请求函数**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/saveGoogleManagerAccount`
 * @更新时间 `2022-06-23 10:24:10`
 */
export const saveGoogleManagerAccount = /*#__PURE__*/ (
  requestData: SaveGoogleManagerAccountRequest,
  ...args: UserRequestRestArgs
) => {
  return request<SaveGoogleManagerAccountResponse>(prepare(saveGoogleManagerAccountRequestConfig, requestData), ...args)
}

saveGoogleManagerAccount.requestConfig = saveGoogleManagerAccountRequestConfig

/**
 * 接口 [新增或更新经理账号授权accessToken↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17339) 的 **请求类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/updateGoogleAccessToken`
 * @更新时间 `2022-06-23 12:09:25`
 */
export interface UpdateGoogleAccessTokenRequest {
  /**
   * 经理账号的对象ID（就是列表返回里面的那个数字id）
   */
  id?: string
  accessToken?: string
  refreshToken?: string
  expiresIn?: number
}

/**
 * 接口 [新增或更新经理账号授权accessToken↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17339) 的 **返回类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/updateGoogleAccessToken`
 * @更新时间 `2022-06-23 12:09:25`
 */
export interface UpdateGoogleAccessTokenResponse {
  code?: number
  message?: string
}

/**
 * 接口 [新增或更新经理账号授权accessToken↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17339) 的 **请求配置的类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/updateGoogleAccessToken`
 * @更新时间 `2022-06-23 12:09:25`
 */
type UpdateGoogleAccessTokenRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-store/ads/updateGoogleAccessToken',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [新增或更新经理账号授权accessToken↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17339) 的 **请求配置**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/updateGoogleAccessToken`
 * @更新时间 `2022-06-23 12:09:25`
 */
const updateGoogleAccessTokenRequestConfig: UpdateGoogleAccessTokenRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_12,
  devUrl: devUrl_0_0_0_12,
  prodUrl: prodUrl_0_0_0_12,
  path: '/shopone-store/ads/updateGoogleAccessToken',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_12,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'updateGoogleAccessToken',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [新增或更新经理账号授权accessToken↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17339) 的 **请求函数**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/updateGoogleAccessToken`
 * @更新时间 `2022-06-23 12:09:25`
 */
export const updateGoogleAccessToken = /*#__PURE__*/ (
  requestData: UpdateGoogleAccessTokenRequest,
  ...args: UserRequestRestArgs
) => {
  return request<UpdateGoogleAccessTokenResponse>(prepare(updateGoogleAccessTokenRequestConfig, requestData), ...args)
}

updateGoogleAccessToken.requestConfig = updateGoogleAccessTokenRequestConfig

/**
 * 接口 [新增或更新谷歌子账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17341) 的 **请求类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/saveGoogleSubAccount`
 * @更新时间 `2022-06-23 11:00:03`
 */
export interface SaveGoogleSubAccountRequest {
  /**
   * 如果是新增不传；如果是编辑传对应id
   */
  id?: string
  storeId?: string
  /**
   * 谷歌经理账号对象id（经理账号列表里面的id字段）
   */
  managerAccId?: string
  subAccount?: string
}

/**
 * 接口 [新增或更新谷歌子账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17341) 的 **返回类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/saveGoogleSubAccount`
 * @更新时间 `2022-06-23 11:00:03`
 */
export interface SaveGoogleSubAccountResponse {
  code?: number
  message?: string
}

/**
 * 接口 [新增或更新谷歌子账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17341) 的 **请求配置的类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/saveGoogleSubAccount`
 * @更新时间 `2022-06-23 11:00:03`
 */
type SaveGoogleSubAccountRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-store/ads/saveGoogleSubAccount',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [新增或更新谷歌子账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17341) 的 **请求配置**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/saveGoogleSubAccount`
 * @更新时间 `2022-06-23 11:00:03`
 */
const saveGoogleSubAccountRequestConfig: SaveGoogleSubAccountRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_12,
  devUrl: devUrl_0_0_0_12,
  prodUrl: prodUrl_0_0_0_12,
  path: '/shopone-store/ads/saveGoogleSubAccount',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_12,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'saveGoogleSubAccount',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [新增或更新谷歌子账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17341) 的 **请求函数**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/saveGoogleSubAccount`
 * @更新时间 `2022-06-23 11:00:03`
 */
export const saveGoogleSubAccount = /*#__PURE__*/ (
  requestData: SaveGoogleSubAccountRequest,
  ...args: UserRequestRestArgs
) => {
  return request<SaveGoogleSubAccountResponse>(prepare(saveGoogleSubAccountRequestConfig, requestData), ...args)
}

saveGoogleSubAccount.requestConfig = saveGoogleSubAccountRequestConfig

/**
 * 接口 [启用或停用谷歌子账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17343) 的 **请求类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/onlineGoogleSubAccount`
 * @更新时间 `2022-06-23 11:33:14`
 */
export interface OnlineGoogleSubAccountRequest {
  id?: string
  /**
   * 1:启用；3：停用
   */
  state?: string
}

/**
 * 接口 [启用或停用谷歌子账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17343) 的 **返回类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/onlineGoogleSubAccount`
 * @更新时间 `2022-06-23 11:33:14`
 */
export interface OnlineGoogleSubAccountResponse {
  code?: number
  message?: string
}

/**
 * 接口 [启用或停用谷歌子账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17343) 的 **请求配置的类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/onlineGoogleSubAccount`
 * @更新时间 `2022-06-23 11:33:14`
 */
type OnlineGoogleSubAccountRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-store/ads/onlineGoogleSubAccount',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [启用或停用谷歌子账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17343) 的 **请求配置**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/onlineGoogleSubAccount`
 * @更新时间 `2022-06-23 11:33:14`
 */
const onlineGoogleSubAccountRequestConfig: OnlineGoogleSubAccountRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_12,
  devUrl: devUrl_0_0_0_12,
  prodUrl: prodUrl_0_0_0_12,
  path: '/shopone-store/ads/onlineGoogleSubAccount',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_12,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'onlineGoogleSubAccount',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [启用或停用谷歌子账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17343) 的 **请求函数**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/onlineGoogleSubAccount`
 * @更新时间 `2022-06-23 11:33:14`
 */
export const onlineGoogleSubAccount = /*#__PURE__*/ (
  requestData: OnlineGoogleSubAccountRequest,
  ...args: UserRequestRestArgs
) => {
  return request<OnlineGoogleSubAccountResponse>(prepare(onlineGoogleSubAccountRequestConfig, requestData), ...args)
}

onlineGoogleSubAccount.requestConfig = onlineGoogleSubAccountRequestConfig

/**
 * 接口 [更新谷歌子账号campaign↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17345) 的 **请求类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/updateGoogleCampaign`
 * @更新时间 `2022-06-23 11:35:14`
 */
export interface UpdateGoogleCampaignRequest {
  id?: string
  campaign?: string
}

/**
 * 接口 [更新谷歌子账号campaign↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17345) 的 **返回类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/updateGoogleCampaign`
 * @更新时间 `2022-06-23 11:35:14`
 */
export interface UpdateGoogleCampaignResponse {
  code?: number
  message?: string
}

/**
 * 接口 [更新谷歌子账号campaign↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17345) 的 **请求配置的类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/updateGoogleCampaign`
 * @更新时间 `2022-06-23 11:35:14`
 */
type UpdateGoogleCampaignRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-store/ads/updateGoogleCampaign',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [更新谷歌子账号campaign↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17345) 的 **请求配置**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/updateGoogleCampaign`
 * @更新时间 `2022-06-23 11:35:14`
 */
const updateGoogleCampaignRequestConfig: UpdateGoogleCampaignRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_12,
  devUrl: devUrl_0_0_0_12,
  prodUrl: prodUrl_0_0_0_12,
  path: '/shopone-store/ads/updateGoogleCampaign',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_12,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'updateGoogleCampaign',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [更新谷歌子账号campaign↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17345) 的 **请求函数**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/updateGoogleCampaign`
 * @更新时间 `2022-06-23 11:35:14`
 */
export const updateGoogleCampaign = /*#__PURE__*/ (
  requestData: UpdateGoogleCampaignRequest,
  ...args: UserRequestRestArgs
) => {
  return request<UpdateGoogleCampaignResponse>(prepare(updateGoogleCampaignRequestConfig, requestData), ...args)
}

updateGoogleCampaign.requestConfig = updateGoogleCampaignRequestConfig

/**
 * 接口 [新增或修改Facebook Token↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17347) 的 **请求类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/saveFacebookToken`
 * @更新时间 `2022-06-23 11:40:32`
 */
export interface SaveFacebookTokenRequest {
  /**
   * 不传为新增，传递为编辑
   */
  id?: string
  name?: string
  token?: string
}

/**
 * 接口 [新增或修改Facebook Token↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17347) 的 **返回类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/saveFacebookToken`
 * @更新时间 `2022-06-23 11:40:32`
 */
export interface SaveFacebookTokenResponse {
  code?: number
  message?: string
}

/**
 * 接口 [新增或修改Facebook Token↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17347) 的 **请求配置的类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/saveFacebookToken`
 * @更新时间 `2022-06-23 11:40:32`
 */
type SaveFacebookTokenRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-store/ads/saveFacebookToken',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [新增或修改Facebook Token↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17347) 的 **请求配置**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/saveFacebookToken`
 * @更新时间 `2022-06-23 11:40:32`
 */
const saveFacebookTokenRequestConfig: SaveFacebookTokenRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_12,
  devUrl: devUrl_0_0_0_12,
  prodUrl: prodUrl_0_0_0_12,
  path: '/shopone-store/ads/saveFacebookToken',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_12,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'saveFacebookToken',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [新增或修改Facebook Token↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17347) 的 **请求函数**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/saveFacebookToken`
 * @更新时间 `2022-06-23 11:40:32`
 */
export const saveFacebookToken = /*#__PURE__*/ (
  requestData: SaveFacebookTokenRequest,
  ...args: UserRequestRestArgs
) => {
  return request<SaveFacebookTokenResponse>(prepare(saveFacebookTokenRequestConfig, requestData), ...args)
}

saveFacebookToken.requestConfig = saveFacebookTokenRequestConfig

/**
 * 接口 [查询Facebook账号列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17349) 的 **请求类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/listFacebookAccounts`
 * @更新时间 `2022-06-23 11:53:40`
 */
export interface ListFacebookAccountsRequest {
  /**
   * facebook账号id
   */
  accountId?: string
  /**
   * facebook账号名称
   */
  accountName?: string
  /**
   * 多个逗号隔开
   */
  storeIds?: string
  pageNum: string
  pageSize: string
}

/**
 * 接口 [查询Facebook账号列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17349) 的 **返回类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/listFacebookAccounts`
 * @更新时间 `2022-06-23 11:53:40`
 */
export interface ListFacebookAccountsResponse {
  code?: number
  message?: string
  data?: {
    list?: {
      id?: string
      store?: {
        id?: string
        name?: string
      }
      accountName?: string
      accountId?: string
      token?: {
        id?: string
        name?: string
      }
      createTime?: number
      updateTime?: number
      /**
       * 1:启用，可拉取数据；3：停用，可拉取数据；5：启用，且无法拉取数据；7：停用，且无法拉取数据。tips: 值转为2进制，第一位默认是1（满足前端枚举值需要大于0的需求）；第二位表示是否启用，0：启用，1：停用；第三位表示账号是否异常，0：正常，1：异常 * 例如 3 = 011，所以第二位是1，第三位是0，表示停用，且正常。
       */
      state?: number
    }[]
    currentPage?: number
    total?: number
  }
}

/**
 * 接口 [查询Facebook账号列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17349) 的 **请求配置的类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/listFacebookAccounts`
 * @更新时间 `2022-06-23 11:53:40`
 */
type ListFacebookAccountsRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-store/ads/listFacebookAccounts',
    '',
    string,
    'accountId' | 'accountName' | 'storeIds' | 'pageNum' | 'pageSize',
    false
  >
>

/**
 * 接口 [查询Facebook账号列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17349) 的 **请求配置**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/listFacebookAccounts`
 * @更新时间 `2022-06-23 11:53:40`
 */
const listFacebookAccountsRequestConfig: ListFacebookAccountsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_12,
  devUrl: devUrl_0_0_0_12,
  prodUrl: prodUrl_0_0_0_12,
  path: '/shopone-store/ads/listFacebookAccounts',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_12,
  paramNames: [],
  queryNames: ['accountId', 'accountName', 'storeIds', 'pageNum', 'pageSize'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'listFacebookAccounts',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [查询Facebook账号列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17349) 的 **请求函数**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/listFacebookAccounts`
 * @更新时间 `2022-06-23 11:53:40`
 */
export const listFacebookAccounts = /*#__PURE__*/ (
  requestData: ListFacebookAccountsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ListFacebookAccountsResponse>(prepare(listFacebookAccountsRequestConfig, requestData), ...args)
}

listFacebookAccounts.requestConfig = listFacebookAccountsRequestConfig

/**
 * 接口 [启用或停用Facebook账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17351) 的 **请求类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/onlineFacebookAccount`
 * @更新时间 `2022-06-23 11:56:40`
 */
export interface OnlineFacebookAccountRequest {
  id?: string
  /**
   * 1:启用；3：停用
   */
  state?: string
}

/**
 * 接口 [启用或停用Facebook账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17351) 的 **返回类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/onlineFacebookAccount`
 * @更新时间 `2022-06-23 11:56:40`
 */
export interface OnlineFacebookAccountResponse {
  code?: number
  message?: string
}

/**
 * 接口 [启用或停用Facebook账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17351) 的 **请求配置的类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/onlineFacebookAccount`
 * @更新时间 `2022-06-23 11:56:40`
 */
type OnlineFacebookAccountRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-store/ads/onlineFacebookAccount',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [启用或停用Facebook账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17351) 的 **请求配置**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/onlineFacebookAccount`
 * @更新时间 `2022-06-23 11:56:40`
 */
const onlineFacebookAccountRequestConfig: OnlineFacebookAccountRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_12,
  devUrl: devUrl_0_0_0_12,
  prodUrl: prodUrl_0_0_0_12,
  path: '/shopone-store/ads/onlineFacebookAccount',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_12,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'onlineFacebookAccount',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [启用或停用Facebook账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17351) 的 **请求函数**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/onlineFacebookAccount`
 * @更新时间 `2022-06-23 11:56:40`
 */
export const onlineFacebookAccount = /*#__PURE__*/ (
  requestData: OnlineFacebookAccountRequest,
  ...args: UserRequestRestArgs
) => {
  return request<OnlineFacebookAccountResponse>(prepare(onlineFacebookAccountRequestConfig, requestData), ...args)
}

onlineFacebookAccount.requestConfig = onlineFacebookAccountRequestConfig

/**
 * 接口 [更新Facebook账号campaign↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17353) 的 **请求类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/updateFacebookCampaign`
 * @更新时间 `2022-06-23 11:57:45`
 */
export interface UpdateFacebookCampaignRequest {
  id?: string
  campaign?: string
}

/**
 * 接口 [更新Facebook账号campaign↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17353) 的 **返回类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/updateFacebookCampaign`
 * @更新时间 `2022-06-23 11:57:45`
 */
export interface UpdateFacebookCampaignResponse {
  code?: number
  message?: string
}

/**
 * 接口 [更新Facebook账号campaign↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17353) 的 **请求配置的类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/updateFacebookCampaign`
 * @更新时间 `2022-06-23 11:57:45`
 */
type UpdateFacebookCampaignRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-store/ads/updateFacebookCampaign',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [更新Facebook账号campaign↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17353) 的 **请求配置**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/updateFacebookCampaign`
 * @更新时间 `2022-06-23 11:57:45`
 */
const updateFacebookCampaignRequestConfig: UpdateFacebookCampaignRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_12,
  devUrl: devUrl_0_0_0_12,
  prodUrl: prodUrl_0_0_0_12,
  path: '/shopone-store/ads/updateFacebookCampaign',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_12,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'updateFacebookCampaign',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [更新Facebook账号campaign↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17353) 的 **请求函数**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/updateFacebookCampaign`
 * @更新时间 `2022-06-23 11:57:45`
 */
export const updateFacebookCampaign = /*#__PURE__*/ (
  requestData: UpdateFacebookCampaignRequest,
  ...args: UserRequestRestArgs
) => {
  return request<UpdateFacebookCampaignResponse>(prepare(updateFacebookCampaignRequestConfig, requestData), ...args)
}

updateFacebookCampaign.requestConfig = updateFacebookCampaignRequestConfig

/**
 * 接口 [查询Facebook Token列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17355) 的 **请求类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/listFacebookTokens`
 * @更新时间 `2022-06-23 18:52:11`
 */
export interface ListFacebookTokensRequest {}

/**
 * 接口 [查询Facebook Token列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17355) 的 **返回类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/listFacebookTokens`
 * @更新时间 `2022-06-23 18:52:11`
 */
export interface ListFacebookTokensResponse {
  code?: number
  message?: string
  data?: {
    list?: {
      id?: string
      name?: string
      token?: string
      createTime?: number
      updateTime?: number
    }[]
  }
}

/**
 * 接口 [查询Facebook Token列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17355) 的 **请求配置的类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/listFacebookTokens`
 * @更新时间 `2022-06-23 18:52:11`
 */
type ListFacebookTokensRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-store/ads/listFacebookTokens',
    '',
    string,
    string,
    true
  >
>

/**
 * 接口 [查询Facebook Token列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17355) 的 **请求配置**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/listFacebookTokens`
 * @更新时间 `2022-06-23 18:52:11`
 */
const listFacebookTokensRequestConfig: ListFacebookTokensRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_12,
  devUrl: devUrl_0_0_0_12,
  prodUrl: prodUrl_0_0_0_12,
  path: '/shopone-store/ads/listFacebookTokens',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_12,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'listFacebookTokens',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [查询Facebook Token列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17355) 的 **请求函数**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/listFacebookTokens`
 * @更新时间 `2022-06-23 18:52:11`
 */
export const listFacebookTokens = /*#__PURE__*/ (
  requestData?: ListFacebookTokensRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ListFacebookTokensResponse>(prepare(listFacebookTokensRequestConfig, requestData), ...args)
}

listFacebookTokens.requestConfig = listFacebookTokensRequestConfig

/**
 * 接口 [新增或修改Facebook账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17357) 的 **请求类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/saveFacebookAccount`
 * @更新时间 `2022-06-23 12:02:35`
 */
export interface SaveFacebookAccountRequest {
  storeId?: string
  accountId?: string
  accountName?: string
  tokenId?: string
}

/**
 * 接口 [新增或修改Facebook账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17357) 的 **返回类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/saveFacebookAccount`
 * @更新时间 `2022-06-23 12:02:35`
 */
export interface SaveFacebookAccountResponse {
  code?: number
  message?: string
}

/**
 * 接口 [新增或修改Facebook账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17357) 的 **请求配置的类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/saveFacebookAccount`
 * @更新时间 `2022-06-23 12:02:35`
 */
type SaveFacebookAccountRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-store/ads/saveFacebookAccount',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [新增或修改Facebook账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17357) 的 **请求配置**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/saveFacebookAccount`
 * @更新时间 `2022-06-23 12:02:35`
 */
const saveFacebookAccountRequestConfig: SaveFacebookAccountRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_12,
  devUrl: devUrl_0_0_0_12,
  prodUrl: prodUrl_0_0_0_12,
  path: '/shopone-store/ads/saveFacebookAccount',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_12,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'saveFacebookAccount',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [新增或修改Facebook账号↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17357) 的 **请求函数**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/saveFacebookAccount`
 * @更新时间 `2022-06-23 12:02:35`
 */
export const saveFacebookAccount = /*#__PURE__*/ (
  requestData: SaveFacebookAccountRequest,
  ...args: UserRequestRestArgs
) => {
  return request<SaveFacebookAccountResponse>(prepare(saveFacebookAccountRequestConfig, requestData), ...args)
}

saveFacebookAccount.requestConfig = saveFacebookAccountRequestConfig

/**
 * 接口 [查询优化师列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17359) 的 **请求类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/listOptimizers`
 * @更新时间 `2022-07-01 16:21:08`
 */
export interface ListOptimizersRequest {
  name?: string
  code?: string
  /**
   * 创建时间，开始节点，时间戳，毫秒
   */
  startTime?: string
  /**
   * 创建时间，结束节点，时间戳，毫秒
   */
  endTime: string
  pageNum: string
  pageSize: string
}

/**
 * 接口 [查询优化师列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17359) 的 **返回类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/listOptimizers`
 * @更新时间 `2022-07-01 16:21:08`
 */
export interface ListOptimizersResponse {
  code?: number
  message?: string
  data?: {
    list?: {
      id?: string
      name?: string
      code?: string
      createTime?: number
      updateTime?: number
    }[]
    total: number
    currentPage: number
  }
}

/**
 * 接口 [查询优化师列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17359) 的 **请求配置的类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/listOptimizers`
 * @更新时间 `2022-07-01 16:21:08`
 */
type ListOptimizersRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-store/ads/listOptimizers',
    '',
    string,
    'name' | 'code' | 'startTime' | 'endTime' | 'pageNum' | 'pageSize',
    false
  >
>

/**
 * 接口 [查询优化师列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17359) 的 **请求配置**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/listOptimizers`
 * @更新时间 `2022-07-01 16:21:08`
 */
const listOptimizersRequestConfig: ListOptimizersRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_12,
  devUrl: devUrl_0_0_0_12,
  prodUrl: prodUrl_0_0_0_12,
  path: '/shopone-store/ads/listOptimizers',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_12,
  paramNames: [],
  queryNames: ['name', 'code', 'startTime', 'endTime', 'pageNum', 'pageSize'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'listOptimizers',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [查询优化师列表↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17359) 的 **请求函数**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/listOptimizers`
 * @更新时间 `2022-07-01 16:21:08`
 */
export const listOptimizers = /*#__PURE__*/ (requestData: ListOptimizersRequest, ...args: UserRequestRestArgs) => {
  return request<ListOptimizersResponse>(prepare(listOptimizersRequestConfig, requestData), ...args)
}

listOptimizers.requestConfig = listOptimizersRequestConfig

/**
 * 接口 [新增或修改优化师↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17361) 的 **请求类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/saveOptimizer`
 * @更新时间 `2022-06-23 12:08:41`
 */
export interface SaveOptimizerRequest {
  /**
   * 不传为新增，传递为编辑
   */
  id?: string
  name?: string
  code?: string
}

/**
 * 接口 [新增或修改优化师↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17361) 的 **返回类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/saveOptimizer`
 * @更新时间 `2022-06-23 12:08:41`
 */
export interface SaveOptimizerResponse {
  code?: number
  message?: string
}

/**
 * 接口 [新增或修改优化师↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17361) 的 **请求配置的类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/saveOptimizer`
 * @更新时间 `2022-06-23 12:08:41`
 */
type SaveOptimizerRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-store/ads/saveOptimizer',
    '',
    string,
    string,
    false
  >
>

/**
 * 接口 [新增或修改优化师↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17361) 的 **请求配置**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/saveOptimizer`
 * @更新时间 `2022-06-23 12:08:41`
 */
const saveOptimizerRequestConfig: SaveOptimizerRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_12,
  devUrl: devUrl_0_0_0_12,
  prodUrl: prodUrl_0_0_0_12,
  path: '/shopone-store/ads/saveOptimizer',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_12,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'saveOptimizer',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [新增或修改优化师↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17361) 的 **请求函数**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `POST /shopone-store/ads/saveOptimizer`
 * @更新时间 `2022-06-23 12:08:41`
 */
export const saveOptimizer = /*#__PURE__*/ (requestData: SaveOptimizerRequest, ...args: UserRequestRestArgs) => {
  return request<SaveOptimizerResponse>(prepare(saveOptimizerRequestConfig, requestData), ...args)
}

saveOptimizer.requestConfig = saveOptimizerRequestConfig

/**
 * 接口 [获取谷歌Oauth2地址↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17401) 的 **请求类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/auth/getAuthUrl`
 * @更新时间 `2022-06-27 16:03:27`
 */
export interface GetAuthUrlRequest {
  /**
   * 经理账号id
   */
  id: string
}

/**
 * 接口 [获取谷歌Oauth2地址↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17401) 的 **返回类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/auth/getAuthUrl`
 * @更新时间 `2022-06-27 16:03:27`
 */
export interface GetAuthUrlResponse {
  code?: number
  message?: string
  data?: {
    /**
     * 重定向地址
     */
    url?: string
  }
}

/**
 * 接口 [获取谷歌Oauth2地址↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17401) 的 **请求配置的类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/auth/getAuthUrl`
 * @更新时间 `2022-06-27 16:03:27`
 */
type GetAuthUrlRequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-store/ads/auth/getAuthUrl',
    '',
    string,
    'id',
    false
  >
>

/**
 * 接口 [获取谷歌Oauth2地址↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17401) 的 **请求配置**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/auth/getAuthUrl`
 * @更新时间 `2022-06-27 16:03:27`
 */
const getAuthUrlRequestConfig: GetAuthUrlRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_12,
  devUrl: devUrl_0_0_0_12,
  prodUrl: prodUrl_0_0_0_12,
  path: '/shopone-store/ads/auth/getAuthUrl',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_12,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getAuthUrl',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取谷歌Oauth2地址↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17401) 的 **请求函数**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/auth/getAuthUrl`
 * @更新时间 `2022-06-27 16:03:27`
 */
export const getAuthUrl = /*#__PURE__*/ (requestData: GetAuthUrlRequest, ...args: UserRequestRestArgs) => {
  return request<GetAuthUrlResponse>(prepare(getAuthUrlRequestConfig, requestData), ...args)
}

getAuthUrl.requestConfig = getAuthUrlRequestConfig

/**
 * 接口 [谷歌Oauth2回调请求↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17403) 的 **请求类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/auth/googleOauth2`
 * @更新时间 `2022-06-27 16:05:17`
 */
export interface GoogleOauth2Request {
  /**
   * 回调地址的state
   */
  state: string
  /**
   * 回调地址的code
   */
  code: string
}

/**
 * 接口 [谷歌Oauth2回调请求↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17403) 的 **返回类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/auth/googleOauth2`
 * @更新时间 `2022-06-27 16:05:17`
 */
export interface GoogleOauth2Response {
  code?: number
  message?: string
}

/**
 * 接口 [谷歌Oauth2回调请求↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17403) 的 **请求配置的类型**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/auth/googleOauth2`
 * @更新时间 `2022-06-27 16:05:17`
 */
type GoogleOauth2RequestConfig = Readonly<
  RequestConfig<
    'http://www.yapi-efox.duowan.com/mock/1151',
    'https://api-test.shopviewer.com',
    '',
    '/shopone-store/ads/auth/googleOauth2',
    '',
    string,
    'state' | 'code',
    false
  >
>

/**
 * 接口 [谷歌Oauth2回调请求↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17403) 的 **请求配置**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/auth/googleOauth2`
 * @更新时间 `2022-06-27 16:05:17`
 */
const googleOauth2RequestConfig: GoogleOauth2RequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_12,
  devUrl: devUrl_0_0_0_12,
  prodUrl: prodUrl_0_0_0_12,
  path: '/shopone-store/ads/auth/googleOauth2',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_12,
  paramNames: [],
  queryNames: ['state', 'code'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'googleOauth2',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [谷歌Oauth2回调请求↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/17403) 的 **请求函数**
 *
 * @分类 [数据-广告配置↗](http://www.yapi-efox.duowan.com/project/1151/interface/api/cat_4719)
 * @请求头 `GET /shopone-store/ads/auth/googleOauth2`
 * @更新时间 `2022-06-27 16:05:17`
 */
export const googleOauth2 = /*#__PURE__*/ (requestData: GoogleOauth2Request, ...args: UserRequestRestArgs) => {
  return request<GoogleOauth2Response>(prepare(googleOauth2RequestConfig, requestData), ...args)
}

googleOauth2.requestConfig = googleOauth2RequestConfig

/* prettier-ignore-end */
