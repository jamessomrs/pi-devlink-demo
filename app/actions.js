'use server'

import { redirect } from 'next/navigation'

export async function registerUser(formData) {
    const postData = {
        email_address: formData.get("Email"),
        seminars_id: parseFloat(formData.get("Seminars-ID")),
        seminartermins_id: parseFloat(formData.get("Seminartermins-ID")),
        first_name: formData.get("First-Name"),
        second_name: formData.get("Last-Name"),
        phone_number: formData.get("Phone"),
        address: formData.get("Address"),
    };

    const res = await fetch(
        "https://xp8u-bvie-kght.n7.xano.io/api:WGRo_HAC/seminartermines",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        }
    );

    const data = await res.json();

    redirect('/')

    return Response.json({ data });
}