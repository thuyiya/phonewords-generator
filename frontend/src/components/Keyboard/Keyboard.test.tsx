import Keyboard from "components/Keyboard/Keyboard";
import renderer from 'react-test-renderer';

it("renders correctly component: Keyboard", () => {
  const onChnageText = jest.fn();
  const tree = renderer.create(<Keyboard onChnageText={onChnageText} />).toJSON();
  expect(tree).toMatchSnapshot();
});