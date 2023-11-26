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
                label="Nombre de usuario"
                :rules="[(v) => !!v || 'El nombre de usuario es obligatorio']"
                required
                variant="outlined"
              ></v-text-field>
              <v-text-field
                v-model="user.password"
                label="Contraseña"
                :rules="[(v) => !!v || 'La contraseña es obligatoria']"
                required
                variant="outlined"
                type="password"
              ></v-text-field>
              <v-text-field
                v-model="user.email"
                label="Correo electrónico"
                :rules="[(v) => !!v || 'El correo electrónico es obligatorio']"
                required
                variant="outlined"
                type="email"
              ></v-text-field>
              <v-text-field
                v-model="user.userDetailDTO.firstName"
                label="Nombre"
                :rules="[(v) => !!v || 'El nombre es obligatorio']"
                required
                variant="outlined"
              ></v-text-field>
              <v-text-field
                v-model="user.userDetailDTO.lastName"
                label="Apellido"
                :rules="[(v) => !!v || 'El apellido es obligatorio']"
                required
                variant="outlined"
              ></v-text-field>
              <v-text-field
                v-model="user.userDetailDTO.age"
                label="Edad"
                :rules="[(v) => !!v || 'La edad es obligatoria']"
                required
                variant="outlined"
                type="number"
              ></v-text-field>
              <v-text-field
                v-model="user.userDetailDTO.birthDay"
                label="Fecha de nacimiento"
                :rules="[(v) => !!v || 'La fecha de nacimiento es obligatoria']"
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
                Enviar
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
import { ref, computed } from "vue";


const user = ref({
  userName: "daniel",
  password: "123",
  email: "daniel@mail.com",
  userDetailDTO: {
    firstName: "Daniel",
    lastName: "Perez",
    age: 24,
    birthDay: "1999-12-01",
  },
});

const valid = ref(true);

const form = ref<HTMLFormElement | null>(null);

const submit = () => {
  if (form.value?.validate()) {
    try {
      const url = 'http://localhost:8081/v1/users'
      const response =  fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user) 
      })
      const json =  response
      console.log(json, 323423)
    } catch (error) {
      console.log(error)
    }
  }
    console.log(user);
    console.log("Formulario enviado");
  }
;


</script>
