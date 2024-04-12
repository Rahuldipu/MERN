// export const host = "http://konkt.eu-north-1.elasticbeanstalk.com";
// export const host = "http://konkt-dev-env.eba-xbjxyrje.eu-north-1.elasticbeanstalk.com";
export const host = "http://konkt-test-env-1.eba-d2u97upx.eu-north-1.elasticbeanstalk.com";
// export const host = "http://localhost:3001";
export const registerRoute = `${host}/api/auth/register`;
export const loginRoute = `${host}/api/auth/login`;
export const setAvatarRoute = `${host}/api/auth/setAvatar`;
export const allUsersRoute = `${host}/api/auth/allUsers`;
export const logoutRoute = `${host}/api/auth/logout`;
export const sendMessageRoute = `${host}/api/message/addMessage`;
export const getAllMessagesRoute = `${host}/api/message/getAllMessage`;

export const newLoginRoute = `${host}/api/auth/verifyOTP`;
export const meRoute = `${host}/api/auth/me`;
export const myConnectionRoute = `${host}/api/connection/getMyConnections`;
