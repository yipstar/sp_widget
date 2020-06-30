import { module, test } from "qunit";
import { click, visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";
import { setupMirage } from "ember-cli-mirage/test-support";

module("Acceptance | widget", function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test("visiting / successfull widget flow", async function (assert) {
    await visit("/");

    assert.equal(currentURL(), "/widget/service");

    assert.dom(".step.step1 .clinician-name").hasText("Johnny Appleseed");

    await click(".cpt-codes .action-column .button");

    assert.dom(".step.step2 .step-content").hasText("Group Therapy 50 minutes");

    await click(".offices .button");

    assert
      .dom(".step.step3 .step-content")
      .hasText("Main Office Elise Drive Port Alyssonbury, NV 51859");
  });
});
