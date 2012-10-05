// Run:
//   python generate_json_trace.py --create_jsvar=listSumTrace tests/backend-tests/list_sum.txt
// and copy-and-paste the output line into here:
var listSumTrace = {"code": "def listSum(numbers):\n  if not numbers:\n    return 0\n  else:\n    (f, rest) = numbers\n    return f + listSum(rest)\n\nmyList = (1, (2, (3, None)))\ntotal = listSum(myList)\n", "trace": [{"ordered_globals": [], "stdout": "", "func_name": "<module>", "stack_to_render": [], "globals": {}, "heap": {}, "line": 1, "event": "step_line"}, {"ordered_globals": ["listSum"], "stdout": "", "func_name": "<module>", "stack_to_render": [], "globals": {"listSum": ["REF", 1]}, "heap": {"1": ["FUNCTION", "listSum(numbers)", null]}, "line": 8, "event": "step_line"}, {"ordered_globals": ["listSum", "myList"], "stdout": "", "func_name": "<module>", "stack_to_render": [], "globals": {"myList": ["REF", 2], "listSum": ["REF", 1]}, "heap": {"1": ["FUNCTION", "listSum(numbers)", null], "2": ["TUPLE", 1, ["REF", 3]], "3": ["TUPLE", 2, ["REF", 4]], "4": ["TUPLE", 3, null]}, "line": 9, "event": "step_line"}, {"ordered_globals": ["listSum", "myList"], "stdout": "", "func_name": "listSum", "stack_to_render": [{"frame_id": 1, "encoded_locals": {"numbers": ["REF", 2]}, "is_highlighted": true, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f1", "ordered_varnames": ["numbers"]}], "globals": {"myList": ["REF", 2], "listSum": ["REF", 1]}, "heap": {"1": ["FUNCTION", "listSum(numbers)", null], "2": ["TUPLE", 1, ["REF", 3]], "3": ["TUPLE", 2, ["REF", 4]], "4": ["TUPLE", 3, null]}, "line": 1, "event": "call"}, {"ordered_globals": ["listSum", "myList"], "stdout": "", "func_name": "listSum", "stack_to_render": [{"frame_id": 1, "encoded_locals": {"numbers": ["REF", 2]}, "is_highlighted": true, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f1", "ordered_varnames": ["numbers"]}], "globals": {"myList": ["REF", 2], "listSum": ["REF", 1]}, "heap": {"1": ["FUNCTION", "listSum(numbers)", null], "2": ["TUPLE", 1, ["REF", 3]], "3": ["TUPLE", 2, ["REF", 4]], "4": ["TUPLE", 3, null]}, "line": 2, "event": "step_line"}, {"ordered_globals": ["listSum", "myList"], "stdout": "", "func_name": "listSum", "stack_to_render": [{"frame_id": 1, "encoded_locals": {"numbers": ["REF", 2]}, "is_highlighted": true, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f1", "ordered_varnames": ["numbers"]}], "globals": {"myList": ["REF", 2], "listSum": ["REF", 1]}, "heap": {"1": ["FUNCTION", "listSum(numbers)", null], "2": ["TUPLE", 1, ["REF", 3]], "3": ["TUPLE", 2, ["REF", 4]], "4": ["TUPLE", 3, null]}, "line": 5, "event": "step_line"}, {"ordered_globals": ["listSum", "myList"], "stdout": "", "func_name": "listSum", "stack_to_render": [{"frame_id": 1, "encoded_locals": {"numbers": ["REF", 2], "rest": ["REF", 3], "f": 1}, "is_highlighted": true, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f1", "ordered_varnames": ["numbers", "f", "rest"]}], "globals": {"myList": ["REF", 2], "listSum": ["REF", 1]}, "heap": {"1": ["FUNCTION", "listSum(numbers)", null], "2": ["TUPLE", 1, ["REF", 3]], "3": ["TUPLE", 2, ["REF", 4]], "4": ["TUPLE", 3, null]}, "line": 6, "event": "step_line"}, {"ordered_globals": ["listSum", "myList"], "stdout": "", "func_name": "listSum", "stack_to_render": [{"frame_id": 1, "encoded_locals": {"numbers": ["REF", 2], "rest": ["REF", 3], "f": 1}, "is_highlighted": false, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f1", "ordered_varnames": ["numbers", "f", "rest"]}, {"frame_id": 2, "encoded_locals": {"numbers": ["REF", 3]}, "is_highlighted": true, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f2", "ordered_varnames": ["numbers"]}], "globals": {"myList": ["REF", 2], "listSum": ["REF", 1]}, "heap": {"1": ["FUNCTION", "listSum(numbers)", null], "2": ["TUPLE", 1, ["REF", 3]], "3": ["TUPLE", 2, ["REF", 4]], "4": ["TUPLE", 3, null]}, "line": 1, "event": "call"}, {"ordered_globals": ["listSum", "myList"], "stdout": "", "func_name": "listSum", "stack_to_render": [{"frame_id": 1, "encoded_locals": {"numbers": ["REF", 2], "rest": ["REF", 3], "f": 1}, "is_highlighted": false, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f1", "ordered_varnames": ["numbers", "f", "rest"]}, {"frame_id": 2, "encoded_locals": {"numbers": ["REF", 3]}, "is_highlighted": true, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f2", "ordered_varnames": ["numbers"]}], "globals": {"myList": ["REF", 2], "listSum": ["REF", 1]}, "heap": {"1": ["FUNCTION", "listSum(numbers)", null], "2": ["TUPLE", 1, ["REF", 3]], "3": ["TUPLE", 2, ["REF", 4]], "4": ["TUPLE", 3, null]}, "line": 2, "event": "step_line"}, {"ordered_globals": ["listSum", "myList"], "stdout": "", "func_name": "listSum", "stack_to_render": [{"frame_id": 1, "encoded_locals": {"numbers": ["REF", 2], "rest": ["REF", 3], "f": 1}, "is_highlighted": false, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f1", "ordered_varnames": ["numbers", "f", "rest"]}, {"frame_id": 2, "encoded_locals": {"numbers": ["REF", 3]}, "is_highlighted": true, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f2", "ordered_varnames": ["numbers"]}], "globals": {"myList": ["REF", 2], "listSum": ["REF", 1]}, "heap": {"1": ["FUNCTION", "listSum(numbers)", null], "2": ["TUPLE", 1, ["REF", 3]], "3": ["TUPLE", 2, ["REF", 4]], "4": ["TUPLE", 3, null]}, "line": 5, "event": "step_line"}, {"ordered_globals": ["listSum", "myList"], "stdout": "", "func_name": "listSum", "stack_to_render": [{"frame_id": 1, "encoded_locals": {"numbers": ["REF", 2], "rest": ["REF", 3], "f": 1}, "is_highlighted": false, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f1", "ordered_varnames": ["numbers", "f", "rest"]}, {"frame_id": 2, "encoded_locals": {"numbers": ["REF", 3], "rest": ["REF", 4], "f": 2}, "is_highlighted": true, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f2", "ordered_varnames": ["numbers", "f", "rest"]}], "globals": {"myList": ["REF", 2], "listSum": ["REF", 1]}, "heap": {"1": ["FUNCTION", "listSum(numbers)", null], "2": ["TUPLE", 1, ["REF", 3]], "3": ["TUPLE", 2, ["REF", 4]], "4": ["TUPLE", 3, null]}, "line": 6, "event": "step_line"}, {"ordered_globals": ["listSum", "myList"], "stdout": "", "func_name": "listSum", "stack_to_render": [{"frame_id": 1, "encoded_locals": {"numbers": ["REF", 2], "rest": ["REF", 3], "f": 1}, "is_highlighted": false, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f1", "ordered_varnames": ["numbers", "f", "rest"]}, {"frame_id": 2, "encoded_locals": {"numbers": ["REF", 3], "rest": ["REF", 4], "f": 2}, "is_highlighted": false, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f2", "ordered_varnames": ["numbers", "f", "rest"]}, {"frame_id": 3, "encoded_locals": {"numbers": ["REF", 4]}, "is_highlighted": true, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f3", "ordered_varnames": ["numbers"]}], "globals": {"myList": ["REF", 2], "listSum": ["REF", 1]}, "heap": {"1": ["FUNCTION", "listSum(numbers)", null], "2": ["TUPLE", 1, ["REF", 3]], "3": ["TUPLE", 2, ["REF", 4]], "4": ["TUPLE", 3, null]}, "line": 1, "event": "call"}, {"ordered_globals": ["listSum", "myList"], "stdout": "", "func_name": "listSum", "stack_to_render": [{"frame_id": 1, "encoded_locals": {"numbers": ["REF", 2], "rest": ["REF", 3], "f": 1}, "is_highlighted": false, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f1", "ordered_varnames": ["numbers", "f", "rest"]}, {"frame_id": 2, "encoded_locals": {"numbers": ["REF", 3], "rest": ["REF", 4], "f": 2}, "is_highlighted": false, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f2", "ordered_varnames": ["numbers", "f", "rest"]}, {"frame_id": 3, "encoded_locals": {"numbers": ["REF", 4]}, "is_highlighted": true, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f3", "ordered_varnames": ["numbers"]}], "globals": {"myList": ["REF", 2], "listSum": ["REF", 1]}, "heap": {"1": ["FUNCTION", "listSum(numbers)", null], "2": ["TUPLE", 1, ["REF", 3]], "3": ["TUPLE", 2, ["REF", 4]], "4": ["TUPLE", 3, null]}, "line": 2, "event": "step_line"}, {"ordered_globals": ["listSum", "myList"], "stdout": "", "func_name": "listSum", "stack_to_render": [{"frame_id": 1, "encoded_locals": {"numbers": ["REF", 2], "rest": ["REF", 3], "f": 1}, "is_highlighted": false, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f1", "ordered_varnames": ["numbers", "f", "rest"]}, {"frame_id": 2, "encoded_locals": {"numbers": ["REF", 3], "rest": ["REF", 4], "f": 2}, "is_highlighted": false, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f2", "ordered_varnames": ["numbers", "f", "rest"]}, {"frame_id": 3, "encoded_locals": {"numbers": ["REF", 4]}, "is_highlighted": true, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f3", "ordered_varnames": ["numbers"]}], "globals": {"myList": ["REF", 2], "listSum": ["REF", 1]}, "heap": {"1": ["FUNCTION", "listSum(numbers)", null], "2": ["TUPLE", 1, ["REF", 3]], "3": ["TUPLE", 2, ["REF", 4]], "4": ["TUPLE", 3, null]}, "line": 5, "event": "step_line"}, {"ordered_globals": ["listSum", "myList"], "stdout": "", "func_name": "listSum", "stack_to_render": [{"frame_id": 1, "encoded_locals": {"numbers": ["REF", 2], "rest": ["REF", 3], "f": 1}, "is_highlighted": false, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f1", "ordered_varnames": ["numbers", "f", "rest"]}, {"frame_id": 2, "encoded_locals": {"numbers": ["REF", 3], "rest": ["REF", 4], "f": 2}, "is_highlighted": false, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f2", "ordered_varnames": ["numbers", "f", "rest"]}, {"frame_id": 3, "encoded_locals": {"numbers": ["REF", 4], "rest": null, "f": 3}, "is_highlighted": true, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f3", "ordered_varnames": ["numbers", "f", "rest"]}], "globals": {"myList": ["REF", 2], "listSum": ["REF", 1]}, "heap": {"1": ["FUNCTION", "listSum(numbers)", null], "2": ["TUPLE", 1, ["REF", 3]], "3": ["TUPLE", 2, ["REF", 4]], "4": ["TUPLE", 3, null]}, "line": 6, "event": "step_line"}, {"ordered_globals": ["listSum", "myList"], "stdout": "", "func_name": "listSum", "stack_to_render": [{"frame_id": 1, "encoded_locals": {"numbers": ["REF", 2], "rest": ["REF", 3], "f": 1}, "is_highlighted": false, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f1", "ordered_varnames": ["numbers", "f", "rest"]}, {"frame_id": 2, "encoded_locals": {"numbers": ["REF", 3], "rest": ["REF", 4], "f": 2}, "is_highlighted": false, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f2", "ordered_varnames": ["numbers", "f", "rest"]}, {"frame_id": 3, "encoded_locals": {"numbers": ["REF", 4], "rest": null, "f": 3}, "is_highlighted": false, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f3", "ordered_varnames": ["numbers", "f", "rest"]}, {"frame_id": 4, "encoded_locals": {"numbers": null}, "is_highlighted": true, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f4", "ordered_varnames": ["numbers"]}], "globals": {"myList": ["REF", 2], "listSum": ["REF", 1]}, "heap": {"1": ["FUNCTION", "listSum(numbers)", null], "2": ["TUPLE", 1, ["REF", 3]], "3": ["TUPLE", 2, ["REF", 4]], "4": ["TUPLE", 3, null]}, "line": 1, "event": "call"}, {"ordered_globals": ["listSum", "myList"], "stdout": "", "func_name": "listSum", "stack_to_render": [{"frame_id": 1, "encoded_locals": {"numbers": ["REF", 2], "rest": ["REF", 3], "f": 1}, "is_highlighted": false, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f1", "ordered_varnames": ["numbers", "f", "rest"]}, {"frame_id": 2, "encoded_locals": {"numbers": ["REF", 3], "rest": ["REF", 4], "f": 2}, "is_highlighted": false, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f2", "ordered_varnames": ["numbers", "f", "rest"]}, {"frame_id": 3, "encoded_locals": {"numbers": ["REF", 4], "rest": null, "f": 3}, "is_highlighted": false, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f3", "ordered_varnames": ["numbers", "f", "rest"]}, {"frame_id": 4, "encoded_locals": {"numbers": null}, "is_highlighted": true, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f4", "ordered_varnames": ["numbers"]}], "globals": {"myList": ["REF", 2], "listSum": ["REF", 1]}, "heap": {"1": ["FUNCTION", "listSum(numbers)", null], "2": ["TUPLE", 1, ["REF", 3]], "3": ["TUPLE", 2, ["REF", 4]], "4": ["TUPLE", 3, null]}, "line": 2, "event": "step_line"}, {"ordered_globals": ["listSum", "myList"], "stdout": "", "func_name": "listSum", "stack_to_render": [{"frame_id": 1, "encoded_locals": {"numbers": ["REF", 2], "rest": ["REF", 3], "f": 1}, "is_highlighted": false, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f1", "ordered_varnames": ["numbers", "f", "rest"]}, {"frame_id": 2, "encoded_locals": {"numbers": ["REF", 3], "rest": ["REF", 4], "f": 2}, "is_highlighted": false, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f2", "ordered_varnames": ["numbers", "f", "rest"]}, {"frame_id": 3, "encoded_locals": {"numbers": ["REF", 4], "rest": null, "f": 3}, "is_highlighted": false, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f3", "ordered_varnames": ["numbers", "f", "rest"]}, {"frame_id": 4, "encoded_locals": {"numbers": null}, "is_highlighted": true, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f4", "ordered_varnames": ["numbers"]}], "globals": {"myList": ["REF", 2], "listSum": ["REF", 1]}, "heap": {"1": ["FUNCTION", "listSum(numbers)", null], "2": ["TUPLE", 1, ["REF", 3]], "3": ["TUPLE", 2, ["REF", 4]], "4": ["TUPLE", 3, null]}, "line": 3, "event": "step_line"}, {"ordered_globals": ["listSum", "myList"], "stdout": "", "func_name": "listSum", "stack_to_render": [{"frame_id": 1, "encoded_locals": {"numbers": ["REF", 2], "rest": ["REF", 3], "f": 1}, "is_highlighted": false, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f1", "ordered_varnames": ["numbers", "f", "rest"]}, {"frame_id": 2, "encoded_locals": {"numbers": ["REF", 3], "rest": ["REF", 4], "f": 2}, "is_highlighted": false, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f2", "ordered_varnames": ["numbers", "f", "rest"]}, {"frame_id": 3, "encoded_locals": {"numbers": ["REF", 4], "rest": null, "f": 3}, "is_highlighted": false, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f3", "ordered_varnames": ["numbers", "f", "rest"]}, {"frame_id": 4, "encoded_locals": {"__return__": 0, "numbers": null}, "is_highlighted": true, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f4", "ordered_varnames": ["numbers", "__return__"]}], "globals": {"myList": ["REF", 2], "listSum": ["REF", 1]}, "heap": {"1": ["FUNCTION", "listSum(numbers)", null], "2": ["TUPLE", 1, ["REF", 3]], "3": ["TUPLE", 2, ["REF", 4]], "4": ["TUPLE", 3, null]}, "line": 3, "event": "return"}, {"ordered_globals": ["listSum", "myList"], "stdout": "", "func_name": "listSum", "stack_to_render": [{"frame_id": 1, "encoded_locals": {"numbers": ["REF", 2], "rest": ["REF", 3], "f": 1}, "is_highlighted": false, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f1", "ordered_varnames": ["numbers", "f", "rest"]}, {"frame_id": 2, "encoded_locals": {"numbers": ["REF", 3], "rest": ["REF", 4], "f": 2}, "is_highlighted": false, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f2", "ordered_varnames": ["numbers", "f", "rest"]}, {"frame_id": 3, "encoded_locals": {"__return__": 3, "numbers": ["REF", 4], "rest": null, "f": 3}, "is_highlighted": true, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f3", "ordered_varnames": ["numbers", "f", "rest", "__return__"]}], "globals": {"myList": ["REF", 2], "listSum": ["REF", 1]}, "heap": {"1": ["FUNCTION", "listSum(numbers)", null], "2": ["TUPLE", 1, ["REF", 3]], "3": ["TUPLE", 2, ["REF", 4]], "4": ["TUPLE", 3, null]}, "line": 6, "event": "return"}, {"ordered_globals": ["listSum", "myList"], "stdout": "", "func_name": "listSum", "stack_to_render": [{"frame_id": 1, "encoded_locals": {"numbers": ["REF", 2], "rest": ["REF", 3], "f": 1}, "is_highlighted": false, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f1", "ordered_varnames": ["numbers", "f", "rest"]}, {"frame_id": 2, "encoded_locals": {"__return__": 5, "numbers": ["REF", 3], "rest": ["REF", 4], "f": 2}, "is_highlighted": true, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f2", "ordered_varnames": ["numbers", "f", "rest", "__return__"]}], "globals": {"myList": ["REF", 2], "listSum": ["REF", 1]}, "heap": {"1": ["FUNCTION", "listSum(numbers)", null], "2": ["TUPLE", 1, ["REF", 3]], "3": ["TUPLE", 2, ["REF", 4]], "4": ["TUPLE", 3, null]}, "line": 6, "event": "return"}, {"ordered_globals": ["listSum", "myList"], "stdout": "", "func_name": "listSum", "stack_to_render": [{"frame_id": 1, "encoded_locals": {"__return__": 6, "numbers": ["REF", 2], "rest": ["REF", 3], "f": 1}, "is_highlighted": true, "is_parent": false, "func_name": "listSum", "is_zombie": false, "parent_frame_id_list": [], "unique_hash": "listSum_f1", "ordered_varnames": ["numbers", "f", "rest", "__return__"]}], "globals": {"myList": ["REF", 2], "listSum": ["REF", 1]}, "heap": {"1": ["FUNCTION", "listSum(numbers)", null], "2": ["TUPLE", 1, ["REF", 3]], "3": ["TUPLE", 2, ["REF", 4]], "4": ["TUPLE", 3, null]}, "line": 6, "event": "return"}, {"ordered_globals": ["listSum", "myList", "total"], "stdout": "", "func_name": "<module>", "stack_to_render": [], "globals": {"total": 6, "myList": ["REF", 2], "listSum": ["REF", 1]}, "heap": {"1": ["FUNCTION", "listSum(numbers)", null], "2": ["TUPLE", 1, ["REF", 3]], "3": ["TUPLE", 2, ["REF", 4]], "4": ["TUPLE", 3, null]}, "line": 9, "event": "return"}]};


var qtipShared = {
  show: {
    ready: true, // show on document.ready instead of on mouseenter
    delay: 0,
    event: null,
  },
  hide: {
    fixed: true,
    event: null,
  },
  style: {
    classes: 'ui-tooltip-pgbootstrap', // my own customized version of the bootstrap style - see css/jquery.qtip.css
  },
};


function createSpeechBubble(domID, my, at, htmlContent) {
  var hashID = '#' + domID;
  $(hashID).qtip($.extend({}, qtipShared, {
    content: htmlContent,
    id: domID,
    position: {
      my: my,
      at: at,
      effect: null, // disable all cutesy animations
    },
  }));


  $('#ui-tooltip-' + domID + '-content').click(function() {
    if (!$(hashID).data('qtip-minimized')) {
      $(hashID)
        .data('qtip-minimized', true)
        .qtip('option', 'content.text', ' ');
    }
    else {
      $(hashID)
        .data('qtip-minimized', false)
        .qtip('option', 'content.text', htmlContent);
    }
  });
}


$(document).ready(function() {
  /*
  var listSumVisualizer = new ExecutionVisualizer('listSumDiv', listSumTrace,
                                                  {embeddedMode: false,
                                                   editCodeBaseURL: 'http://pythontutor.com/visualize.html'});
  */

  createSpeechBubble('v1__heap_object_1', 'bottom left', 'top center',
                     "Here's a function!");

  createSpeechBubble('v1__heap_object_2', 'bottom left', 'top center',
                     'This is the head of our linked list.');

  createSpeechBubble('v1__heap_object_4', 'bottom left', 'top center',
                     'This is the final element of our linked list. Its car is 3 and cdr is <tt>None</tt>');


  createSpeechBubble('v1__stack0', 'right center', 'left center',
                     "The first of several recursive calls.");

  createSpeechBubble('v1__stack2', 'right center', 'left center',
                     "Another recursive call.");

  createSpeechBubble('v1__cod4', 'left center', 'right center',
                     "line four, booooooooooooo ...");

  createSpeechBubble('v1__cod5', 'left center', 'right center',
                     "line five, yay!!!");

  createSpeechBubble('v1__cod9', 'left center', 'right center',
                     "line nine, yay!!!");

  createSpeechBubble('v1__listSum_f2__numbers', 'right center', 'left center',
                     "this is a variable, of course!");

  createSpeechBubble('v1__listSum_f2__rest', 'right center', 'left center',
                     "this is another variable, of course; what else would it be?!?");
});