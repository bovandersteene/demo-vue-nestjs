<script setup lang="ts">
import TableForm from '../TableForm.vue';
import { OwnerForm } from '@demo-vue-nestjs/types/form';
import { OwnerForm as OwnerForm1 } from '@demo-vue-nestjs/model';
import { ref } from 'vue';
import { OwnerUiSchema } from './owner.ui.schema';
import Owner from './Owner.vue';

const owners = ref([]);
const columns = ['name', 'firstname'];

const listData = async () => {
  try {
    const response = await fetch('/api/owner');
    const result = await response.json();
    console.log(result);
    owners.value = result;
  } catch (error) {
    console.error('Error:', error);
  }
};

listData();

const saveForm = async (data: Owner) => {
  try {
    const url = data.id ? `/api/owner/${data.id}` : '/api/dog';
    const response = await fetch(url, {
      method: data.id ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();

    if (!data.id) owners.value.push(data);
    else owners.value = owners.value.map((d) => (d.id === data.id ? data : d));
  } catch (error) {
    console.error('Error:', error);
  }
};
const deleteItem = async (data: Owner) => {
  try {
    const url = data.id ? `/api/owner/${data.id}` : '/api/owner';
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    owners.value = owners.value.filter((d) => d.id !== data.id);
  } catch (error) {
    console.error('Error:', error);
  }
};
</script>

<template>
  <h1 class="text-2xl underline">Owner</h1>
  <TableForm
    :data="owners"
    :columns="columns"
    :form-def="OwnerForm"
    :ui-schema="OwnerUiSchema"
    @save-form="saveForm"
    @delete-item="deleteItem"
  />
  <TableForm
    :data="owners"
    :columns="columns"
    :form-def="OwnerForm1"
    :ui-schema="OwnerUiSchema"
    @save-form="saveForm"
    @delete-item="deleteItem"
  />
</template>
