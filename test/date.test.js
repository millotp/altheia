const Alt = require('./../src');

describe('Date', () => {
  describe('typeof()', () => {
    test('should pass', async () => {
      const hasError = await Alt.date().validate('2017-05-15');
      expect(hasError).toBe(false);
    });
    test('should pass', async () => {
      const hasError = await Alt.date().validate('2017-05-15T08:30:00');
      expect(hasError).toBe(false);
    });
    test('should pass', async () => {
      const hasError = await Alt.date().validate('1');
      expect(hasError).toBe(false);
    });
    test('should pass', async () => {
      const hasError = await Alt.date().validate(1);
      expect(hasError).toBe(false);
    });
    test('should not pass: boolean', async () => {
      const hasError = await Alt.date().validate(true);
      expect(hasError).toBeTruthy();
    });
    test('should not pass: func', async () => {
      const hasError = await Alt.date().validate(() => {
        return 1;
      });
      expect(hasError).toBeTruthy();
    });
    test('should not pass: obj', async () => {
      const hasError = await Alt.date().validate({});
      expect(hasError).toBeTruthy();
    });
  });

  describe('iso()', () => {
    test('should pass', async () => {
      const hasError = await Alt.date().iso().validate('2017-05-15');
      expect(hasError).toBe(false);
    });
    test('should pass', async () => {
      const hasError = await Alt.date().iso().validate('2017-05-15T08:30:00');
      expect(hasError).toBe(false);
    });
    test('should not pass', async () => {
      const hasError = await Alt.date().iso().validate('1');
      expect(hasError).toBeTruthy();
    });
  });
});
