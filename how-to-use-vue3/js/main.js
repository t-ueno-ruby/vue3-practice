const app = Vue.createApp({
  // ここにオプションを追加していく
  data: () => ({
    message: 'Hello Vue.js',
    count: 99,
    user: {
      lastName: 'Nakamura',
      firstName: 'Yota',
      prefecture: 'Oita'
    },
    colors: ['Red', 'Green', 'Blue']
  })
})
app.mount('#app')
