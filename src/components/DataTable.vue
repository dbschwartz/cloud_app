<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="users"
      sort-by="email"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Cloud Users</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <create-or-edit-user
            :editedItem="editedItem" 
            @save="save"
            @reset="reset" />
        </v-toolbar>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import CreateOrEditUser from "./CreateOrEditUser.vue";
export default {
  name: "DataTable",
  data: () => ({
    users: [],
    headers: [
      {
        text: "First Name",
        align: "start",
        value: "firstname",
      },
      { text: "Last Name", value: "lastname" },
      { text: "Username", value: "username" },
      { text: "Email", value: "email" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    dialog: false,
    editedIndex: -1,
    editedItem: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
    },
  }),
  components: { CreateOrEditUser },
  created() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      this.users = await this.$jCloudService.getUsers();
    },
    async handleNewUser(newUser) {
      try {
        await this.$jCloudService.newUser(newUser);
        this.getUsers();
      } catch (error) {
        console.log(error);
      }
    },
    reset() {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1;
    },
    save(newUser) {
      if (this.editedIndex > -1) {
        //
      } else {
       this.handleNewUser(newUser)
      }
    },
  },
};
</script>
