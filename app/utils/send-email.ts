
import { FormData } from '../contact/page';



export function sendEmail(data: FormData) {
 

    fetch("/api/email", {
        method: 'POST',
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((res) => res.json()
        
        )
        .then((response) => {
            alert(response.message);
        })
        .catch((err) => {
            alert(err);
        });
}