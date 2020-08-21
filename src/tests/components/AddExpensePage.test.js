import React from "react";
import { shallow, configure } from "enzyme";
import { AddExpensePage } from "../../components/AddExpense";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";
import expenses from "../fixtures/expenses";

configure({ adapter: new Adapter() });

test("should render AddExpensePage Correctly", () => {
  const onSubmit = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(
    <AddExpensePage onSubmit={onSubmit} history={history} />
  );
  expect(toJSON(wrapper)).toMatchSnapshot();
});
