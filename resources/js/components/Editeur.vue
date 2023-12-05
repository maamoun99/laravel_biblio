<template>
 
    <div >
<div v-if="isLoading">
<h2> Loading .... </h2>
</div>

<div v-else class="py-6">
<nav class="navbar navbar-expand-lg navbar-dark bg-success">
<div class="container-fluid">

<router-link :to="{name: 'Addediteur'}" class="btn btn-
outline-light">

<i class="fa-solid fa-square-plus"></i> New Editeur
</router-link>

</div>
</nav>
<div id="app">

    <h1>Editeur</h1>

    <!-- Display categories using v-for in a Bootstrap table -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Maison Edit</th>
          <th>Email</th>
          <th>Ajouter</th>
          <th>Supprimer</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <td>{{ category.id }}</td>
          <td>{{ category.maisonedit }}</td>
          <td>{{ category.email }}</td>
          <td>
            <button class="btn btn-ajouter">Ajouter</button>
          </td>
          <td>
            <button class="btn btn-danger" @click="deleteEditeur(category.id)">
              Supprimer
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const categories = ref([]);

const getCategories = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/editeurs");
    categories.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

const deleteEditeur = async (id) => {
  try {
    await axios.delete('http://localhost:8000/api/editeurs/${id}');
    // Remove the deleted Editeur from the local array
  } catch (error) {
    console.error(`Error deleting Editeur with ID ${id}:`, error);
  }
};

onMounted(() => {
  getCategories();
});
</script>

<style lang="scss" scoped>
/* Add your styling if needed */
</style>
