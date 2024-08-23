<script setup lang="ts">
	import { Ref, ref } from "vue";
	import DemoResponse from "../../schema/demo-response";

	const success: Ref<boolean | null> = ref(null);

	await fetch("/api/test")
		.then((r) => r.json())
		.then((d: DemoResponse) => (success.value = d.success))
		.catch(() => (success.value = false));
</script>

<template>
	<p>Hello, world!</p>
	<p v-if="success !== null">API response: {{ success }}</p>
</template>
