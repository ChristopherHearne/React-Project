
export async function postUserData(userData) {
    const dbData =
    {
        name: userData.name,
        givenName: userData.given_name,
        familyName: userData.family_name,
        email: userData.email,
        pictureURL: userData.picture,
        domain: userData.hd
    }
    try {
        const request = await fetch('http://localhost:3002/users', {
            method: 'POST',
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify(dbData)
        })
        const result = await request.json()
        console.log(result._id)
        return result
    } catch (error) {
        console.log(error.messsage)
    }
}

export async function fetchUserByEmail(email){
    const requestURL = `http://localhost:3002/users/emails/${email}`
    try{
        const request = await fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-type': "application/json",
            }
        })
        return {
            status: request.status,
            content: await request.json()
        }
    } catch(error){
        console.log(error.message)
    }
}

export async function fetchUsers(){
    const requestURL = `http://localhost:3002/users`
    try{
        const request = await fetch(requestURL, {
            method: 'GET',
            headers: {
                'Content-type': "application/json",
                'X-Requested-With': 'XMLHttpRequest'
            },
        })
        const result = await request.json()
        return result
    } catch(error){
        console.log(error)
    }
}

export async function postHabit(email, habitTitle){
    const habitURL = `http://localhost:3002/habits`
    try{
            const activeUser = await fetchUserByEmail(email)
            const habitInfo = await fetch(habitURL, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    title: habitTitle,
                    createdBy: activeUser.content
                })
            })
        const result = await habitInfo.json()
        return result
    }   
    catch(error){
        console.log(error)
    }
}

export async function getHabitsByUser(email){
    const habitURL = `http://localhost:3002/habits/user/`
    try{
        const activeUser = await fetchUserByEmail(email)
        const habitsByUser = await fetch(`${habitURL}${activeUser.content._id}`, {
            method: 'GET',
            headers: {
                'Content-type': "application/json",
                'X-Requested-With': 'XMLHttpRequest'
            },
        })
        const result = await habitsByUser.json()
        return result
    } catch(error) {
        console.log(error)
    }
}

export async function destroyHabit(id){
    const deleteRequestURL = `http://localhost:3002/habits/${id}`
    try{
        const deletedRequest = await fetch(deleteRequestURL, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json'
            },
        })

        const result = await deletedRequest.json()
        return result
    } catch(error){
        console.log(error)
    }
}
