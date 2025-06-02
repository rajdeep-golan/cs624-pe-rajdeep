# Input  
The mobile app has four main tabs: CitiesNav, AddCity, CountriesNav, and AddCountry. In the **AddCity** tab, users can type in a city name along with its country to add a new city. The **AddCountry** tab allows users to add a country and its main currency. In **CountriesNav**, users can tap a country and add multiple currencies to it, each with a short description. The **CitiesNav** tab lets users select a city and attach various locations to it. All data is entered through form fields (TextInputs) and submitted via buttons like “Add City” or “Add Currency.”

# Process  
The app uses React Native and is structured with bottom tab navigation and nested stack navigators for screens that require deeper navigation. It manages data using local component state (`this.state`) inside the main App component. Functions such as `addCity`, `addCountry`, and `addCurrency` are defined in the App and passed down to child components through props. These functions update local arrays that store cities and countries. Navigation between lists and detail views (e.g., from country list to its currency detail) is handled using stack navigators.

# Output  
All user-submitted entries appear instantly in scrollable lists. If there’s no data yet, the app displays friendly messages like “No saved cities!” or “No currencies added!” The UI updates live as data is added, without needing to refresh, providing a smooth and user-friendly experience.
