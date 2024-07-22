# Algo-Visualizer

An open source application built using next.js 14, tailwindcss, shadcn/ui and much more!

> **Warning**
> This app is a work in progress. I'm building this in public. You can follow the progress right here in this repo [@algo-visualizer](https://github.com/wev1n/algo-visualizer).
> See the roadmap below.

## About this project

This project is a learning exercise for me, specifically to see how a modern app (with features like authentication, subscriptions, API routes, nested routes, ...etc) would work in Next.js 14 and server components. The whole purpose is to learn more about data structures and algorithms by visualizing them to the public.

Inspiration taken from [taxonomy](https://github.com/shadcn-ui/taxonomy).

**If you have some suggestions, feel free to create an issue.**

## Features

- Next.js `/app` dir,
- Routing, Layouts, Nested Layouts and Layout Groups
- Data Fetching, Caching and Mutation
- Loading UI
- Route handlers
- Metadata files
- Server and Client Components
- API Routes and Middlewares
- Authentication & Database using **Supabase**
- ORM using **Drizzle**
- UI Components built using **Shadcn/ui**
- Subscriptions using **Stripe**
- Styled using **Tailwind CSS**
- Validations using **Zod**
- Written in **TypeScript**
- Tested using **Jest** & **React Testing Library**

## Roadmap

- [x] ~Update README.md and add LICENSE.md~
- [x] ~Add skeleton for HomePage~
- [] Create dashboard for the actual visualizer
- [] Divide the visualizer into different routes, ie Sidebar, Visualizer, CodeEditor, ControlPanel, etc
- [] Add a modal/dialog for showing the performance of the algorithm when code is executed
- [] Make sure users can save their own code for the visualizer and share it with others, maybe from that modal
- [] Step by step guide for new users to show how the visualizer works
- [] Authenticate using oauth(google, github)
- [] Store data using PostgreSQL(Supabase)
- [] Create db-queries using Drizzle
- [] Add subscriptions using Stripe
- [] Fully responsive design
- [] Dark mode with system filter
- [] Internationalization(en, sw)
- [] Write test on algorithms and components
- [] Error reporting using Sentry
- [] Deploy to Vercel
- [] Button for scrolling to top
- [] Update favicon and logo

## Known Issues

A list of things not working right now:

1. This will be updated as soon as problems occur...

## Running Locally

1. Install dependencies using npm:

```sh
npm install
```

2. Copy `.env.example` to `.env.local` and update the variables.

```sh
cp .env.example .env.local
```

3. Start the development server:

```sh
npm run dev
```

## License

Licensed under the [MIT license](https://github.com/wev1n/algo-visualizer/blob/master/LICENSE.md).
