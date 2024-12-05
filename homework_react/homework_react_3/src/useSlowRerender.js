// не трогать
export const useSlowRerender = () => {
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {}
};
//
