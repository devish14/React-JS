// jest.setup.js to fix the Text encoder issues

import { TextEncoder, TextDecoder } from 'util';

// Define global variables for TextEncoder and TextDecoder
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
