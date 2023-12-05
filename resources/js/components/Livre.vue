<template>
    <div>
      <h1>Liste des livres</h1>
  
      <button @click="addBook" class="btn btn-primary mb-3">Add Book</button>
  
      <div class="table-responsive">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>ISBN</th>
              <th>Publication Year</th>
              <th>Price</th>
              <th>Stock Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="book in categories" :key="book.id">
              <td>{{ book.titre }}</td>
              <td>{{ book.isbn }}</td>
              <td>{{ book.annedition }}</td>
              <td>{{ book.prix }}</td>
              <td>{{ book.qtestock }}</td>
              <td>
                <button @click="deleteBook(book.id)" class="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  import axios from "axios";
  
  const categories = ref([]);
  const isMounted = ref(true);
  
  const getCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/livres");
      if (isMounted.value) {
        categories.value = response.data;
      }
    } catch (error) {
      console.error("API Request Error:", error);
      console.error("Response Data:", error.response.data);
      console.error("Response Status:", error.response.status);
      console.error("Response Headers:", error.response.headers);
    }
  };
  
  const addBook = () => {
    // Implement logic to open a form or handle adding a new book
    console.log("Add Book clicked");
  };
  
  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/livres/${id}`);
      // After deleting, refresh the book list
      getCategories();
    } catch (error) {
      console.error("Delete Book Error:", error);
    }
  };
  
  onUnmounted(() => {
    isMounted.value = false;
  });
  
  onMounted(() => {
    getCategories();
  });
  </script>
  
  <style lang="scss" scoped>
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .btn-primary,
  .btn-danger {
    font-size: 14px;
  }
  
  .table {
    margin-top: 20px;
  }
  
  .table th, .table td {
    text-align: center;
  }
  
  .table th {
    background-color: #007bff;
    color: white;
  }
  
  .table-striped tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 123, 255, 0.1);
  }
  </style>