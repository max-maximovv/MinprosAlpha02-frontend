export async function getData(url) {
  try {
    const req = await fetch(url);
    const json = await req.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export async function PostData(url, data) {
  try {
    const req = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return req;
  } catch (error) {
    console.log(error);
  }
}
