#!/usr/bin/env bash
set -euo pipefail

echo "==> Installing dependencies with legacy peer deps..."
npm install --legacy-peer-deps

echo "==> Generating Prisma Client..."
npx prisma generate

echo "==> Deploying Database Migrations..."
npx prisma migrate deploy

echo "==> Building Next.js Application..."
npm run build