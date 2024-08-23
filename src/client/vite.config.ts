import pluginVue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		emptyOutDir: true,
		outDir: "../../dist/html",
		rollupOptions: {
			input: {
				index: resolve(__dirname, "index.html"),
			},
		},
		sourcemap: process.env.DEBUG ? true : undefined,
		target: "esnext",
	},
	resolve: {
		alias: {
			"@client": __dirname,
			"@schema": resolve(__dirname, "../schema"),
			"@server": resolve(__dirname, "../server"),
		},
	},
	plugins: [pluginVue()],
});
