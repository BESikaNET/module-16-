export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:response", (response) => {
    if (!response || response.body == null) {
      return;
    }

    let body: string | undefined;

    if (typeof response.body === "string") {
      body = response.body;
    } else if (Buffer.isBuffer(response.body)) {
      body = response.body.toString("utf-8");
    } else if (response.body instanceof Uint8Array) {
      body = new TextDecoder("utf-8").decode(response.body);
    } else if (response.body instanceof ArrayBuffer) {
      body = new TextDecoder("utf-8").decode(new Uint8Array(response.body));
    }

    if (!body) {
      return;
    }

    response.body = body.replace(
      /(href|src)="([^"]+)"/g,
      (match, attribute, url) => {
        return `${attribute}="${encodeURI(url)}"`;
      },
    );
  });
});
