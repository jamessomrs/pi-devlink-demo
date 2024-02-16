import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./EventDetail.module.css";

export function EventDetail({
  as: _Component = _Builtin.Block,
  eventDetailTitle = "Event title heading",
  eventDetailInfo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  eventDetailTime = "Sat 10 Feb 2024",
  eventDetailLocation = "Location",
  eventFormSubmit = {},
  formBody,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section_event-item-header")}
      tag="header"
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
            <_Builtin.Grid
              className={_utils.cx(_styles, "event-item-header_component")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "event-item-header_title-wrapper"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "event-item-header_breadcrumb")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "breadcrumb-link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "breadcrumb-link")}
                      tag="div"
                    >
                      {"Events"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "breadcrumb-divider")}
                    value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6%203L11%208L6%2013%22%20stroke%3D%22CurrentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Link
                    className={_utils.cx(_styles, "breadcrumb-link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block tag="div">
                      {eventDetailTitle}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "margin-bottom",
                    "margin-small"
                  )}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "heading-style-h2")}
                    tag="h1"
                  >
                    {eventDetailTitle}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "margin-bottom",
                    "margin-small"
                  )}
                  tag="div"
                >
                  <_Builtin.Paragraph
                    className={_utils.cx(_styles, "text-size-medium")}
                  >
                    {eventDetailInfo}
                  </_Builtin.Paragraph>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "event-item-header_metatag-list"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "event-item-header_metatag-list_metatag-item"
                    )}
                    id={_utils.cx(
                      _styles,
                      "w-node-a391046e-7c85-8eb8-602c-866dcc5d17e0-cc5d17cb"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "event-item-header_metatag-icon"
                      )}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3%206V20C3%2020.5304%203.21071%2021.0391%203.58579%2021.4142C3.96086%2021.7893%204.46957%2022%205%2022H19C19.5304%2022%2020.0391%2021.7893%2020.4142%2021.4142C20.7893%2021.0391%2021%2020.5304%2021%2020V6C21%205.46957%2020.7893%204.96086%2020.4142%204.58579C20.0391%204.21071%2019.5304%204%2019%204H17V2H15V4H9V2H7V4H5C4.46957%204%203.96086%204.21071%203.58579%204.58579C3.21071%204.96086%203%205.46957%203%206ZM19%2020H5V8H19V20Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-size-small")}
                      tag="div"
                    >
                      {eventDetailTime}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "event-item-header_metatag-list_metatag-item"
                    )}
                    id={_utils.cx(
                      _styles,
                      "w-node-a391046e-7c85-8eb8-602c-866dcc5d17e5-cc5d17cb"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "event-item-header_metatag-icon"
                      )}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12%2014C14.206%2014%2016%2012.206%2016%2010C16%207.794%2014.206%206%2012%206C9.794%206%208%207.794%208%2010C8%2012.206%209.794%2014%2012%2014ZM12%208C13.103%208%2014%208.897%2014%2010C14%2011.103%2013.103%2012%2012%2012C10.897%2012%2010%2011.103%2010%2010C10%208.897%2010.897%208%2012%208Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M11.4201%2021.814C11.5893%2021.9349%2011.7921%2021.9998%2012.0001%2021.9998C12.2081%2021.9998%2012.4108%2021.9349%2012.5801%2021.814C12.8841%2021.599%2020.0291%2016.44%2020.0001%2010C20.0001%205.589%2016.4111%202%2012.0001%202C7.58909%202%204.00009%205.589%204.00009%209.995C3.97109%2016.44%2011.1161%2021.599%2011.4201%2021.814ZM12.0001%204C15.3091%204%2018.0001%206.691%2018.0001%2010.005C18.0211%2014.443%2013.6121%2018.428%2012.0001%2019.735C10.3891%2018.427%205.97909%2014.441%206.00009%2010C6.00009%206.691%208.69109%204%2012.0001%204Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-size-small")}
                      tag="div"
                    >
                      {eventDetailLocation}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "event-detail_form-wrapper")}
                tag="div"
              >
                {formBody ?? (
                  <_Builtin.FormWrapper
                    className={_utils.cx(
                      _styles,
                      "event-item-header_form_component"
                    )}
                  >
                    <_Builtin.FormForm
                      className={_utils.cx(_styles, "event-item-header_form")}
                      name="wf-form-Event-Form"
                      data-name="Event Form"
                      method="get"
                      id="wf-form-Event-Form"
                      {...eventFormSubmit}
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "form_field-2col")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "form_field-wrapper")}
                          id={_utils.cx(
                            _styles,
                            "w-node-a391046e-7c85-8eb8-602c-866dcc5d17f2-cc5d17cb"
                          )}
                          tag="div"
                        >
                          <_Builtin.FormBlockLabel
                            className={_utils.cx(_styles, "form_form_label")}
                            htmlFor="First-Name"
                          >
                            {"First name"}
                          </_Builtin.FormBlockLabel>
                          <_Builtin.FormTextInput
                            className={_utils.cx(_styles, "form_input")}
                            name="First-Name"
                            maxLength={256}
                            data-name="First Name"
                            disabled={false}
                            type="text"
                            required={true}
                            autoFocus={false}
                            id="First-Name"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "form_field-wrapper")}
                          tag="div"
                        >
                          <_Builtin.FormBlockLabel
                            className={_utils.cx(_styles, "form_form_label")}
                            htmlFor="Last-Name"
                          >
                            {"Last name"}
                          </_Builtin.FormBlockLabel>
                          <_Builtin.FormTextInput
                            className={_utils.cx(_styles, "form_input")}
                            name="Last-Name"
                            maxLength={256}
                            data-name="Last Name"
                            disabled={false}
                            type="text"
                            required={true}
                            autoFocus={false}
                            id="Last-Name"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "form_field-2col",
                          "is-mobile-1col"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "form_field-wrapper")}
                          tag="div"
                        >
                          <_Builtin.FormBlockLabel
                            className={_utils.cx(_styles, "form_form_label")}
                            htmlFor="Email"
                          >
                            {"Email"}
                          </_Builtin.FormBlockLabel>
                          <_Builtin.FormTextInput
                            className={_utils.cx(_styles, "form_input")}
                            name="Email"
                            maxLength={256}
                            data-name="Email"
                            disabled={false}
                            type="email"
                            required={true}
                            autoFocus={false}
                            id="Email"
                          />
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "form_field-wrapper")}
                          tag="div"
                        >
                          <_Builtin.FormBlockLabel
                            className={_utils.cx(_styles, "form_form_label")}
                            htmlFor="Phone"
                          >
                            {"Phone number"}
                          </_Builtin.FormBlockLabel>
                          <_Builtin.FormTextInput
                            className={_utils.cx(_styles, "form_input")}
                            name="Phone"
                            maxLength={256}
                            data-name="Phone"
                            disabled={false}
                            type="tel"
                            required={true}
                            autoFocus={false}
                            id="Phone"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "form_field-wrapper")}
                        tag="div"
                      >
                        <_Builtin.FormBlockLabel
                          className={_utils.cx(_styles, "form_form_label")}
                          htmlFor="Address"
                        >
                          {"Address"}
                        </_Builtin.FormBlockLabel>
                        <_Builtin.FormTextInput
                          className={_utils.cx(_styles, "form_input")}
                          autoFocus={false}
                          maxLength={256}
                          name="Address"
                          data-name="Address"
                          type="email"
                          disabled={false}
                          required={true}
                          id="Address"
                        />
                      </_Builtin.Block>
                      <_Builtin.FormButton
                        className={_utils.cx(_styles, "button")}
                        id={_utils.cx(
                          _styles,
                          "w-node-a391046e-7c85-8eb8-602c-866dcc5d1807-cc5d17cb"
                        )}
                        type="submit"
                        value="Save my spot"
                        data-wait="Please wait..."
                      />
                    </_Builtin.FormForm>
                    <_Builtin.FormSuccessMessage
                      className={_utils.cx(_styles, "success-message")}
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "success-text")}
                        tag="div"
                      >
                        {"Thank you! Your submission has been received!"}
                      </_Builtin.Block>
                    </_Builtin.FormSuccessMessage>
                    <_Builtin.FormErrorMessage
                      className={_utils.cx(_styles, "error-message")}
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "error-text")}
                        tag="div"
                      >
                        {
                          "Oops! Something went wrong while submitting the form."
                        }
                      </_Builtin.Block>
                    </_Builtin.FormErrorMessage>
                  </_Builtin.FormWrapper>
                )}
              </_Builtin.Block>
            </_Builtin.Grid>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
