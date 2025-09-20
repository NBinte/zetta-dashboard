# Zetta Dashboard

Mini UI-focused dashboard built

This project demonstrates modern frontend engineering practices with **Next.js 15 (App Router)**,
**React 19**, **Tailwind CSS v4**, **Framer Motion 12**, and **TypeScript**. It also includes a
**bonus authentication feature** with NextAuth.js (Google OAuth).

## Tech Stack

- **Framework**: Next.js 15 (App Router) + React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with design tokens in `globals.css`
- **Animations**: Framer Motion 12 for sidebar, cards, and modal
- **Authentication (Bonus)**: NextAuth.js v5 with Google OAuth + protected `/profile`
- **API Source**: JSONPlaceholder

## Project Structure

- **src/**
  - **app/**
    - layout.tsx # Root layout + Providers + SkipLink
    - page.tsx # Home (Dashboard)
    - posts/
      - page.tsx # Posts list
      - PostsClient.tsx # Fetch + PostCard rendering
        - [id]/
          - page.tsx # Post detail (server)
          - loading.tsx # Skeleton loader
          - not-found.tsx # (Optional) Not found page
      - loading.tsx # Posts skeleton
    - users/
      - page.tsx # Users page
      - UsersClient.tsx # Fetch + table + modal
      - loading.tsx # Skeleton loader
    - profile/
      - page.tsx # Protected profile page
    - api/auth/[...nextauth]/
      - route.ts # NextAuth (Google provider)
  - **components/**
    - AppShell.tsx # Layout shell
    - Header.tsx # Sticky header + auth buttons
    - Sidebar.tsx # Collapsible sidebar
    - StatCard.tsx # Reusable stat card
    - PostCard.tsx # Reusable post card
    - UserModal.tsx # Animated modal
    - AuthButtons.tsx # Sign in/out/Profile buttons
    - Providers.tsx # SessionProvider wrapper
    - SkipLink.tsx # Accessibility skip link
  - **hooks/**
    - useFetch.ts # Custom hook for API fetch
  - **lib/**
    - auth.ts # getServerSession wrapper
    - fetcher.ts # Simple fetch wrapper
  - **styles/**
    - globals.css # Tailwind base + custom tokens/utilities

## Features

### Core

- **Home (`/`)**
  - Static summary
  - Animated StatCards (staggered)

- **Posts (`/posts`)**
  - Fetch posts from JSONPlaceholder
  - Reusable PostCard grid
  - Links to `/posts/[id]`

- **Post Detail (`/posts/[id]`)**
  - Server-rendered with metadata
  - Loading skeleton + Not Found page

- **Users (`/users`)**
  - Responsive table with name/email/company
  - Row click → animated modal with user details

- **Profile (`/profile`)**
  - Protected route with Google OAuth
  - Shows name, email, avatar
  - Sign out button

### Reusability

- Reusable components: `StatCard`, `PostCard`, `UserModal`, `Header`, `Sidebar`
- Custom hook: `useFetch<T>()` with
  - `data`, `error`, `loading`, `status`
  - `refetch()` and `simulateError()` for intentional failures

### UI/UX

- Collapsible sidebar with smooth width animation
- Staggered card animations
- Animated modal (scale + opacity)
- Loading skeletons
- Error banners with retry
- Intentional error demo (simulate API failure)

### Accessibility & Polish

- Skip Link for keyboard users
- Styled focus rings
- Responsive tables (scrollable on small screens)
- Layout stable (no jumps on sidebar toggle)

## Scripts

```bash
npm run dev       # Start dev server (Turbopack)
npm run build     # Production build
npm start         # Run production server
npm run lint      # ESLint
npm run typecheck # TypeScript check
npm run format    # Prettier format
```

## Environment Setup

Local (.env.local) ini Copy code NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<long_random_string> GOOGLE_CLIENT_ID=<your_google_client_id>
GOOGLE_CLIENT_SECRET=<your_google_client_secret>

## Vercel

Add the same variables under Project → Settings → Environment Variables

NEXTAUTH_URL=https://<your-vercel-domain>

Add authorized redirect URI in Google Cloud Console:

https://<your-vercel-domain>/api/auth/callback/google

## Reviewer Instructions

Posts

Click Simulate Error → API fails → error banner shows

Click Retry → fetches successfully

Users

Table adapts to screen

Row click → animated modal

Simulate error → error banner

Sidebar

Toggle open/close → smooth animation, no content jump

Profile

Visit /profile → redirects to sign-in

Sign in with Google → profile data appears

Sign out → back to home

## Links

[Live Demo:](https://zetta-dashboard.vercel.app>)
[Source Code:](https://github.com/NBinte/zetta-dashboard)
