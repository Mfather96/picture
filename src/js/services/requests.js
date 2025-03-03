async function postData(url, data) {
    let res = await fetch(url, {
        method: "POST",
        body: data
    })
    return await res.text();
}

async function getData(url) {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error('Some trobles with server');
    }
    return await res.json();
}

export {postData, getData};