![Status](https://img.shields.io/badge/status-In%20Development-yellow)

<h1 align="center">Salesforce Platform - External Embedded Flows</h1>
<p align="center">Lightning Outta This World</p> 

This repo contains a practical example of a working embedded flow, which can be integrated into any non-Salesforce external website and allow visitors of a website or app to interact with Salesforce without logging into it or otherwise accessing it.

This particular feature has a number of super useful applications, and it's a lesser-known aspect of the digital engagement and Service Cloud side of our Customer 360 Platform

## Use Case

In this example, a customer wants to embed a form on their existing website that collects data and creates records inside of Salesforce based on the user input. The user is already logged in to the customer's existing website, so ideally we'd be able to prefill information in the embedded flow to streamline the process.

## Implementation

To accomplish this use case, we're using a few different features:

- We've enabled Embedded Flows using the Embedded Service Deployment feature
- We've passed information from the authentication context in the custom website to the Flow by dynamically adjusting the JavaScript code for the Embedded Service Deployment to pass in the variables to the Flow via Flow URL Variables
- We use the passed-in values to fetch the appropriate data in the Salesforce DB
- We pre-fill the form appropriately with thos evalues

Well, anyway, that's what could have worked, but alas, Embedded Service Flows don't support passing in variables this way.

## Setup Instructions

If you're familiar with SFDX, you'll have everything you need herein to provision a scratch org with the feature enabled. The HTML file included in this repo is an example of a simple website that embeds the JavaScript.

1. Clone the repo
2. Authorize your Dev Hub from VSCode
3. Create a new Scratch Org from the definition herein
4. Log into the Scratch Org and retrieve the JavaScript embed code from the Embedded Service section of Setup.
5. Update the JS code in the repo to use the unique one for your scratch org.
6. Deploy the HTML page somewhere (e.g., jsfiddle.net)
4. Update your `CORS` settings in the Scratch Org to whitelist the web page URL you've deployed

## Test Version
I've got a developer org that I use to demo this. The username is `fcaron+embedtest@salesforce.com`. While the Scratch Org is alive, you can test [here](https://jsfiddle.net/wp7g413h/7/).

## Documentation

This is a demonstration of the "Embedded Service" feature of Salesforce, and we're using a few neat tricks that Flows supports on the platform to make the magic. Check the following docs for more info.

* [Working with Embedded Flows](https://help.salesforce.com/articleView?id=embedded_flows_setup.htm)
* [Creating An Embedded Service Deployment](https://help.salesforce.com/articleView?id=snapins_create_deployment.htm&type=5)
* [Passing Variables Into A Flow Via Its URL](https://help.salesforce.com/articleView?id=flow_distribute_internal_url_variable.htm&r=https%3A%2F%2Fwww.google.com%2F&type=5)
* [Customizing the Embedded Flow UI Visually](https://help.salesforce.com/articleView?id=snapins_chat_customize_code.htm&type=5)

# Questions?

Made with love by Frank Caron.
