import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./EventListItem.module.css";

export function EventListItem({
  as: _Component = _Builtin.Block,
  eventDetailButton = {},
  eventTitle = "Event title heading",
  eventTime = "8:00 am",
  eventLocation = "Location",

  eventDetailLink = {
    href: "#",
  },
}) {
  return (
    <_Component className={_utils.cx(_styles, "event_item")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "text-size-large-2")}
        tag="div"
      >
        {eventTime}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "event32_item-content")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "event32_item-title")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "heading-style-h5-2")}
            tag="div"
          >
            {eventTitle}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block tag="div">{eventLocation}</_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Link
        className={_utils.cx(_styles, "button", "is-secondary", "is-small")}
        button={true}
        block=""
        options={eventDetailLink}
        {...eventDetailButton}
      >
        {"View details"}
      </_Builtin.Link>
    </_Component>
  );
}
