const app = Vue.createApp({
  // ここにオプションを追加していく
  data: () => ({
    newItem: '',
    todos: [],
  }),
  methods: {
    addItem: function (event) {
      if (this.newItem === '') return;
      let todo = {
        item: this.newItem,
        isDone: false,
      };
      this.todos.push(todo);

      this.newItem = '';
    },
  },
});

app.mount('#app');
