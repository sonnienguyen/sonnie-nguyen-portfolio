import ago from 's-ago';
import { qsa } from './Helpers';

const TimeAgo = (dateTime = qsa('#js-posted-on')) => {
  for (let i = 0; i < dateTime.length; i++) {
    qsa('#js-posted-ago')[i].innerHTML = ago(new Date(dateTime[i].getAttribute('datetime')));
  }
};

export default TimeAgo;
