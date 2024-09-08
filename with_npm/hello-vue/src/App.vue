<script setup lang="ts">
import { ref } from 'vue'
const inputNameBind = ref('しんちゃん')
const inputNameOn = ref('ななし')
const onInputName = (event: Event): void => {
  // JavaScriptならば、「event.target.value」と記述できる
  // ただしTypeScriptでは、イベントが発生したターゲット要素を表すevent.targetプロパティは
  // EventTarget 型であり、ここから直接入力値を表すvalueプロパティが取得できない
  // そのため、いったんイベントが発生したinput要素を表すHTMLInputElement型に変換する必要がある
  const element = event.target as HTMLInputElement
  inputNameOn.value = element.value
}
</script>
<template>
  <section><input type="text" v-bind:value="inputNameBind" /></section>
  <br />
  <section>
    <input type="text" v-on:input="onInputName" />
    <p>{{ inputNameOn }}</p>
  </section>
</template>
