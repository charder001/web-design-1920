# Web Design @cmda-minor-web 1920
For this project, the main challenge is applying exclusive, yes exclusive, design patterns to a prototype specifically made for one person with a special requirement. The exclusive design principles are as follows

* Observe situation
* Ignore conventions
* Prioritise identity
* Add nonsense

These principles are laid out to help us see a different side of design and make us always question our habits and patterns.
During this course, each group of students was assigned a person for whom we would create a prototype. In my case, this person was Marijn!

## Who is Marijn?
![68747470733a2f2f692e7974696d672e636f6d2f76692f385632357970685645496f2f6d617872657364656661756c742e6a7067](https://user-images.githubusercontent.com/43436118/80985602-bc2e9d00-8e2f-11ea-9db6-6d91effe1fad.jpg)
[Credit - UCD16 - Interview with Marijn Meijles](https://www.youtube.com/watch?v=8V25yphVEIo)

Marijn describes himself as driven, energetic, analytic and hates people that don't think.


## User scenario
During my 3 prototype test sessions i got to know Marijn as a friendly, witty, intelligent guy who happens to have a motor deficiency, which makes it harder for him to use a keyboard or mouse. He is also a massive nerd and metalhead, so there are plenty of options to create something awesome! 

For this exercise, i chose to develop a better way for Marijn to plan his transit journey from Eindhoven to Amsterdam and back.
This is his commute from home to work, where he generally wants to leave as soon as possible. This is usually one hour beforehand, since the transit personnel has to help him. 
Since most datepicker aren't exactly accessible, keeping the user experience as simple as possible will be the key to helping Marijn.

Here are some of my notes from my test sessions about Marijn and how he interacts with his macbook

* Shortcut keys to reduce amount of actions, repeated actions can strain Marijn
* Left hand on enter, shift, arrow keys
* Is also used to HJKL from VIM
* Track pad is operated by thumb
* Enlarge click area, but not too much, he can see just fine
* One primary action per screen, split up the action
* Likes retro design, old school nerd style!
* Eindhoven > Amsterdam and back. Monday till tuesday afternoon, plans one hour+ ahead so transit personnel can help him

## Test 1 - What's already out there?
<img width="359" alt="78996820-b05bfd80-7b45-11ea-9b3f-8c60157d92b7" src="https://user-images.githubusercontent.com/43436118/80986161-7920f980-8e30-11ea-89ea-9e8128e0d557.png">

For this test, we decided to see how Marijn interacts with the default input types in html. Here are some notes from this test
* Labels are as important as always, as they increase the click-able area and are just good practice
* Is able to navigate the default datepicker quite well, but is not very time efficient
* Marijn is able to use the track-pad well enough, as he uses it to click on the different inputs
* Text inputs however, are quite difficult
* Input fields could be larger
* Plans train journey 1 hour beforehand

## Test 2 - My first prototype
For this prototype, i wanted to try a different method of selecting a date, which will hopefully be easier for Marijn to use.
I did this by splitting day of the month selection into multiples of ten and single days. I also have a minimalist version of keyboard navigation to select different days, months and years, although this cant navigate between sections at the moment.
![marijn](https://user-images.githubusercontent.com/43436118/81084377-1134e680-8ef6-11ea-9c9f-765a46750fce.PNG)


![marijn2](https://user-images.githubusercontent.com/43436118/81084409-18f48b00-8ef6-11ea-98f5-5172b29d0426.PNG)

### Study situation
* Arrow key navigation
* Quicker way to change date
* Enlarged click area
* Useable without trackpad

### Ignore conventions
* Day of the month selection is split multiples of ten and single days, in order to try and increase efficiency

### Prioritise identity
* Metal song of the year
* Font
* Color pallete

### Add nonsense
* None

### Notes from the second test

* Marijn liked the font
* The day picker design clashed too much with his expectations of a normal datepicker
* Marijn never uses the tab key
* Arrow key functionality is still to sparse, could also use HJKL
* When the datepicker loses focus, it's hard to regain
* The 32nd of the month exists in this datepicker
* What is the fastest/easiest/most metal way of picking a date?
* What is the user story?
* He liked the song of the year
* Marijn does not have a right control key

### Conclusion
* Split day of the month picker did not work as expected
* Don't use right control or tab, do use arrow keys and HJKL
* Needs more personality
* Needs more nonsense
* Need to create a user story
* Need to improve efficiency for Marijn specifically

## Test 3 - the final prototype
for this prototype, i completely overhauled my concept. While my first idea was to have the datepicker as the main focus of my design, i opted to make things as simple as possible for Marijn. The homescreen of the website contains a few links where Marijn can plan his daily commute by selecting if he wants to go to or from Amsterdam in an hour, as this is his most used route. 
![marijn3](https://user-images.githubusercontent.com/43436118/81106483-fc684b00-8f15-11ea-9ca4-ec0755bd4201.PNG)

Based on the feedback from the last testing session, i also added HJKL and arrow key navigation throughout every part of the website.
Another big change has been the datepicker, which looks a lot more like a traditional calendar, and allows for arrow key and hjkl navigation and wraparound.

![marijn4](https://user-images.githubusercontent.com/43436118/81107480-8ebd1e80-8f17-11ea-8d8b-bfb4cdf26450.PNG)

### Study situation
* Arrow key navigation
* Calenday style date picker
* Enlarged click area
* Useable without trackpad
* Created user story

### Ignore conventions
* Tab is not used in this concept, navigation happens through HJKL and the arrow keys

### Prioritise identity
* Randomly generated playlist
* Font
* Color pallete

### Add nonsense
* None

### Notes from testing
* Marijn quite liked the simplicity of my concept
* Datepicker needs to default to the current day
* Marijn also liked the generated spotify playlist based on his travel time
* The HJKL was a big improvement compared to my last prototype
* Wraparound wasn't perfect
* App could use a little bit more of Marijns personality
* App needs more nonsense
* Even though Marijn actually books from a different webpage, this is fine for demonstrative purpouses, since i can't get to his own login page, sadly.
* Playlist was only noticed when i pointed it out

### Conclusion
* Needs more nonsense and personality
* Big improvements in usabillity, because of the HJKL, better date picker and MUCH simpler concept
* Missing defaul state in date picker and month/time selection

## Final prototype
After the 3rd test, i went and implemented some of the finishing touches and final feedback from Marijn and Vasillis.
These include

* Nonsense, in the form of an adventure! button, which takes you to a random station in the Netherlands
* Added fire to the playlist link to make it stand out more
* Made all the links in the landing page the same length, to avoid a shorter one looking like a submit button
* Added NONSENSE guitar riff and shake on hover over the spotify link
* Ignored conventions even more by adding a date and time picker which uses keys to avoid tab navigation

![marijn5](https://user-images.githubusercontent.com/43436118/81108559-2a02c380-8f19-11ea-8af2-a73a36e4c7e1.PNG)

![marijn6](https://user-images.githubusercontent.com/43436118/81108561-2a9b5a00-8f19-11ea-95cb-9daa103a8df6.PNG)


<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- This would be a good place for your data life cycle ♻️-->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜  -->

[rubric]: https://docs.google.com/spreadsheets/d/e/2PACX-1vSd1I4ma8R5mtVMyrbp6PA2qEInWiOialK9Fr2orD3afUBqOyvTg_JaQZ6-P4YGURI-eA7PoHT8TRge/pubhtml
