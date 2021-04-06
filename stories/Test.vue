<template>
  <div>
    <div>Hello</div>
    <div>
      <MyButton size="small" @onClick="onClick" label="Click me!" />
    </div>
  </div>
</template>

<script>
import MyButton from "./Button.vue";
export default {
  name: "my-test",

  components: { MyButton },
  props: {},

  methods: {
    onClick() {
      // alert("Hello!");
    },
  },
};
</script>
