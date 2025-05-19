## Part 1: Profile Display using Default Image and Hardcoded Personal Info 👤

### Input
The program takes static input in the form of hardcoded user data (e.g., name, email, and role) and a profile image file (`user.png`) used as the default avatar.

### Process
The component uses React Native’s `Image` and `Text` components to create a basic profile card. The `user.png` image is rendered as the profile picture. Personal information such as name, email, and role is displayed below the image using hardcoded values. These elements are wrapped in a `View` component and styled using `StyleSheet` to align and format the layout.

### Output
The program outputs a vertically-stacked profile card containing:

- A circular profile image at the top (`user.png`)
- The user’s name in bold
- The user’s email in smaller text
- The user’s role in a medium-sized font

All elements are centered on the screen using padding and alignment styles for clean visual presentation.
