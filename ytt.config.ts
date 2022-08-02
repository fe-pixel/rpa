import { defineConfig } from 'yapi-to-typescript'

export default defineConfig([
  {
    serverUrl: 'http://www.yapi-efox.duowan.com',
    typesOnly: false,
    target: 'typescript',
    reactHooks: {
      enabled: false,
    },
    devEnvName: '测试环境',
    prodEnvName: 'prod',
    outputFilePath: './service/api.ts',
    requestFunctionFilePath: './utils/yapiRequest.ts',
    dataKey: '',
    projects: [
      {
        token: '4209f33785541080c4d99dbaac9935b8ee766c771735534187e23c86108ea2b4',
        categories: [
          {
            id: 0,
            getRequestFunctionName(interfaceInfo, changeCase) {
              return changeCase.camelCase(interfaceInfo.parsedPath.name)
            },
          },
        ],
      },
    ],
  },
])
