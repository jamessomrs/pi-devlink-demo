"use client"

import { registerUser } from "../actions";

const Form = ({seminarterminsId, seminarsId}) => {

    return (
        <>
            <form
                className="EventDetail_event-item-header_form__gNaRx"
                name="wf-form-Event-Form"
                data-name="Event Form"
                method="post"
                id="wf-form-Event-Form"
                aria-label="Event Form"
                action={async (formData) => {
                    registerUser(formData);
                }}
            >
                <div className="EventDetail_form_field-2col__BbmpD">
                    <div
                        className="form_field-wrapper"
                        id="EventDetail_w-node-a391046e-7c85-8eb8-602c-866dcc5d17f2-cc5d17cb__ImXS3"
                    >
                        <label
                            className="EventDetail_form_form_label__jFyO5"
                            htmlFor="First-Name"
                        >
                            First name
                        </label>
                        <input
                            id="First-Name"
                            className="EventDetail_form_input__PnqS2 w-input"
                            type="text"
                            name="First-Name"
                        />
                    </div>
                    <div className="form_field-wrapper">
                        <label
                            className="EventDetail_form_form_label__jFyO5"
                            htmlFor="Last-Name"
                        >
                            Last name
                        </label>
                        <input
                            className="EventDetail_form_input__PnqS2 w-input"
                            type="text"
                            name="Last-Name"
                        />
                    </div>
                </div>
                <div className="EventDetail_form_field-2col__BbmpD EventDetail_is-mobile-1col__M_38x">
                    <div className="form_field-wrapper">
                        <label
                            className="EventDetail_form_form_label__jFyO5"
                            htmlFor="Email"
                        >
                            Email
                        </label>
                        <input
                            id="Email"
                            className="EventDetail_form_input__PnqS2 w-input"
                            type="email"
                            name="Email"
                        />
                    </div>
                    <div className="form_field-wrapper">
                        <label
                            className="EventDetail_form_form_label__jFyO5"
                            htmlFor="Phone"
                        >
                            Phone number
                        </label>
                        <input
                            id="Phone"
                            className="EventDetail_form_input__PnqS2 w-input"
                            type="tel"
                            name="Phone"
                        />
                    </div>
                </div>
                <div className="form_field-wrapper">
                    <label
                        className="EventDetail_form_form_label__jFyO5"
                        htmlFor="Address"
                    >
                        Address
                    </label>
                    <input
                        id="Address"
                        className="EventDetail_form_input__PnqS2 w-input"
                        type="text"
                        name="Address"
                    />
                </div>
                <input
                    type="hidden"
                    name="Seminartermins-ID"
                    value={seminarterminsId}
                />
                <input
                    type="hidden"
                    name="Seminars-ID"
                    value={seminarsId}
                />
                <input
                    id="EventDetail_w-node-a391046e-7c85-8eb8-602c-866dcc5d1807-cc5d17cb__btK1Q"
                    data-wait="Please wait..."
                    className="EventDetail_button__K0Tnb w-button"
                    type="submit"
                    value="Save my spot"
                />
            </form>
        </>
    );
}

export default Form