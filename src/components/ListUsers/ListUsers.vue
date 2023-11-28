<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="d-flex justify-space-between align-center">
            <div class="text-h4">Users List</div>

            <v-btn color="primary" @click="$router.push('/users/new')">
              <v-icon>mdi-plus</v-icon>
              <span class="ms-2">Add User</span>
            </v-btn>
          </v-card-title>
          <v-divider class="mb-6"></v-divider>
          <v-data-table :headers="headers" :items="users">
            <template v-slot:item.actions="{ item }">
              <v-icon
                size="small"
                class="me-2"
                @click="$router.push(`/users/${item.id}`)"
              >
                mdi-eye
              </v-icon>
              <v-icon
                size="small"
                class="me-2"
                @click="$router.push(`/users/${item.id}/edit`)"
              >
                mdi-pencil
              </v-icon>
              <v-icon 
              size="small" 
              @click.prevent="deleteItem(item)"

              >
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import UserService from "@/services/UserService";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "ListUsers",
  setup() {
    const service = new UserService();
    const users = service.getUsers();
    const headers = [
      {
        title: "Id",
        align: "start",
        sortable: false,
        key: "id",
      },
      { title: "User Name", key: "userName" },
      { title: "Email", key: "email" },
      { title: "First Name", key: "firstName" },
      { title: "LastName", key: "lastName" },
      { title: "Age", key: "age" },
      { title: "Actions", key: "actions", sortable: false },
    ];

    onMounted(async () => {
      await service.fetchAll();
    });

    return {
      users,
      headers,
    };
  },
  methods: {
    async deleteItem(item: User) {
      console.log(item.id, "entraaaa");
      try {
        const url = `http://localhost:8081/v1/users/${item.id}`;
        const response = await fetch(url, {
          method: "DELETE",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        });
        const json = await response;
        // const service = new UserService();
        // await service.fetchAll();
        this.deleteItemFront(item);
      } catch (error) {
        console.log(error);
      }
    },
    deleteItemFront(item: any) {
    this.users.splice(this.users.indexOf(item), 1);
   },
},

  },
);
</script>
