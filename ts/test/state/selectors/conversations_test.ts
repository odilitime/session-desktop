import { assert } from 'chai';

import { ConversationLookupType } from '../../../state/ducks/conversations';
import {
  _getConversationComparator,
  _getLeftPaneLists,
} from '../../../state/selectors/conversations';

describe('state/selectors/conversations', () => {
  describe('#getLeftPaneList', () => {
    it('sorts conversations based on timestamp then by intl-friendly title', () => {
      const i18n = (key: string) => key;
      const data: ConversationLookupType = {
        id1: {
          id: 'id1',
          activeAt: Date.now(),
          name: 'No timestamp',
          timestamp: 0,
          phoneNumber: 'notused',

          type: 'direct',
          isMe: false,
          lastUpdated: Date.now(),
          unreadCount: 1,
          mentionedUs: false,
          isSelected: false,
          isTyping: false,
          isBlocked: false,
          isKickedFromGroup: false,
          left: false,
        },
        id2: {
          id: 'id2',
          activeAt: Date.now(),
          name: 'B',
          timestamp: 20,
          phoneNumber: 'notused',

          type: 'direct',
          isMe: false,
          lastUpdated: Date.now(),
          unreadCount: 1,
          mentionedUs: false,
          isSelected: false,
          isTyping: false,
          isBlocked: false,
          isKickedFromGroup: false,
          left: false,
        },
        id3: {
          id: 'id3',
          activeAt: Date.now(),
          name: 'C',
          timestamp: 20,
          phoneNumber: 'notused',

          type: 'direct',
          isMe: false,
          lastUpdated: Date.now(),
          unreadCount: 1,
          mentionedUs: false,
          isSelected: false,
          isTyping: false,
          isBlocked: false,
          isKickedFromGroup: false,
          left: false,
        },
        id4: {
          id: 'id4',
          activeAt: Date.now(),
          name: 'Á',
          timestamp: 20,
          phoneNumber: 'notused',
          type: 'direct',
          isMe: false,
          lastUpdated: Date.now(),
          unreadCount: 1,
          mentionedUs: false,
          isSelected: false,
          isTyping: false,
          isBlocked: false,
          isKickedFromGroup: false,
          left: false,
        },
        id5: {
          id: 'id5',
          activeAt: Date.now(),
          name: 'First!',
          timestamp: 30,
          phoneNumber: 'notused',
          type: 'direct',
          isMe: false,
          lastUpdated: Date.now(),
          unreadCount: 1,
          mentionedUs: false,
          isSelected: false,
          isTyping: false,
          isBlocked: false,
          isKickedFromGroup: false,
          left: false,
        },
      };
      const comparator = _getConversationComparator(i18n);
      const { conversations } = _getLeftPaneLists(data, comparator);

      assert.strictEqual(conversations[0].name, 'First!');
      assert.strictEqual(conversations[1].name, 'Á');
      assert.strictEqual(conversations[2].name, 'B');
      assert.strictEqual(conversations[3].name, 'C');
    });
  });
});
