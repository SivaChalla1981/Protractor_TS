"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const calculator_1 = require("../pageObjects/calculator");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let calc = new calculator_1.calculator();
cucumber_1.Given('Landing on the home page', () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
}));
cucumber_1.When('I enter the number {string} and {string}', (string, string2) => __awaiter(this, void 0, void 0, function* () {
    yield calc.firstEditBox.sendKeys(string);
    yield calc.secondEditBox.sendKeys(string2);
}));
cucumber_1.When('Click on the submit button', () => __awaiter(this, void 0, void 0, function* () {
    yield calc.go.click();
}));
cucumber_1.Then('The result is a total number', () => __awaiter(this, void 0, void 0, function* () {
    yield calc.getResults.getText().then(function (text) {
        console.log(text);
    });
}));
cucumber_1.Then('This {string} is the total number', (string) => __awaiter(this, void 0, void 0, function* () {
    yield calc.getResults.getText().then(function (text) {
        expect(text).to.equal(string);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbml0aW9ucy9ob21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMkNBQXFDO0FBQ3JDLDBEQUF1RDtBQUN2RCxnREFBd0I7QUFFeEIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUU1QixnQkFBSyxDQUFDLDBCQUEwQixFQUFFLEdBQVMsRUFBRTtJQUV6QyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7QUFFbkUsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywwQ0FBMEMsRUFBRSxDQUFPLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRTtJQUV2RSxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFN0MsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVMLGVBQUksQ0FBQyw0QkFBNEIsRUFBRSxHQUFTLEVBQUU7SUFFMUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRXhCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFTCxlQUFJLENBQUMsOEJBQThCLEVBQUUsR0FBUyxFQUFFO0lBRTVDLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUE7QUFFSixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUwsZUFBSSxDQUFDLG1DQUFtQyxFQUFFLENBQU8sTUFBTSxFQUFFLEVBQUU7SUFFdkQsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7UUFDOUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQyxDQUFDLENBQUE7QUFFSixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=