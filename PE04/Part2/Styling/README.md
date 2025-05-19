## Part 2: Gallery of Profile Cards with Flexbox Layout and Expand/Collapse Behavior 🧩

### Input
The component uses static input by defining an array of hardcoded profile data, each including `name`, `email`, `role`, and an image (`user.png`). 

The expand/collapse functionality is user-driven — users can tap on a card to toggle its size.

### Process
The layout uses **Flexbox**, applying techniques from **Section 5.3 “Using flexbox to lay out components”** of the textbook  
_Dabit, N. (2019). React Native in Action. Manning Publications (ISBN 9781617294051)_.

- Profiles are displayed in a responsive grid format using `flexDirection`, `flexWrap`, and spacing.
- Each profile card is a touchable component that expands or collapses on tap using local state.
- The styling dynamically adjusts based on whether a card is expanded or in thumbnail view.

### Output
The program outputs a responsive scrollable screen (`ScrollView`) containing:

- A grid of 6 profile cards showing a profile picture and name.
- Tapping a card expands it to show full details (email and role).
- Tapping again collapses it back into a thumbnail.
- The layout adapts to screen sizes using Flexbox-based styling for clean, wrapped rows of cards.
