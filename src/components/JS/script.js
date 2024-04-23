const ClientID = "f8ad3b81570c4ebfb5c3be7e657a0366";
const ClientSecret = "4fc769b86e634917b57d50cf781a3358";

export const getToken = async (token) => {
  try {
    const response = await fetch(token, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(ClientID + ":" + ClientSecret)}`,
      },
      body: "grant_type=client_credentials",
    });
    const data = await response.json();
    return localStorage.setItem(
      "asset_token",
      JSON.stringify(`${data.token_type} ${data.access_token}`)
    );
  } catch (error) {
    console.error("Error getting token:", error);
    throw error;
  }
};

export const getPlaylists = async (url) => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("asset_token")}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting playlists:", error);
    throw error;
  }
};
