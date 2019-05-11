document.addEventListener('DOMContentLoaded', function() {
  const app = new Vue({
    el: '#app',
    data: {
      newItem: "",
      todos: [],
    },
    methods: {
      addcontent: function(event) {
        if(this.newItem == "") return;
        let todo = {
          item: this.newItem,
          isDone: false
        };
        this.todos.push(todo);
        this.newItem = "";
      },
      deletecontent: function(index) {
        this.todos.splice(index, 1);
      }
    }
  })
})
