export function makeUrl() {
  const enable_fb_login = "0";
  const force_authentication = "1";
  const client_id = import.meta.env.VITE_IG_CLIENT_ID;
  const redirect_uri = import.meta.env.VITE_REDIRECT_URI;
  const response_type = "code";
  const scope = [
    "instagram_business_basic",
    "instagram_business_manage_messages",
    "instagram_business_manage_comments",
    "instagram_business_content_publish",
  ].join(",");
  const baseUrl = "https://www.instagram.com/oauth/authorize";
  const params = new URLSearchParams({
    client_id,
    redirect_uri,
    response_type,
    scope,
    enable_fb_login,
    force_authentication,
  }).toString();
  return `${baseUrl}?${params}`;
}
