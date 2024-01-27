### Code 1: Delayed state update
According to my opinion-To log the updated count value, we can utilize the fact that setCount also accepts a function as an argument. This function receives the current state as its argument. By using this approach, it  ensure that the console.log statement capture the correct and updated state..
```
let handleClick = () => {
  setCount((previusCount) => {
    let updatedCount = previusCount + 1;
    console.log(updatedCount);
    return updatedCount;
  });
};

```
### Code 2: Multiple State Updates
According to my opinion-To achieve the expected behavior where the count is updated to 3, we need to recognize that state updates are batched by React. Instead of relying on the current state, we can use the functional form of setCount and perform the updates based on the previous state.
```
let handleClick = () => {
  setCount((previusCount) => previusCount + 1);
  setCount((previusCount) => previusCount + 1);
  setCount((previusCount) => previusCount + 1);
  console.log(count);
};


```