import { testEpic, mock } from '../../../utils/test_helper';
import epics from './epics';

describe('# auth module', () => {
  describe('epics', () => {
    describe('logInEpic()', () => {
      it('should dispatch correct actions', () => testEpic({
        setup(action$) {
          return epics(action$);
        },
        test(input$) {

        },
        expect(actions) {
          
        },
      }));
    });
  });
});