import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import toJSON from "enzyme-to-json";

import ExpenseDashboardPage from "../../components/ExpenseDashboard";

configure({ adapter: new Adapter() });

test("should render the nonfound component", () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
