# Build context is the repo root: the API needs the workspace build of `blobatar`.
FROM oven/bun:1.4.2 AS build
WORKDIR /src
COPY . .
RUN bun install --frozen-lockfile
RUN cd packages/blobatar && bun run build
RUN bun build apps/api/server.ts --target=bun --minify --outfile=/out/server.js

FROM oven/bun:1.4.2-slim
WORKDIR /app
COPY --from=build /out/server.js .
ENV PORT=3000
EXPOSE 3000
USER bun
CMD ["bun", "server.js"]
