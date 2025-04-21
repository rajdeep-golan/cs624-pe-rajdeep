# Module 2: React Native Components👋

# Input

The program takes user input through a `TextInput` field labeled "Which course did you like?". Users can type the name or code of their favorite course into this field. The program also implicitly takes static input in the form of hardcoded lists of course names within the "Core Requirements", "Depth of Study", and "Capstone" sections. Additionally, it uses an image (`icon.png`) as a visual element.

# Process

When the user types into the `TextInput`, the `onChangeText` event updates the `favoriteCourse` state variable using the `setFavoriteCourse` function. The program then renders this `favoriteCourse` value (though it's not explicitly displayed elsewhere in this code). The program also iterates through the predefined arrays of course names for each section (Core Requirements, Depth of Study, Capstone) and displays each course within a `Text` component. Styling is applied to various elements (container, labels, input, sections, courses) using the `StyleSheet`.

# Output

The program outputs a scrollable view (`ScrollView`) containing: an icon image at the top, a label prompting for favorite course input, the `TextInput` field where users can enter text, and three distinct sections listing computer science course requirements. Each section has a highlighted title and a list of courses. The user's input in the `TextInput` is stored but not visibly rendered in this specific implementation beyond the input field itself.