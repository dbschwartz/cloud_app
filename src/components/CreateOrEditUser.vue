<template>
  <v-dialog v-model="dialog" max-width="500px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
        New Item
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">{{ formTitle }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="editedItem.firstname"
                label="First Name"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="editedItem.lastname"
                label="Last Name"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="editedItem.username"
                label="Username"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="editedItem.email"
                label="email"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>    
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
        <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script>

export default {
  name: "CreateOrEditUser",
props: {
    editedItem: {
      type: Object,
      required: true
    }
},
  data: () => ({
    dialog: false
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },
  methods: {
    close () {
      this.dialog = false;
      this.$nextTick(() => {
        this.$emit("reset")
      });
    },
    save () {
      if (this.editedIndex > -1) {
          //
      } else {
        this.$emit("save")
      }
      this.close()
    }
  },
   watch: {
    dialog (val) {
      val || this.close()
    },
   }
};
</script>
