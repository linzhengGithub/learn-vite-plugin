// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// plugins/virtual-module.ts
var virtualFibModuleId = "virtual:fib";
var resolvedFibVirtualModuleId = "\0" + virtualFibModuleId;
var virtualEnvModuleId = "virtual:env";
var resolvedEnvVirtualModuleId = "\0" + virtualEnvModuleId;
function virtualFibModulePlugin() {
  let config = null;
  return {
    name: "vite-plugin-virtual-module",
    configResolved(c) {
      config = c;
    },
    resolveId(id) {
      if (id === virtualFibModuleId) {
        return resolvedFibVirtualModuleId;
      }
      if (id === virtualEnvModuleId) {
        return resolvedEnvVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedFibVirtualModuleId) {
        return "export default function fib(n) { return n <= 1 ? n : fib(n - 1) + fib(n - 2); }";
      }
      if (id === resolvedEnvVirtualModuleId) {
        return `export default ${JSON.stringify(config.env)}`;
      }
    }
  };
}

// vite.config.ts
var vite_config_default = defineConfig({
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve("/Users/linzheng/project/learn-vite-plugin", "src")
    }
  },
  plugins: [react(), virtualFibModulePlugin()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGx1Z2lucy92aXJ0dWFsLW1vZHVsZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHZpcnR1YWwgZnJvbSAnLi9wbHVnaW5zL3ZpcnR1YWwtbW9kdWxlJ1xuaW1wb3J0IHN2Z3IgZnJvbSAnLi9wbHVnaW5zL3N2Z3InO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYmFzZTogJy8nLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKFwiL1VzZXJzL2xpbnpoZW5nL3Byb2plY3QvbGVhcm4tdml0ZS1wbHVnaW5cIiwgJ3NyYycpLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtyZWFjdCgpLCB2aXJ0dWFsKCldLFxufSlcbiIsICJpbXBvcnQgeyBQbHVnaW4sIFJlc29sdmVkQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5cbi8vIFx1ODY1QVx1NjJERlx1NkEyMVx1NTc1N1x1NTQwRFx1NzlGMFxuY29uc3QgdmlydHVhbEZpYk1vZHVsZUlkID0gJ3ZpcnR1YWw6ZmliJztcbi8vIFZpdGUgXHU0RTJEXHU3RUE2XHU1QjlBXHU1QkY5XHU0RThFXHU4NjVBXHU2MkRGXHU2QTIxXHU1NzU3XHVGRjBDXHU4OUUzXHU2NzkwXHU1NDBFXHU3Njg0XHU4REVGXHU1Rjg0XHU5NzAwXHU4OTgxXHU1MkEwXHU0RTBBYFxcMGBcdTUyNERcdTdGMDBcbmNvbnN0IHJlc29sdmVkRmliVmlydHVhbE1vZHVsZUlkID0gJ1xcMCcgKyB2aXJ0dWFsRmliTW9kdWxlSWQ7XG5cbmNvbnN0IHZpcnR1YWxFbnZNb2R1bGVJZCA9ICd2aXJ0dWFsOmVudic7XG5jb25zdCByZXNvbHZlZEVudlZpcnR1YWxNb2R1bGVJZCA9ICdcXDAnICsgdmlydHVhbEVudk1vZHVsZUlkO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2aXJ0dWFsRmliTW9kdWxlUGx1Z2luKCk6IFBsdWdpbiB7XG4gIGxldCBjb25maWc6IFJlc29sdmVkQ29uZmlnIHwgbnVsbCA9IG51bGw7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ3ZpdGUtcGx1Z2luLXZpcnR1YWwtbW9kdWxlJyxcbiAgICBjb25maWdSZXNvbHZlZChjOiBSZXNvbHZlZENvbmZpZykge1xuICAgICAgY29uZmlnID0gYztcbiAgICAgfSxcbiAgICByZXNvbHZlSWQoaWQpIHtcbiAgICAgIGlmIChpZCA9PT0gdmlydHVhbEZpYk1vZHVsZUlkKSB7IFxuICAgICAgICByZXR1cm4gcmVzb2x2ZWRGaWJWaXJ0dWFsTW9kdWxlSWQ7XG4gICAgICB9XG4gICAgICBpZiAoaWQgPT09IHZpcnR1YWxFbnZNb2R1bGVJZCkgeyBcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkRW52VmlydHVhbE1vZHVsZUlkO1xuICAgICAgfSBcbiAgICB9LFxuICAgIGxvYWQoaWQpIHtcbiAgICAgIC8vIFx1NTJBMFx1OEY3RFx1ODY1QVx1NjJERlx1NkEyMVx1NTc1N1xuICAgICAgaWYgKGlkID09PSByZXNvbHZlZEZpYlZpcnR1YWxNb2R1bGVJZCkge1xuICAgICAgICByZXR1cm4gJ2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpYihuKSB7IHJldHVybiBuIDw9IDEgPyBuIDogZmliKG4gLSAxKSArIGZpYihuIC0gMik7IH0nO1xuICAgICAgfVxuICAgICAgaWYgKGlkID09PSByZXNvbHZlZEVudlZpcnR1YWxNb2R1bGVJZCkge1xuICAgICAgICByZXR1cm4gYGV4cG9ydCBkZWZhdWx0ICR7SlNPTi5zdHJpbmdpZnkoY29uZmlnIS5lbnYpfWA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUEsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTs7O0FDQ2pCLElBQU0scUJBQXFCO0FBRTNCLElBQU0sNkJBQTZCLE9BQU87QUFFMUMsSUFBTSxxQkFBcUI7QUFDM0IsSUFBTSw2QkFBNkIsT0FBTztBQUUzQixTQUFSLHlCQUFrRDtBQUN2RCxNQUFJLFNBQWdDO0FBQ3BDLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLGVBQWUsR0FBbUI7QUFDaEMsZUFBUztBQUFBLElBQ1Y7QUFBQSxJQUNELFVBQVUsSUFBSTtBQUNaLFVBQUksT0FBTyxvQkFBb0I7QUFDN0IsZUFBTztBQUFBLE1BQ1Q7QUFDQSxVQUFJLE9BQU8sb0JBQW9CO0FBQzdCLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBLElBQ0EsS0FBSyxJQUFJO0FBRVAsVUFBSSxPQUFPLDRCQUE0QjtBQUNyQyxlQUFPO0FBQUEsTUFDVDtBQUNBLFVBQUksT0FBTyw0QkFBNEI7QUFDckMsZUFBTyxrQkFBa0IsS0FBSyxVQUFVLE9BQVEsR0FBRztBQUFBLE1BQ3JEO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjs7O0FENUJBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLDZDQUE2QyxLQUFLO0FBQUEsSUFDdEU7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTLENBQUMsTUFBTSxHQUFHLHVCQUFRLENBQUM7QUFDOUIsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
