import path from "path"
import { defineConfig } from "vite"
import dts from 'vite-plugin-dts'
import react from "@vitejs/plugin-react"

module.exports = defineConfig(({ command }) => {
  //command - serve 开发//build 生产
  return {
    build: {
      lib: {
        entry: path.resolve(__dirname, './index.ts'),
        name: 'rpa',
        fileName: (format) => `index.${format}.js`
      },
      sourcemap: false,
      terserOptions: {
        compress: {
          drop_console: command !== 'serve'
        }
      }
    },
    plugins: [react(), dts({ outputDir: path.resolve(__dirname, './dist/type/'), })]
    // rollupOptions: {
    //   // 确保外部化处理那些你不想打包进库的依赖
    //   external: ['react','antd',"axios","lodash","react-dom"],
    //   output: {
    //     // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
    //     globals: {
    //       react: 'React'
    //     }
    //   }
    // }
  }
})