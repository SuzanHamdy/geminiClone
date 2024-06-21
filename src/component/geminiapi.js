 

// node --version # Should be >= 18
// npm install @google/generative-ai

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from"@google/generative-ai";
  const ApiKey = "AIzaSyClP3b2_K44d06kMICOSUfWA9QYiBlbqek"
  const MODEL_NAME = "gemini-1.5-pro-latest";
  const API_KEY = ApiKey;
  
  async function runChat(prompt) {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  
    const generationConfig = {
      temperature: 1,
      topK: 0,
      topP: 0.95,
      maxOutputTokens: 8192,
    };
  
    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];
  
    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [
        {
          role: "user",
          parts: [{ text: "what is react"}],
        },
        {
          role: "model",
          parts: [{ text: "## React: A JavaScript Library for Building User Interfaces\n\nReact, often referred to as React.js or ReactJS, is a popular JavaScript library used for building user interfaces (UIs). It's particularly well-suited for creating single-page applications (SPAs) and dynamic, interactive web experiences. Here's a breakdown of its key aspects:\n\n**Core Concepts:**\n\n* **Components:** The building blocks of React applications. They are reusable pieces of code that encapsulate both the UI and functionality of a specific part of the application. \n* **JSX:** A syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript, making it easier to visualize the structure of your UI components.\n* **Virtual DOM:** React creates a virtual representation of the actual DOM (Document Object Model) in memory. This allows for efficient updates and rendering, as React only updates the parts of the actual DOM that have changed.\n* **State and Props:** These are mechanisms for managing data within components. State holds data that can change over time, while props are used to pass data down from parent to child components.\n\n**Benefits of using React:**\n\n* **Declarative:** You define what the UI should look like for a given state, and React takes care of updating the DOM efficiently.\n* **Component-Based:** Promotes code reusability and modularity, making it easier to maintain and scale applications.\n* **Performance:** The virtual DOM and efficient rendering algorithms lead to smooth and responsive UIs.\n* **Large Community and Ecosystem:** Extensive community support, numerous libraries and tools available.\n\n**Learning React:**\n\n* **Official Documentation:** React has comprehensive documentation and tutorials available on its website.\n* **Online Courses and Tutorials:** Many platforms offer free and paid courses on React development.\n* **Community Resources:** Active online communities and forums provide support and answer questions.\n\n**Popular Use Cases:**\n\n* **Single-Page Applications (SPAs):** Building dynamic web applications where content updates without full page reloads.\n* **Interactive Dashboards and Data Visualizations:** Creating data-driven interfaces with charts, graphs, and other visual elements.\n* **Mobile App Development:** React Native allows you to build native mobile apps using React concepts.\n* **Cross-Platform Development:** Building applications that can run on web, mobile, and desktop platforms."}],
        },
      ],
    });
  
    const result = await chat.sendMessage(prompt);
    const response = result.response;
    // console.log(response.text());
    return response.text();
  }
  
  export default runChat;






