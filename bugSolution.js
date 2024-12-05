```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [countChanged, setCountChanged] = useState(false);

  useEffect(() => {
    if (countChanged) {
        console.log('Component rendered with count:', count);
        setCountChanged(false);
    }
  }, [count, countChanged]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => {
        setCount(count + 1);
        setCountChanged(true);
      }}>Increment</button>
    </div>
  );
}
```