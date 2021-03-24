<template>
<div>
  <v-data-table
    :headers="headers"
    :items="users"
    sort-by="email"
    class="elevation-1"
  >
   <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Cloud Users</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <newuser />
        </v-toolbar>
    </template>
  </v-data-table>
  </div>
</template>

<script>
import newuser from './NewUser.vue';
export default 
{
  name: "DataTable",
    data: () => ({
      headers: [
      {
        text: 'First Name',
        align: 'start',
        value: 'firstname',
      },
      { text: 'Last Name', value: 'lastname' },
      { text: 'Username', value: 'username' },
      { text: 'Email', value: 'email' }
    ]
  }),
components: { newuser },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>
