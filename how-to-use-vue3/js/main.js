const app = Vue.createApp({
  // ここにオプションを追加していく
  data: () => ({
    now: '-'
  }),
  methods: {
    onClick: function () {
      // console.log('onclick');
      // console.log(this);
      this.now = new Date().toLocaleString()
    }
  }
})
app.mount('#app')
