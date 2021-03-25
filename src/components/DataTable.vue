<template>
  <div>
    <alert :alert-flag="alertFlag" :alert-text="alertText" />
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
            :inEditMode="inEditMode"
            :edited-item="editedItem"
            @save="save"
            @reset="reset"
          />
          <delete-user :dialogDelete="dialogDelete" @delete-item="deleteItem" />
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editDialogFN(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteDialogFn(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="getUsers"> Reset </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import CreateOrEditUser from "./CreateOrEditUser.vue";
import DeleteUser from "./DeleteUser.vue";
import Alert from "./Alert.vue";
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
    editedIndex: -1,
    editedItem: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
    },
    inEditMode: false,
    dialogDelete: false,
    alertFlag: false,
    alertText: "",
  }),
  components: { CreateOrEditUser, DeleteUser, Alert },
  created() {
    this.getUsers();
  },
  methods: {
    reset() {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
      this.inEditMode = false;
    },
    editDialogFN(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.inEditMode = true;
    },
    deleteDialogFn(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    handleError(err) {
      this.alertFlag = true;
      this.alertText = err.response.data.message;
    },
    async getUsers() {
      this.users = await this.$jCloudService.getUsers();
    },
    async save() {
      try {
        if (this.editedIndex > -1) {
          await this.$jCloudService.editUser(this.editedItem);
        } else {
          await this.$jCloudService.newUser(this.editedItem);
        }
      } catch (error) {
        this.handleError(error);
      }
      this.inEditMode = false;
      this.getUsers();
    },
    async deleteItem(flag) {
      this.dialogDelete = false;
      if (flag === "confirm") {
        try {
          await this.$jCloudService.deleteUser(this.editedItem._id);
          await this.getUsers();
        } catch (error) {
          this.handleError(error);
        }
      }
      this.$nextTick(() => {
        this.reset();
      });
    },
  },
};
</script>
