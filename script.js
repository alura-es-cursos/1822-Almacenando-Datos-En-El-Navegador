/** @format */

import { addTask } from "./components/addTask.js";
import { readTask } from "./components/readTask.js";

const btn = document.querySelector("[data-form-btn]");

btn.addEventListener("click", addTask);
readTask();