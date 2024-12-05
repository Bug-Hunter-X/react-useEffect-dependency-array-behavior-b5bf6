# React 18 useEffect Warning and Potential Infinite Loop

This repository demonstrates a common issue encountered when upgrading to React 18 (and later) involving the `useEffect` hook and its dependency array.

The problem arises from including a state variable directly within the dependency array without proper handling. This can trigger unexpected warnings or even result in infinite re-renders and performance degradation.

The `bug.js` file contains the problematic code, while `bugSolution.js` provides the corrected implementation.

## Problem Description

The example uses a `useState` variable `count` in the useEffect dependency array. This leads to an unnecessary re-render each time the count changes, resulting in warnings in React 18 and above.

## Solution

The issue is solved by ensuring that the state variables are used appropriately inside the useEffect. In this case, you should make sure that the component only re-renders when the required properties change. The corrected version checks if the count has changed after the component has already been mounted.