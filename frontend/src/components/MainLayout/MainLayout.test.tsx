import renderer from 'react-test-renderer';
import MainLayout from "components/MainLayout/MainLayout";

it("renders correctly component: MainLayout", () => {
    const component = renderer.create(<MainLayout />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});