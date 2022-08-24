import 'jest';
import app from "../src/app";
import request from "supertest";

describe('Get Clients', () => {
    
  it("list clients", async () => {
    const result = await request(app).get("/");
    expect(result.statusCode).toEqual(200);
  });
    
});