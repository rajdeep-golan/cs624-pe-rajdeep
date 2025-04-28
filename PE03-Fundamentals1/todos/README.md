# Module 3: React Native Fundamentals 1👋

# Input
The input for this app is the text entered by the user into the input field. This text represents a new to-do item that the user wants to add to their to-do list. When the user types in the input box and presses the "Add" button, the input value is captured and sent for further processing.

# Process
When the user enters text and clicks the "Add" button, an event handler function is triggered. This function takes the current input value and updates the application's state by adding the new to-do item to an array of todos. The state management is handled using `setState()`, ensuring the UI automatically re-renders to reflect the updated list. At the same time, the newly added item is logged in the console for verification and debugging purposes.

# Output
The updated list of todos is displayed on the screen below the input field. Each new entry immediately appears after the user adds it. The terminal also logs each new todo item successfully.
