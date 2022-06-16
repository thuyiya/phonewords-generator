import { render, waitFor } from "@testing-library/react";
import renderer from "react-test-renderer";
import Page from "components/Page/Page";

describe("Component: Page", () => {
  it("renders correctly", () => {
    const component = renderer.create(<Page title="test" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Title Text render correct", async () => {
    render(<Page title={"Home"} />);
    waitFor(() => {
      expect(document.title).toEqual("Home");
    });
  });
});
