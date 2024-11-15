<template>
  <control-wrapper
    v-bind="controlWrapper"
    :styles="styles"
    :is-focused="isFocused"
    :applied-options="appliedOptions"
  >
    <input
      :id="control.id + '-input'"
      type="number"
      :step="1"
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
  </control-wrapper>
</template>

<script lang="ts">
import {
  ControlElement,
  isIntegerControl,
  JsonFormsRendererRegistryEntry,
  rankWith,
} from '@jsonforms/core';
import { defineComponent } from 'vue';
import { default as ControlWrapper } from './ControlWrapper.vue';
import { useVanillaControl } from '@jsonforms/vue-vanilla';
import {
  rendererProps,
  RendererProps,
  useJsonFormsControl,
} from '@jsonforms/vue';

const controlRenderer = defineComponent({
  name: 'IntegerControlRenderer',
  components: {
    ControlWrapper,
  },
  props: {
    ...rendererProps<ControlElement>(),
  },
  setup(props: RendererProps<ControlElement>) {
    return useVanillaControl(useJsonFormsControl(props), (target) =>
      target.value === '' ? undefined : parseInt(target.value, 10)
    );
  },
});

export default controlRenderer;

export const entry: JsonFormsRendererRegistryEntry = {
  renderer: controlRenderer,
  tester: rankWith(1, isIntegerControl),
};
</script>
