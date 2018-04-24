import { addStore } from 'react-sse'
import counter from './counter'

// register stores
addStore(counter)