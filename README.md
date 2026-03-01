# Projet SportSee
<div align="center">
<img src="./frontend/public/assets/logo.svg" alt="SportSee"/>
</div>

## About

SportSee is a sports coaching startup. This project is the user profile page, 
displaying activity tracking data through interactive charts.

## Prerequisites

- [Node.js] (v18 or higher)
- Backend - [Docker]
- npm or yarn

## Fonctionnalités Principales

- Réalisation de la page profil utilisateur
- Affichage des données de l'utilisateur (nombre de sessions, nombre de calories brûlées, temps d'activité) sous forme de graphiques

## Tech Stack
- React 18 with TypeScript
- Vite
- React Router
- Recharts
- Sass (styling)

Lien Kanban : [Kanban](
    https://openclassrooms.notion.site/Tableau-de-bord-SportSee-6686aa4b5f44417881a4884c9af5669e)

## Les indépendances

NodeJS, React/Vite, Recharts

## Installation

### 1. Clone the repository
```sh
git clone https://github.com/Kse-Nia/SportSee.git
cd sportsee
```

### 2. Backend setup
```sh
cd backend
docker compose up -d
```

The API will be available at `http://localhost:3000`


### 3. Frontend setup
```sh
cd frontend
npm install
npm run dev
```

## Mock Data

The app includes a mock data mode (mockup.json) that can be toggled via the switch button
in the navbar, allowing development without running the backend.


## Deployment

The application is deployed on a self-configured VPS (Ubuntu) with a custom domain.

**Live Demo:** [sportsee.your-domain.com](https://sportsee.your-domain.com)

Infrastructure:
- VPS hosted on OVH
- Docker containerized backend
- Custom domain with SSL

## API Testing

A Postman collection is available in the folder `/postman`. 
Import the JSON file into Postman to test API endpoints.

## Contact
[kseniyamudrakovadev@gmail.com](kseniyamudrakovadev@gmail.com)