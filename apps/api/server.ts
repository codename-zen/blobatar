import worker from "./src/index";

const port = Number(process.env.PORT ?? 3000);

Bun.serve({ port, fetch: (request) => worker.fetch(request) });

console.log(`blobatar-api listening on :${port}`);
