<script setup lang="ts">
import { tailwindRenderers } from '@demo-vue-nestjs/forms';
import { vanillaRenderers } from '@jsonforms/vue-vanilla';
import { JsonForms } from '@jsonforms/vue';
import Table from '../../../../../libs/ui/table/src/Table.vue';
import { ref } from 'vue';

const props = defineProps<{
  data: any[];
  columns: string[];
  formDef: any;
  uiSchema: any;
}>();

const currentId = ref<number>(null);
const formData = ref<any>({});
const valid = ref(false);
const emits = defineEmits(['saveForm', 'deleteItem']);

const onChange = (event) => {
  console.log('change', event);
  formData.value = event.data;
  valid.value = event.errors.length === 0;
  console.log(valid.value);
  console.log('--------------');
};

const saveForm = () => {
  console.log('saveform', formData.value);
  emits('saveForm', { id: currentId.value, ...formData.value });
  clear();
};

const deleteItem = (item) => {
  emits('deleteItem', item);
};

const updateItem = (item) => {
  formData.value = item;
  currentId.value = item.id;
};

const clear = () => {
  formData.value = {};
  currentId.value = null;
};
</script>

<template>
  <div class="max-w-xl m-auto">
    <div class="card bg-base-100 w-96 shadow-lg w-full my-2">
      <div class="card-body w-full">
        <h2 class="card-title">List</h2>
        <Table
          :data="data"
          :schema="formDef.detailForm"
          :columns="columns"
          @delete="deleteItem"
          @update="updateItem"
        />
      </div>
    </div>
    <div class="card bg-base-100 w-96 shadow-lg w-full my-2">
      <div class="card-body w-full">
        <h2 class="card-title">Test tailwind!</h2>
        <json-forms
          :data="formData"
          :schema="formDef.detailForm"
          :uischema="uiSchema"
          :renderers="tailwindRenderers"
          @change="onChange"
        />
        <div class="card-actions justify-end">
          <button class="btn" @click="clear()">Clear</button>
          <button class="btn" @click="saveForm()" :disabled="!valid">
            Save
          </button>
        </div>
      </div>
    </div>
    <div class="card bg-base-100 w-96 shadow-lg w-full my-2">
      <div class="card-body w-full">
        <h2 class="card-title">Vanilla html</h2>
        <json-forms
          :data="formData"
          :schema="formDef.detailForm"
          :uischema="uiSchema"
          :renderers="vanillaRenderers"
          @change="onChange"
        />
        <button @click="saveForm()"></button>
        <div class="card-actions justify-end">
          <button class="btn" @click="saveForm()" :disabled="!valid">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
