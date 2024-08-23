import MainApp from "@client/main-app.vue";
import HomeView from "@client/views/home-view.vue";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			component: HomeView,
			name: "home",
		},
	],
});

createApp(MainApp).use(router).mount("#app");
