import assert from "assert";
import isElectron from "util/isElectron";

describe("util/isElectron", () => {
  it("should return false in Node.js", () => {
    assert(isElectron() === false);
  });

  it("should return true when window.process.type is renderer", () => {
    let orgWindowProcess;
    let orgWindowProcessType;
    if (window.process && window.process.type) {
      orgWindowProcess = window.process;
      orgWindowProcessType = window.process.type;
    }
    window.process = {
      type: "renderer"
    };
    assert(isElectron() === true);
    if (orgWindowProcess) {
      window.process = orgWindowProcess;
    }
    if (orgWindowProcessType) {
      window.process.type = orgWindowProcessType;
    }
  });
});
