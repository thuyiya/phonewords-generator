import Keyboard from "components/Keyboard/Keyboard";
import renderer from 'react-test-renderer';

it("renders correctly component: Keyboard", () => {
  const tree = renderer.create(<Keyboard />).toJSON();
  expect(tree).toMatchSnapshot();
});