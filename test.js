const assert = require('assert');
const { calculateWPM } = require('./app.js');
console.log('🧪 Testing TypeSprint...');
assert(calculateWPM(250, 60) === 50, '250 chars in 60s is 50 WPM');
console.log('✅ TypeSprint test passed!');
