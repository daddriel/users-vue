<template>
  <v-app-bar class="bg-primary px-2" >
    <v-app-bar-title>
      <v-img
        @click="$router.push('/')"
        class="my-6"
        max-width="40"
        src="@/assets/logo.svg"
      >
      </v-img>
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon @click="toggleTheme">
      <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>
    
    <v-divider class="mx-2 my-auto" inset vertical style="height: 20px;"></v-divider>

    <v-btn icon to="/users">
      <v-icon>mdi-account</v-icon>
    </v-btn>
    <template>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
  </v-app-bar>
</template>
<script setup lang="ts">
import { useTheme } from "vuetify";

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>
