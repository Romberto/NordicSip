# ---------- BUILD ----------
    FROM node:20-alpine AS build

    WORKDIR /app
    
    COPY package*.json ./
    RUN npm install
    
    COPY . .
    RUN npm run build
    
    # ---------- PROD ----------
    FROM nginx:alpine
    
    # Удаляем дефолтный конфиг
    RUN rm /etc/nginx/conf.d/default.conf
    
    # Копируем наш конфиг
    COPY nginx/default.conf /etc/nginx/conf.d/default.conf
    
    # Копируем билд React
    COPY --from=build /app/dist /usr/share/nginx/html
    
    EXPOSE 80
    
    CMD ["nginx", "-g", "daemon off;"]
    