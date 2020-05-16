#!/usr/bin/env -S deno --allow-run --allow-read
import { datauri } from "./mod.ts";

console.log(
  await datauri(Deno.args[0]),
);
