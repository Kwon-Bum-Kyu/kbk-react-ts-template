import { beforeAll } from "vitest";
import { setProjectAnnotations } from "@storybook/react-vite";
import { render } from "@testing-library/react";
import * as projectAnnotations from "./preview";

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
const annotations = setProjectAnnotations([
  projectAnnotations,
  {
    testingLibraryRender: render,
  },
]);

beforeAll(annotations.beforeAll);
