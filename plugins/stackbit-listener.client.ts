import { contentChangeEmitter } from "~~/utils/emitter";

export default defineNuxtPlugin((NuxtApp) => {
  NuxtApp.hook('app:mounted', () => {
    window.addEventListener('stackbitObjectsChanged', (e: any) => {
      console.log('stackbitObjectsChanged', e);
      contentChangeEmitter.emit('change');
      e.preventDefault();
    });
  });
});
