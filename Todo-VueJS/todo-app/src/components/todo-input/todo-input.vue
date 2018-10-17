<template>
     <div class="container">
            <input
                type="text"
                placeholder="Enter Todo"
                class="todo--input"
                v-model="todo"/>

            <button
                type="button"
                class="btn save"
                v-on:click="onSaveTodo"
                :disabled="todo === ''">
                Save Todo!</button>
        </div>
</template>
<script>
export default {
  name: "todo-input",
  data() {
      return {
          todo: ''
      }
  },
  methods: {
      onSaveTodo() {
          this.$emit('onTodoAdd',this.todo)
      }
  }
};
</script>
<style scoped>
.container {
    display: flex;
    justify-content: center;
    margin-bottom: 39px;
}
.todo--input {
    width: 40%;
    padding: 12px 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 20px;
}
.container .save {
    background-color: var(--btn-save-color);
}
.todo--input:hover {
    box-shadow: var(--primary-shadow);
}
.container .btn:hover {
    box-shadow: var(--primary-shadow);
}
.container .btn[disabled],
.container .btn[disabled]:hover {
    cursor: not-allowed;
    background-color: var(--btn-delete-color);
    box-shadow: none;
}
</style>