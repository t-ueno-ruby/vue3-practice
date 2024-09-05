const app = Vue.createApp({
  // ここにオプションを追加していく
  data: () => ({

  }),
})

app.component('hello-component', {
  template: '<p>hello</p>'
})
app.mount('#app')
