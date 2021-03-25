<template>
    <v-alert
      v-model="alertFlag"
      color="red"
      dense
      dismissible
      elevation="9"
      outlined
      text
      type="error"
      >
{{ alertText }}</v-alert>
</template>

<script>
export default {
  name: "Alert",
  props: {
    alertFlag: {
      type: Boolean,
      required: true,
    },
    alertText: {
        type: String,
        required: true
    }
  }
};
</script>
