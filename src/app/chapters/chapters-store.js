import { createStore } from 'redux'
import reducers from './chapters-reducers'
const ChaptersStore = createStore(reducers);
export default ChaptersStore;

