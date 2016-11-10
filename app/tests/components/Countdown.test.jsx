var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountDown = require('CountDown');

describe('Countdown', () => {
	it('should exist', () => {
		expect(CountDown).toExist();
	})

	describe('handleSetCountdown', () => {
		it('should set state to started and countdown', (done) => {
			var countdown = TestUtils.renderIntoDocument(<CountDown />);

			countdown.handleSetCountDown(10);

			expect(countdown.state.count).toBe(10);
			expect(countdown.state.countDownStatus).toBe('started');

			setTimeout(() => {
				expect(countdown.state.count).toBe(9);
				done();
			}, 1001)		

		});

		it('should not countdown to negative numbers', (done) => {
			var countdown = TestUtils.renderIntoDocument(<CountDown />);

			countdown.handleSetCountDown(1);

			setTimeout(() => {
				expect(countdown.state.count).toBe(0);
				done();
			}, 3000)
		});

		it('should pause countdown on pause status', (done) => {
			var countdown = TestUtils.renderIntoDocument(<CountDown />);

			countdown.handleSetCountDown(3);
			countdown.handleStatusChange('paused');

			setTimeout(() => {
				expect(countdown.state.count).toBe(3);
				expect(countdown.state.countDownStatus).toBe('paused');
				done();
			}, 1001)
		});

		it('should stop and clear countdown on stopped status', () => {
			var countdown = TestUtils.renderIntoDocument(<CountDown />);

			countdown.handleSetCountDown(3);
			countdown.handleStatusChange('stopped');

			expect(countdown.state.count).toBe(0);
			expect(countdown.state.countDownStatus).toBe('stopped');
		})



	})
});



