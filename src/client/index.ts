import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import MainApp from "./main-app.vue";
import HomeView from "./views/home-view.vue";

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
