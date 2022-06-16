import SeatRow from "components/Keyboard/SeatRow";
import renderer from 'react-test-renderer';

it("renders correctly component: SeatRow", () => {
  const onChnageText = jest.fn();
  const tree = renderer.create(<SeatRow rowDetails={[]} selectFromNumberPad={onChnageText} />).toJSON();
  expect(tree).toMatchSnapshot();
});