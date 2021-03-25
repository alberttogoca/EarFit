import Dimensions from 'react-dimensions';

function DimensionsProvider({ children, containerWidth, containerHeight }): JSX.Element {
  return (
    <>
      <div>{children({ containerWidth: containerWidth, containerHeight: containerHeight })}</div>
    </>
  );
}

export default Dimensions()(DimensionsProvider);
