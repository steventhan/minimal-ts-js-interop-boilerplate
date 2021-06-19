import { hello } from "../src";
import assert from "assert";

describe("Import", () => {
  it("should return correct string", () => {
    assert.strictEqual(hello(), "hello world");
  });
});
