var deleteDuplicates = function (head) {
  if (!head) return null;
  if (!head.next) return head;

  var first = head;

  while (head.next) {
    if (head.val === head.next.val) {
      head.next = head.next.next;
    } else {
      // only move iterator when the value not be equal
      head = head.next || {};
    }
  }

  return first;
};

export default deleteDuplicates;
