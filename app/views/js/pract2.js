
function reveal_spoiler() {
  var spoiler_lines = document.getElementById("spoiler_content");
  var button = document.getElementById("spoil_button");
 if (spoiler_lines.style.display === "none") {
   spoiler_lines.style.display = "block";
   spoil_button.innerHTML = "Hide Spoiler"
 } else {
   spoiler_lines.style.display = "none";
   spoil_button.innerHTML = "Show Spoiler"
 }
}

function tell_about_spaces() {
var space_explained = `above uses the [space around] property,
below, [space between] sets the first and last item on the extremes of the page
...
By staggering the numbers (like 4 around then 5 between), you can make
the items visually fill the gaps, like zig-zagging across the page`
return space_explained;
}
