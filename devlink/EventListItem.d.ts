import * as React from "react";
import * as Types from "./types";

declare function EventListItem(props: {
  as?: React.ElementType;
  eventDetailButton?: Types.Devlink.RuntimeProps;
  eventTitle?: React.ReactNode;
  eventTime?: React.ReactNode;
  eventLocation?: React.ReactNode;
  eventDetailLink?: Types.Basic.Link;
}): React.JSX.Element;
