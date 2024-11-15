const baseUrl = import.meta.env.VITE_API_URL;

export async function getMedia(userId: string, accessToken: string) {
  const params = new URLSearchParams({
    user_id: userId,
    access_token: accessToken,
  }).toString();
  const response = await fetch(`${baseUrl}/media?${params}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to get media");
  }
  return response.json();
}

export async function getMe(accessToken: string) {
  const params = new URLSearchParams({
    access_token: accessToken,
  }).toString();
  const response = await fetch(`${baseUrl}/me?${params}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to get me");
  }
  const json = await response.json();
  // https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/get-started#get-the-app-user-id---username
  return {
    userId: json.user_id, // <IG_ID>
    username: json.username, // <IG_USERNAME>
    name: json.name,
    profilePictureUrl: json.profile_picture_url,
    followersCount: json.followers_count,
    followsCount: json.follows_count,
    mediaCount: json.media_count,
    // user_id, username, name, account_type, profile_picture_url
    // followers_count, follows_count, media_count
  };
}

export async function getAccessCode(
  code: string
): Promise<{ access_token: string }> {
  const response = await fetch(`${baseUrl}/access_token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code,
    }),
  });
  if (!response.ok) {
    throw new Error("Failed to get access code");
  }
  const json: { access_token: string } = await response.json();
  return { access_token: json.access_token };
}

export async function reply(
  commentId: string,
  text: string,
  accessToken: string
) {
  console.log("commentId", commentId);
  console.log("text", text);
  console.log("accessToken", accessToken);
  const response = await fetch(`${baseUrl}/reply`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      access_token: accessToken,
      comment_id: commentId,
      message: text,
    }),
  });
  console.log(await response.text());
  if (!response.ok) {
    throw new Error("Failed to reply");
  }
  console.log("3");
}
