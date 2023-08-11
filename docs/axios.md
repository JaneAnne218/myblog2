---
title: axios
description: axios
date: 2022-11-01
tags:
  - axios
---
## axios概念
axios是一个基于Promise的HTTP客户端，用于浏览器和node.js。axios本身具有以下特征：
- 从浏览器中创建XMLHttpRequests
- 从node.js创建http请求
- 支持Promise API
- 拦截请求和响应
- 转换请求数据和响应数据
- 取消请求
- 自动转换JSON数据
- 客户端支持防御XSRF
## 1.  首先，在命令行中创建一个基本的Node.js项目，并安装axios库。
```shell
npm init -y 
npm install axios
```
## 2.  在项目根目录下创建一个`index.js`文件，并在其中编写代码。该代码会向一个API服务器发送GET请求，并输出响应数据。
```js
const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

```
## 3.  运行该文件，查看控制台输出结果。
```shell
node index.js
```
以上代码演示了如何使用axios库发起HTTP请求并处理响应数据
## axios.create() axiosInstance.get()
```js
this.axiosInstance=axios.create()
this.axiosInstance.get()
```
## 引入axios
common js的方法引入axios: 
```js
const axios = require('axios');
console.log(axios)
```
结果：
```js
axios <ref *1> [Function: wrap] {
  constructor: [Function: wrap],
  request: [Function: wrap],
  getUri: [Function: wrap],
  delete: [Function: wrap],
  get: [Function: wrap],
  head: [Function: wrap],
  options: [Function: wrap],
  post: [Function: wrap],
  postForm: [Function: wrap],
  put: [Function: wrap],
  putForm: [Function: wrap],
  patch: [Function: wrap],
  patchForm: [Function: wrap],
  defaults: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    },
    adapter: [ 'xhr', 'http' ],
    transformRequest: [ [Function: transformRequest] ],
    transformResponse: [ [Function: transformResponse] ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: [Function], Blob: null },
    validateStatus: [Function: validateStatus],
    headers: {
      common: [Object],
      delete: {},
      get: {},
      head: {},
      post: [Object],
      put: [Object],
      patch: [Object]
    }
  },
  interceptors: {
    request: InterceptorManager { handlers: [] },
    response: InterceptorManager { handlers: [] }
  },
  create: [Function: create],
  Axios: [class Axios],
  CanceledError: [Function: CanceledError],
  CancelToken: [class CancelToken],
  isCancel: [Function: isCancel],
  VERSION: '1.4.0',
  toFormData: [Function: toFormData],
  AxiosError: [Function: AxiosError] { from: [Function (anonymous)] },
  Cancel: [Function: CanceledError],
  all: [Function: all],
  spread: [Function: spread],
  isAxiosError: [Function: isAxiosError],
  mergeConfig: [Function: mergeConfig],
  AxiosHeaders: [class AxiosHeaders] { [Symbol(internals)]: { accessors: [Object] } },
  formToJSON: [Function (anonymous)],
  HttpStatusCode: {
    '100': 'Continue',
    '101': 'SwitchingProtocols',
    '102': 'Processing',
    '103': 'EarlyHints',
    '200': 'Ok',
    '201': 'Created',
    '202': 'Accepted',
    '203': 'NonAuthoritativeInformation',
    '204': 'NoContent',
    '205': 'ResetContent',
    '206': 'PartialContent',
    '207': 'MultiStatus',
    '208': 'AlreadyReported',
    '226': 'ImUsed',
    '300': 'MultipleChoices',
    '301': 'MovedPermanently',
    '302': 'Found',
    '303': 'SeeOther',
    '304': 'NotModified',
    '305': 'UseProxy',
    '306': 'Unused',
    '307': 'TemporaryRedirect',
    '308': 'PermanentRedirect',
    '400': 'BadRequest',
    '401': 'Unauthorized',
    '402': 'PaymentRequired',
    '403': 'Forbidden',
    '404': 'NotFound',
    '405': 'MethodNotAllowed',
    '406': 'NotAcceptable',
    '407': 'ProxyAuthenticationRequired',
    '408': 'RequestTimeout',
    '409': 'Conflict',
    '410': 'Gone',
    '411': 'LengthRequired',
    '412': 'PreconditionFailed',
    '413': 'PayloadTooLarge',
    '414': 'UriTooLong',
    '415': 'UnsupportedMediaType',
    '416': 'RangeNotSatisfiable',
    '417': 'ExpectationFailed',
    '418': 'ImATeapot',
    '421': 'MisdirectedRequest',
    '422': 'UnprocessableEntity',
    '423': 'Locked',
    '424': 'FailedDependency',
    '425': 'TooEarly',
    '426': 'UpgradeRequired',
    '428': 'PreconditionRequired',
    '429': 'TooManyRequests',
    '431': 'RequestHeaderFieldsTooLarge',
    '451': 'UnavailableForLegalReasons',
    '500': 'InternalServerError',
    '501': 'NotImplemented',
    '502': 'BadGateway',
    '503': 'ServiceUnavailable',
    '504': 'GatewayTimeout',
    '505': 'HttpVersionNotSupported',
    '506': 'VariantAlsoNegotiates',
    '507': 'InsufficientStorage',
    '508': 'LoopDetected',
    '510': 'NotExtended',
    '511': 'NetworkAuthenticationRequired',
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
  },
  default: [Circular *1]
}
```

