  
export function makeUser(formData) {
    const name = formData.get('name');
    const healthStatus = formData.get('healthStatus');

    const userObject = {
        name: name,
        healthStatus: healthStatus,
    };

    return userObject;
}
