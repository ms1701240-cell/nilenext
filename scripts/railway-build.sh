#!/usr/bin/env bash
set -ex


npx prisma migrate deploy


npm run build