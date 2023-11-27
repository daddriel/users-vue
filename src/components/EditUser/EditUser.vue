<template>
<v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="d-flex justify-space-between align-center">
            <div class="text-h4">Edit User</div>
          </v-card-title>
          <v-card-text>
            <v-form v-if="!isLoading" v-model="valid" ref="form">
               <v-text-field
                v-model="user.userName"
                label="Username"
                :rules="[(v) => !!v || 'Username is required']"
                required
                variant="outlined"
              ></v-text-field>
              
              <v-text-field
                v-model="user.password"
                label="Password"
                :rules="[(v) => !!v || 'Password is required']"
                required
                variant="outlined"
                type="password"
              ></v-text-field>
              <v-text-field
                v-model="user.email"
                label="Email"
                :rules="[(v) => !!v || 'Email is required']"
                required
                variant="outlined"
                type="email"
              ></v-text-field>
              <v-text-field
                v-model="user.userDetailDTO.firstName"
                label="First Name"
                :rules="[(v) => !!v || 'First Name is required']"
                required
                variant="outlined"
              ></v-text-field>
              <v-text-field
                v-model="user.userDetailDTO.lastName"
                label="Last Name"
                :rules="[(v) => !!v || 'First Name is required']"
                required
                variant="outlined"
              ></v-text-field>
              <v-text-field
                v-model="user.userDetailDTO.age"
                label="Age"
                :rules="[(v) => !!v || 'Age is required']"
                required
                variant="outlined"
                type="number"
              ></v-text-field>
              <div> {{ user }}</div>
              <v-btn
                :disabled="!valid"
                color="primary"
                class="mr-4"
                @click="submit"
              >
                Edit user
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import UserService from "@/services/UserService";
import { is } from "@babel/types";
import { get } from "http";
import { ref, computed, toRaw, onMounted  } from "vue";
import { useRoute, useRouter } from "vue-router";



const valid = ref(true);
const service = new UserService();
const user = service.getUser();


const { id } = useRoute().params;
const form = ref<HTMLFormElement | null>(null);
const isLoading = ref(true);

const gotoUsers = () => {
  const router = useRouter();
  router.push("/users");
};

const raw = toRaw(user.value);
onMounted(async () => {
  await service.fetchById(id);
  isLoading.value = false;
});


// function  formatDate(date: any) {
//     if (!date) return null
//     const [year, month, day] = date.split('-')
//     return `${day} ${month} ${year}`
//   }

const submit = () => {
  if (form.value?.validate()) {
    try {
      const url = `http://localhost:8081/v1/users/${id}`
      const response =  fetch(url, {
        method: 'PUT',
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user.value) 
      })

      console.log(user, "raw")
      const json =  response
      console.log(user, "user normal")
      gotoUsers();
    } catch (error) {
      console.log(error)
    }

    
  }
}
</script>
<style>
  
</style>