// Function to change content based on page selection
function loadPage(page) {
    const content = document.getElementById('content');

    if (page === 'home') {
        content.innerHTML = `
            <h1>Welcome to the Energy Consumption Website</h1>
            <p>This is a placeholder for home page content related to appliance energy consumption in the Australian market.</p>
            <h2>Data Story</h2>
        <p><strong>Data Source:</strong><br>
            The dataset contains a thorough collection of TVs sold in Australia and was initially instructed to research
            and collect as a component of the COS30045 unit. Every entry includes product details such as average mode
            power consumption, star ratings, screen size, screen technology, and brand_reg etc.</p>

        <p><strong>Data Processing:</strong><br>
            Firstly, I used KNIME to load and clean and preprocess the dataset:
        <ul>
            <li>Duplicate and unnecessary columns were filtered out.</li>
            <li>Unified conflicting brand names (e.g., "KOGAN," "Kogan," and "Kogan") by string manipulation.</li>
            <li>Screen sizes were converted in cm to inches and categorised into small, medium, large for better
                understanding.</li>
            <li>Calculated fields like average power consumption were also created.</li>
            <li>Used GroupBy, String Manipulation, Math Formula, Rule Engine, and visualization nodes for summarization.
            </li>
        </ul>
        </p>

        <p><strong>Privacy:</strong><br>
            There is no sensitive or private information in this dataset. All values related to product features, no
            personal details about anyone. There are no privacy concerns with this project.</p>

        <p><strong>Accuracy and Limitations:</strong><br>
            Even though the dataset is quite large, it might not include all of the models that are accessible in
            Australia. Furthermore:
        <ul>
            <li>There are some inconsistent screen size measurements.</li>
            <li>Manufacturers may self-report power ratings.</li>
            <li>There can be a few small data entry errors or incorrect classifications.</li>
            <li>Although trends are evident, they might not be applicable to every single product because our
                visualisations are based on aggregated insights.</li>
        </ul>
        </p>

        <p><strong>Ethics:</strong><br>
            This task was dealt with from a consumer-awareness viewpoint. My goal is to educate, not to degrade or
            support for any one brand or item. I was careful not to modify any data and all kNIME configurations were
            followed by unit resources.</p>

        <h2>Telling the story</h2>

        <h3>1. TV Screen Technologies in Australia</h3>
        <p>Using a bar chart, I were able to determine the various screen technologies that are now on the market and
            observe that LED screens are the most popular, followed by LCD and OLED. This indicates that LED has become
            the industry standard because of its ability to balance cost and energy efficiency.</p>
        <img src="images/Bar chart question 1.png" alt="Bar chart question 1">

        <h3>2. Most Frequent Screen Sizes</h3>
        <p>I started by analysing the screen technologies that are in the dataset. A bar chart showed that the market is
            dominated by LED panels, with LCD and OLED coming in second and third, respectively. This demonstrates how
            LED's cost-effectiveness and energy efficiency have made it the typical. I derived another screen size
            category maintaining upto 24 inches to small, 25-40 inches medium and 40-70+ inches to large. Then examined
            screen sizes according to the quantity of models offered using a bar chart. It became evident that Large
            screen size TVs are the most popular by classifying screen sizes and forming visual clusters, probably as a
            result of their widespread use in household living rooms.</p>
        <img src="images/Bar Chart question 2.png" alt="Bar Chart question 2">

        <h3>3. Brand Variety</h3>
        <p>Each brand's range of TV models was displayed in a horizontal bar chart. After analysing I can see there are
            79 Brands in this dataset. Stronger market competition among top brands is suggested by the widest range of
            models offered by companies like Samsung Electronics, LG, and Sony, while many others had restricted
            options.</p>
        <img src="images/Bar Chart question 3.png" alt="Bar Chart question 3">

        <h3>4. Power Efficiency by Screen Technology</h3>
        <p>I used a horizontal bar chart to compare average power usage by screen type, and it was evident that OLED TVs
            consumed the most power on average, while LEDs were more energy-efficient overall.</p>
        <img src="images/Bar chart question 4.png" alt="Bar chart question 4">

        <h3>5. Relationship Between Screen Size and Power Use</h3>
        <p>This result was presented using a scatter plot, and I noticed a strong positive correlation: as screen size
            increases, so does power usage. This figure clearly shows that larger screens consume more electricity on
            average.</p>
        <img src="images/scatter plot for question 5.png" alt="Scatter plot question 5">

        <h3>6. Star Rating vs. Screen Size</h3>
        <p>I used a box plot to look at how energy star ratings vary by screen size. Mid-range sizes (40-50 inches)
            tended to have higher star ratings of 8.25, indicating a balance between size and energy economy.</p>
        <img src="images/box plot for question 6.png" alt="Box plot question 6">

        <h3>7. Power Consumption by Brand</h3>
        <p>Finally, I used a multi-series bar chart to compare average power usage amongst brands. Some brands
            continually consumed more energy, but others maintained efficient power levels. This gives potential
            purchasers brand-level information about energy prices.</p>
        <img src="images/bar chart question 7.png" alt="Bar chart question 7">
        `;
    } else if (page === 'television') {
        content.innerHTML = `
            <h1>Televisions Energy Consumption</h1>
            <p>Placeholder content about televisions' energy consumption in Australia.</p>
        `;
    } else if (page === 'about') {
        content.innerHTML = `
            <h1>About Us</h1>
            <p>This website is created as part of COS30045 Data Visualisation exercises to demonstrate simple interactive web design.</p>
        `;
    }

    // Update active link highlighting
    document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
    document.getElementById(`${page}-link`).classList.add('active');
}

// Add event listeners for navigation links
document.getElementById('home-link').addEventListener('click', function (e) {
    e.preventDefault();
    loadPage('home');
});

document.getElementById('television-link').addEventListener('click', function (e) {
    e.preventDefault();
    loadPage('television');
});

document.getElementById('about-link').addEventListener('click', function (e) {
    e.preventDefault();
    loadPage('about');
});

// Add click event to logo to return to Home
document.getElementById('logo').addEventListener('click', function () {
    loadPage('home');
});
