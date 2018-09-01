/**
 *All functions related to the nav bar along the top of the application
 *Saving current annotation data,
 *Turning grading on and Off, - changes how the tree is displayed
 *Turning Adjust on and off, - changes how the tree is structured
 *Display teachers trees on and off, - retrieves and displays teachers pre constructed trees
 *Zooming in and out of the tree
 */

$(function() {
  $("#save").click(async function(e) {
    if (teacher == false) {
      var current_session = {
        id: 1,
        collection: "student",
        connection_type: "update",
        last_session: JSON.stringify(obj)
      }
      e.preventDefault();
      await save_session(current_session);
    } else {
      var teacher_SFLs = await getTeacherSFL_db();
      var curSFl = JSON.stringify(tree.nodes[0]);
      var curObj = {
        id: 1,
        key: sentence,
        connection_type: "update",
        value: curSFl
      }
      e.preventDefault();
      await postToTeacher(curObj);
    }
  });
});

var grading = false;
$(function() {
  $("#gradeSFG").click(function(e) {
    if (!grading) {
      $("#gradeSFG").html("Grade (On)");
      e.preventDefault();
      return grading = true
    } else {
      $("#gradeSFG").html("Grade (Off)");
      e.preventDefault();
      return grading = false
    }
  });
});

var adjust = false;
$(function() {
  $("#adjustSFG").click(async function(e) {
    if (!adjust) {
      $("#adjustSFG").html("Adjust (On)");
      e.preventDefault();
      return adjust = true
    } else {
      $("#adjustSFG").html("Adjust (Off)");
      e.preventDefault();
      return adjust = false
    }
  });
});

var teacher = false;
$(function() {
  $("#genTeacherSFL").click(async function(e) {
    if (!teacher) {
      $("#genTeacherSFL").html("Teacher (On)");
      $("#gradeSFG").hide();
      e.preventDefault();
      return teacher = true
    } else {
      $("#genTeacherSFL").html("Teacher (Off)");
      $("#gradeSFG").show();
      e.preventDefault();
      return teacher = false
    }
  });
});

$(function() {
  $("#zoom_in").click(async function(e) {
    if (devide >= 1) {
      devide -= .2
      $("#zoom_level").html("Zoom [ " + devide.toFixed(1) + " ]");
      fontsize = (svgWidth / 120) / devide;
      linkSpace = (fontsize) / devide;
      trainglepadding = (fontsize) / devide;
      stroke_width = (fontsize / 15) / devide;
      tree.cx = (svgWidth / 2) / devide;
      tree.cy = (svgHeight / 40) / devide;
      tree.w = (svgHeight / 4) / devide;
      tree.h = (svgHeight / 10) / devide;
    }
    e.preventDefault();

  });
});

$(function() {
  $("#zoom_out").click(async function(e) {
    if (devide <= 1.8) {
      devide += .2
      $("#zoom_level").html("Zoom [ " + devide.toFixed(1) + " ]");
      fontsize = (svgWidth / 120) / devide;
      linkSpace = (fontsize) / devide;
      trainglepadding = (fontsize) / devide;
      stroke_width = (fontsize / 15) / devide;
      tree.cx = (svgWidth / 2) / devide;
      tree.cy = (svgHeight / 40) / devide;
      tree.w = (svgHeight / 4) / devide;
      tree.h = (svgHeight / 10) / devide;
    }
    e.preventDefault();
  });
});