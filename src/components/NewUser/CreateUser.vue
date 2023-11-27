<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="d-flex justify-space-between align-center">
            <div class="text-h4">Add new user</div>
          </v-card-title>
          <v-card-text>
            <v-form v-model="valid" ref="form">
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
                label="Name"
                :rules="[(v) => !!v || 'Name is required']"
                required
                variant="outlined"
              ></v-text-field>
              <v-text-field
                v-model="user.userDetailDTO.lastName"
                label="Last Name"
                :rules="[(v) => !!v || 'Last Name is required']"
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
              <v-text-field
                v-model="user.userDetailDTO.birthDay"
                label="Birth Day"
                :rules="[(v) => !!v || 'Birth Day is required']"
                required
                variant="outlined"
                type="date"
              ></v-text-field>

              <v-btn
                :disabled="!valid"
                color="primary"
                class="mr-4"
                @click="submit"
              >
                Create a new user
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style></style>

<script setup lang="ts">
import { ref, computed, toRaw } from "vue";
import { useRoute, useRouter } from "vue-router";


const user = ref({
  userName: "",
  password: "",
  email: "",
  userDetailDTO: {
    firstName: "",
    lastName: "",
    age: "",
    birthDay: "",
  },
});

const raw = toRaw(user.value); 
const valid = ref(true);

const form = ref<HTMLFormElement | null>(null);

const gotoUsers = () => {
  const router = useRouter();
  router.push("/users");
};

const submit = () => {
  if (form.value?.validate()) {
    try {
      const url = 'http://localhost:8081/v1/users'
      const response =  fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(raw) 
      })

      console.log(JSON.stringify(raw), 11111)
      const json =  response
      console.log(json, 323423)
      gotoUsers();
    } catch (error) {
      console.log(error)
    }

    
  }
    console.log(user);
    console.log("Formulario enviado");
  }
;


</script>
