# datauri 🦕
[Module](#Module) and [CLI](#CLI) to generate [Data URI scheme](http://en.wikipedia.org/wiki/Data_URI_scheme).

![.github/workflows/deno.yml](https://github.com/data-uri/datauri-deno/workflows/.github/workflows/deno.yml/badge.svg)

>  The data URI scheme is a uniform resource identifier (URI) scheme that provides a way to include data in-line in web pages as if they were external resources.

from: [Wikipedia](http://en.wikipedia.org/wiki/Data_URI_scheme)

## Modude
Datauri requires `--allow-read` flag to be executed successfully.

### Usage
```typescript
import { datauri } from "https://deno.land/x/datauri/mod.ts";

const helloWorld = await datauri("assets/image.gif");
console.log(helloWorld); // data:image/gif,base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7
```

## CLI
To install datauri cli:

```bash
deno install -f --allow-run --allow-read https://deno.land/x/datauri/datauri.ts
```

### Usage
```bash
datauri assets/image.jpg
```

Pipe is also supported:

```bash
datauri assets/image.jpg | pbcopy
```

## [Release notes](https://github.com/data-uri/datauri-deno/releases)

## License

MIT License

(c) [Data-URI.js](https://github.com/data-uri)

(c) [Helder Santana](https://heldr.com)
