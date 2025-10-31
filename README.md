# BookIt - Fullstack (Frontend + Backend)

## Prerequisites
- Node.js (v18+ recommended)
- npm
- MongoDB installed and running locally (or use Atlas)

## Backend
1. Open terminal:
# BookIt — Fullstack Internship Project

## Overview
BookIt is a fullstack booking application that lets users browse experiences, pick slots, enter checkout info and complete bookings.

Stack:
- Frontend: React + TypeScript + Vite + TailwindCSS
- Backend: Node.js + Express + Sequelize + MySQL

## Features
- View experiences and details
- Select date/time slot and number of people
- Checkout with promo codes (SAVE10, FLAT100)
- Prevent double-booking via transactional update
- Responsive UI

## Setup — Backend
1. Install MySQL and create DB:
   - `CREATE DATABASE bookit_db;`
2. Clone repo and enter backend:
   - `cd backend`
3. Copy `.env.example` to `.env` and fill values (DB credentials)
4. Install:
   - `npm install`
5. Start server (dev):
   - `npm run dev`
6. The backend runs at `http://localhost:4000` (API base `/api`)

> If you'd like to seed database manually, run the SQL in the README under `Database: SQL schema + seed`.

## Setup — Frontend
1. Open new terminal, go to frontend:
   - `cd frontend`
2. Copy env: create `.env` with:
   - `VITE_API_URL=http://localhost:4000/api`
3. Install and run:
   - `npm install`
   - `npm run dev`
4. Open `http://localhost:5173` (Vite default)

## Deployment
- Frontend: Deploy to Vercel (build: `npm run build`, output dir: `dist`).
- Backend: Deploy to Render/ Railway/Heroku. Ensure env vars set. Use `npm run start` for production.
- For CORS, frontend must set `VITE_API_URL` to deployed backend `/api`.

## Notes for evaluation
- `sequelize.sync({ alter: true })` used for convenience in dev; prefer migrations for production.
- To ensure strict slot locking in production under heavy concurrency, convert the slot update to a `SELECT ... FOR UPDATE` raw query inside a transaction.
- Promo codes logic is basic and lives in server memory (PROMOS). For production, move to DB.

## Figma
Provided in the assignment; tweak Tailwind tokens to match exact colors/spacing per Figma.

## Contact
If you want, I can:
- Convert this into ready-to-run GitHub repo (folder structure & files).
- Provide instructions for setting up a pipeline for Render + Vercel.
- Add CI or Dockerfile for backend.
