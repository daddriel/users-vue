<template>
  <v-container>
    <v-row>
      <v-col cols="12">

        <v-card>
          <v-card-title>
            <div class="text-h4">User - {{ user.id }}</div>
          </v-card-title>
          <v-divider class="mb-6"></v-divider>
          <v-card-text>
            <div v-if="!isLoading">
              <div>User Name</div>
              <div class="text-h6 mb-6">{{ user.userName }}</div>

              <div>Email</div>
              <div class="text-h6 mb-6">{{ user.email }}</div>

              <div>First Name</div>
              <div class="text-h6 mb-6">{{ user.userDetailDTO.firstName }}</div>

              <div>Last Name</div>
              <div class="text-h6 mb-6">{{ user.userDetailDTO.lastName }}</div>

              <div>Age</div>
              <div class="text-h6 mb-6">{{ user.userDetailDTO.age }}</div>

              <div>Birth Day</div>

              <div class="text-h6 mb-6">{{ user.userDetailDTO.birthDay }}</div>


            </div>
          </v-card-text>
            
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>
<script>
import UserService from "@/services/UserService"
import  { defineComponent, onMounted, ref } from "vue"
import { useRoute } from "vue-router"

export default defineComponent({
  name: "UserbyId",
  setup() {
    const service = new UserService()
    const user = service.getUser()
    const { id } = useRoute().params
    const isLoading = ref(true)

    onMounted(async () => {
      await service.fetchById(id);
      isLoading.value = false;
    });

    return {
      user,
      isLoading
    };
 
  },
});



</script>
<style lang="">
  
</style>