<script setup lang="ts">
import { ref } from 'vue';
import { DogForm } from '@demo-vue-nestjs/model';
import type { Dog } from '@demo-vue-nestjs/types';
import { DogUiSchema } from './dog.ui.schema';
import TableForm from '../TableForm.vue';

const dogs = ref([]);

const listData = async () => {
  try {
    const response = await fetch('/api/dog');
    const result = await response.json();
    console.log(result);
    dogs.value = result;
  } catch (error) {
    console.error('Error:', error);
  }
};

listData();

const saveForm = async (data: Dog) => {
  try {
    const url = data.id ? `/api/dog/${data.id}` : '/api/dog';
    const response = await fetch(url, {
      method: data.id ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();

    if (!data.id) dogs.value.push(data);
    else dogs.value = dogs.value.map((d) => (d.id === data.id ? data : d));
  } catch (error) {
    console.error('Error:', error);
  }
};
const deleteItem = async (data: Dog) => {
  try {
    const url = data.id ? `/api/dog/${data.id}` : '/api/dog';
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    dogs.value = dogs.value.filter((d) => d.id !== data.id);
  } catch (error) {
    console.error('Error:', error);
  }
};
const columns = ['name', 'age', 'totalTeeths'];
</script>

<template>
  <pre>
    {{ DogForm.detailForm }}
  </pre>
  <TableForm
    :data="dogs"
    :columns="columns"
    :form-def="DogForm"
    :ui-schema="DogUiSchema"
    @save-form="saveForm"
    @delete-item="deleteItem"
  />
</template>
