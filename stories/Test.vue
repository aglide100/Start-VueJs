<template>
  <div>
  <div>Hello</div>
  <div>
    <my-button size="small" @onClick="onClick" label="Click me!"/>
  </div>
  </div>
</template>

<script>
import MyButton from "./Button.vue";
export default {
  name: "my-test",
  components:{
    'my-button': MyButton
  },
  props: {},

  methods: {
    onClick() {
    // alert("Hello!");
  }},
};
</script>
