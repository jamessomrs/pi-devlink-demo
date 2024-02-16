import * as React from "react";
import * as Types from "./types";

declare function EventDetail(props: {
  as?: React.ElementType;
  eventDetailTitle?: React.ReactNode;
  eventDetailInfo?: React.ReactNode;
  eventDetailTime?: React.ReactNode;
  eventDetailLocation?: React.ReactNode;
  eventFormSubmit?: Types.Devlink.RuntimeProps;
  formBody?: Types.Devlink.Slot;
}): React.JSX.Element;
