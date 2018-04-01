/**
 *These functions are all get methods related to the tree
 *Getting the bottom nodes to ensure the sentence is correct - used for adjust function
 *All get methods for the links, nodes, and triangles for the tree diagram
 *Get methods for the generic drawing, then the correct and incorrect for the grading drawing
 *Code needs refactoring - so one method with three posibilities - will shorten code
 */

var student_segmented_sentence = [];

getBottomNodes = function(node) {

  var student = [];

  if (node != undefined) {
    node.kids.forEach(function(kid) {
      if ((kid.kids).length == 0)
        student_segmented_sentence.push((kid.text).toLowerCase());
      student.push(kid);
    });
  }

  for (i in student) {
    getBottomNodes(student[i]);
  }
}

tree.getNodes = function() {
  var n = [];

  function getNodes(node) {
    n.push({
      id: node.id,
      text: node.text,
      x: node.x,
      y: node.y,
      kids: node.kids,
      isLeaf: node.isLeaf,
      tWidth: node.tWidth
    });
    node.kids.forEach(function(kid) {
      return getNodes(kid);
    });
  }
  getNodes(tree.nodes[0]);
  return n.sort(function(a, b) {
    return a.id - b.id;
  });
}

//get the links
tree.getLinks = function() {
  var l = [];

  function getLinks(node) {
    node.kids.forEach(function(kid) {
      if (!kid.isLeaf) {
        l.push({
          fromId: node.id,
          fromX: node.x,
          fromY: node.y,
          toId: kid.id,
          toX: kid.x,
          toY: kid.y
        });
      }
    });
    node.kids.forEach(getLinks);
  }
  getLinks(tree.nodes[0]);
  return l.sort(function(a, b) {
    return a.toId - b.toId
  });
}

//get the triangles -- size of the trees
tree.getTriangles = function() {
  var t = [];

  function getTriangles(node) {
    node.kids.forEach(function(kid) {
      if (kid.isLeaf) {
        t.push({
          fromId: node.id,
          toId: kid.id,
          topX: node.x,
          topY: (node.y + 10),
          leftX: (kid.x - (kid.tWidth / 3)),
          leftY: (kid.y - 10),
          rightX: (kid.x + (kid.tWidth / 3)),
          rightY: (kid.y - 10)
        });
      }
    });
    node.kids.forEach(getTriangles);
  }
  getTriangles(tree.nodes[0]);
  return t.sort(function(a, b) {
    return a.toId - b.toId
  });
}

tree.getcorrectNodes = function() {
  var n = [];
  c_diff_array = diff_array.slice(0);

  function getcorrectNodes(node) {
    if (c_diff_array[0]) {
      n.push({
        id: node.id,
        text: node.text,
        x: node.x,
        y: node.y,
        kids: node.kids,
        isLeaf: node.isLeaf,
        tWidth: node.tWidth
      });
    }
    node.kids.forEach(function(kid) {
      c_diff_array = c_diff_array.slice(1);
      return getcorrectNodes(kid);
    });
  }
  getcorrectNodes(tree.nodes[0]);
  return n.sort(function(a, b) {
    return a.id - b.id;
  });
}

tree.getincorrectNodes = function() {
  var n = [];
  in_diff_array = diff_array.slice(0);

  function getincorrectNodes(node) {
    if (!in_diff_array[0]) {
      n.push({
        id: node.id,
        text: ('-' + node.text + '-'),
        x: node.x,
        y: node.y,
        kids: node.kids,
        isLeaf: node.isLeaf,
        tWidth: node.tWidth
      });
    }
    node.kids.forEach(function(kid) {
      in_diff_array = in_diff_array.slice(1);
      return getincorrectNodes(kid);
    });

  }
  getincorrectNodes(tree.nodes[0]);
  return n.sort(function(a, b) {
    return a.id - b.id;
  });
}

//get the links
tree.getcorrectLinks = function() {
  var l = [];
  c_diff_array = diff_array.slice(1);
  getcorrectLinks(tree.nodes[0], l);
  return l.sort(function(a, b) {
    return a.toId - b.toId
  });
}

function getcorrectLinks(node, l) {
  node.kids.forEach(function(kid) {
    if (!kid.isLeaf) {
      if (c_diff_array[0]) {
        l.push({
          fromId: node.id,
          fromX: node.x,
          fromY: node.y,
          toId: kid.id,
          toX: kid.x,
          toY: kid.y,
        });
      }
    }
    c_diff_array = c_diff_array.slice(1);
    getcorrectLinks(kid, l);
  });
}

tree.getincorrectLinks = function() {
  var l_in = [];
  in_diff_array = diff_array.slice(1);

  function getincorrectLinks(node) {
    node.kids.forEach(function(kid) {
      if (!kid.isLeaf) {
        if (!in_diff_array[0]) {
          l_in.push({
            fromId: node.id,
            fromX: node.x,
            fromY: node.y,
            toId: kid.id,
            toX: kid.x,
            toY: kid.y,
          });
        }
      }
      in_diff_array = in_diff_array.slice(1);
      getincorrectLinks(kid);
    });
  }
  getincorrectLinks(tree.nodes[0]);
  return l_in.sort(function(a, b) {
    return a.toId - b.toId
  });
}



//get the triangles -- size of the trees
tree.getcorrectTriangles = function() {
  var t = [];
  c_diff_array = diff_array.slice(1);

  function getcorrectTriangles(node) {
    node.kids.forEach(function(kid) {
      if (kid.isLeaf) {
        if (c_diff_array[0]) {
          t.push({
            fromId: node.id,
            toId: kid.id,
            topX: node.x,
            topY: (node.y + 10),
            leftX: (kid.x - (kid.tWidth / 3)),
            leftY: (kid.y - 10),
            rightX: (kid.x + (kid.tWidth / 3)),
            rightY: (kid.y - 10)
          });
        }
      }
      c_diff_array = c_diff_array.slice(1);
      getcorrectTriangles(kid);
    });
  }
  getcorrectTriangles(tree.nodes[0]);
  return t.sort(function(a, b) {
    return a.toId - b.toId
  });
}

tree.getincorrectTriangles = function() {
  var t = [];
  in_diff_array = diff_array.slice(1);

  function getincorrectTriangles(node) {
    node.kids.forEach(function(kid) {
      if (!in_diff_array[0]) {
        if (kid.isLeaf) {
          t.push({
            fromId: node.id,
            toId: kid.id,
            topX: node.x,
            topY: (node.y + 10),
            leftX: (kid.x - (kid.tWidth / 3)),
            leftY: (kid.y - 10),
            rightX: (kid.x + (kid.tWidth / 3)),
            rightY: (kid.y - 10)
          });
        }
      }
      in_diff_array = in_diff_array.slice(1);
      getincorrectTriangles(kid);
    });
  }
  getincorrectTriangles(tree.nodes[0]);
  return t.sort(function(a, b) {
    return a.toId - b.toId
  });
}

//returns node object from nodes array
tree.getNode = function(thisNode) {
  var n;

  function getNode(node) {
    if (node.id == thisNode.id) {
      n = node;
    }
    node.kids.forEach(getNode);
  }
  getNode(tree.nodes[0]);
  return n;
}