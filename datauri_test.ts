import { assertStrContains, posix, dirname } from "./test_deps.ts";

Deno.test("Datauri cli", async () => {
  const proc = Deno.run({
    cmd: [
      "deno",
      "run",
      "--allow-read",
      posix.join(dirname, "./datauri.ts"),
      "test.gif",
    ],
    stdout: "piped",
  });

  const stdout = new TextDecoder("utf-8").decode(await proc.output());

  assertStrContains(
    stdout,
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    "Should create datauri",
  );

  proc.close();
});
