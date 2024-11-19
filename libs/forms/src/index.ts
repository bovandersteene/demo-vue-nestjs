import { controlRenderers } from './controls';
import { vanillaRenderers } from '@jsonforms/vue-vanilla';

export const customRenderers = [
  controlRenderers,
  // ...layoutRenderers,
  // ...complexRenderers,
  // ...arrayRenderers,
  // ...labelRenderers,
].flat();

const customRenderesName = customRenderers.map((c) => c.renderer.name);

const useVanillaRenderers = vanillaRenderers.filter(
  (v) => !customRenderesName.includes(v.renderer.name)
);

export const tailwindRenderers = [useVanillaRenderers, customRenderers].flat();
console.log(tailwindRenderers);
