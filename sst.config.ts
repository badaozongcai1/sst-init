/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  // Your app's config
  app(input) {
    return {
      name: "sst-init",
      // region us-east-1
      // 这个节点速度快
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  // Your app's resources
  async run() {
    new sst.aws.Nextjs("MyWeb", {
      server: {
        edge: {
          viewerRequest: {
            injection: ``,
          },
        },
      },
    });
  },
});
