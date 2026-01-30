<script setup>
import { ref, onMounted } from "vue";
import { useUser } from "@/composables/useUser";

const { getUser, updateProgress } = useUser();
const user = ref(null);

onMounted(async () => {
  user.value = await getUser();
});
</script>

<template>
  <UserInfoCard :user="user" />
  <UserProgress v-if="user" v-model="user.progress" @update="updateProgress" />
</template>
