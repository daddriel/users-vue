import { App } from 'vue';
import type { ModuleNamespace } from 'vite/types/hot.d.ts';

// const modules = import.meta.glob('./dir/*.js', { eager: true })
/**
 * Register layouts in the app instance
 *
 * @param {App<Element>} app
 */
export function registerLayouts(app: App<Element>) {
  // const layouts = import.meta.globEager<string, ModuleNamespace>('./*.vue');
  const layouts = import.meta.glob<ModuleNamespace>('./*.vue', {eager: true})

  Object.entries(layouts).forEach(([, layout]) => {
    app.component(layout?.default?.name, layout?.default);
  });
}