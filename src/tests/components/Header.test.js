import React from "react";
import { shallow, configure } from "enzyme";
import toJSON from "enzyme-to-json";
import Header from "../../components/Header";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("test render Header correctly", () => {
  const wrapper = shallow(<Header />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
