"use strict";

const supertest = require("supertest");
const { server } = require("../src/server.js");
const request = supertest(server);

describe("express server", () => {
  let idOfObj;
  it("should give status 404 because of a bad route", async () => {
    // arrange
    let route = "/badroute";
    let status = 404;
    // act
    const res = await request.get(route);
    // assert
    expect(res.status).toBe(status);
  });
  it("should give status 404 because of the use of delete on /foods, which is a bad method", async () => {
    // arrange
    let route = "/foods";
    let status = 404;
    // act
    const res = await request.delete(route);
    // assert
    expect(res.status).toBe(status);
  });



  // // trying to create a food object to the database 
  // it("should give status 201 and return a food object with foodName: baglawa and foodDescription: zaky", async () => {
  //   // arrange
  //   let route = "/foods";
  //   let status = 201;
  //   let objJson = {
  //     "foodName": "baglawa",
  //     "foodDescription": "zaky"
  //   }
  //   // act
  //   const res = await request.post(route).send(objJson);
  //   // console.log('createFood res >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ', res.body);
  //   // assert
  //   expect(res.status).toBe(status);
  //   expect(typeof res.body).toEqual("object");
  //   expect(res.body.foodName).toEqual("baglawa");
  //   expect(res.body.foodDescription).toEqual("zaky");

  //   idOfObj = res.body.id;
  // });

  // // trying to get all foods from the database 
  // it("should give status 200 and receive an object", async () => {
  //   // arrange
  //   let route = "/foods";
  //   let status = 200;
  //   // act
  //   const res = await request.get(route);
  //   // assert
  //   expect(res.status).toBe(status);
  //   expect(typeof res.body).toEqual("object");
  // });

  // // trying to get one food object from the database
  // it("should give status 201 and receive an object", async () => {
  //   // arrange
  //   let route = `/foods/${idOfObj}`;
  //   let status = 200;
  //   // act
  //   const res = await request.get(route);
  //   // assert
  //   expect(res.status).toBe(status);
  //   expect(typeof res.body).toEqual("object");
  //   expect(res.body.foodName).toEqual("baglawa");
  //   expect(res.body.foodDescription).toEqual("zaky");
  // });

  // // trying to update food object we created earlier
  // it("should give status 201 and receive an object", async () => {
  //   // arrange
  //   let route = `/foods/${idOfObj}`;
  //   let status = 200;
  //   let objJson = {
  //     "foodName": "bread",
  //     "foodDescription": "great"
  //   }
  //   // act
  //   const res = await request.put(route).send(objJson);
  //   // assert
  //   expect(res.status).toBe(status);
  //   expect(typeof res.body).toEqual("object");
  //   expect(res.body.foodName).toEqual("bread");
  //   expect(res.body.foodDescription).toEqual("great");
  // });

  // // 
  // it("should give status 201 and receive an object", async () => {
  //   // arrange
  //   let route = `/foods/${idOfObj}`;
  //   let status = 204;
  //   // act
  //   const res = await request.delete(route);
  //   // assert
  //   expect(res.status).toBe(status);
  //   expect(typeof res.data).toEqual("undefined");
  // });
});
