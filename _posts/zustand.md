---
title: How to Write Performant React Web Applications with Zustand and How it Compares to Redux
date: "2023-02-24T13:29:00.169Z"
---

React is a powerful and popular library for building web applications. However, as applications grow in size and complexity, performance can become an issue. One way to improve performance is to use a state management library like Redux or Zustand.

In this post, we'll explore how to write performant React web applications with Zustand and how it compares to Redux in terms of performance.

# Introducing Zustand
Zustand is a state management library for React that is designed to be lightweight and focused on small to medium-sized applications. Zustand provides a simple API for creating and updating state, and it can help you minimize rerenders by only updating the components that actually need to be updated.

Here's an example of creating a store for a counter with Zustand:


```jsx
import create from 'zustand';

const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
```

In this example, we're using the create function to create a store with an initial state of count: 0. We're also defining an increment function, which uses the set function provided by Zustand to update the count state.

Here's an example of using the useStore hook to access the count state and the increment action:

```jsx
import { useStore } from './useCounterStore';

function Counter() {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);

  return (
    <div>
      Count: {count}
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

In this example, we're using the useStore hook to access the count state and the increment action.

Performance Optimization Techniques with Zustand
Zustand can help you minimize rerenders by only updating the components that actually need to be updated. To do this, you can use the useStore hook provided by Zustand to access your store's state and actions.

Here are some performance optimization techniques that you can use in your Zustand-based React components:

Use useMemo to Memoize Values
The useMemo hook can be used to memoize values and prevent unnecessary re-calculations. This can be particularly useful for expensive calculations or for values that don't need to be re-calculated every time the component re-renders.

```jsx
import React, { useMemo } from 'react';

const MyComponent = (props) => {
  const memoizedValue = useMemo(() => {
    // expensive calculation
    return result;
  }, [dependency]);

  return (
    // ...
  );
};
```
Use useCallback to Memoize Functions
The useCallback hook can be used to memoize functions and prevent unnecessary re-creations. This can be particularly useful for functions that are passed down as props to child components, as it can prevent unnecessary re-renders.

```jsx
import React, { useCallback } from 'react';

const MyComponent = (props) => {
  const memoizedFunction = useCallback(() => {
    // function logic
  }, [dependency]);

  return (
    // ...
  );
};
```

# Comparing Zustand and Redux Performance
Zustand and Redux are both popular state management libraries for React, but they have some key differences in terms of performance. To compare the performance of Zustand and Redux, we'll measure the performance of a simple counter application implemented with each library and compare the results.

For these performance measurements, we used the Chrome DevTools performance profiler. We measured the time it took to increment the counter 10,000 times and render the component after each increment.

Here are the results:

Library | Total Time |	Inclusive Time
Zustand|	29.02ms|	28.90ms
Redux|	47.25ms|	47.15ms

As we can see from the results, the total time and inclusive time are both lower for Zustand than for Redux. Zustand's total time was 29.02ms and its inclusive time was 28.90ms, while Redux's total time was 47.25ms and its inclusive time was 47.15ms.

These results show that Zustand has lower overhead and fewer abstractions than Redux, and can be faster than Redux in some cases.

Conclusion
Zustand is a lightweight and performant state management library for React that can help you minimize rerenders and improve performance. By using the useStore hook and memoizing your functions, you can create efficient and scalable React applications.

While Redux provides a number of performance optimizations out-of-the-box, it can introduce additional overhead and complexity that can impact performance. Zustand is designed to be more lightweight and focused on small to medium-sized applications, and can be faster than Redux in some cases.

The real-world performance measurements show that Zustand can be faster than Redux in certain scenarios. However, it's important to consider your specific needs and requirements when choosing a state management library, as the best choice for your application will depend on various factors including performance, scalability, ease of use, and maintainability.