export const gotoPage = () => {
    browser.url('http://topshop.com')
}

export const hasLogo = () => {
    console.log('before')
    var isvisible = browser.isVisible('#store_logo')
    console.log('logo ' + isvisible)
    browser.pause(1000)
    var visible = browser.isVisible('[href="http://www.topshop.com/en/tsuk/category/clothing-427/tops-443"]');
    console.log('href ' + visible)
}

//export const viewtops = () => {
//	console.log('in viewtops')
//	browser.click('#Clothing')
//	console.log('cliked clothing')
//}

