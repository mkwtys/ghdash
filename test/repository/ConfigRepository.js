import assert from "assert";
import React from "react";
import { ConfigRepository } from "repository/ConfigRepository";

describe("repository/ConfigRepository", () => {
  it("save/get", async () => {
    const database = new Map();
    const repository = new ConfigRepository(database);
    const config = {
      oauth: {
        accessToken: "AccessToken"
      }
    };
    repository.save(config);
    assert.deepEqual(repository.get(), config);
    assert.deepEqual(repository.get(), database.get("config"));
  });

  it(`should throw error when don't save config`, () => {
    assert.throws(
      () => {
        const database = new Map();
        const repository = new ConfigRepository(database);
        repository.get();
      },
      error => {
        assert(error.message === "no config");
        return true;
      }
    );
  });
});
