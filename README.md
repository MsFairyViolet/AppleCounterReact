This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

# AppleCounterReact

## Creating and Releasing

To create a new release, take the following steps:
- Build a new docker image
- Push the docker image to the private docker registry
- Pull the new docker image on the server

## Building a new image

Building a new docker image:

```bash
docker build -t apple-counter-react .
```

## Pushing the image

Make sure you are logged in to the private docker registry:
```bash
docker login registry.rmspek.nl -u [user]
```


```bash
docker tag apple-counter-react:latest registry.rmspek.nl/apple-counter-react:latest
docker push registry.rmspek.nl/apple-counter-react:latest
```

## Pulling the image on the server

```bash
ssh rmspek.nl
cd /opt/docker/
docker compose pull apple-counter-react
docker compose restart apple-counter-react
```
