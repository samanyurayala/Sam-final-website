import * as Constants from './constants.js';

const editor = document.getElementById("editor");
const language = document.getElementById("languages");
const file = document.getElementById("file");
const current = document.getElementById("current");
const run = document.getElementById("run");
const debug = document.getElementById("debug");
const terminal = document.getElementById("terminal");
let currentFile = "welcome";

function update(value) {
    if (value == "python") {
      if (currentFile == "skills") editor.innerHTML = Constants.skills_python;
      else if (currentFile == "projects") editor.innerHTML = Constants.projects_python;
      else editor.innerHTML = Constants.welcome_python;
      file.innerHTML = Constants.files_python;
    } else if (value == "c++") {
      if (currentFile == "skills") editor.innerHTML = Constants.skills_cplusplus;
      else if (currentFile == "projects") editor.innerHTML = Constants.projects_cplusplus;
      else editor.innerHTML = Constants.welcome_cplusplus;
      file.innerHTML = Constants.files_cplusplus;
    } else if (value == "javascript") {
      if (currentFile == "skills") editor.innerHTML = Constants.skills_javascript;
      else if (currentFile == "projects") editor.innerHTML = Constants.projects_javascript;
      else editor.innerHTML = Constants.welcome_javascript;
      file.innerHTML = Constants.files_javascript;
    } else {
      if (currentFile == "skills") editor.innerHTML = Constants.skills_java;
      else if (currentFile == "projects") editor.innerHTML = Constants.projects_java;
      else editor.innerHTML = Constants.welcome_java;
      file.innerHTML = Constants.files_java;
    }
    current.textContent = currentFile[0].toUpperCase() + currentFile.slice(1);
}

function runProgram(value) {
  if (value == "skills") terminal.innerHTML = Constants.run_skills;
  else if (value == "projects") terminal.innerHTML = Constants.run_projects;
  else if (value == "about") terminal.innerHTML = Constants.about;
  else terminal.innerHTML = Constants.run_welcome;
}

document.addEventListener("DOMContentLoaded", (e) => {
  update(language.value);
});

language.addEventListener("change", (e) => {
  update(e.target.value);
});

file.addEventListener("click", (e) => {
  currentFile = e.target.dataset.current_file;
  update(language.value);
});

run.addEventListener("click", (e) => {
  runProgram(currentFile);
});

debug.addEventListener("click", (e) => {
  runProgram("about");
});
