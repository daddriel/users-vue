<template>
  <v-layout>
    <MainHeader/>
    
    <v-main>
      <slot></slot>
    </v-main>
  </v-layout>
</template>

<script lang="ts">
import MainHeader from '../components/headers/HeaderDefault.vue'
import { defineComponent } from "vue";

export default defineComponent({
    name: "DefaultLayout",
    components: {
      MainHeader
    }
});
</script>
