import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { fileURLToPath, URL } from 'url';
// import {deleteSync} from "del";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
	// resolve: {
	// 	alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
	// },
	// build: {
	// 	outDir: '../main/resources/static',
	// 	rollupOptions: {
	// 		plugins: [
	// 			{
	// 				name: 'cleanup',
	// 				buildStart() {
	// 					deleteSync('../main/resources/static/*', { force: true });
	// 				}
	// 			}
	// 		]
	// 	}
	// },
	// server: {
	// 	proxy: {
	// 		'/api': {
	// 			target: 'http://localhost:8080/',
	// 			changeOrigin: true
	// 		}
	// 	}
	// }
});