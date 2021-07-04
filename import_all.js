import "lit-html";
import "@lit/reactive-element";
export * from "lit-element/lit-element.js";

export * as locallize from "@lit/localize";

import * as labsMotion from "@lit-labs/motion";
import * as labsReact from "@lit-labs/react";
import * as labsSSRClient from "@lit-labs/ssr-client";
import * as labsTask from "@lit-labs/task";

export const labs = {
  motion: labsMotion,
  react: labsReact,
  ssrClient: labsSSRClient,
  task: labsTask,
};
