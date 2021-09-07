import * as assert from "assert";
import { processFileInput } from "../src/processFileInput.js";

describe("Initial test for processingFileInput", () => {
  describe("when passed wrong type arguments or less than 2 args", () => {
    it("should throw an error", () => {
      assert.throws(() => processFileInput([]), Error);
    });
  });

  describe("When passed command line arguments", () => {
    it(" should return an array with 1st two and last argument removed and it should have length of 1 or more", () => {
      assert.equal(processFileInput(["nodeArg1","nodeArg2","arg1", "sort1"]).length, 1); // Recommended
    });
  });
});
