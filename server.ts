import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { getBooks } from "./controller/bookController.ts";

const router = new Router();

router.get("/books", getBooks);

const app = new Application();
// app.use((ctx) => {
//   ctx.response.body = "Hello World!";
// });
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 4300 });