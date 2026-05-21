import { io } from 'socket.io-client';

const BACKEND = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace('/api', '') : 'http://localhost:5000';

const socket = io(BACKEND, {
  path: '/socket.io',
  transports: ['websocket', 'polling'],
  reconnection: true,
  autoConnect: true,
});

export function connectSocket() {
  if (!socket.connected) socket.connect();
}

export function disconnectSocket() {
  try {
    socket.disconnect();
  } catch (e) {
    // ignore
  }
}

export default socket;
