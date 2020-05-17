import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import * as flags from "https://deno.land/std@v0.50.0/flags/mod.ts";
import { getBooks } from "./controller/bookController.ts";

const DEFAULT_PORT = 8080;
const argPort = flags.parse(Deno.args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;

if (isNaN(port)) {
  console.error("Port is not a number.");
  Deno.exit(1);
}
const router = new Router();

router.get("/books", getBooks);

const app = new Application();
// app.use((ctx) => {
//   ctx.response.body = "Hello World!";
// });
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: port, hostname: '0.0.0.0' });