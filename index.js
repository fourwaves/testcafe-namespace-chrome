import { Selector, t } from "testcafe";

fixture`Namespace with concurrency`.page`https://google.com`;

test("Test 1", async (t) => {
  await t.expect(Selector("textarea").exists).eql(true);
});

test("Test 2", async (t) => {
  await t.expect(Selector("textarea25235").exists).eql(true);
});

test("Test 3", async (t) => {
  await t.expect(Selector("textarea").exists).eql(true);
});

test("Test 4", async (t) => {
  await t.expect(Selector("textarea").exists).eql(true);
});

test("Test 5", async (t) => {
  await t.expect(Selector("textarea").exists).eql(true);
});

test("Test 6", async (t) => {
  await t.expect(Selector("textarea").exists).eql(true);
});

test("Test 7", async (t) => {
  await t.expect(Selector("textarea").exists).eql(true);
});
