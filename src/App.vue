<script setup>

</script>

<template>
  <!-- TODO App -->
  <div class="container">
  <div class="row my-5">
  <div class="col-md-12">
  <div class="card">
  <div class="card-body">
  <h4 class="card-title text-center">Task List</h4>
  <div class="row mb-3">
  <form action="#">
  <div class="form-group">
  <label for="task" class="form-label">Add New Task</label>
  <input type="text" class="form-control" id="task" placeholder="Enter Task">
  </div>
  <input type="submit" class="btn btn-primary mt-3" value="Add Task">

  </form>
  </div>
  </div>

  <div class="card-body">
  <h4 class="text-danger">Task</h4>
  <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center mb-3">List Item
  <a href="" class="btn link-danger"><i class="fa-solid fa-xmark"></i></a>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center  mb-3">List Item
  <a href="" class="btn link-danger"><i class="fa-solid fa-xmark"></i></a>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center  mb-3">List Item
  <a href="" class="btn link-danger"><i class="fa-solid fa-xmark"></i></a>
  </li>
  
  </ul>
  </div>

  </div>
  </div>
  </div>
  </div>

</template>

<style scoped>
</style>
