http://var-let-const-blog.azurewebsites.net/ 

# node-azure
So you want to run Node inside of Azure and you are a Mac developer. Let's take a look at what you need to do to get your website up and running. At [DevelopIntelligence](http://www.developintelligence.com) we have begun thinking through what it will take to make this work...

## Create Microsoft and Azure accounts
1. Hit up [Microsoft Azure's site](https://azure.microsoft.com/en-us/)
2. Click [Free Trial](https://azure.microsoft.com/en-us/pricing/free-trial/) or [Try it now](https://account.windowsazure.com/signup)
3. Create a Microsoft Account and verify your email address
    * You should now be automagically logged in
4. Fill out your information to begin free Azure trial
    * Name
    * Work Phone
    * Verification by phone (Phone number will be verified by Microsoft)
    * Verification by card (Credit card info is kept if you migrate to a paid plan)
    * Agreement (Check the box and click Sign up)
5. Wait
    * It takes a few minutes for Microsoft Azure to get initialized for you
    * Click the **Start managing my service** button to enter your Azure instance
    * Click through all the introduction stuff...
    
## Create an Azure Web Application
1. FYI: These commands differ if this is the first time into Azure or if you have been here before
2. If it is your first time into Azure follow this path
    * Select **WEB APP* within the **COMPUTE** menu
    * Select **QUICK CREATE**
    * Enter a name for the web app (e.g. kamrenz will become [http://kamrenz.azurewebsites.net/](http://kamrenz.azurewebsites.net/))
    * Select an **APP SERVICE PLAN** 
        * It is just going to be **Create new App Service plan**
    * Select a hosting **REGION** of the US
    * Click the **CREATE WEB APP** button
    * Switch to the **Azure Preview portal** by clicking the orange triangle with the exclamation point inside
        * Select the **TRY PREVIEW** button
3. If you happened to be viewing in the **Azure Preview portal** follow this path
    * Go to **Web Apps** and select **+ Add**
    * Enter a name for the web app (e.g. kamrenz will become [http://kamrenz.azurewebsites.net/](http://kamrenz.azurewebsites.net/))
        * Select a **Resource Group** and **App Service plan/Location**
        * Click **Create**
    * Your Azure server will now deploy the new website... this will take a few seconds
        * After deployment you will now see **kamrenz** listed as one of your Web Apps

## Create a GitHub Repository
1. Go to [GitHub](https://github.com) and create an account
    * It's free... live a little :)
2. Create a new repository 
    * Click the **+** button at the top of the website
    * Name your repository (e.g. node-azure)
    * Give it a description (e.g. "Playing with Azure and Node")
    * Keep it public
    * Don't check the **Initialize this repository with a README**
    * Click the **Create repository** button
3. Connect your local git to GitHub
    * Follow the GitHub instructions under **…or create a new repository on the command line** for your repo
    * Create a directory locally to hold your source code
    * Create a README for the project
        * Run in the terminal: `echo "# play" >> README.md`
    * Initialize git for your project
        * Run in the terminal: `git init`
    * Add the readme and commit it to git
        * Run in the terminal: `git add README.md`
        * Run in the terminal: `git commit -m "first commit"`
    * Link your local git to your GitHub repository
        * Run in the terminal: `git remote add origin https://github.com/kamrenz/play.git`
    * Push the code out to your GitHub repository
        * Run in the terminal: `git push -u origin master`
    
## Create a local application and host it
1. Open an editor and create an index.html page
    * You can use the one in this project (i.e. index.html)
    * Place this in the same directory as the README.md
2. Create a basic Node server file
    * You can use the one in this project (i.e. server.js)
3. Install lots of stuff to make Node run 
    * Install Xcode
        * It's a BIG download
        * This is available on the Apple App Store
        * Did I mention it's a BIG download
        * Make sure to open Xcode and agree to the licensing! 
    * Install [Homebrew](http://brew.sh/)
        * Homebrew is the missing package manager for OS X
        * Run the Ruby script found at Homebrew's site in your terminal
        * Run in the terminal: `brew -v` to make sure Homebrew is installed
    3. Install Node to run our server.js file
        * [Node](https://nodejs.org) is a JavaScript runtime
        * Run in the terminal: `brew install node` to install Node
        * By installing node you also get [NPM](https://www.npmjs.com/), the Node Package Manager for free!
        * Run in the terminal: `node -v` to make sure Node is installed
    4. Setup Node package management via a package.json file
        * This configuration file will keep track of the packages Node will be using 
            * Express is a package utilized for serving up web pages
        * In the terminal run: `npm init` to create a package.json file
            * Make sure you are in the directory where the server.js and index.html files are located
            * This will create the needed package.json file
            * Don't sweat too much the questions it asks you :)
            * P.S. **name** means application name not your name ;)
            * Say yes to let the package.json file be created
    5. Install the Express Web Framework
        * Express is a Node package
        * Express will be installed via the Node Package Manager
            * No worries NPM came with our install of Node
        * In the terminal where your package.json file is located run: `npm install express --save` to install Express to that local directory
        * Take a look at the package.json file and you will see express added to the dependencies list
4. Start Express and enjoy your site
    * In the terminal navigate to the directory where your server.js and index.html
    * Run: `node server.js` to start up your local server
    * Go to http://localhost:8080 to see your web page
        * If it works you should see `Hello Azure` in the browser
    * Nothing much to enjoy, I guess...
5. Push all files to GitHub
    * Run in terminal: `git add index.html`
    * Run in terminal: `git add package.json`
    * Run in terminal: `git add server.js`
    * Run in terminal: `git add node_modules`
    * Run in terminal: `git commit -m "adding server and files"`
    * Run in terminal: `git push -us origin master`
    
## Get Azure to play with your source code at GitHub
1. Install Azure CLI via NPM
    * Run in the terminal: `npm install azure-cli -g`
    * It will take a little bit of time
    * Run in terminal: `azure -v` to make sure the azure-cli has been installed
2. Login to Azure
    * Run in the terminal: `azure login`
    * You will be directed to a [website](https://aka.ms/devicelogin) asking you to authenticate
        * Enter the code from the terminal at the website
        * Click the **Continue** button
        * Select your account... 
    * In the terminal you will now see that the `login command OK` 
    * Run in the terminal: `azure site list` to check the list of your Azure sites
        * You should see the **Web App** you created in the Azure Web GUI
3. Get Azure to deploy your Node application
    * Generate deployment scripts
        * Run in the terminal: `azure site deploymentscript --node`
        * This will create 2 files in your project
            * deploy.sh
            * .deployment
        * Add/Commit/Push those files to GitHub
            * Run in terminal: `git add .deployment`
            * Run in terminal: `git add deploy.sh`
            * Run in terminal: `git commit -m "adding deployment scripts for Azure"`
            * Run in terminal: `git push -u origin master`
    * Turn on Azure Web App project level continuous integration
        * Go to the Microsoft Azure portal
        * Select your web application from **Web App** (e.g. kamrenz)
        * Within the **Settings** menu select **Continuous Deployment** 
        * Choose to **Configure required settings**
            * Select GitHub
        * Authorize and give permission for Azure to interact with your GitHub account
            * Click **OK**
        * Choose the appropriate GitHub project repository
            * In my case this would be **node-azure**
        * Keep the branch chosen at the default of **master**
        * Click **OK**
    * Wait  
        * Azure will notify you in the portal that the Continuous Integration has been setup propery
        * Azure will notify you that it is fetching the project from GitHub
    * Go to your Azure/Node hosted Web Application
        * This is simply the name of your **Web App** concatenated to **.azurewebsites.net**
        * In my case it is kamrenz.azurewebsites.net
        * You should see `Hello Azure` in the browser
    * How do you know Azure/IIS/Express is serving this up not just Azure/IIS?
        * Open up your browser developer tools
        * Look at the HTTP traffic
        * Check out the Headers for the call to your **Web App** (e.g. kamrenz.azurewebsites.net)
        * You will see 2 different X-Powered-By headers
            * `X-Powered-By: Express`
            * `X-Powered-By: ASP.NET`
        * If we just used IIS then we would only see the `X-Powered-By: ASP.NET`
 
  



