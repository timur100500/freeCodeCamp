const chai = require('chai');
const assert = chai.assert;
test('#isNull, #isNotNull', function() {
    assert.isNull(null, 'This is an optional error description - e.g. null is null');
    assert.isNotNull(1, '1 is not null');
});