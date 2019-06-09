import { Given, When, Then } from 'cucumber';
import { browser } from 'protractor';
import { calculator } from '../pageObjects/calculator';
import chai from 'chai';

var expect = chai.expect;
let calc = new calculator();

Given('Landing on the home page', async () => {

    await browser.get('http://juliemr.github.io/protractor-demo/');

});

When('I enter the number {string} and {string}', async (string, string2) => {
    
    await calc.firstEditBox.sendKeys(string);
    await calc.secondEditBox.sendKeys(string2);

  });

When('Click on the submit button', async () => {

    await calc.go.click();

  });

Then('The result is a total number', async () => {
    
    await calc.getResults.getText().then(function(text) {
        console.log(text);
    })

  });

Then('This {string} is the total number', async (string) => {
    
    await calc.getResults.getText().then(function(text) {
        expect(text).to.equal(string);
    })

  });
