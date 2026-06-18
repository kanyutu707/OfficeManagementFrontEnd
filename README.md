OFFICE MANAGEMENT SYSTEM – FRONTEND APPLICATION
A Reactive User Interface for Enterprise Resource Planning and Real-Time Workplace Collaboration.

This repository houses the frontend client for the Office Management System. Built using React, this single-page application (SPA) delivers a dynamic, high-performance user experience featuring state-driven dashboards, contextual view filtering based on user roles, and a low-latency chat interface.

TABLE OF CONTENTS
Overview & Architecture

Key Client Features

Tech Stack

Component & Module Breakdown

How the Client Works Natively

Getting Started

Environment Variables

1. OVERVIEW & ARCHITECTURE
The frontend interface is engineered to provide users with an absolute, zero-latency feedback loop. By relying on a decoupled architecture, this React application functions independently of the backend platform, consuming secure RESTful API endpoints and establishing persistent WebSocket pipelines to achieve real-time synchronization across client sessions.

2. KEY CLIENT FEATURES
Dynamic Role-Based Dashboards: Interrogates authentication tokens to programmatically alter the viewport, presenting comprehensive administrative tools to Admins while restricting standard employees to isolated task modules.

Reactive Leave Request Tracker: Features a state-managed form processing pipeline that allows users to submit time-off requests and monitor status updates without requiring structural layout reloads.

Contextual Task Boards: Filters and renders active work assignments dynamically, enabling users to focus strictly on their individual goals.

Low-Latency Chat Interface: Implements an immersive, bidirectional chat canvas with real-time text transmission and instant online/offline visual indicators.

Global Event Board: Features an aggregated visual notice board that catches company-wide announcements instantly as they are published by administrators.

3. TECH STACK
Core Library: React (Functional Components, Hooks)

Real-Time Client: Socket.io-client

State Management: React Context API & useContext

Routing: React Router DOM

Styling & UI Components: CSS3 / Material-UI (or preferred design library)

API Client: Axios (configured with interceptors for authorization delivery)

4. COMPONENT & MODULE BREAKDOWN
Administrative Desktop
Employee Directory Module: Renders structural list components to onboard staff profiles and control account creation templates.

Leave Audit Console: A unified dashboard pane that processes pending time-off objects, updating local state variables gracefully upon successful server handshakes.

Employee Workspace
Task Matrix Canvas: Houses filtered lists displaying specific, operational targets assigned strictly to the authenticated user.

Time-Off Workbench: The client form utility that constructs payload objects sent directly to the Express server API.

Universal Communication Layer
Persistent Chat Panel: A persistent sidebar or modal element executing persistent, socket-driven events to send and receive text nodes instantaneously.

5. HOW THE CLIENT WORKS NATIVELY
UI View Filtering
Upon successful authorization, the application intercepts the inbound JSON Web Token (JWT) payload.

The user's role descriptor is saved directly into a global React Context provider.

Conditional rendering expressions evaluation takes place: {user.role === 'admin' ? <AdminConsole /> : <EmployeeConsole />}.

This keeps unprivileged routing components completely locked out of the client DOM space.

State Synchronization
Inbound instant messages do not perform standard database long-polling updates. Instead, the socket.on("message") listener catches raw data drops from the socket instance and forces a soft append to the active message array state variable, resulting in smooth, localized visual transitions.

6. GETTING STARTED
Prerequisites
Ensure your local environment contains the following runtime dependencies:

Node.js (v18.x or higher)

NPM (v9.x or higher)

Client Installation & Execution
Clone this repository locally: git clone https://github.com/kanyutu707/Office_Frontend

Open your terminal workspace inside the root project directory.

Run npm install to load all production packages and build-tool models.

Launch the application locally using npm start.

Open your browser and navigate to http://localhost:3000 to interact with the responsive workspace layout.

7. ENVIRONMENT VARIABLES
Create a configuration file named .env inside the root of your project directory to point your client to the correct backend interfaces:

REACT_APP_API_BASE_URL – The fundamental URL address where your backend Express REST API is currently hosted (e.g., http://localhost:5000/api).

REACT_APP_SOCKET_SERVER_URL – The explicit network destination hosting your active Node.js socket server loop (e.g., http://localhost:5000).
