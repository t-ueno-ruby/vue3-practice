const app = Vue.createApp({
  // ここにオプションを追加していく
  data: () => ({
    message: 'hello',
  }),
  methods: {
    clickHandler: function (event) {
      this.message = this.message.split('').reverse().join('');
    },
  },
});

app.mount('#app');
