<template>
  <ControlWrapper v-bind="controlWrapper" :id="control.id">
    <input
      :id="control.id + '-input'"
      type="text"
      placeholder="Type here"
      :class="[
        'input',
        'input-bordered input-primary w-full max-w-xs',
        { 'input-error': control.errors },
      ]"
      :value="control.data"
      :disabled="!control.enabled"
      :autofocus="appliedOptions.focus"
      :placeholder="appliedOptions.placeholder"
      @change="onChange"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
  </ControlWrapper>
</template>

<script lang="ts">
import {
  ControlElement,
  isStringControl,
  JsonFormsRendererRegistryEntry,
  rankWith,
} from '@jsonforms/core';
import { defineComponent } from 'vue';
// import { default as ControlWrapper.vue } from './ControlWrapper.vue.vue';
import { useVanillaControl } from '@jsonforms/vue-vanilla';
import {
  rendererProps,
  RendererProps,
  useJsonFormsControl,
} from '@jsonforms/vue';
import ControlWrapper from './ControlWrapper.vue';

const controlRenderer = defineComponent({
  name: 'StringControlRenderer',
  components: {
    ControlWrapper,
  },
  props: {
    ...rendererProps<ControlElement>(),
  },
  setup(props: RendererProps<ControlElement>) {
    return useVanillaControl(
      useJsonFormsControl(props),
      (target) => target.value || undefined
    );
  },
});

export default controlRenderer;

export const entry: JsonFormsRendererRegistryEntry = {
  renderer: controlRenderer,
  tester: rankWith(1, isStringControl),
};
</script>
