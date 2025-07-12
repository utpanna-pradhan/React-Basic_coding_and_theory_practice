What is React?
React is a JavaScript library used for building user interfaces, especially for single-page applications.

Who developed React?
React was developed by Facebook.

What is JSX?
JSX is a syntax extension for JavaScript that looks similar to XML or HTML and is used with React to describe UI components.

Can browsers read JSX directly?
No, browsers cannot read JSX directly. JSX must be transpiled to JavaScript using tools like Babel.

What is a component in React?
A component is a reusable piece of UI in React, which can be a class or a function.

Difference between functional and class components?
Functional components are stateless and use hooks; class components can manage state using lifecycle methods.

What is a state in React?
State is an object that holds data specific to a component and can change over time.

What is props in React?
Props are short for properties and are used to pass data from one component to another.

Can you modify props?
No, props are read-only and cannot be modified.

What is a hook in React?
Hooks are functions that let you use state and lifecycle features in functional components.

What is useState hook?
useState is a hook that allows you to add state to functional components.

What is useEffect hook?
useEffect is a hook that lets you perform side effects like data fetching or DOM manipulation in functional components.

When does useEffect run?
useEffect runs after the component renders. You can control when it runs by passing dependencies.

What is virtual DOM?
The virtual DOM is a lightweight copy of the real DOM used by React to optimize rendering.

How does React update the DOM?
React compares the virtual DOM with the real DOM and only updates the parts that changed (reconciliation).

What is a key in React lists?
A key is a unique identifier used to improve performance when rendering lists of elements.

What is lifting state up?
Lifting state up refers to moving shared state to a common ancestor component.

What is a controlled component?
A controlled component has its form data controlled by React state.

What is an uncontrolled component?
An uncontrolled component uses the DOM to manage form data.

What is prop drilling?
Prop drilling is the process of passing props down multiple levels of components.

What are fragments in React?
Fragments let you group multiple elements without adding extra nodes to the DOM.

What is the purpose of defaultProps?
defaultProps are used to provide default values to props if no value is passed.

What is the difference between state and props?
Props are passed to components; state is managed within components.

How to pass a function as a prop?
By passing a reference to the function in curly braces: <Child onClick={handleClick} />

What is conditional rendering?
Conditional rendering is displaying content based on a condition using if-else or ternary operators.

What is the return value of useState?
An array with two values: the current state and a function to update it.

How do you update state in React?
By calling the state updater function, e.g., setCount(count + 1).

What are synthetic events in React?
Synthetic events are React's cross-browser wrapper around the browser's native events.

What is the purpose of useRef hook?
useRef returns a mutable object that persists across renders and can access DOM elements.

Can we use async/await inside useEffect?
Not directly, but you can define an async function inside and call it.

What is reconciliation in React?
Reconciliation is the process of updating the DOM by comparing the new virtual DOM with the previous one.

How to handle forms in React?
By using controlled components and handling form input with onChange handlers.

What is the difference between component and element?
A component is a function/class; an element is what gets returned by a component.

What is the use of map() in React?
map() is used to iterate over arrays and render a list of elements.

How to avoid prop drilling?
By using Context API or state management libraries like Redux.

What is the Context API?
Context API provides a way to share values like props across the component tree without explicitly passing them.

What are higher-order components (HOC)?
A higher-order component is a function that takes a component and returns a new component.

What is the use of useMemo?
useMemo memorizes the result of a computation to avoid re-computing on every render.

What is the use of useCallback?
useCallback returns a memorized callback function that doesn’t change unless dependencies change.

How to apply styles in React?
You can use inline styles, CSS modules, or external stylesheets.

What is ReactDOM?
ReactDOM is a package for working with the DOM in web applications.

What does ReactDOM.render() do?
It renders a React element into the DOM.

What is the role of keys in lists?
Keys help React identify which items have changed, are added, or are removed.

What is the use of the children prop?
The children prop lets you pass components or elements between the opening and closing tags of a component.

Can you nest components in React?
Yes, you can nest components to build complex UIs.

What are inline styles?
Inline styles are applied directly to elements using the style attribute with a JavaScript object.

What is the difference between null and undefined in JSX?
Both mean no content, but undefined can cause issues if accidentally returned.

What is the default behavior of form submit in React?
It reloads the page. Use preventDefault() to stop it.

What are side effects in React?
Operations like data fetching, subscriptions, or manually changing the DOM.

What is React.StrictMode?
A tool to highlight potential problems in an application.

How to render HTML conditionally?
Using ternary operator or logical AND (&&).

What is the use of keyExtractor in React lists?
It’s used in some frameworks (like React Native) to define keys for list items.

What is the difference between React and Angular?
React is a library focused on UI; Angular is a full-fledged framework.

What are controlled inputs?
Form elements that derive their value from React state.

What is the role of arrow functions in event handlers?
To ensure correct this context and avoid rebinding.

What is React Router?
A library for handling routing in React applications.

What is the use of <BrowserRouter>?
It enables the use of React Router in web applications.

What are <Route> and <Link> in React Router?
<Route> renders UI based on URL; <Link> navigates between routes.

What is lazy loading?
Loading components only when needed using React.lazy() and Suspense.

What is the use of fallback in Suspense?
It defines the UI shown while a lazy component is loading.

What is the use of useContext?
useContext allows you to access context values inside a component.

What are the different phases of a React component lifecycle?
Mounting, Updating, and Unmounting.

What is the use of componentDidMount()?
It’s a lifecycle method in class components that runs after the component mounts.

What is the alternative of componentDidMount in functional components?
useEffect with an empty dependency array.

What does useLayoutEffect do?
It’s similar to useEffect but runs synchronously after DOM mutations.

What is the difference between useEffect and useLayoutEffect?
useEffect runs asynchronously; useLayoutEffect runs synchronously after DOM changes.

How to handle errors in React?
Using error boundaries or try/catch in event handlers and effects.

What is an error boundary?
A class component that catches JavaScript errors in its child components.

Can you use hooks in class components?
No, hooks are only for functional components.

What is the use of key attribute in React?
Helps React identify elements in a list during re-rendering.

What is the role of index in React lists?
It can be used as a key but not recommended if list order can change.

What is a pure component?
A component that renders the same output for the same props and state.

How to optimize React performance?
Use memoization, code splitting, lazy loading, and avoid unnecessary renders.

What is React.memo?
A higher-order component that prevents re-renders if props haven’t changed.

What is the difference between React.memo and useMemo?
React.memo is for components; useMemo is for memorizing functions/values.

How to fetch data in React?
Using fetch API, axios, or libraries like SWR/react-query with useEffect.

What is a shallow comparison?
Comparing object references instead of deep values.

What is the significance of a unique key in lists?
Ensures stable identity and prevents unnecessary re-renders.

How do you manage global state?
Using Context API or state management tools like Redux, Zustand.

What is the difference between SSR and CSR in React?
Server-Side Rendering vs Client-Side Rendering.

What is hydration in React?
Matching server-rendered HTML with client-side React code.

What is the role of useReducer?
useReducer manages complex state logic similar to Redux.

What are React portals?
Allow rendering children into a DOM node outside the parent.

What is JSX transpilation?
Converting JSX to JavaScript using Babel.

What is Babel?
A JavaScript compiler that converts JSX and ES6+ code to compatible JavaScript.

How to pass props to children?
By using JSX syntax and referencing props in child components.

How do you clone elements in React?
Using React.cloneElement().

How do you prevent re-rendering in React?
By using React.memo, useMemo, or shouldComponentUpdate.

What is StrictMode used for?
Identifying potential problems in an application.

What are forward refs?
Allow passing refs to child components.

What is a callback ref?
A ref defined as a function to get direct access to the DOM element.

What are custom hooks?
Reusable hook logic created by the user.

How do you create a custom hook?
Create a function starting with 'use' and use other hooks inside it.

How does reconciliation work internally?
It uses diffing algorithm to update only changed nodes.

What is the role of index.js file?
The entry point for rendering React app to DOM.

How to handle errors in async useEffect?
With try/catch inside async function.

What is suspense in React?
For lazy loading components and data fetching.

What is concurrent mode?
Allows React to interrupt rendering to handle multiple tasks.

What is a fallback UI?
Temporary UI shown while data/component is loading.

What is JSX fragment short syntax?
<>...</> is short for <React.Fragment>.

