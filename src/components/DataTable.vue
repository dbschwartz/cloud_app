<template>
<div></div>
      <!-- <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="calories"
      class="elevation-1"
    >
          </v-data-table> -->
</template>

<script>
  export default {
    name: 'DataTable',

    data: () => ({
      
    }),
         props: {

    users: {
      type: Array,
      required: true
    }
         }
  }
</script>
