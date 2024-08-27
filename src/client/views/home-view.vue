<script setup lang="ts">
	import DemoResponse from "@schema/demo-response";
	import { Ref, ref } from "vue";

	const success: Ref<boolean | null> = ref(null);

	await fetch("http://localhost:8000/api/test")
		.then((r) => r.json())
		.then((d: DemoResponse) => (success.value = d.success))
		.catch(() => (success.value = false));
</script>

<template>
	<p>Hello, world!</p>
	<p v-if="success !== null">API response: {{ success }}</p>
</template>
