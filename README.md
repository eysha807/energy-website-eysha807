# Energy Consumption Website

## Description
This is a simple interactive website created as part of COS30045 Data Visualisation Exercise 0.2. The website includes three pages:
- **Home**
- **Televisions**
- **About Us**

It demonstrates the use of **HTML**, **CSS**, and **JavaScript**, with navigation between pages handled dynamically.

## Folder Structure
css/ # Styles for the webpage
js/ # JavaScript for interactivity
images/ # Placeholder for PowerIcon.png
data/ # Placeholder for data.csv (for later exercises)
index.html # Main HTML file
README.md # Project documentation


## Features
- Dynamic page navigation using JavaScript.
- Navigation bar with active page indicator and hover effects.
- Footer showing year, creator name, and GenAI acknowledgment.
- Placeholder content related to appliance energy consumption in the Australian market.

## Telling the story-

## Data Source:
The dataset contains a thorough collection of TVs sold in Australia and was initially instructed to research and collect as a component of the COS30045 unit. Every entry includes product details such as average mode power consumption, star ratings, screen size, screen technology, and brand_reg etc. 
Data Processing:
Firstly, I used KNIME to load and clean and preprocess the dataset:
•	Duplicate and unnecessary columns were filtered out.
•	unified conflicting brand names (e.g., "KOGAN," "Kogan," and "Kogan") by string manipulation.
•	Screen sizes were converted in cm to inches and categorised into small, medium, large for better understanding.
•	Calculated fields like average power consumption were also created.
•	Used GroupBy, String Manipulation, Math Formula, Rule Engine, and visualization nodes for summarization.


## Privacy:

There is no sensitive or private information in this dataset. All values related to product features, no personal details about anyone. There are no privacy concerns with this project.


Accuracy and Limitations:

Even though the dataset is quite large, it might not include all of the models that are accessible in Australia. Furthermore:

There are some inconsistent screen size measurements.

Manufacturers may self-report power ratings.

There can be a few small data entry errors or incorrect classifications.

Although trends are evident, they might not be applicable to every single product because our visualisations are based on aggregated insights.

## Ethics:
 
This task was dealt with from a consumer-awareness viewpoint. My goal is to educate, not to degrade or support for any one brand or item. I was  careful not to modify any data and all kNIME configurations were followed by unit resources. 




## Telling the story- 

1. TV Screen Technologies in Australia
Using a bar chart, I were able to determine the various screen technologies that are now on the market and observe that LED screens are the most popular, followed by LCD and OLED. This indicates that LED has become the industry standard because of its ability to balance cost and energy efficiency.
2. Most Frequent Screen Sizes
I started by analysing the screen technologies that are in the dataset. A bar chart showed that the market is dominated by LED panels, with LCD and OLED coming in second and third, respectively. This demonstrates how LED's cost-effectiveness and energy efficiency have made it the typical. I derived another screen size category maintaining upto 24 inches to small, 25-40 inches medium and 40-70+ inches to large. Then examined screen sizes according to the quantity of models offered using a bar chart. It became evident that Large screen size TVs are the most popular by classifying screen sizes and forming visual clusters, probably as a result of their widespread use in household living rooms.
3. Brand Variety
Each brand's range of TV models was displayed in a horizontal bar chart. After analysing I can see there are 79 Brands in this dataset. Stronger market competition among top brands is suggested by the widest range of models offered by companies like Samsung Electronics, LG, and Sony, while many others had restricted options.
4. Power Efficiency by Screen Technology
I used a horizontal bar chart to compare average power usage by screen type, and it was evident that OLED TVs consumed the most power on average, while LEDs were more energy-efficient overall.
5. Relationship Between Screen Size and Power Use
This result was presented using a scatter plot, and I noticed a strong positive correlation: as screen size increases, so does power usage. This figure clearly shows that larger screens consume more electricity on average.
6. Star Rating vs. Screen Size
I used a box plot to look at how energy star ratings vary by screen size. Mid-range sizes (40-50 inches) tended to have higher star ratings of 8.25, indicating a balance between size and energy economy.
7. Power Consumption by Brand
Finally, I used a multi-series bar chart to compare average power usage amongst brands. Some brands continually consumed more energy, but others maintained efficient power levels. This gives potential purchasers brand-level information about energy prices.





## GenAI Use (Exercise 2)
Some assistance was taken from GenAI (ChatGPT) to generate initial code structure, which was then modified and understood before use. All code has been reviewed and adjusted as necessary.

# AI Usage Declaration (Exercise 3 )

For Exercise 4.1 (Draw SVG House), I have used generative AI tools (ChatGPT) for guidance and learning purposes.

Details of AI assistance:
- Helped design the overall SVG structure, including house, garden path, trees, sun, flowers, and fence.
- Assisted in troubleshooting SVG errors and improving visual layout (such as moving trees to align with the ground, and making the fence symmetrical).
- Guided me on GitHub commands during conflict resolution (merge, commit, push) and writing commit messages.
- Explained the use of the <g> group element to group windows and apply shared styling.
- Provided advice on maintaining step-by-step planning and clean code practices.

Important:
- All code has been reviewed, understood, and manually edited by myself.
- AI tools were used as learning support only, not as direct code submission without personal effort.
- Final work was committed into my GitHub repository with proper version control.

# AI Usage Declaration - Exercise 4.2

For Exercise 4.2 (Manipulating and Adding Elements with D3.js), I used ChatGPT as a learning guide to:

- Understand how to use D3 to select, style, and append elements to the HTML document.
- Implement steps for adding a paragraph, creating an SVG container, and inserting a rectangle with specific attributes.
- Learn best practices for clean coding, file separation, and version control during the task.
- Resolve small errors related to JavaScript syntax and D3 chaining methods.

Demonstration of understanding:
- I manually applied styles to different HTML elements using D3.
- I appended paragraphs, SVGs, and rectangles independently.
- I organised the work step-by-step in a new JS file (`exercise4-2.js`) and made regular commits to my repository.

AI was used only to support my learning. All final work was created, reviewed, and pushed by myself.


## Author
Nusrat Jahan Eysha. 103502758. 
