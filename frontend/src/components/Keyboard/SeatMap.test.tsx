import SeatMap from "components/Keyboard/SeatMap";
import renderer from 'react-test-renderer';

it("renders correctly component: SeatMap", () => {
  const onChnageText = jest.fn();
  const tree = renderer.create(<SeatMap selectFromNumberPad={onChnageText} />).toJSON();
  expect(tree).toMatchSnapshot();
});