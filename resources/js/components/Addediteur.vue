<template>
    <div>
      <h1>Add Editor</h1>
  
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="maisonedit" class="form-label">Maison Edit</label>
          <input v-model="maisonedit" type="text" class="form-control" id="maisonedit" required>
        </div>
  
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input v-model="email" type="email" class="form-control" id="email" required>
        </div>
  
        <button type="submit" class="btn btn-primary">Add Editor</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import axios from "axios";
  
  const maisonedit = ref("");
  const email = ref("");
  
  const submitForm = async () => {
    try {
      // Send a POST request to add a new editor
      await axios.post("http://localhost:8000/api/editeurs", {
        maisonedit: maisonedit.value,
        email: email.value,
      });
  
      // Redirect to the editor list page or perform any other desired action
      // You can use the router.push method to navigate to another route
      // Example: router.push({ name: 'Editeurs' });
    } catch (error) {
      console.error("Add Editor Error:", error);
    }
  };
  </script>
  
  <style lang="scss" scoped>
  /* Add your styling if needed */
  </style>