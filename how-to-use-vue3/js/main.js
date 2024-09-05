const app = Vue.createApp({
  // ここにオプションを追加していく
  data: () => ({
    colors: ['red', 'green', 'blue'],
    user: {
      firstName: 'Taro',
      lastName: 'Yamada',
      age: 23,
    }
  })
})
app.mount('#app')
