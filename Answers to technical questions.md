# Answers to Technical Questions

**How long did you spend on the technical test?**

    It took me approximately two days on the technical test. But if I was to count hours 
    collectively it took me 16 hours 
    
**What would you add to your solution if you had more time?**
    
    I am happy with the structure of the test framework so I wouldnt add much there but if 
    I had more time I would probably make the filters test more robust. Even though I spent
    the longest on that scenario. The other two I was done with in an hour. Still I 
    think the function which gives the list of open restaurants cuisines could be made
    more robust. Also the the scenario itself is more tricky because sometimes some open
    restaurants dont have the cuisine info at all which is why I collated all the cuisines
    for all open restaurants and then asserted the filter againts it

    
**If you didn't spend much time on the technical test then use this as an opportunity to explain what you would add.**
  
    I think instead of the scenario that tests the change location. I would either add one for the search dish 
    in the typeahead or maybe even an end to end one that starts from searching against a postcode and going all
    the way to the payment page verifing the things in the basket. But I noticed that just eat as a website had a lot of
    variables as far as info is concerned so automating the whole end to end journey may have been more time consuming 
  
**What do you think is the most interesting trend in test automation?**

    The most interesting trend from a UI perspective is more tools available in the market as opposed to 
    selenium which was the defacto.
    
    Also the machine learning and AI coming into the field of test automation and whether
    it will be to cater to the demands of cross browser automation because even though many products 
    (Browserstack or Sauce Labs etc ) are available in the market  to support it. The test automation tools itself dont provide 
    the support for the wide spectrum of browsers that are needed to test.
    
    Lastly how test automation and development or test automation and devops is merging into one role. Especially
    when it comes to non functional testing like performance.
    
  
**How would you implement test automation in a legacy application? Have you ever had to do this?**
  
    Yes I have had to implement test automation in an appplication whose backend architecture was roughly 12
    years old when I joined but they were revamping the front end and the user experience. In that sense because 
    the pages were being given a new look and feel it was a user experience transformation of sorts and so the test
    automation framework that I ended up writing was growing as the redsign was happening. 
    
    At the same time UI test automation is about the workflows of an app and so I had to spend considerable time 
    with the customer service team as some colleagues had knowledge from the first version of the application and would be able to 
    advise me on which workflows to test and automating which workflows would be a waste of time as we would go in 
    circles.
    
    The other example is when I had to convert a legacy test automation framework written in Java to Ruby for 
    payments systems of an web app. Now because I had come from C# , Ruby and Java background understanding the code wasnt tricky. 
    However there was alo of   duplication in terms of business cases for which again I spent a considerable time with the developer
    who had developed the previous version of the payment system and who were revampng it now too. So that I could understand the crux 
    of the business cases well
    
    
**How would you improve the customer experience of the Just Eat website?**

    I think that the open retaurants page which you land on upon search a postcode could do with some improvisation. Primarily from a data perspective. Some restaurants are filtered even though they dont have no cuisine info. I understand that the front end web app maybe data agnostic and may be dependent on the api thats its consuming possibly third party. Still its a conversation that the stakeholders and devs need to have to give better info. Same goes for rating of restaurants . Some restaurants ahve no rating at all this I find a bit misleading. Lastly when you search for a dish in the typeahead on open restaurants page. 
    The results again dont always match.
