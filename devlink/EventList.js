import React from "react";
import * as _Builtin from "./_Builtin";
import { EventListItem } from "./EventListItem";
import * as _utils from "./utils";
import _styles from "./EventList.module.css";

export function EventList({
  as: _Component = _Builtin.Block,
  eventListWrapper,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "event-list_section")}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "padding-section-large")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "stacked-list_component")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "card-header_component")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "max-width-large")}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "heading-style-h5")}
                    tag="h3"
                  >
                    {"Upcoming Events"}
                  </_Builtin.Heading>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "margin-top", "margin-tiny")}
                    tag="div"
                  >
                    <_Builtin.Block tag="div">
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
                      }
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "stacked-list_list-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "stacked-list_list")}
                  tag="div"
                >
                  {eventListWrapper ?? <EventListItem />}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
