const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");
const exp = require("constants");

// Feature 1 tests
Given("I am a user", function(){
  this.userType = "user";
});

When("I want to use the app", function(){
  this.actualAnswer = "online";
});

Then("I can find it {} to use", function(expectedAnswer){
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});


// Feature 2
Given("I am a SongSync user", function(){
  this.userType = "user";
});

When("I upload chordpro files or share links", function(){
  this.actualAnswer = "secure";
});

Then("I want the website to be {} so I don't have to worry about my data being compromised", function(expectedAnswer){
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});


// Feature 3
Given("I am a user of SongSync", function(){
  this.userType = "user";
});

When("I navigate through the website", function(){
  this.actualAnswer = "large";
});

Then("the buttons and icons should be {}", function(expectedAnswer){
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});
