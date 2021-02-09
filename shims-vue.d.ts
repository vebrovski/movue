// shims-vue.d.ts
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

// vue3
// declare module '*.vue' {
//   import type { DefineComponent } from 'vue'
//   const component: DefineComponent<{}, {}, any>
//   export default component
// }
