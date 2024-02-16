import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Hero.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-9":{"id":"e-9","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-9","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4a5752a8-7b14-66df-7361-a1167cdd6703","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4a5752a8-7b14-66df-7361-a1167cdd6703","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-9-p","smoothing":90,"startsEntering":true,"addStartOffset":true,"addOffsetValue":45,"startsExiting":true,"addEndOffset":true,"endOffsetValue":20}],"createdOn":1707309137278}},"actionLists":{"a-9":{"id":"a-9","title":"Home Hero Side Nav","continuousParameterGroups":[{"id":"a-9-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-9-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"65c89d2917a154bd4ac56bdd|51207737-8edb-e194-cf6c-dd92ff43023b"},"value":0}},{"id":"a-9-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"65c89d2917a154bd4ac56bdd|51207737-8edb-e194-cf6c-dd92ff43023a"},"value":0,"unit":""}},{"id":"a-9-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"65c89d2917a154bd4ac56bdd|895ff8d2-c43b-d4fb-9a15-0c5f6b9a303f"},"value":0,"unit":""}}]},{"keyframe":10,"actionItems":[{"id":"a-9-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"65c89d2917a154bd4ac56bdd|51207737-8edb-e194-cf6c-dd92ff43023a"},"value":0.1,"unit":""}},{"id":"a-9-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"65c89d2917a154bd4ac56bdd|895ff8d2-c43b-d4fb-9a15-0c5f6b9a303f"},"value":1,"unit":""}}]},{"keyframe":90,"actionItems":[{"id":"a-9-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"65c89d2917a154bd4ac56bdd|51207737-8edb-e194-cf6c-dd92ff43023a"},"value":0.1,"unit":""}},{"id":"a-9-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"65c89d2917a154bd4ac56bdd|895ff8d2-c43b-d4fb-9a15-0c5f6b9a303f"},"value":1,"unit":""}}]},{"keyframe":100,"actionItems":[{"id":"a-9-n-8","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"65c89d2917a154bd4ac56bdd|51207737-8edb-e194-cf6c-dd92ff43023b"},"value":99}},{"id":"a-9-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"65c89d2917a154bd4ac56bdd|51207737-8edb-e194-cf6c-dd92ff43023a"},"value":0,"unit":""}},{"id":"a-9-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"65c89d2917a154bd4ac56bdd|895ff8d2-c43b-d4fb-9a15-0c5f6b9a303f"},"value":0,"unit":""}}]}]}],"createdOn":1707309158413}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Hero({ as: _Component = _Builtin.Block, heroButton = {} }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section_home-hero")}
      data-w-id="4a5752a8-7b14-66df-7361-a1167cdd6703"
      tag="section"
      id="cloud-based"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container-large")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "global_grid-2-column")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "global_grid-content")}
            id={_utils.cx(
              _styles,
              "w-node-_4a5752a8-7b14-66df-7361-a1167cdd6706-7cdd6703"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "global_section-tag-wrapper")}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "pi-cloud-icon")}
                value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22currentColor%22%20viewbox%3D%220%200%20794.36%20422.708%22%3E%3Cpath%20class%3D%22pi-cloud-1%22%20d%3D%22m687.785%2C184.956c.001-.223.008-.444.008-.666%2C0-65.426-53.038-118.464-118.464-118.464-40.383%2C0-76.039%2C20.211-97.425%2C51.065C444.997%2C48.448%2C378.324%2C0%2C300.332%2C0%2C198.552%2C0%2C116.043%2C82.509%2C116.043%2C184.289c0%2C.014%2C0%2C.028%2C0%2C.042C51.669%2C186.01%2C0%2C238.72%2C0%2C303.498h0c0%2C65.838%2C53.372%2C119.209%2C119.209%2C119.209h555.942c65.837%2C0%2C119.209-53.372%2C119.209-119.209h0c0-61.57-46.678-112.232-106.575-118.543Z%22%2F%3E%3C%2Fsvg%3E"
              />
              <_Builtin.Block tag="div">{"LogaHR"}</_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading-style-h1")}
              tag="h1"
            >
              {"Introducing a fully integrated, cloud based HR solution"}
            </_Builtin.Heading>
            <_Builtin.Paragraph>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
              }
            </_Builtin.Paragraph>
            <_Builtin.Block
              className={_utils.cx(_styles, "global_button-wrapper")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "button-primary")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
                {...heroButton}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "button_text-green")}
                  tag="div"
                >
                  {"Events"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "button_clouds")}
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "button_clouds-embed")}
                    value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22currentColor%22%20viewbox%3D%220%200%20337.488%20150.109%22%3E%3Cdefs%3E%3Cstyle%3E.nav-button-cloud-1%7Bstroke-width%3A0px%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cpath%20class%3D%22nav-button-cloud-1%22%20d%3D%22M337.488%2C62.399c0-20.471-16.595-37.067-37.067-37.067-4.962%2C0-9.692.982-14.017%2C2.751-8.567-16.671-25.924-28.083-45.957-28.083-24.698%2C0-45.334%2C17.339-50.433%2C40.504-8.842-7.085-20.055-11.332-32.267-11.332-3.823%2C0-7.544.428-11.131%2C1.216-9.46-11.959-24.089-19.642-40.522-19.642-19.581%2C0-36.615%2C10.897-45.375%2C26.956-6.418-5.326-14.661-8.529-23.653-8.529-20.471%2C0-37.066%2C16.595-37.066%2C37.066v83.87h337.488v-83.87h-.198c.13-1.262.198-2.543.198-3.84Z%22%2F%3E%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "button_text-white-wrapper")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "button_text-white")}
                    tag="div"
                  >
                    {"Get started with LogaHR"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "global_grid-content")}
            id={_utils.cx(
              _styles,
              "w-node-_4a5752a8-7b14-66df-7361-a1167cdd671d-7cdd6703"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "hero-screen_component")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "hero-screen_bar")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "hero-screen_bar-icon-wrapper")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "hero-screen_bar-icon")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "hero-screen_bar-icon")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "hero-screen_bar-icon")}
                    tag="div"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.TabsWrapper
                className={_utils.cx(_styles, "hero-screen_tabs")}
                current="Tab 1"
                easing="ease"
                fadeIn={300}
                fadeOut={100}
              >
                <_Builtin.TabsMenu
                  className={_utils.cx(_styles, "hero-screen_tabs-menu")}
                  tag="div"
                >
                  <_Builtin.TabsLink
                    className={_utils.cx(_styles, "hero-screen_tab-link")}
                    data-w-tab="Tab 1"
                    block="inline"
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon-1x1-medium-2")}
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22currentColor%22%20class%3D%22bi%20bi-house-door%22%20viewbox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20d%3D%22M8.354%201.146a.5.5%200%200%200-.708%200l-6%206A.5.5%200%200%200%201.5%207.5v7a.5.5%200%200%200%20.5.5h4.5a.5.5%200%200%200%20.5-.5v-4h2v4a.5.5%200%200%200%20.5.5H14a.5.5%200%200%200%20.5-.5v-7a.5.5%200%200%200-.146-.354L13%205.793V2.5a.5.5%200%200%200-.5-.5h-1a.5.5%200%200%200-.5.5v1.293zM2.5%2014V7.707l5.5-5.5%205.5%205.5V14H10v-4a.5.5%200%200%200-.5-.5h-3a.5.5%200%200%200-.5.5v4z%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.TabsLink>
                  <_Builtin.TabsLink
                    className={_utils.cx(_styles, "hero-screen_tab-link")}
                    data-w-tab="Tab 2"
                    block="inline"
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon-1x1-medium-2")}
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22currentColor%22%20class%3D%22bi%20bi-window-stack%22%20viewbox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20d%3D%22M4.5%206a.5.5%200%201%200%200-1%20.5.5%200%200%200%200%201ZM6%206a.5.5%200%201%200%200-1%20.5.5%200%200%200%200%201Zm2-.5a.5.5%200%201%201-1%200%20.5.5%200%200%201%201%200Z%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M12%201a2%202%200%200%201%202%202%202%202%200%200%201%202%202v8a2%202%200%200%201-2%202H4a2%202%200%200%201-2-2%202%202%200%200%201-2-2V3a2%202%200%200%201%202-2h10ZM2%2012V5a2%202%200%200%201%202-2h9a1%201%200%200%200-1-1H2a1%201%200%200%200-1%201v8a1%201%200%200%200%201%201Zm1-4v5a1%201%200%200%200%201%201h10a1%201%200%200%200%201-1V8H3Zm12-1V5a1%201%200%200%200-1-1H4a1%201%200%200%200-1%201v2h12Z%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.TabsLink>
                  <_Builtin.TabsLink
                    className={_utils.cx(_styles, "hero-screen_tab-link")}
                    data-w-tab="Tab 3"
                    block="inline"
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon-1x1-medium-2")}
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22currentColor%22%20class%3D%22bi%20bi-display%22%20viewbox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20d%3D%22M0%204s0-2%202-2h12s2%200%202%202v6s0%202-2%202h-4c0%20.667.083%201.167.25%201.5H11a.5.5%200%200%201%200%201H5a.5.5%200%200%201%200-1h.75c.167-.333.25-.833.25-1.5H2s-2%200-2-2V4zm1.398-.855a.758.758%200%200%200-.254.302A1.46%201.46%200%200%200%201%204.01V10c0%20.325.078.502.145.602.07.105.17.188.302.254a1.464%201.464%200%200%200%20.538.143L2.01%2011H14c.325%200%20.502-.078.602-.145a.758.758%200%200%200%20.254-.302%201.464%201.464%200%200%200%20.143-.538L15%209.99V4c0-.325-.078-.502-.145-.602a.757.757%200%200%200-.302-.254A1.46%201.46%200%200%200%2013.99%203H2c-.325%200-.502.078-.602.145z%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.TabsLink>
                  <_Builtin.TabsLink
                    className={_utils.cx(_styles, "hero-screen_tab-link")}
                    data-w-tab="Tab 4"
                    block="inline"
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon-1x1-medium-2")}
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22currentColor%22%20class%3D%22bi%20bi-briefcase%22%20viewbox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20d%3D%22M6.5%201A1.5%201.5%200%200%200%205%202.5V3H1.5A1.5%201.5%200%200%200%200%204.5v8A1.5%201.5%200%200%200%201.5%2014h13a1.5%201.5%200%200%200%201.5-1.5v-8A1.5%201.5%200%200%200%2014.5%203H11v-.5A1.5%201.5%200%200%200%209.5%201h-3zm0%201h3a.5.5%200%200%201%20.5.5V3H6v-.5a.5.5%200%200%201%20.5-.5zm1.886%206.914L15%207.151V12.5a.5.5%200%200%201-.5.5h-13a.5.5%200%200%201-.5-.5V7.15l6.614%201.764a1.5%201.5%200%200%200%20.772%200zM1.5%204h13a.5.5%200%200%201%20.5.5v1.616L8.129%207.948a.5.5%200%200%201-.258%200L1%206.116V4.5a.5.5%200%200%201%20.5-.5z%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.TabsLink>
                  <_Builtin.TabsLink
                    className={_utils.cx(_styles, "hero-screen_tab-link")}
                    data-w-tab="Tab 5"
                    block="inline"
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon-1x1-medium-2")}
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22currentColor%22%20class%3D%22bi%20bi-shield-check%22%20viewbox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20d%3D%22M5.338%201.59a61.44%2061.44%200%200%200-2.837.856.481.481%200%200%200-.328.39c-.554%204.157.726%207.19%202.253%209.188a10.725%2010.725%200%200%200%202.287%202.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55%200%200%200%20.101.025.615.615%200%200%200%20.1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726%2010.726%200%200%200%202.287-2.233c1.527-1.997%202.807-5.031%202.253-9.188a.48.48%200%200%200-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552%201.29%208.531%201.067%208%201.067c-.53%200-1.552.223-2.662.524zM5.072.56C6.157.265%207.31%200%208%200s1.843.265%202.928.56c1.11.3%202.229.655%202.887.87a1.54%201.54%200%200%201%201.044%201.262c.596%204.477-.787%207.795-2.465%209.99a11.775%2011.775%200%200%201-2.517%202.453%207.159%207.159%200%200%201-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158%207.158%200%200%201-1.048-.625%2011.777%2011.777%200%200%201-2.517-2.453C1.928%2010.487.545%207.169%201.141%202.692A1.54%201.54%200%200%201%202.185%201.43%2062.456%2062.456%200%200%201%205.072.56z%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M10.854%205.146a.5.5%200%200%201%200%20.708l-3%203a.5.5%200%200%201-.708%200l-1.5-1.5a.5.5%200%201%201%20.708-.708L7.5%207.793l2.646-2.647a.5.5%200%200%201%20.708%200z%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.TabsLink>
                </_Builtin.TabsMenu>
                <_Builtin.TabsContent
                  className={_utils.cx(_styles, "hero-screen_tabs-content")}
                  tag="div"
                >
                  <_Builtin.TabsPane
                    className={_utils.cx(_styles, "hero-screen_tab-pane")}
                    tag="div"
                    data-w-tab="Tab 1"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "hero-screen_tab-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "hero-screen_grid-top")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "hero-screen_card")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_4a5752a8-7b14-66df-7361-a1167cdd6734-7cdd6703"
                          )}
                          tag="div"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "hero-screen_card")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_4a5752a8-7b14-66df-7361-a1167cdd6735-7cdd6703"
                          )}
                          tag="div"
                          text-selection="white"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "hero-screen_grid-bottom"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "hero-screen_card")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_4a5752a8-7b14-66df-7361-a1167cdd6737-7cdd6703"
                          )}
                          tag="div"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "hero-screen_card")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_4a5752a8-7b14-66df-7361-a1167cdd6738-7cdd6703"
                          )}
                          tag="div"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "hero-screen_card")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_4a5752a8-7b14-66df-7361-a1167cdd6739-7cdd6703"
                          )}
                          tag="div"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "hero-screen_card")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_4a5752a8-7b14-66df-7361-a1167cdd673a-7cdd6703"
                          )}
                          tag="div"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "hero-screen_card")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_4a5752a8-7b14-66df-7361-a1167cdd673b-7cdd6703"
                          )}
                          tag="div"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "hero-screen_card")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_4a5752a8-7b14-66df-7361-a1167cdd673c-7cdd6703"
                          )}
                          tag="div"
                        />
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.TabsPane>
                  <_Builtin.TabsPane
                    className={_utils.cx(_styles, "hero-screen_tab-pane")}
                    tag="div"
                    data-w-tab="Tab 2"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "hero-screen_tab-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "hero-screen_grid-top")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "hero-screen_card")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_4a5752a8-7b14-66df-7361-a1167cdd6740-7cdd6703"
                          )}
                          tag="div"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "hero-screen_card")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_4a5752a8-7b14-66df-7361-a1167cdd6741-7cdd6703"
                          )}
                          tag="div"
                          text-selection="white"
                        />
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.TabsPane>
                  <_Builtin.TabsPane
                    className={_utils.cx(_styles, "hero-screen_tab-pane")}
                    tag="div"
                    data-w-tab="Tab 3"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "hero-screen_tab-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "hero-screen_grid-bottom"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "hero-screen_card")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_4a5752a8-7b14-66df-7361-a1167cdd6745-7cdd6703"
                          )}
                          tag="div"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "hero-screen_card")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_4a5752a8-7b14-66df-7361-a1167cdd6746-7cdd6703"
                          )}
                          tag="div"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "hero-screen_card")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_4a5752a8-7b14-66df-7361-a1167cdd6747-7cdd6703"
                          )}
                          tag="div"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "hero-screen_card")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_4a5752a8-7b14-66df-7361-a1167cdd6748-7cdd6703"
                          )}
                          tag="div"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "hero-screen_card")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_4a5752a8-7b14-66df-7361-a1167cdd6749-7cdd6703"
                          )}
                          tag="div"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "hero-screen_card")}
                          id={_utils.cx(
                            _styles,
                            "w-node-_4a5752a8-7b14-66df-7361-a1167cdd674a-7cdd6703"
                          )}
                          tag="div"
                        />
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.TabsPane>
                  <_Builtin.TabsPane
                    className={_utils.cx(_styles, "hero-screen_tab-pane")}
                    tag="div"
                    data-w-tab="Tab 4"
                  />
                  <_Builtin.TabsPane
                    className={_utils.cx(_styles, "hero-screen_tab-pane")}
                    tag="div"
                    data-w-tab="Tab 5"
                  />
                </_Builtin.TabsContent>
              </_Builtin.TabsWrapper>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
