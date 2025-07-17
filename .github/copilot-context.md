# Copilot Context for BasketEasy

## Project Overview

BasketEasy is a platform designed to help amateur basketball teams organize their activities efficiently. It provides tools for managing trainings, matches, and referee/official roles within their associations. The project includes both the frontend and backend components.

## Key Features

- Create and manage teams, including adding and removing players.
- Schedule recurring trainings and allow players to confirm their attendance.
- Organize matches with player participation tracking.
- Assign and manage referee/official roles for matches and events.
- Prepare for future multi-language support.

## Technologies Used

- **Frontend**: React with TypeScript.
- **Backend**: NestJS (a TypeScript-first framework built on Node.js).
- **Database**: PostgreSQL for relational data management with Prisma ORM.
- **Containerization**: Docker for consistent development and deployment environments.

## Backend Architecture

- **Database Layer**:

  - Using Prisma ORM for type-safe database operations.
  - PostgreSQL database running in a Docker container.
  - Implemented migrations for database schema versioning.
  - Used enum types for role-based access control (ADMIN, USER roles).

- **Authentication**:

  - JWT (JSON Web Token) based authentication system for secure access.
  - Role-based access control for different user types (ADMIN, USER).
  - Bcrypt for secure password hashing.
  - Login/register functionality for user management.

  - **API Design**:
  - RESTful API structure with NestJS controllers and services.
  - Entity models include User with role permissions.
  - Protected endpoints requiring authentication.
  - Public endpoints for initial authentication.

- **Domain-Driven Design**:
  - Layered architecture (domain, application, infrastructure, interface layers).
  - Repository pattern for database operations.
  - DTOs for data transfer between layers.
  - Clear separation of concerns for better maintainability.

## Coding Conventions

- Use TypeScript for both frontend and backend.
- Follow clean code principles and modular design.
- Use RESTful API design principles.
- Implement responsive design for web and mobile compatibility.

## Development Goals

- Ensure the project is shippable and ready for deployment.
- Maintain scalability and prepare for future features like multi-language support.
- Include automated testing (unit and integration tests) where possible.

## User Interface

- A responsive website that can later be adapted into a mobile web app available on app stores.
- Use the following color palette for design:
  - Primary: #485696
  - Secondary: #E7E7E7
  - Accent 1: #FFAD05
  - Accent 2: #FE4A49
  - Accent 3: #009FB7

## Authentication and Access Control

- Implement user authentication with secure password handling.
- Include role-based access control (ADMIN, USER roles) for managing teams and events.
- Store user credentials securely with proper hashing.

## Deployment

- Use a cloud provider like AWS or Vercel for hosting the website.
- Leverage Docker containers for deployment consistency and scalability.
- Docker Compose configuration for running both database and application services.
- Implement CI/CD pipelines using GitHub Actions for automated testing and deployment.

## Database Schema

- **User Entity**:
  - Fields: id, username, email, password (hashed), role (enum: USER, ADMIN)
  - Timestamps: createdAt, updatedAt
  - Includes soft delete functionality with deletedAt field

## Environment Configuration

- Using .env files for environment-specific configuration.
- Database connection strings with variable substitution for maintainability.
- Containerized development environment for consistency.

## Competitors

- Differentiate from SportEasy by focusing on simplicity and ease of use for amateur basketball teams.

## Maintenance and Updates

- Plan for regular updates and feature additions.
- Establish a feedback loop with users to prioritize improvements.

## Additional Notes

This file serves as a context provider for GitHub Copilot to generate more relevant suggestions for the BasketEasy project.
