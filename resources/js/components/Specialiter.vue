<template>
    <div>
<h1>Les specialiter</h1>
    </div>
</template>

<script setup>
 import { ref, onMounted } from "vue";
  import axios from "axios";
  
  const categories = ref([]);
  
  const getCategories = async () => {
    try {
      const response = await axios.get("http://localhost.:8000/api/specialites");
      categories.value = response.data;
    } catch (error) {
      console.error(error);
    }
  };
  
  onMounted(() => {
    getCategories();
  });
</script>

<style lang="scss" scoped>

</style>