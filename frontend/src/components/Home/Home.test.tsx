import renderer from "react-test-renderer";
import { Home } from "components/Home/Home";

describe("Page: Home", () => {
  it("renders correctly Page: Home", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
