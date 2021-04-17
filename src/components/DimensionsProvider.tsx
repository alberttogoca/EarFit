import Dimensions from 'react-dimensions';

function DimensionsProvider({ children, containerWidth, containerHeight }): JSX.Element {
  return <>{children({ newWidth: containerWidth, newHeight: containerHeight })}</>;
}

export default Dimensions()(DimensionsProvider);
