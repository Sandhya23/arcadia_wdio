import * as homepage from '../../pageObjects/homepage'

module.exports = function () {
    this.Given(/^I am on the landing page$/, homepage.gotoPage)

    this.Then(/^I can see logo in navigation bar$/, homepage.hasLogo)

 	this.Given(/^I am viewing product list tops$/, function(){		
		console.log('in view tops');		
 		//console.log(browser.getTagName('*=Clothing'));
 		//browser.click('#Clothing a');
 		browser.url('http://www.topshop.com/en/tsuk/category/clothing-427');
 		browser.click('#firstli2');
 		browser.pause(1000);
 	});

 	this.Given(/^I filter the product list$/, function(){
 		console.log('in filter');
    	return browser.elements('label').value.filter(function (labels) {
      		if(browser.elementIdText(labels.ELEMENT).value === 'Colour') {
        	var selectBox = browser.element('#'+fieldName.toLowerCase()+'Select');
        	return selectBox.selectByValue('Black');
      		}
    	});
  	});

	
	//this.Given(/^I filter the product list$/, homepage.filterproductlist)
	
	//this.Given(/^I filter by option "([^"]*)"$/, homepage.filteroption)
	
	//this.Given(/^I select colour "([^"]*)"$/, homepage.selectcolour)
	
	//this.When(/^I apply these filters$/, hompeage.applyfilters)
	
	//this.Then(/^Filter button has 1 filter$/, homepage.nooffilteroptions)

	//this.Then(/^Filter returns a product list$/, homepage.filterproductlist)

}