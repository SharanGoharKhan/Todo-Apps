<template>
     <div class="container">

      <input   
      type="text" 
      placeholder="Enter Todo"
      disabled="true" 
      class="todo--input"
      v-model="todoEl"
      />
      
      <button 
      type="button" 
      class="btn delete"
      v-on:click="onDeleteTodo"
      >Delete</button>

    </div>
</template>
<script>
export default {
  name: "todo-list",
  props: [
    'todoEl',
    'todoInd'
    ],
  methods: {
    onDeleteTodo() {
      this.$emit('onDeleteTodo',this.todoInd)
    }
  }
}
</script>
<style scoped>
.container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
}
.todo--input {
    width: 40%;
    padding: 12px 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 20px;
}
.container .delete {
    background-color: var(--btn-delete-color);
}
.todo--input:hover {
    box-shadow: var(--primary-shadow);
}
</style>