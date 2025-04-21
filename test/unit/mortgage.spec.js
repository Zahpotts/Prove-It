const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = null;
    beforeEach(() => {
        mortgage = new Mortgage(200000, 5, 30, 12);
    });
    it('should have a principal', () => {
        expect(mortgage.principal).to.equal(200000);
    });
    it('should have an interest rate', () => {
        expect(mortgage.interest).to.equal(5);
    });
    it('should have a term', () => {
        expect(mortgage.term).to.equal(30);
    });
    it('should have a period', () => {
        expect(mortgage.period).to.equal(12);
    });
    it('should calculate the monthly payment correctly', () => {
        expect(mortgage.monthlyPayment()).to.equal('1073.64');
    });
    it('should have a monthlyPayment function', () => {
        expect(mortgage.monthlyPayment).to.exist;
    });
    it('should return a number from monthlyPayment', () => {
        expect(mortgage.monthlyPayment()).to.be.a('string');
    });
    it('should return a string from monthlyPayment', () => {
        expect(mortgage.monthlyPayment()).to.be.a('string');
    });
    it('should return a string with two decimal places from monthlyPayment', () => {
        expect(mortgage.monthlyPayment()).to.match(/^\d+\.\d{2}$/);
    });

});