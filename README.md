 <div align="center">
    <img title="Outlier" src="https://fullclarity.co.uk/wp-content/uploads/2019/01/react-512.png" alt="React Logo" width="250" />
    <img title="TypeScript" alt="TypeScript" height=230
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png">
 </div>
<h1 align="center">
   React-Typescript <br>Countries Dashboard
</h1>

<p><font size="3">
  This is a Countries Dashboard Project built using <strong><em>React.JS</em></strong>, <strong><em>Typescript</em></strong> and <strong><em>Material-UI</em></strong>
  <br><br> 
	 This project is about building a dashboard that connects to an open-source API has information about all countries in the world, gets the data from the API, and displays it in a well-formatted table.

Then we should be able to apply 3 levels of filters (individually or combined) to this data.

First level: Search Filter:<br>
Where we can search in the countries name or capital or languages and display only the countries which have the search term in their name or capital or lanaguges.

Second level: Region Filter:<br>
Where we can filter the countries based on their region.

Third Level: Population Filter:<br>
Where we can filter the countries based on their population number.
  <br><br> 
  <strong><em>Take a look at the live version here:</em></strong> https://react-typescript-countries-dashboard.vercel.app/ :octocat: :heart_eyes:

</p>


## Table of Contents

- [Project Walk-Through](#project-walk-through)
  - [Start Page](#start-page)
  - [Search Filter](#search-filter)
  - [Region Filter](#region-filter)
  - [Population Filter](#population-filter)
  - [All Filters Combined](#all-filters-combined)
  - [Clear Filters](#clear-filters)
 - [Live Demo](#live-demo)
- [Technology Used](#technology-used)
- [How To Use](#how-to-use)
- [Author](#author)


# Project Walk-Through

 # Start Page
 

<div align="center"><a name="menu"></a>

![ScreenShot](https://github.com/AhmedTohamy01/Countries-Dashboard/blob/main/public/img/readme/start.png)
</div>


 In this page, all the filters are set to default state, where all countries are displayed on the screen without any filtration. 


 # Search Filter

In this page, there are 3 types of filtration 

***1) Search using Name Filter:***
The user can type any search term in the search field and all countries which have this search term in its name will display on the screen, the user doesn't need to click anything to search, it's all live search.

 <div align="center"><a name="menu"></a>

![ScreenShot](https://github.com/AhmedTohamy01/Countries-Dashboard/blob/main/public/img/readme/search-1.png)
</div>

***1) Search using Capital Filter:***
The user can type any search term in the search field and all countries which have this search term in its capiatl name will display on the screen, the user doesn't need to click anything to search, it's all live search.

 <div align="center"><a name="menu"></a>

![ScreenShot](https://github.com/AhmedTohamy01/Countries-Dashboard/blob/main/public/img/readme/search-2.png)
</div>

***1) Search using Langauge Filter:***
The user can type any search term in the search field and all countries which have this search term in its lanaguges will display on the screen, the user doesn't need to click anything to search, it's all live search.

 <div align="center"><a name="menu"></a>

![ScreenShot](https://github.com/AhmedTohamy01/Countries-Dashboard/blob/main/public/img/readme/search-3.png)
</div>


 # Region Filter

The user can select any region and only the countries which exist in this region will be displayed on the screen. 

<div align="center"><a name="menu"></a>

![ScreenShot](https://github.com/AhmedTohamy01/Countries-Dashboard/blob/main/public/img/readme/region.png)
</div>


 # Population Filter

The user can type any 2 numbers and only the countries which have population number between these 2 numbers will be displayed on the screen.


<div align="center"><a name="menu"></a>

![ScreenShot](https://github.com/AhmedTohamy01/Countries-Dashboard/blob/main/public/img/readme/pop.png)
</div>

 # All Filters Combined

The user can combine the search, region, and population filters and use it all together. 

Example: if the user type "al" & used the Name Checkbox & select "Europe Region" & typed "1000" - "3000000" in the population fields  , he will get all countries which has "al" in their name & exist in "Europe" & has population between "1000" - "3000000".


<div align="center"><a name="menu"></a>

![ScreenShot](https://github.com/AhmedTohamy01/Countries-Dashboard/blob/main/public/img/readme/all.png)
</div>

 # Clear Filters

The user can clear all filters and return it to the default state by click on one button which is "Clear Filters Button".


<div align="center"><a name="menu"></a>

![ScreenShot](https://github.com/AhmedTohamy01/Countries-Dashboard/blob/main/public/img/readme/clear.png)
</div>

# Live Demo

***Take a look on the live version here:*** https://react-typescript-countries-dashboard.vercel.app/ :octocat: :heart_eyes: 

# Technology Used

I have built this project using the following tools & techniques:
- React.JS
- Typescript
- React Hooks.
- Compound Components.
- JSX.
- Material UI.
- VSCode.


# How To Use

To be able to use this react app locally in a development environment you will need the following:

1) You will need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) installed on your computer.

2) Then From your terminal, you should do the following:

```cmd
# Clone this repository
git clone https://github.com/AhmedTohamy01/React-Typescript-Countries-Dashboard

# Go into the repository
cd React-Typescript-Countries-Dashboard

# Install dependencies
npm install 

# Run the app
npm run dev

```

4) Now you can see the project in your browser. 
Happy Hacking!


# Author

👤 **Ahmed Tohamy**
- Github: https://github.com/AhmedTohamy01
- Linkedin: https://www.linkedin.com/in/ATohamy
- Email: Ahmed-Tohamy@outlook.com
