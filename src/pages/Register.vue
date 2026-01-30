<script setup>
import { ref } from "vue";
import { useAuth } from "@/composables/useAuth";
import { useUser } from "@/composables/useUser";
import { sendToTelegram } from "@/api/telegram";

const form = ref({
  name: "",
  surname: "",
  phone: "",
  email: "",
  password: "",
});

const { register } = useAuth();
const { createUser } = useUser();

async function submit() {
  await register(form.value.email, form.value.password);
  await createUser(form.value);
  await sendToTelegram(form.value);
}
</script>
