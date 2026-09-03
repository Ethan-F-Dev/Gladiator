// network.js
const SERVER_URL = "wss://YOUR_HF_SPACE_NAME.hf.space"; 
const socket = new WebSocket(SERVER_URL);

socket.onopen = () => {
  console.log("Connected to game server!");
};

socket.onmessage = (event) => {
  const gameState = JSON.parse(event.data);
  // Update local game state and render on canvas
};

export function sendInput(inputData) {
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(inputData));
  }
}
