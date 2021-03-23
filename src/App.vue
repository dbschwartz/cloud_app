<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>

    <v-main>
      <DataTable :users="users"/>
    </v-main>
  </v-app>
</template>

<script>
//mport HelloWorld from './components/HelloWorld';
import DataTable from './components/DataTable';
export default {
  name: 'App',
  data: () => ({
     users: [1]
    }),
  components: {
    DataTable
  },
  async created () {
    this.users = await this.$jCloudService.getUsers();
}

};
</script>
