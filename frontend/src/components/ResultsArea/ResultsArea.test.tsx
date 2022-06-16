import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import ResultsArea from "components/ResultsArea/ResultsArea";

describe("Component: ResultsArea", () => {
  it("renders correctly", () => {
    const component = renderer.create(<ResultsArea error="" text="" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Title text render correct", async () => {
    const { getByText } = render(<ResultsArea error="" text="" />);
    expect(getByText("Results")).toBeInTheDocument();
  });
  it("Input Text render correct", async () => {
    const inputText = "My Name Is Thusitha"
    const { getByText } = render(<ResultsArea error="" text={inputText} />);
    expect(getByText(inputText).textContent).toEqual(inputText);
  });
});
