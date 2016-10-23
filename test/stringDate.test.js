/**
 * Created by chale on 2016/10/23.
 */
var stringDate = require('../src/stringDate.js');
var expect = require('chai').expect;

describe('时间字符串格式化为时间对象', function() {
    it('2016-09-01 12:33:33 生成对象', function() {
        var newDate = stringDate("2016-09-01 12:33:33");
        expect(newDate).to.be.an.instanceOf(Date);
    });
});
