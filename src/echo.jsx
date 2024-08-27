import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

const echo = new Echo({
  broadcaster: `pusher`,
  key: `300360bfd3b71de3d0c0`,
  cluster: 'ap1',
  forceTLS: true
});

export default echo;