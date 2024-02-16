import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./EventListHeader.module.css";

export function EventListHeader({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section_home-list")}
      tag="section"
      id="ecosystem"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container-large")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "list_wrapper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "list_content")}
            id={_utils.cx(
              _styles,
              "w-node-_9ed3a451-232b-5452-8539-598284d26d6e-84d26d6b"
            )}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading-style-h2")}
              tag="h2"
            >
              {"Upcoming Events"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
