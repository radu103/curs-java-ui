QUnit.module('script js tests', function() {

    let input = {
        value : '',
        style : {
            borderColor : ''
        }
    };

    QUnit.test('validateCurrency ok', function(assert) {
        input.value = 'EUR';
        let res = validateCurrency.call(input);

        assert.equal(true, res, "valid currency");
        assert.equal("green", input.style.borderColor, "green border color");
    });

    QUnit.test('validateCurrency not ok short', function(assert) {
        input.value = 'EU';
        let res = validateCurrency.call(input);

        assert.equal(false, res);
        assert.equal("red", input.style.borderColor, "red border color");
    });

    QUnit.test('validateCurrency not ok long', function(assert) {
        input.value = 'EURR';
        let res = validateCurrency.call(input);

        assert.equal(false, res);
        assert.equal("red", input.style.borderColor, "red border color");
    });

    Qunit.test('validateModel first letter', function(assert){
        input.value="audi";
        let name = validateBrand.call(input)

        assert.equal(false, name);
        assert.equal("red", name.style.borderColor, "red border color");
    });

});