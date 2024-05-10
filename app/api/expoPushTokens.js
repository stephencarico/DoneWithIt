import client from './client';

const pushTokenToUser = (token) => client.post('/expoPushTokens', { token });

export default { pushTokenToUser };
