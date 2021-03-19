import React from "react";
import { Provider } from "react-redux";

import { PureInbox } from "./Inbox";

import { action } from "@storybook/addon-actions";

import * as TaskListStories from "../components/TaskList.stories";

// A super-simple mock of a redux store
const store = {
  getState: () => {
    return {
      tasks: TaskListStories.Default.args.tasks,
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

const InboxStories = {
  component: PureInbox,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  title: "InboxScreen",
};

const Template = (args) => <PureInbox {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: "Something",
};

export default InboxStories;
