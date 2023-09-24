/*Coding Steps:
- Using the Houses API, or any open API of your choice you can find online, create a single page that allows
for all 4 CRUD operations to be performed on a resource from the API
- Create a React component (or more, if needed) to represent the resource
- Make all forms and other necessary UI pieces their own componenents as reasonable.
*/


const FESTIVALS_ENDPOINT = 'https://64f3f3a8932537f4051a0ad0.mockapi.io/Festivals_API/festivals';

class FestivalsApi {
    get=async () => {
        try {
            const resp=await fetch(FESTIVALS_ENDPOINT);
            const data=await resp.json();
            return data;
        } catch(e) {
            console.log('Error with fetchSession.', e);
        }
    }

    put=async(festival) => {
        try {
            const resp=await fetch(`${FESTIVALS_ENDPOINT}/${festival._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(festival)
            });
            return await resp.json();
        } catch (e) {
            console.log('Issue with updating festivals', e);
        }
    }
}

export const festivalsApi = new FestivalsApi();