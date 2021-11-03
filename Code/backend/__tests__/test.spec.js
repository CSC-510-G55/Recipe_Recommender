const request = require("supertest")("http://localhost:5501/api/v1");
const expect = require("chai").expect;

describe("GET /recipes", function () {
  it("is the API is functional", async function () {
    const response = await request.get("/recipes?CleanedIngredients=coconut");

    expect(response.status).to.eql(200);
  });

  it("is the API is fetching the filtered ingredient", async function () {
    const response = await request.get("/recipes?CleanedIngredients=pear");

    expect(response.body.filters.CleanedIngredients).to.eql("pear");
  });
});
