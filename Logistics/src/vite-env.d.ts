/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'echarts'

declare module 'js-cookie'

declare module 'papaparse'

declare module 'html2canvas'

declare module 'scrollreveal'