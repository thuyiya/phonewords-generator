import SeatButton from "components/Keyboard/SeatButton";
import renderer from 'react-test-renderer';

it("renders correctly component: SeatButton", () => {
  const onChnageText = jest.fn();
  const tree = renderer.create(<SeatButton currentSeat={0} onClick={onChnageText} />).toJSON();
  expect(tree).toMatchSnapshot();
});